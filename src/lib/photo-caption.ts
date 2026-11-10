import type { Locale } from './paths';
const labels: Record<string,[string,string,string]> = {
  'hero-datca':['Knidos kıyısı','Coast at Knidos','Побережье Книда'],
  'eski-datca':['Eski Datça','Old Datça','Старая Датча'],
  palamutbuku:['Palamutbükü kıyısı','Palamutbükü coast','Побережье Паламутбюкю'],
  hayitbuku:['Hayıtbükü Koyu','Hayıtbükü Bay','Бухта Хайытбюкю'],
  ovabuku:['Ovabükü Koyu','Ovabükü Bay','Бухта Овабюкю'],
  knidos:['Knidos Antik Kenti','Ancient Knidos','Древний Книд'],
  kargi:['Kargı Koyu','Kargı Bay','Бухта Каргы'],
  kizlan:['Kızlan yel değirmenleri','Kızlan windmills','Мельницы Кызлана'],
  'datca-liman':['Datça Limanı','Datça harbour','Гавань Датчи'],
  mesudiye:['Mesudiye vadisi','Mesudiye valley','Долина Месудие'],
  kormen:['Körmen kıyısı','Körmen coastline','Побережье Кёрмена'],
  'datca-tekne':['Palamutbükü Adası açıkları','Waters off Palamutbükü Island','У острова Паламутбюкю'],
  'datca-sahil':['Datça sahili','Datça waterfront','Набережная Датчи'],
  'datca-koylari':['Datça Yarımadası','Datça Peninsula','Полуостров Датча'],
  'datca-merkez':['Datça merkez','Central Datça','Центр Датчи'],
};
export function photoCaption(path:string,locale:Locale) {
  const key=path.split('/').pop()?.split('.')[0] || '';
  const label=labels[key];
  if (!label) throw new Error('Missing photo caption for '+path);
  return label[{tr:0,en:1,ru:2}[locale]];
}
