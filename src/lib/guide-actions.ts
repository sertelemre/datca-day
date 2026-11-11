import type { Locale } from './paths';
import { places } from './place-directory';

type Text = readonly [string, string, string];
export const actionText = (value: Text, locale: Locale) => value[{ tr: 0, en: 1, ru: 2 }[locale]];

const links = {
  teaTopUp: ['https://www.google.com/maps/search/?api=1&query=DURAK%20%C3%87AYOCAGI%20%C4%B0SKELE%20MAH%20ATAT%C3%9CRK%20CAD.%20NO%3A84%20Dat%C3%A7a%20Mu%C4%9Fla', ['Durak Çayocağı · No. 84', 'Durak Çayocağı · No. 84', 'Durak Çayocağı · № 84']],
  nutTopUp: ['https://www.google.com/maps/search/?api=1&query=%C3%87EREZ%20DERYASI%20%C4%B0SKELE%20MAH%20ATAT%C3%9CRK%20CAD.9%2FB%20Dat%C3%A7a%20Mu%C4%9Fla', ['Çerez Deryası · No. 9/B', 'Çerez Deryası · No. 9/B', 'Çerez Deryası · № 9/B']],
  weaving: ['/hizirsah-ipek-dokuma', ['Hızırşah dokuma atölyesi', 'Hızırşah weaving workshop', 'Ткацкая мастерская в Хызыршахе']],
  ingredients: ['/datca-pazari', ['Datça semt pazarı', 'Datça market', 'Рынок Датчи']],
  health: ['/datca-saglik-rehberi?konum=devlet-hastanesi#konum-haritasi', ['Hastaneyi haritada göster', 'Show hospital on map', 'Больница на карте']],
  dental: ['/datca-saglik-rehberi#private', ['Özel diş klinikleri', 'Private dental clinics', 'Стоматологические клиники']],
  appointment: ['https://www.mhrs.gov.tr/', ['MHRS’den randevu al', 'Book through MHRS', 'Запись через MHRS']],
  hours: ['https://datcadh.saglik.gov.tr/TR-222552/poliklinik-calisma-saatleri.html', ['Resmî poliklinik saatleri', 'Official clinic hours', 'Часы работы поликлиник']],
  pharmacy: ['/datca-nobetci-eczane', ['Nöbetçi eczane', 'Duty pharmacy', 'Дежурная аптека']],
  transport: ['/ulasim', ['Otobüs hatları ve saatleri', 'Bus routes and timetables', 'Маршруты и расписания автобусов']],
  taxi: ['/datca-taksi-duraklari', ['Taksi duraklarını ara', 'Call a taxi rank', 'Телефоны стоянок такси']],
  stays: ['/datcada-nerede-kalinir#konaklama-rehberi', ['Konaklama haritası ve telefonlar', 'Accommodation map and contacts', 'Жильё на карте и телефоны']],
  events: ['/etkinlikler', ['Datça etkinlik takvimi', 'Datça events calendar', 'Афиша Датчи']],
  seaForecast: ['https://pirireis.mgm.gov.tr/tahmin-raporlari/ucgunluk-tahmin', ['MGM’nin deniz tahmini', 'Marine weather forecast', 'Прогноз погоды на море']],
  weather: ['/datca-hava-durumu', ['Datça hava tahmini', 'Datça weather forecast', 'Прогноз погоды в Датче']],
  walk: ['https://kariayolu.com/datca-yarimadasi/', ['Karia Yolu etapları', 'Carian Trail stages', 'Этапы Карийской тропы']],
  menu: ['/datcada-ne-yenir', ['Datça mutfağı ve yemek bütçesi', 'Local dishes and food budget', 'Местная кухня и бюджет на еду']],
  boats: ['/datca-tekne-turu', ['Tekne turları ve işletmeler', 'Boat trips and operators', 'Морские экскурсии и операторы']],
  bodrumPier: ['https://goo.gl/maps/6min5ecLYUxaf7Xa6', ['Bodrum’daki biniş iskelesi', 'Boarding pier in Bodrum', 'Паромный причал в Бодруме']],
  gerence: ['/akvaryum-koyu', ['Gerence’ye kıyıdan ulaşım', 'Reach Gerence from the shore', 'Как добраться до бухты Герендже по суше']],
  museum: ['/knidos-antik-kenti', ['Knidos ziyaret rehberi', 'Visiting Knidos', 'Как посетить Книд']],
} as const satisfies Record<string, readonly [string, Text]>;
export const guideLinks = links;

interface Actions {
  place?: string;
  coordinates?: string;
  address?: string;
  phone?: string;
  routes?: string[];
  links?: (keyof typeof links)[];
  sourceLabel?: Text;
  practical?: boolean;
}

const hospital = places.find(place => place.id === 'devlet-hastanesi')!;
const hospitalContact = { practical: true, address: hospital.address + ', Datça/Muğla', coordinates: hospital.coordinates.join(','), phone: hospital.phone };
const booking: Text = ['İşletme ve rezervasyon', 'Operator and bookings', 'Организатор и бронирование'];
const eventProgram: Text = ['Organizatörün programı', 'Organiser’s programme', 'Программа организатора'];
const venue: Text = ['Mekân ve etkinlikler', 'Venue and events', 'Площадка и мероприятия'];
const consultation: Text = ['İşletmenin iletişim bilgileri', 'Operator contact details', 'Контакты организации'];
const activity: Text = ['Etkinlik ve katılım bilgileri', 'Activity and participation details', 'Условия участия'];
const marina = 'Kairos Marina, Karaköy, Datça';
const entries: Record<string, Actions> = {
  'datca-devlet-hastanesi': { ...hospitalContact, links: ['appointment','health','pharmacy'], routes: ['datca-eski-datca-resadiye-9-1','cumhuriyet-meydani-hizirsah-9-11'] },
  'datcada-dis-sagligi': { ...hospitalContact, links: ['appointment','dental'], sourceLabel: ['Hastanenin diş birimi','Hospital dental department','Стоматология при больнице'] },
  'datca-otogari': { practical: true, place: 'Datça Otogarı', address: 'İskele Mah., Belediye Otogarı No. 6, Datça/Muğla', coordinates: '36.732386,27.682044', links: ['transport','taxi'], sourceLabel: ['Otobüs firmasının durak bilgisi','Coach operator’s stop details','Остановка на сайте перевозчика'] },
  'datca-mugla-kart': { practical: true, links: ['teaTopUp','nutTopUp','transport'], sourceLabel: ['Muğla Kart dolum noktaları','Find a Muğla Kart top-up point','Пункты пополнения Muğla Kart'] },
  'kormen-yat-limani': { practical: true, place: marina, address: 'Karaköy Mah., Karaköy Sok. No. 577, Datça/Muğla', phone: '+90 252 727 12 77', routes: ['datca-karakoy-9-8'], sourceLabel: consultation },
  'datcada-balik-restoranlari': { practical: true, place: 'İstiridye Restaurant, Kumluk, Datça', address:'İskele Mah., Kumluk Plajı No. 12, Datça/Muğla', phone: '+90 530 922 55 15', sourceLabel:['İstiridye Restaurant','İstiridye Restaurant','Ресторан İstiridye'] },
  'datca-halk-lokantasi': { practical: true, place:'Datça Belediyesi Halk Lokantası, Köy Garajı, Datça', address:'Köy Garajı, İskele Mahallesi, Datça/Muğla', sourceLabel:['Belediyenin lokanta duyurusu','Municipality’s restaurant notice','Информация муниципалитета о столовой'] },
  'datcada-kahvalti': { practical: true, place:'Ömer Usta Datça', address:'İskele Mah., Atatürk Cad. No. 86/A, Datça/Muğla', phone:'+90 546 484 22 38', sourceLabel:['Ömer Usta’nın menüsü ve iletişim bilgileri','Ömer Usta menu and contact details','Меню и контакты Ömer Usta'] },
  'datca-baglari': { practical: true, place:'Datça Vineyard, Datça', address:'Değirmenaltı mevkii, Datça–Marmaris yolu 7. km, Datça', phone:'+90 533 671 99 68', sourceLabel:['Datça Vineyard','Datça Vineyard','Винодельня Datça Vineyard'] },
  'datca-acikhava-tiyatrosu': { practical: true, place:'Datça Açıkhava Tiyatrosu', address:'İskele Mah., Atatürk Cad. No. 108, Datça/Muğla', sourceLabel:venue, links:['events'] },
  'datcada-film-gosterimleri': { practical: true, links:['events'], sourceLabel:['Belediyenin etkinlik duyuruları','Municipal event notices','Анонсы муниципалитета'] },
  'aktur-datca-kamp': { practical: true, place:'Aktur Datça Camping, Emecik, Datça', phone:'+90 252 724 61 68', routes:['datca-aktur-9-4'], sourceLabel:booking },
  'datca-hava-ve-ruzgar': { practical: true, links:['weather','seaForecast'], sourceLabel:['MGM’nin Datça tahmini','Official Datça forecast','Официальный прогноз для Датчи'] },
  'datca-turu-acente-sorgulama': { practical: true, sourceLabel:['TÜRSAB acente sorgulama','Search the TÜRSAB agency register','Проверить агентство в TÜRSAB'] },
  'arabasiz-datca': { practical: true, links:['transport','taxi'] },
  'bodrum-datca-feribotu': { practical: true, place:marina, links:['bodrumPier'], routes:['bodrum-datca-48-48','datca-karakoy-9-8'] },
  'dalamandan-datcaya-ulasim': { practical: true, routes:['marmaris-dalaman-havas','marmaris-otogar-dalaman-havalimani-48-26','datca-marmaris-48-16'] },
  'datca-mentese-aktarmasi': { practical: true, routes:['datca-mentese-48-15'], links:['transport'] },
  'datcada-erisilebilir-tatil': { links:['transport','stays'], routes:['bodrum-datca-48-48'] },
  'datcada-apart-ve-pansiyon': { links:['stays'] }, 'datca-otellerinde-pansiyon-tipleri': { links:['stays'] },
  'datca-kamp-rehberi': { place:'Kovanlık Tabiat Parkı, Datça', links:['stays'], sourceLabel:['Kovanlık Tabiat Parkı’nın ziyaret koşulları','Kovanlık Nature Park visitor information','Условия посещения природного парка Кованлык'] },
  'eski-datca': { place:'Can Yücel Sokak, Eski Datça', routes:['datca-eski-datca-resadiye-9-1'] },
  'palamutbuku': { place:'Palamutbükü Plajı, Datça', routes:['datca-palamutbuku-9-5'] },
  'ovabuku': { place:'Ovabükü Plajı, Mesudiye, Datça', routes:['datca-mesudiye-9-3'] },
  'hayitbuku': { place:'Hayıtbükü Plajı, Mesudiye, Datça', routes:['datca-mesudiye-9-3'] },
  'knidos-antik-kenti': { place:'Knidos Örenyeri, Yazıköy, Datça', sourceLabel:['Müze giriş bilgileri','Official admission details','Условия посещения музея'] },
  'kargi-koyu': { place:'Kargı Koyu, Datça', routes:['ozbel-kargi-9-2'] },
  'kizlan-yel-degirmenleri': { place:'Kızlan Yel Değirmenleri, Datça', routes:['datca-kizlan-9-9'] },
  'datca-limani': { place:'Datça Limanı, İskele, Datça' }, 'datca-tekne-turu': { place:'Datça Limanı, İskele, Datça' },
  'karya-yolu': { links:['walk'] }, 'datcada-uc-gun': { links:['transport','weather'] },
  'cocuklarla-datca': { links:['transport','weather'] }, 'sezon-disinda-datca': { links:['events','weather'] },
  'taslik-plaji': { place:'Taşlık Plajı, İskele, Datça' }, 'kumluk-plaji': { place:'Kumluk Plajı, İskele, Datça' },
  'karaincir-koyu': { place:'Karaincir Plajı, Emecik, Datça', routes:['datca-karaincir-9-4'] },
  'akvaryum-koyu': { place:'Palamutbükü Akvaryum Plajı, Datça' }, 'kurubuk': { place:'Kurubük, Datça' },
  'resadiye': { place:'Reşadiye Mahallesi, Datça', routes:['datca-eski-datca-resadiye-9-1'] },
  'hizirsah-kultur-evi': { place:'Hızırşah Kültür Evi, Datça', routes:['cumhuriyet-meydani-hizirsah-9-11'] },
  'mesudiye': { place:'Mesudiye, Datça', routes:['datca-mesudiye-9-3'] },
  'yazikoy': { place:'Yazıköy, Datça' }, 'gebekum': { place:'Gebekum, Kızlan, Datça' },
  'datca-pazari': { place:'Datça Cumartesi Pazarı, İskele, Datça' },
  'palamutbukunden-knidos-tekne-turu': { place:'Palamutbükü Limanı, Datça', sourceLabel:booking },
  'datcada-ruzgar-sorfu': { links:['weather'] }, 'datcada-kano-sup': { sourceLabel:activity },
  'datcada-bisiklet': { sourceLabel:['DADADOSK kulübü','DADADOSK cycling club','Велоклуб DADADOSK'] },
  'domuzbuku': { links:['boats'] }, 'datcada-mavi-yolculuk': { links:['boats'] },
  'datcada-dalis': { sourceLabel:consultation }, 'bencik-koyu': { place:'Bencik Koyu, Datça Yarımadası' },
  'kizilbuk': { place:'Kızılbük, Mesudiye, Datça' }, 'datcada-snorkelle-yuzme': { sourceLabel:booking, links:['gerence'] },
  'datcada-kabinli-tekne-kiralama': { sourceLabel:booking }, 'datcada-kitesurf': { sourceLabel:activity },
  'datca-cocuk-yelken-kampi': { sourceLabel:activity }, 'hizirsahta-kaya-tirmanisi': { sourceLabel:consultation },
  'datca-karia-tiyatro-zamani': { practical:true, sourceLabel:eventProgram, links:['events'] },
  'datca-demokrasi-evi-sergileri': { practical:true, place:'Datça Belediyesi Demokrasi Evi', links:['events'] },
  'datca-cocuk-ve-oyun-senligi': { practical:true, links:['events'] },
  'datca-badem-cicegi-festivali': { practical:true, sourceLabel:eventProgram, links:['events'] },
  'datca-kis-yuzme-maratonu': { practical:true, sourceLabel:eventProgram, links:['events'] },
  'kesifrun-datca-10k': { practical:true, sourceLabel:['Federasyonun yarış kaydı','Federation’s race listing','Карточка забега на сайте федерации'], links:['events'] },
  'datca-geri-donusum-atolyesi': { practical:true, sourceLabel:['Belediyenin atölye duyurusu','Municipal workshop notice','Объявление муниципалитета о мастерской'], links:['events'] },
  'sindi-koyu-kooperatifi': { place:'Sındı Köyü Tarımsal Kalkınma Kooperatifi, Datça', sourceLabel:['Kooperatifin ürünleri','Cooperative products','Продукция кооператива'] },
  'yaka-kumyer-palamutbuku': { place:'Kumyer, Yaka, Datça', routes:['datca-palamutbuku-9-5'] },
  'karakoy-kormen-koy-yolu': { place:marina, routes:['datca-karakoy-9-8'], links:['walk'] },
  'hizirsah-ipek-dokuma': { place:'Hızırşah İpek Dokuma Atölyesi, Datça', sourceLabel:['Atölye ziyareti için randevu','Arrange a workshop visit','Запись на посещение мастерской'] },
  'hacetevi-tepesi': { sourceLabel:['Kültür rotası haritası (PDF)','Cultural route map (PDF)','Карта культурного маршрута (PDF)'] },
  'mehmet-ali-aga-konagi': { place:'Mehmet Ali Ağa Konağı, Reşadiye, Datça' },
  'mersincik-kuzey-kiyisi': { links:['walk'] }, 'deveboynu-feneri': { sourceLabel:['Kıyı Emniyeti fener kaydı','Official lighthouse record','Официальная карточка маяка'] },
  'murdala-koyu': { place:'Murdala Koyu, Cumalı, Datça' },
  'knidos-aslani': { sourceLabel:['Knidos Aslanı’nı incele','View the Lion of Knidos','Рассмотреть Книдского льва'], links:['museum'] },
  'datca-kilimleri-ve-nazarliklari': { links:['weaving'] },
  'datca-yoresel-ev-yemekleri': { links:['menu','ingredients'] },
  'datca-bademli-incir-ve-damat-tatlisi': { links:['ingredients'] },
  'datca-bademi': { links:['ingredients'] }, 'datca-bali': { links:['ingredients'] },
  'resadiye-antik-seramik-atolyeleri': { sourceLabel:['ODTÜ kazı araştırması','METU excavation research','Исследование раскопок в METU'] },
  'datca-bozburun-deniz-koruma': { sourceLabel:['Deniz koruma çalışmaları','Marine conservation work','Проект охраны моря'] },
  'kizlan-osmanli-batigi': { sourceLabel:['DEÜ araştırma duyurusu','University research notice','Сообщение университета об исследовании'] },
  'can-yucel-datca': { place:'Can Yücel Sokak, Eski Datça', links:['events'] },
};
export const actionsForGuide = (slug: string): Actions | undefined => entries[slug];
