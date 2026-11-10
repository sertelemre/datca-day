export const WEATHER_TIME_ZONE = 'Europe/Istanbul';
export const WEATHER_DAYS = 7;
export const WEATHER_URL = `https://api.open-meteo.com/v1/forecast?${new URLSearchParams({
  latitude: '36.728',
  longitude: '27.686',
  current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,is_day,wind_speed_10m',
  daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max',
  forecast_days: String(WEATHER_DAYS),
  timezone: WEATHER_TIME_ZONE,
  temperature_unit: 'celsius',
  wind_speed_unit: 'kmh',
  timeformat: 'unixtime',
})}`;

export type WeatherKind = 'clear-day' | 'clear-night' | 'partly-cloudy-day' | 'partly-cloudy-night'
  | 'cloudy' | 'fog' | 'drizzle' | 'rain' | 'snow' | 'thunderstorm' | 'unknown';

export interface WeatherDay {
  /** Unix time in milliseconds, representing the day's local midnight. */
  time: number;
  date: string;
  weatherCode: number | null;
  maximum: number | null;
  minimum: number | null;
  rainProbability: number | null;
  windSpeed: number | null;
}

export interface WeatherSnapshot {
  current: {
    /** Unix time in milliseconds. */
    time: number;
    temperature: number;
    feelsLike: number | null;
    humidity: number | null;
    weatherCode: number;
    isDay: boolean;
    windSpeed: number | null;
  };
  daily: WeatherDay[];
}

const dateFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: WEATHER_TIME_ZONE, year: 'numeric', month: '2-digit', day: '2-digit',
});

/** Never use the visitor's timezone for Datça forecast dates. */
export function weatherDateKey(time: number): string {
  const parts = dateFormatter.formatToParts(new Date(time));
  const part = (type: string) => parts.find((item) => item.type === type)!.value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}

export function formatWeatherTime(time: number, locale = 'tr'): string {
  return new Intl.DateTimeFormat(locale, {
    timeZone: WEATHER_TIME_ZONE, hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).format(new Date(time));
}

export function formatWeatherDay(time: number, locale = 'tr'): string {
  return new Intl.DateTimeFormat(locale, {
    timeZone: WEATHER_TIME_ZONE, weekday: 'short', day: 'numeric', month: 'short',
  }).format(new Date(time));
}

/** WMO codes documented at https://open-meteo.com/en/docs. */
export function weatherKind(code: number | null, isDay = true): WeatherKind {
  if (code === 0 || code === 1) return isDay ? 'clear-day' : 'clear-night';
  if (code === 2) return isDay ? 'partly-cloudy-day' : 'partly-cloudy-night';
  if (code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if ([51, 53, 55, 56, 57].includes(code!)) return 'drizzle';
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code!)) return 'rain';
  if ([71, 73, 75, 77, 85, 86].includes(code!)) return 'snow';
  if ([95, 96, 97, 99].includes(code!)) return 'thunderstorm';
  return 'unknown';
}

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid weather response');
  return value as Record<string, unknown>;
}

function number(value: unknown, min: number, max: number): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) {
    throw new Error('Invalid weather value');
  }
  return value;
}

function optionalNumber(value: unknown, min: number, max: number): number | null {
  return value == null ? null : number(value, min, max);
}

function weatherCode(value: unknown): number {
  const code = number(value, 0, 99);
  if (!Number.isInteger(code)) throw new Error('Invalid weather code');
  return code;
}

function timestamp(value: unknown): number {
  // The URL requests seconds, not ISO strings or milliseconds.
  const seconds = number(value, 946684800, 4102444800);
  if (!Number.isInteger(seconds)) throw new Error('Invalid weather timestamp');
  return seconds * 1000;
}

function optionalSeries(value: unknown, length: number): unknown[] {
  if (value == null) return Array(length).fill(null);
  if (!Array.isArray(value) || value.length !== length) throw new Error('Invalid forecast series');
  return value;
}

/** Validate network data before rendering it; null measurements remain unavailable. */
export function parseWeather(payload: unknown): WeatherSnapshot {
  const data = record(payload);
  const current = record(data.current);
  const daily = record(data.daily);
  const time = timestamp(current.time);
  const isDay = number(current.is_day, 0, 1);
  if (isDay !== 0 && isDay !== 1) throw new Error('Invalid day/night value');
  const temperature = number(current.temperature_2m, -100, 70);
  const code = weatherCode(current.weather_code);

  if (!Array.isArray(daily.time) || daily.time.length !== WEATHER_DAYS) throw new Error('Incomplete forecast');
  const days = daily.time.map(timestamp);
  const codes = optionalSeries(daily.weather_code, days.length);
  const maximums = optionalSeries(daily.temperature_2m_max, days.length);
  const minimums = optionalSeries(daily.temperature_2m_min, days.length);
  const rain = optionalSeries(daily.precipitation_probability_max, days.length);
  const wind = optionalSeries(daily.wind_speed_10m_max, days.length);
  const forecasts = days.map((day, index): WeatherDay => {
    if (index && day - days[index - 1] !== 86_400_000) throw new Error('Invalid forecast dates');
    const maximum = optionalNumber(maximums[index], -100, 70);
    const minimum = optionalNumber(minimums[index], -100, 70);
    if (maximum !== null && minimum !== null && minimum > maximum) throw new Error('Invalid temperature range');
    return {
      time: day,
      date: weatherDateKey(day),
      weatherCode: codes[index] == null ? null : weatherCode(codes[index]),
      maximum,
      minimum,
      rainProbability: optionalNumber(rain[index], 0, 100),
      windSpeed: optionalNumber(wind[index], 0, 500),
    };
  });

  return {
    current: {
      time, temperature, weatherCode: code, isDay: isDay === 1,
      feelsLike: optionalNumber(current.apparent_temperature, -150, 100),
      humidity: optionalNumber(current.relative_humidity_2m, 0, 100),
      windSpeed: optionalNumber(current.wind_speed_10m, 0, 500),
    },
    daily: forecasts,
  };
}

/** Current model values usually update every 15 minutes; reject stale/future data. */
export function isWeatherFresh(weather: WeatherSnapshot, now = Date.now()): boolean {
  const age = now - weather.current.time;
  return age >= -15 * 60_000 && age <= 90 * 60_000
    && weather.daily[0]?.date === weatherDateKey(now);
}

export async function fetchWeather(options: {
  signal?: AbortSignal;
  fetcher?: typeof fetch;
} = {}): Promise<WeatherSnapshot> {
  const controller = new AbortController();
  const abort = () => controller.abort();
  if (options.signal?.aborted) controller.abort();
  else options.signal?.addEventListener('abort', abort, { once: true });
  const timeout = setTimeout(abort, 10_000);
  try {
    const response = await (options.fetcher ?? fetch)(WEATHER_URL, { signal: controller.signal });
    if (!response.ok) throw new Error('Weather service unavailable');
    return parseWeather(await response.json());
  } finally {
    clearTimeout(timeout);
    options.signal?.removeEventListener('abort', abort);
  }
}
