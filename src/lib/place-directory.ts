import { copy, type Guide } from './guides';
import pharmacyRecords from './pharmacies.json';

export type DirectoryGroup = 'taxi' | 'outpatient' | 'family' | 'private' | 'pharmacy';
type Translation = [string, string, string];
export interface DirectoryPlace {
  group: DirectoryGroup;
  id: string;
  name: string;
  address: string;
  phone: string;
  coordinates: [number, number]; // latitude, longitude of the named place
  source: string;
  locationSource?: string;
  note?: Translation;
}

const taxi = 'https://taksibul.net/il/mugla/';
const asm = 'https://muglaism.saglik.gov.tr/TR-48653/asm-ve-ahb-iletisim.html';
const cityGuide = 'https://datca.rehberi.tr/firma/';
const yandex = 'https://yandex.com.tr/maps/org/';

export const pharmacies: DirectoryPlace[] = pharmacyRecords.map(record => ({
  ...record, group: 'pharmacy', coordinates: [record.coordinates[0], record.coordinates[1]],
  source: 'https://www.muglaeczaciodasi.org.tr/uyelerimiz/1266',
}));

export const places: DirectoryPlace[] = [
  {
    group: 'taxi', id: 'cicek-taksi', name: 'Çiçek Taksi',
    address: 'İskele Mah., Atatürk Cad., İş Bankası önü', phone: '+90 252 712 42 74',
    coordinates: [36.727133, 27.686329], source: taxi + 'cicek-taksi-15818',
  },
  {
    group: 'taxi', id: 'ozgur-taksi', name: 'Özgür Taksi',
    address: 'İskele Mah., Atatürk Cad. No. 1', phone: '+90 252 712 32 37',
    coordinates: [36.726099, 27.685621], source: taxi + 'datca-ozgur-taksi-9204',
  },
  {
    group: 'taxi', id: 'knidos-taksi', name: 'Knidos Taksi',
    address: 'İskele Mah., Kargı Yolu, liman girişi No. 3', phone: '+90 252 712 40 40',
    coordinates: [36.722479, 27.687348], source: taxi + 'datca-knidos-taksi-9205',
  },
  {
    group: 'taxi', id: 'garaj-taksi', name: 'Garaj Migros Taksi',
    address: 'İskele Mah., Çevre Yolu No. 2', phone: '+90 252 712 20 24',
    coordinates: [36.733063, 27.681661], source: taxi + 'garaj-migros-taksi-676',
  },
  {
    group: 'taxi', id: 'ozbel-taksi', name: 'Özbel Taksi',
    address: 'Nazım Hikmet Sok., Özbel Cafe yanı', phone: '+90 252 712 20 21',
    coordinates: [36.735938, 27.691365], source: taxi + 'datca-ozbel-taksi-9206',
  },
  {
    group: 'taxi', id: 'hastane-taksi', name: 'Eski Datça – Hastane Taksi',
    address: 'Eski Datça, Ir Meydanı, Yağhane Sok.', phone: '+90 531 649 48 00',
    coordinates: [36.740628, 27.665056], source: taxi + 'eski-datca-hastane-taksi-9207',
  },
  {
    group: 'taxi', id: 'palamutbuku-taksi', name: 'Palamutbükü Taksi',
    address: 'Yaka Mah., Palamutbükü Küme Evler', phone: '+90 252 725 52 62',
    coordinates: [36.674189, 27.508042], source: yandex + 'palamutbuku_taksi/47453968913/',
  },
  {
    group: 'taxi', id: 'aktur-taksi', name: 'Aktur Taksi',
    address: 'Emecik Mah., Aktur Tatil Sitesi', phone: '+90 252 724 71 90',
    coordinates: [36.758863, 27.887024], source: 'https://www.aktur-datca.com/',
    locationSource: 'https://www.firmasec.com/firma/bfkddt-aktur-taksi',
  },
  {
    group: 'outpatient', id: 'devlet-hastanesi', name: 'Datça Devlet Hastanesi',
    address: 'Datça Mah., Yüksekokul Cad. No. 8', phone: '+90 252 712 30 82',
    coordinates: [36.74363, 27.67028], source: 'https://datcadh.saglik.gov.tr/TR-737081/bize-ulasin.html',
    locationSource: 'https://www.openstreetmap.org/way/1302233960',
    note: [
      'İç hastalıkları (dahiliye), çocuk hastalıkları, aile hekimliği, genel cerrahi, kadın hastalıkları ve doğum, ağız ve diş sağlığı. Telefon hastane santraline aittir. Randevu için MHRS’de branşı seçebilirsin.',
      'Internal medicine, paediatrics, family medicine, general surgery, obstetrics and gynaecology, and dentistry. The number reaches the hospital switchboard. Select a specialty in MHRS to check appointments.',
      'Терапия, педиатрия, семейная медицина, общая хирургия, акушерство и гинекология, стоматология. Телефон соединяет с коммутатором больницы. Для записи выберите специальность в MHRS.',
    ],
  },
  {
    group: 'family', id: 'asm-1', name: 'Datça 1 Nolu Aile Sağlığı Merkezi',
    address: 'İskele Mah., Op. Dr. Turgut Dündar Cad. No. 11', phone: '+90 252 712 30 83',
    coordinates: [36.727624, 27.688125], source: asm, locationSource: yandex + 'datca_1_nolu_aile_sagligi_merkezi/71870775698/',
    note: ['Telefon 2 no.lu aile hekimliği birimine aittir. Diğer birimlerin numaraları İl Sağlık Müdürlüğünün listesinde yer alır.', 'This number reaches family medicine unit 2. The provincial health directory lists the other units separately.', 'Это телефон участка № 2. Номера остальных участков есть в справочнике управления здравоохранения.'],
  },
  {
    group: 'family', id: 'asm-2', name: 'Datça 2 Nolu Cumalı Aile Sağlığı Merkezi',
    address: 'Cumalı Mah., Çeşme Sok., Küme Evleri No. 111', phone: '+90 252 726 12 12',
    coordinates: [36.689905, 27.468967], source: 'https://cumali2noluasm.com/',
    locationSource: yandex + 'datca_2_nolu_cumali_aile_saglik_merkezi/135413074470/',
  },
  {
    group: 'family', id: 'asm-3', name: 'Datça 3 Nolu Aile Sağlığı Merkezi',
    address: 'İskele Mah., Hisar Mağara Cad. No. 15/1', phone: '+90 252 712 25 55',
    coordinates: [36.735610, 27.686302], source: asm, locationSource: yandex + 'mugla_datca_3_nolu_aile_sagligi_merkezi/21683838343/',
  },
  {
    group: 'family', id: 'asm-4', name: 'Datça 4 Nolu Aile Sağlığı Merkezi',
    address: 'İskele Mah., 62. Sok. No. 10A', phone: '+90 252 712 89 96',
    coordinates: [36.724243, 27.684786], source: 'https://datca4noluasm.com/iletisim/',
    locationSource: cityGuide + 'datca-4-nolu-asm-l6mewm9et8',
  },
  {
    group: 'private', id: 'datca-kadin-dogum', name: 'Datça Kadın Doğum · Op. Dr. Berna Aydemir',
    address: 'İskele Mah., Fehmi Yavuz Cad., Gizem Apt. No. 11/C', phone: '+90 551 712 34 48',
    coordinates: [36.728877, 27.685647], source: 'https://www.datcakadindogum.com/i%CC%87leti%C5%9Fim',
    locationSource: cityGuide + 'kadin-hastaliklari-ve-dogum-uzmani-berna-aydemir-1up2573jsm',
    note: ['Kadın hastalıkları ve doğum muayenehanesi.', 'Private obstetrics and gynaecology practice.', 'Частный кабинет акушера-гинеколога.'],
  },
  {
    group: 'private', id: 'orhan-oznas', name: 'Uzm. Dr. Orhan Öznas Muayenehanesi',
    address: 'İskele Mah., Eski Knidos Cad. No. 4/1', phone: '+90 554 720 22 48',
    coordinates: [36.733836, 27.692545], source: cityGuide + 'uzman-dr-orhan-oznas-muayenehanesi-jbyazjtuyt',
    note: ['İç hastalıkları (dahiliye) muayenehanesi.', 'Private internal medicine practice.', 'Частный кабинет терапевта.'],
  },
  {
    group: 'private', id: 'dent-mare', name: 'Dent Mare Ağız ve Diş Sağlığı Polikliniği',
    address: 'İskele Mah., Atatürk Cad. No. 8/B', phone: '+90 555 021 93 13',
    coordinates: [36.727750, 27.686380], source: 'https://dentmare.com.tr/',
    locationSource: cityGuide + 'ozel-dent-mare-agiz-ve-dis-sagligi-poliklinigi-datca-bkfeycktgc',
  },
  {
    group: 'private', id: 'dent-dadya', name: 'Dent Dadya Ağız ve Diş Sağlığı Polikliniği',
    address: 'İskele Mah., 78. Sok. No. 12/A', phone: '+90 533 483 38 48',
    coordinates: [36.727707, 27.685715], source: 'https://www.datca.app/isletme/dent-dadya-agiz-ve-dis-sagligi-poliklinigi-s5',
  },
  {
    group: 'private', id: 'dentdatca', name: 'DentDatça Ağız ve Diş Sağlığı Polikliniği',
    address: 'İskele Mah., 74. Sok. No. 8/1', phone: '+90 542 535 56 22',
    coordinates: [36.727237, 27.686659], source: cityGuide + 'dentdatca-agiz-ve-dis-sagligi-poliklinigi-fvdxtv73zm',
  },
  {
    group: 'private', id: 'i-klinik', name: 'İ-Klinik Datça Ağız ve Diş Sağlığı Polikliniği',
    address: 'İskele Mah., Ahmet Taner Kışlalı Cad. No. 52/4', phone: '+90 536 728 48 00',
    coordinates: [36.731806, 27.684806], source: 'https://i-klinik.com/iletisim/',
  },
  ...pharmacies,
];

export const taxiSlug = 'datca-taksi-duraklari';
export const healthSlug = 'datca-saglik-rehberi';
export function placesForGuide(slug: string) {
  if (slug === taxiSlug) return places.filter(place => place.group === 'taxi');
  if (slug === healthSlug) return places.filter(place => place.group !== 'taxi');
  return [];
}

export const directoryGuides: Guide[] = [
  {
    slug: taxiSlug, groups: ['transport'], photo: 'datca-liman',
    source: { label: 'Taksibul · Datça', url: taxi + 'datca' },
    tr: copy('Datça taksi durakları', 'Merkez, Eski Datça, Palamutbükü ve Aktur’daki taksi duraklarını haritada bul. Durağı arayabilir veya bulunduğun yerden yol tarifi alabilirsin.',
      ['Taksi çağırırken', 'Araca bineceğin mahalleyi ve buluşma noktasını söyle. Palamutbükü ile Aktur yarımadanın farklı uçlarında. Dönüş için araç istiyorsan saati durakla ayrıca kararlaştır.']),
    en: copy('Taxi ranks in Datça', 'Find taxi ranks in the town centre, Eski Datça, Palamutbükü and Aktur on the map. Call a rank or get directions from your location.',
      ['Calling a taxi', 'Give the rank your neighbourhood and pickup point. Palamutbükü and Aktur are on different sides of the peninsula. Agree on a pickup time if you need a return ride.']),
    ru: copy('Стоянки такси в Датче', 'Найдите на карте стоянки в центре, Эски-Датче, Паламутбюкю и Актуре. Можно позвонить диспетчеру или построить маршрут.',
      ['Как вызвать такси', 'Назовите район и точное место встречи. Паламутбюкю и Актур находятся в разных частях полуострова. Если нужна обратная поездка, заранее согласуйте время подачи.']),
  },
  {
    slug: healthSlug, groups: ['health'], photo: 'datca-merkez',
    source: { label: 'Muğla İl Sağlık Müdürlüğü', url: asm },
    tr: copy('Datça’da hastane, klinik ve eczane haritası', 'Devlet Hastanesi poliklinikleri, dört aile sağlığı merkezi, özel klinikler ve eczaneler için telefon, adres ve yol tarifi. Bugünün nöbetçi eczanesini haritada bul.',
      ['Randevu ve başvuru', 'Devlet Hastanesi için MHRS’de Datça’yı ve ilgili branşı seç. Aile sağlığı merkezini ararken kayıtlı olduğun birimi belirt. Özel kliniklere kendi telefonlarından ulaşabilirsin.']),
    en: copy('Map of the hospital, clinics and pharmacies in Datça', 'Phone numbers, street addresses and directions for the state hospital’s outpatient departments, four family health centres, private practices and pharmacies, including today’s duty pharmacy.',
      ['Appointments', 'For the state hospital, select Datça and the specialty in MHRS. When calling a family health centre, give your unit number if you are registered. Contact private clinics directly.']),
    ru: copy('Больница, клиники и аптеки на карте Датчи', 'Телефоны, адреса и маршруты до амбулаторных отделений государственной больницы, четырёх центров семейной медицины, частных клиник и аптек. На карте отмечена дежурная аптека.',
      ['Запись на приём', 'Для записи в государственную больницу выберите Датчу и специальность в MHRS. При звонке в центр семейной медицины укажите свой участок, если вы прикреплены. В частную клинику можно позвонить напрямую.']),
  },
];
