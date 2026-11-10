import { getWeatherCopy, type WeatherCondition, type WeatherCopy } from '../lib/weather-copy';
import type { Locale } from '../lib/i18n';
import { fetchWeather, isWeatherFresh, weatherKind, formatWeatherTime, formatWeatherDay, weatherDateKey, type WeatherSnapshot } from '../lib/weather';

const REFRESH_MS = 10 * 60 * 1000;
const iconPaths: Record<string, string> = {
  sun: 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1',
  cloud: 'M6 18a4 4 0 0 1-1-7.87A6 6 0 0 1 16.6 8a5 5 0 1 1 .4 10H6Z',
  rain: 'M5 14a4 4 0 0 1 0-8 6 6 0 0 1 11-1 4.5 4.5 0 1 1 2 9M7 17l-1 3M12 17l-1 3M17 17l-1 3',
  snow: 'M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9 4l3 3 3-3M9 20l3-3 3 3',
  thunder: 'M5 14a4 4 0 0 1 0-8 6 6 0 0 1 11-1 4.5 4.5 0 1 1 2 9M13 12l-4 6h5l-3 5',
  fog: 'M4 10a4 4 0 0 1 1-7 6 6 0 0 1 11 1 4.5 4.5 0 0 1 4 6M3 14h18M5 18h14M7 22h10',
};

function conditionLabel(code: number | null, copy: WeatherCopy, isDay = true): string {
  if (code === 0 && !isDay) return copy.nightClear;
  if (code === 1 && !isDay) return copy.nightMostlyClear;
  let key: WeatherCondition = 'unknown';
  if (code === 0) key = 'clear';
  else if (code === 1) key = 'mostly-clear';
  else if (code === 2) key = 'partly-cloudy';
  else if (code === 3) key = 'overcast';
  else if (code === 45 || code === 48) key = 'fog';
  else if ([51, 53, 55].includes(code!)) key = 'drizzle';
  else if ([56, 57, 66, 67].includes(code!)) key = 'freezing-rain';
  else if ([61, 63, 65].includes(code!)) key = 'rain';
  else if ([71, 73, 75, 77].includes(code!)) key = 'snow';
  else if ([80, 81, 82].includes(code!)) key = 'showers';
  else if ([85, 86].includes(code!)) key = 'snow-showers';
  else if ([95, 96, 97, 99].includes(code!)) key = 'thunderstorm';
  return copy.conditions[key];
}

function dayIcon(code: number | null): SVGSVGElement {
  const kind = weatherKind(code);
  const name = kind.startsWith('clear') ? 'sun' : kind === 'snow' ? 'snow' : kind === 'thunderstorm' ? 'thunder' : kind === 'rain' || kind === 'drizzle' ? 'rain' : kind === 'fog' ? 'fog' : 'cloud';
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  for (const [key, value] of Object.entries({ viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true' })) icon.setAttribute(key, value);
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', iconPaths[name]);
  icon.append(path);
  return icon;
}

for (const widget of document.querySelectorAll<HTMLElement>('[data-weather-widget]')) {
  const locale = (widget.dataset.weatherLocale || 'tr') as Locale;
  const copy = getWeatherCopy(locale);
  const compact = widget.dataset.weatherCompact === 'true';
  const query = <T extends HTMLElement>(selector: string) => widget.querySelector<T>(selector)!;
  const write = (name: string, value: string) => { const element = widget.querySelector(`[data-weather-${name}]`); if (element) element.textContent = value; };
  const number = (value: number | null, suffix = '') => value === null ? '—' : `${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Math.round(value))}${suffix}`;
  let snapshot: WeatherSnapshot | null = null;
  let selectedDate: string | null = null;
  let loading = false;
  let fetchedAt = 0;

  function renderSelection() {
    if (!snapshot) return;
    const { current, daily } = snapshot;
    const today = weatherDateKey(Date.now());
    const day = daily.find(day => day.date === selectedDate) || daily[0];
    const isCurrent = compact || day.date === today;
    selectedDate = day.date;
    const condition = conditionLabel(isCurrent ? current.weatherCode : day.weatherCode, copy, isCurrent ? current.isDay : true);
    widget.dataset.weatherKind = weatherKind(isCurrent ? current.weatherCode : day.weatherCode, isCurrent ? current.isDay : true);
    write('date', isCurrent ? `${copy.currentConditions} · ${formatWeatherTime(current.time, locale)}` : `${formatWeatherDay(day.time, locale)} · ${copy.selectedForecast}`);
    write('temperature', number(isCurrent ? current.temperature : day.maximum));
    write('condition', condition);
    write('range', `${copy.high} ${number(day.maximum, '°')} · ${copy.low} ${number(day.minimum, '°')}`);
    write('primary-label', isCurrent ? copy.feelsLike : copy.high);
    write('primary', number(isCurrent ? current.feelsLike : day.maximum, '°C'));
    write('wind-label', isCurrent ? copy.wind : copy.dailyWind);
    write('wind', number(isCurrent ? current.windSpeed : day.windSpeed, ' km/h'));
    write('secondary-label', isCurrent ? copy.humidity : copy.low);
    write('secondary', number(isCurrent ? current.humidity : day.minimum, isCurrent ? '%' : '°C'));
    write('rain', number(day.rainProbability, '%'));
    widget.querySelectorAll<HTMLButtonElement>('[data-weather-day]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.weatherDay === selectedDate)));
  }

  function renderDays() {
    const days = widget.querySelector('[data-weather-days]');
    if (!days || !snapshot) return;
    const today = weatherDateKey(Date.now());
    const tomorrow = weatherDateKey(Date.now() + 24 * 60 * 60 * 1000);
    days.replaceChildren(...snapshot.daily.map(day => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.weatherDay = day.date;
      button.setAttribute('aria-pressed', 'false');
      const label = day.date === today ? copy.today : day.date === tomorrow ? copy.tomorrow : new Intl.DateTimeFormat(locale, { weekday: 'short', timeZone: 'Europe/Istanbul' }).format(day.time);
      const date = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', timeZone: 'Europe/Istanbul' }).format(day.time);
      button.setAttribute('aria-label', `${label}, ${date}: ${conditionLabel(day.weatherCode, copy)}. ${copy.high} ${number(day.maximum, '°C')}, ${copy.low} ${number(day.minimum, '°C')}. ${copy.rainChance}: ${number(day.rainProbability, '%')}`);
      const name = document.createElement('span'); name.className = 'weather-day-name'; name.textContent = label;
      const dateLabel = document.createElement('span'); dateLabel.className = 'weather-day-date'; dateLabel.textContent = date;
      const range = document.createElement('span'); range.className = 'weather-day-range'; range.textContent = number(day.maximum, '°');
      const low = document.createElement('small'); low.textContent = number(day.minimum, '°'); range.append(low);
      button.append(name, dateLabel, dayIcon(day.weatherCode), range);
      button.addEventListener('click', () => { selectedDate = day.date; renderSelection(); });
      return button;
    }));
  }

  async function load() {
    if (loading) return;
    loading = true;
    const retry = query<HTMLButtonElement>('[data-weather-retry]');
    retry.hidden = true;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);
    try {
      snapshot = await fetchWeather({ signal: controller.signal });
      if (!isWeatherFresh(snapshot)) throw new Error('Outdated weather');
      fetchedAt = Date.now();
      renderDays();
      renderSelection();
      widget.querySelectorAll<HTMLElement>('[data-weather-content]').forEach(element => element.hidden = false);
      write('status', '');
      query('[data-weather-status]').hidden = true;
      write('updated', compact ? '' : `${copy.updated} ${formatWeatherDay(snapshot.current.time, locale)} ${formatWeatherTime(snapshot.current.time, locale)} · `);
    } catch {
      widget.dataset.weatherKind = 'unknown';
      widget.querySelectorAll<HTMLElement>('[data-weather-content]').forEach(element => element.hidden = true);
      query('[data-weather-status]').hidden = false;
      write('status', copy.error);
      write('updated', '');
      retry.hidden = false;
    } finally {
      window.clearTimeout(timeout);
      loading = false;
    }
  }

  query<HTMLButtonElement>('[data-weather-retry]').addEventListener('click', load);
  const motion = query<HTMLButtonElement>('[data-weather-motion]');
  motion.addEventListener('click', () => {
    const paused = widget.toggleAttribute('data-weather-paused');
    motion.setAttribute('aria-pressed', String(paused));
    motion.setAttribute('aria-label', paused ? copy.resumeAnimation : copy.pauseAnimation);
    motion.title = paused ? copy.resumeAnimation : copy.pauseAnimation;
    motion.querySelector('path')!.setAttribute('d', paused ? 'm8 5 11 7-11 7Z' : 'M8 5v14M16 5v14');
  });
  document.addEventListener('visibilitychange', () => { if (!document.hidden && Date.now() - fetchedAt >= REFRESH_MS) void load(); });
  window.setInterval(() => { if (!document.hidden) void load(); }, REFRESH_MS);
  void load();
}
