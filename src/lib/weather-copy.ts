import type { Locale } from './i18n';

export type WeatherCondition =
  | 'clear'
  | 'mostly-clear'
  | 'partly-cloudy'
  | 'overcast'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'freezing-rain'
  | 'snow'
  | 'showers'
  | 'snow-showers'
  | 'thunderstorm'
  | 'unknown';

export type WeatherCopy = {
  title: string;
  compactTitle: string;
  eyebrow: string;
  now: string;
  forecast: string;
  selectedForecast: string;
  selectDay: string;
  currentConditions: string;
  today: string;
  tomorrow: string;
  feelsLike: string;
  wind: string;
  dailyWind: string;
  dailyRange: string;
  humidity: string;
  rainChance: string;
  high: string;
  low: string;
  loading: string;
  error: string;
  retry: string;
  updated: string;
  source: string;
  mgmLink: string;
  modelNote: string;
  fullForecast: string;
  noScript: string;
  pauseAnimation: string;
  resumeAnimation: string;
  privacy: string;
  conditions: Record<WeatherCondition, string>;
  nightClear: string;
  nightMostlyClear: string;
};

const weatherCopy: Record<Locale, WeatherCopy> = {
  tr: {
    title: 'Datça’da hava nasıl?',
    compactTitle: 'Datça’da bugün',
    eyebrow: 'GÜNÜNÜ HAVAYA GÖRE PLANLA',
    now: 'Şimdi',
    forecast: '7 günlük tahmin',
    selectedForecast: 'Günün tahmini',
    selectDay: 'Gün seç',
    currentConditions: 'Şu an',
    today: 'Bugün',
    tomorrow: 'Yarın',
    feelsLike: 'Hissedilen',
    wind: 'Rüzgâr',
    dailyWind: 'En yüksek rüzgâr',
    dailyRange: 'Günün sıcaklık aralığı',
    humidity: 'Nem',
    rainChance: 'Yağış olasılığı',
    high: 'En yüksek',
    low: 'En düşük',
    loading: 'Datça hava durumu yükleniyor…',
    error: 'Hava durumu şu anda yüklenemiyor. Biraz sonra tekrar deneyin.',
    retry: 'Tekrar dene',
    updated: 'Veri zamanı',
    source: 'Kaynak',
    mgmLink: 'Resmî uyarılar',
    modelNote: 'Veriler hava modellerine dayanan tahminlerdir. Saatler Datça yerel saatiyle gösterilir.',
    fullForecast: 'Hava durumu rehberi',
    noScript: 'Güncel hava durumu ve tahminleri görmek için JavaScript’i etkinleştirin.',
    pauseAnimation: 'Animasyonu duraklat',
    resumeAnimation: 'Animasyonu sürdür',
    privacy: 'Hava durumu için tarayıcınız Open-Meteo’ya doğrudan bağlanır; IP adresiniz ve istek bilgileriniz sağlayıcıya iletilir. Datça’nın sabit koordinatları kullanılır, cihazınızın konumu alınmaz.',
    conditions: {
      clear: 'Açık',
      'mostly-clear': 'Az bulutlu',
      'partly-cloudy': 'Parçalı bulutlu',
      overcast: 'Kapalı',
      fog: 'Sisli',
      drizzle: 'Çisenti',
      rain: 'Yağmurlu',
      'freezing-rain': 'Donan yağmur',
      snow: 'Karlı',
      showers: 'Sağanak yağışlı',
      'snow-showers': 'Kar sağanaklı',
      thunderstorm: 'Gök gürültülü sağanak',
      unknown: 'Hava durumu bilgisi yok',
    },
    nightClear: 'Açık gece',
    nightMostlyClear: 'Az bulutlu gece',
  },
  en: {
    title: 'What’s the weather in Datça?',
    compactTitle: 'Datça today',
    eyebrow: 'PLAN YOUR DAY AROUND THE WEATHER',
    now: 'Now',
    forecast: '7-day forecast',
    selectedForecast: 'Daily forecast',
    selectDay: 'Choose a day',
    currentConditions: 'Current conditions',
    today: 'Today',
    tomorrow: 'Tomorrow',
    feelsLike: 'Feels like',
    wind: 'Wind',
    dailyWind: 'Maximum wind',
    dailyRange: 'Daily temperature range',
    humidity: 'Humidity',
    rainChance: 'Chance of rain',
    high: 'High',
    low: 'Low',
    loading: 'Loading Datça weather…',
    error: 'The weather is unavailable right now. Please try again shortly.',
    retry: 'Try again',
    updated: 'Data time',
    source: 'Source',
    mgmLink: 'Official weather warnings',
    modelNote: 'Weather data is based on forecast models. Times are shown in Datça local time.',
    fullForecast: 'Weather guide',
    noScript: 'Enable JavaScript to see the current weather and forecast.',
    pauseAnimation: 'Pause animation',
    resumeAnimation: 'Resume animation',
    privacy: 'Your browser connects directly to Open-Meteo for weather data, sharing your IP address and request information. We use fixed coordinates for Datça and never access your device’s location.',
    conditions: {
      clear: 'Clear',
      'mostly-clear': 'Mostly clear',
      'partly-cloudy': 'Partly cloudy',
      overcast: 'Overcast',
      fog: 'Fog',
      drizzle: 'Drizzle',
      rain: 'Rain',
      'freezing-rain': 'Freezing rain',
      snow: 'Snow',
      showers: 'Rain showers',
      'snow-showers': 'Snow showers',
      thunderstorm: 'Thunderstorms',
      unknown: 'Weather unavailable',
    },
    nightClear: 'Clear night',
    nightMostlyClear: 'Mostly clear night',
  },
  ru: {
    title: 'Какая погода в Датче?',
    compactTitle: 'Датча сегодня',
    eyebrow: 'ПЛАНИРУЙТЕ ДЕНЬ ПО ПОГОДЕ',
    now: 'Сейчас',
    forecast: 'Прогноз на 7 дней',
    selectedForecast: 'Прогноз на день',
    selectDay: 'Выберите день',
    currentConditions: 'Сейчас',
    today: 'Сегодня',
    tomorrow: 'Завтра',
    feelsLike: 'Ощущается как',
    wind: 'Ветер',
    dailyWind: 'Максимальный ветер',
    dailyRange: 'Температура за день',
    humidity: 'Влажность',
    rainChance: 'Вероятность осадков',
    high: 'Максимум',
    low: 'Минимум',
    loading: 'Загружаем погоду в Датче…',
    error: 'Сейчас не удаётся загрузить погоду. Попробуйте чуть позже.',
    retry: 'Попробовать снова',
    updated: 'Время данных',
    source: 'Источник',
    mgmLink: 'Официальные предупреждения',
    modelNote: 'Данные основаны на погодных моделях. Время указано по местному времени Датчи.',
    fullForecast: 'Путеводитель по погоде',
    noScript: 'Включите JavaScript, чтобы увидеть текущую погоду и прогноз.',
    pauseAnimation: 'Приостановить анимацию',
    resumeAnimation: 'Продолжить анимацию',
    privacy: 'Для получения погоды ваш браузер напрямую подключается к Open-Meteo, передавая ваш IP-адрес и сведения о запросе. Используются фиксированные координаты Датчи; геолокация вашего устройства не запрашивается.',
    conditions: {
      clear: 'Ясно',
      'mostly-clear': 'Преимущественно ясно',
      'partly-cloudy': 'Переменная облачность',
      overcast: 'Пасмурно',
      fog: 'Туман',
      drizzle: 'Морось',
      rain: 'Дождь',
      'freezing-rain': 'Ледяной дождь',
      snow: 'Снег',
      showers: 'Ливень',
      'snow-showers': 'Снежные заряды',
      thunderstorm: 'Гроза',
      unknown: 'Нет данных о погоде',
    },
    nightClear: 'Ясная ночь',
    nightMostlyClear: 'Преимущественно ясная ночь',
  },
};

export function getWeatherCopy(locale: Locale): WeatherCopy {
  return weatherCopy[locale];
}
