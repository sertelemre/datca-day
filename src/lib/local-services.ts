import type { Locale } from './paths';

type Copy = [string, string, string];
type Provider = {name:string; place:string; url:string; description:Copy};
export const localText = (text:Copy,locale:Locale) => text[{tr:0,en:1,ru:2}[locale]];

const providers = {
  balli:{name:'Ballı Tour',place:'Palamutbükü',url:'https://ballitour.com/',
    description:['Palamutbükü Limanı’ndan çıkan turda Knidos’ta karaya çıkma molası var. Ören yerinde ne kadar zaman kalacağını sor.','The trip leaves Palamutbükü harbour and includes a stop ashore at Knidos. Ask how much time you will have at the ruins.','Выход из гавани Паламутбюкю с высадкой в Книде. Уточните, сколько времени будет на осмотр руин.']},
  cagdas:{name:'Kaptan Çağdaş',place:'Kumluk',url:'https://www.kaptancagdasdatca.com/',
    description:['Kumluk’tan kalkan aile teknesi yüzme molaları veriyor. Teknede SUP tahtası da bulunuyor.','This family boat leaves Kumluk for a day of swimming stops. There are paddleboards on board.','Семейный катер отправляется из Кумлука и делает остановки для купания. На борту есть сапборды.']},
  anka:{name:'Anka Tur',place:'Datça Yat Limanı',url:'https://www.ankaturdatca.com/',
    description:['Tekneyi kendi grubun için ayırtabilirsin. İnceburun çevresindeki rota denizin durumuna göre belirleniyor.','Book the boat for your own group. The skipper chooses the route around İnceburun according to sea conditions.','Лодку можно арендовать для своей компании. Маршрут вокруг Инджебуруна зависит от состояния моря.']},
  dadya:{name:'Dadya 2',place:'Datça Yat Limanı',url:'https://datcayatturu.com/',
    description:['Kabinli teknede günübirlik veya konaklamalı tur var. Yatılı programda kumanya alışverişi konuklara ait.','This cabin boat offers day trips and overnight charters. Guests buy the provisions for the overnight trip.','На яхте с каютами есть дневные и многодневные рейсы. Для поездки с ночёвкой гости сами закупают продукты.']},
  kumluk:{name:'Kumluk Otel',place:'Kumluk · İskele',url:'https://kumlukotel.com/',
    description:['Datça merkezinde sahil oteli ve restoran. Akşam limana yürümek isteyenler için kıyıda bir üs.','A beachfront hotel and restaurant in town, within walking distance of the harbour for an evening stroll.','Отель с рестораном на пляже в центре Датчи. Вечером до гавани можно дойти пешком.']},
  zeyt:{name:'Zeyt Inn Hotel',place:'Eski Datça',url:'https://zeytinn.com.tr/hakkimizda/',
    description:['Zeytin ağaçlarının arasında taş yapılar ve havuz. Kıyı yerine Eski Datça sokaklarında konaklamak isteyenler için.','Stone buildings and a pool among olive trees. Stay here for the lanes of Eski Datça and make a separate trip to the beach.','Каменные дома и бассейн среди олив. База для прогулок по Эски-Датче, откуда к пляжу добираются отдельно.']},
  defne:{name:'Defne Apart Otel',place:'Palamutbükü · Yaka',url:'https://defneapart.com/',
    description:['Plaja yakın mutfaklı apart daireler. Birkaç gece kalıp yemeğini kendin hazırlamak istiyorsan mutfak ve ortak çamaşır imkânlarını incele.','Apartments near the beach with kitchens and shared laundry facilities for a self-catering stay.','Апартаменты у пляжа с кухней и общей прачечной для тех, кто планирует готовить самостоятельно.']},
  cesme:{name:'Palamutbükü Çeşme Otel',place:'Palamutbükü · Yaka',url:'https://palamutbukucesmeotel.com/hakkimizda',
    description:['Palamutbükü sahilinde butik otel. Konaklama ile birlikte kıyıya doğrudan erişim arayanlar için.','A small hotel on the Palamutbükü waterfront with direct access to the shore.','Небольшой отель на набережной Паламутбюкю с прямым выходом к морю.']},
  ucpa:{name:'UCPA Türkiye',place:'Datça',url:'https://ucpa.com.tr/destinasyonlar/datca/',
    description:['Datça programlarında rüzgâr sörfü dersleri ve gün batımında SUP veya kano gezileri sunuyor.','Offers windsurfing lessons and sunset SUP or kayak outings in Datça.','Проводит занятия виндсёрфингом и прогулки на сапах или каяках на закате.']},
  sail:{name:'Datça Belediyesi Windsurf ve Yelken Okulu',place:'Datça',url:'https://www.datca.bel.tr/haberler/ruzgari-arkasina-alan-gencler-denizle-bulusuyor',
    description:['Belediye okulunda teorik eğitimi su üzerinde uygulama izliyor. Yeni dönem yaş gruplarını ve kayıt tarihlerini belediyeden öğren.','The municipal school pairs shore-based instruction with practice on the water. Ask about age groups and enrolment dates.','В муниципальной школе теория сочетается с занятиями на воде. Узнайте в муниципалитете даты набора и возрастные группы.']},
  dive:{name:'Uçanbalık Dalış Merkezi',place:'Datça',url:'https://www.ucanbalik.com/',
    description:['Deneme dalışı ile sertifika eğitimleri ayrı programlar. Eğitmenle süreyi ve aranan deneyim düzeyini görüş.','Offers introductory dives and certification courses. Ask the instructor about duration and experience requirements.','Пробные погружения и сертификационные курсы — отдельные программы. Обсудите с инструктором продолжительность и требования.']},
} satisfies Record<string,Provider>;

type ProviderKey = keyof typeof providers;
type Group = 'boat'|'stay'|'sea';
const options:Record<string,[Group, ...ProviderKey[]]> = {
  'gunluk-turlar':['boat','balli','cagdas','anka'], 'datca-tekne-turu':['boat','balli','cagdas','anka'],
  'palamutbukunden-knidos-tekne-turu':['boat','balli','anka'], 'mavi-yolculuk':['boat','dadya','balli','anka'],
  'datcada-mavi-yolculuk':['boat','dadya','anka'], 'bencik-koyu':['boat','dadya'],
  'konaklama':['stay','kumluk','zeyt','defne','cesme'], 'datcada-nerede-kalinir':['stay','kumluk','zeyt','defne','cesme'],
  'datcada-apart-ve-pansiyon':['stay','defne','cesme'], 'datcada-ruzgar-sorfu':['sea','ucpa','sail'],
  'datcada-kano-sup':['sea','ucpa','cagdas'], 'datcada-dalis':['sea','dive'],
};
export function guideProviders(slug:string) {
  const selection = options[slug];
  if (!selection) return;
  const [group,...keys] = selection;
  return {group,items:keys.map(key=>providers[key])};
}
export const servicesCopy:Record<string,Copy> = {
  boat:['Tekne turu işletmeleri','Boat tour operators','Организаторы морских прогулок'],
  stay:['Konaklama yerlerini karşılaştır','Compare places to stay','Варианты размещения'],
  sea:['Su sporları ve eğitim','Water sports and lessons','Водный спорт и обучение'],
  compareBoat:['Kalkış limanını ve rotayı karşılaştır. Gitmek istediğin koyun seyahat tarihinde programa dahil olup olmadığını işletmeye sor.','Compare the departure ports and routes. Ask the operator whether the bay you want to visit is on the itinerary for your date.','Сравните порты отправления и маршруты. Уточните у организатора, будет ли нужная бухта в программе в выбранный день.'],
  compareStay:['Konum ve konaklama biçimine göre seçim yap. Oda tipini, sezon tarihlerini ve iptal koşullarını tesisle doğrula.','Choose a location and accommodation style. Confirm the room type, opening dates and cancellation terms with the property.','Выберите район и тип жилья. Уточните у владельцев категорию номера, сезон работы и условия отмены.'],
  compareSea:['Seans tarihini, buluşma noktasını ve ekipmanı programı düzenleyen ekiple doğrula.','Confirm the date, meeting point and equipment with the team running the session.','Уточните у организатора дату занятия, место встречи и снаряжение.'],
  website:['İşletmenin sayfası','Provider website','Сайт организатора'],
  pharmacy:['Datça’nın nöbetçi eczanesi','On-duty pharmacies in Datça','Дежурные аптеки Датчи'],
  pharmacyIntro:['Listedeki tarihe bak. Gece yarısından sonra önceki günün nöbeti sürebilir. Gitmeden önce listelenen numaradan nöbeti ve adresi doğrula.','Check the duty date at the top of the list. After midnight, the previous day’s shift may still apply. Call the listed number to confirm the shift and address.','Проверьте дату дежурства в верхней строке. После полуночи может продолжаться смена предыдущего дня. Позвоните по указанному номеру и уточните время работы и адрес.'],
  frameTitle:['Eczaneler.gen.tr günlük Datça nöbet listesi','Daily Datça duty roster from Eczaneler.gen.tr','Ежедневный список дежурных аптек Датчи от Eczaneler.gen.tr'],
  privacy:['Günlük liste Eczaneler.gen.tr’den yüklenir. Tarayıcın bu sağlayıcıya bağlanır.','The daily roster loads from Eczaneler.gen.tr. Your browser connects to this provider.','Ежедневный список загружается с Eczaneler.gen.tr. Ваш браузер подключается к этому сайту.'],
  direct:['Listeyi ayrı aç','Open the roster separately','Открыть список отдельно'],
  city:['Datça Belediyesi','Datça Municipality','Муниципалитет Датчи'],
  chamber:['Muğla Eczacı Odası','Muğla Chamber of Pharmacists','Палата фармацевтов Муглы'],
  fieldGuide:['','The roster is in Turkish. “Adres” is the address and “Telefon” is the telephone number.','Список на турецком языке. «Adres» — адрес, «Telefon» — номер телефона.'],
};
