import data from './transport-data.json';
import type { Locale } from './paths';

export type Direction = { from: string; times: string[]; flight?: boolean; note?: string; annotations?: Record<string,string> };
export type ScheduleDay = { label: string; date: string | null; directions: Direction[] };
export const kinds = ['intercity','airport','ferry','local'] as const;
export type Kind = typeof kinds[number];
export type TransportRoute = {
  slug:string; code:string; title:string; kind:Kind; source:string; sourceUpdated:string | null;
  checked:string; via:string; days:ScheduleDay[];
};
export const transportRoutes = data.routes as TransportRoute[];
const labels:Record<string, [string,string,string]> = {
  home:['Ana sayfa','Home','Главная'],
  name:['Ulaşım','Transport','Транспорт'],
  title:['Datça ulaşım ve sefer saatleri','Getting around Datça','Транспорт и расписания Датчи'],
  intro:['Datça’ya geliş ve yarımada içindeki yolculuklar için hattını seç. Gidiş ve dönüş saatlerini seyahat edeceğin güne göre kontrol et.','Choose a route to Datça or around the peninsula. Check departures in both directions for your travel day.','Выберите маршрут до Датчи или по полуострову и проверьте время отправления в обе стороны на день поездки.'],
  search:['Hat veya durak ara','Find a route or stop','Найти маршрут или остановку'],
  examples:['Örn. Palamutbükü, Havaş, 48-16','e.g. Palamutbükü, Havaş, 48-16','Например, Palamutbükü, Havaş, 48-16'],
  noMatch:['Bu aramayla eşleşen hat bulunamadı.','No routes match this search.','Маршруты не найдены.'],
  local:['Datça dolmuşları','Local minibuses','Местные долмуши'],
  taxiMap:['Taksi durakları haritası','Taxi rank map','Карта стоянок такси'],
  intercity:['İlçeler arası otobüsler','Regional buses','Междугородние автобусы'],
  airport:['Havalimanı servisleri','Airport shuttles','Шаттлы в аэропорт'],
  ferry:['Bodrum–Datça feribotu','Bodrum–Datça ferry','Паром Бодрум — Датча'],
  transfer:['Dalaman Havalimanı ile Datça arasında Marmaris Otogarı’nda aktarma yap. Havaş ve MUTTAŞ servislerinin saatleri ayrı yayımlanır.','Change at Marmaris bus station between Dalaman Airport and Datça. Havaş and MUTTAŞ publish separate shuttle timetables.','Между аэропортом Даламан и Датчей нужна пересадка на автовокзале Мармариса. У Havaş и MUTTAŞ разные расписания.'],
  port:['Feribotun Datça iskelesi Karaköy’de (Körmen). Merkez bağlantısı için 9-8 hattının kalkışlarını ayrıca kontrol et.','The Datça ferry terminal is at Karaköy (Körmen). Check route 9-8 separately for the connection to the town centre.','Паром в Датче причаливает в Каракёе (Кёрмен). Расписание автобуса 9-8 до центра проверяйте отдельно.'],
  ferryInfo:['Feribot sefer bilgisi','Ferry information line','Справочная паромной службы'],
  hours:['Sefer saatleri','Timetable','Расписание'],
  aboutTimes:['Saatler Türkiye yerel saatiyle yayımlanan planlı kalkışlardır. Yolculuğundan önce işletmecinin duyurularını kontrol et.','These are scheduled departures in Türkiye local time. Check the operator’s notices before you travel.','Указано плановое время отправления по местному времени Турции. Перед поездкой проверьте объявления перевозчика.'],
  asOf:['Kaynak kontrolü','Source checked','Источник проверен'],
  sourceUpdate:['İşletmecinin güncellemesi','Operator updated','Обновление перевозчика'],
  official:['Resmî tarifeyi aç','Open the official timetable','Расписание перевозчика'],
  weekdays:['Hafta içi','Weekdays','Будни'],
  week:['Gün','Day','День'],
  departures:['Kalkış','Departures from','Отправление из'],
  stops:['Güzergâh','Route','Маршрут'],
  flight:['İç hat uçuşlarının iniş saatine göre kalkar.','Departures are coordinated with domestic flight arrivals.','Отправление привязано к прибытию внутренних рейсов.'],
  noTimes:['İşletmeci bu hat için hareket saati yayımlamıyor. Güncel durum için resmî hat sayfasına bak.','The operator has not published departure times for this route. Check its route page for the latest status.','Перевозчик не опубликовал время отправления по этому маршруту. Уточните его на официальной странице.'],
  noDirection:['Bu yönde bu gün için saat yayımlanmamış.','No departure times are listed in this direction for this day.','В этом направлении время отправления на этот день не указано.'],
  night:['Belirtilen tarihe girilen gece.','Overnight at the start of the stated date.','В ночь на указанную дату.'],
  emecik:['Emecik Mahallesi’ne uğrar.','Calls at Emecik neighbourhood.','Заезжает в квартал Эмеджик.'],
  damarasi:['Döşeme–Damarası Mahallesi’ne uğrar.','Calls at Döşeme–Damarası neighbourhood.','Заезжает в квартал Дёшеме — Дамарасы.'],
  older:['Tarife kontrolünün üzerinden bir haftadan fazla geçti. Seyahat tarihi için işletmecinin sayfasını kontrol et.','This timetable was checked more than a week ago. Confirm your travel date with the operator.','Расписание проверялось более недели назад. Уточните время у перевозчика на дату поездки.'],
  dateLimited:['Bu listede yalnızca belirtilen tarihler için açıklanan seferler yer alır. Başka bir gün için işletmecinin tarih seçimini kullan.','Only services for the listed dates are shown. For another day, use the operator’s timetable.','Показаны рейсы только на указанные даты. На другой день уточните расписание у перевозчика.'],
  connections:['Bağlantılı hatlar','Connecting routes','Стыковочные маршруты'],
  noDataLink:['Hat bilgisi','Route information','Информация о маршруте'],
  all:['Tüm ulaşım hatları','All transport routes','Все маршруты'],
};
export function transportCopy(locale:Locale) {
  const index = {tr:0,en:1,ru:2}[locale];
  return (key:string) => labels[key]?.[index] ?? key;
}
export function dayLabel(day:ScheduleDay, locale:Locale) {
  if (day.date) return formatDate(day.date,locale,true);
  if (day.label === 'Hafta İçi') return transportCopy(locale)('weekdays');
  const weekday = ['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'].indexOf(day.label);
  if (weekday === -1) return day.label;
  return new Intl.DateTimeFormat(locale,{weekday:'long',timeZone:'Europe/Istanbul'}).format(new Date(Date.UTC(2024,0,weekday+1,12)));
}
export function formatDate(date:string,locale:Locale,weekday=false) {
  return new Intl.DateTimeFormat(locale,{dateStyle: weekday ? 'full' : 'long',timeZone:'Europe/Istanbul'}).format(new Date(date.length === 10 ? date+'T12:00:00Z' : date));
}
export function placeName(name:string,locale:Locale) {
  if (locale === 'tr') return name;
  return name.replaceAll('Dalaman Havalimanı', locale === 'en' ? 'Dalaman Airport' : 'аэропорт Даламан')
    .replaceAll('Marmaris Otogar', locale === 'en' ? 'Marmaris bus station' : 'автовокзал Мармарис');
}
export function localizedNote(note:string,locale:Locale) {
  const t = transportCopy(locale);
  if (note.endsWith('bağlayan gece saatidir.')) return t('night');
  if (note.includes('Dalaman Havalimanına inen iç hat uçuşları')) return t('flight');
  if (note.includes('Döşeme - Damarası')) return t('damarasi');
  if (note.includes('Emecik Mahallesine')) return t('emecik');
  return note;
}
