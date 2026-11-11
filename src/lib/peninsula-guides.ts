import { copy, type Guide } from './guides'

const carian = { label: 'Karia Yolu · Datça Yarımadası', url: 'https://kariayolu.com/datca-yarimadasi/' }
const localProduce = { label: 'Muğla İl Kültür ve Turizm Müdürlüğü', url: 'https://mugla.ktb.gov.tr/TR-296377/neyi-meshur.html' }

export const peninsulaGuides: Guide[] = [
  {
    slug: 'sindi-koyu-kooperatifi', groups: ['places', 'food'], photo: 'mesudiye',
    source: { label: 'BÜKOOP · Sındı Köyü Tarımsal Kalkınma Kooperatifi', url: 'https://bukoop.org/uretici-urun/sindi-koyu/' },
    tr: copy('Sındı’da köy kooperatifi ve yerel ürünler', 'Çiğ badem, badem ezmesi, zeytin ve çam balı aynı köyden çıkar. Sındı’da bir alışveriş molası, bademi yetiştirenlerle tanışmak için de fırsattır.'),
    en: copy('Sındı village: the produce of a cooperative', 'Follow a village supply chain that connects almonds with table olives, pine honey and almond paste.',
      ['From grower to consumer', 'The Boğaziçi consumer cooperative lists what it receives from Sındı. Alongside raw sıra almonds are almond sweets, honey and carob almond paste, olive oil and green olives. The range gives a sense of what the village produces beyond a single harvest.'],
      ['Planning a shopping stop', 'Ask whether a sales point in the village will be open before making a special trip. Buy small quantities to compare the same nut raw, sugar-coated and ground with honey. Look for the producer on the label.']),
    ru: copy('Деревня Сынды: продукты местного кооператива', 'Знакомство с хозяйствами Сынды начинается с миндаля и продолжается оливками, сосновым мёдом и ореховой пастой.',
      ['От производителя к покупателю', 'Потребительский кооператив Босфорского университета перечисляет продукцию, которую получает из Сынды: сырой миндаль сорта sıra, миндальные сладости, пасту с мёдом и кэробом, оливковое масло и зелёные оливки. Это даёт представление о разных занятиях одной деревни.'],
      ['Если планируете покупки', 'Заранее спросите, будет ли открыта местная точка продажи. Для сравнения возьмите небольшие порции сырого миндаля, драже и пасты с мёдом. Обратите внимание на имя производителя на этикетке.'])
  },
  {
    slug: 'cumali-badem-bahceleri', groups: ['places', 'nature', 'food'], photo: 'mesudiye',
    source: { label: 'Muğla İl Tarım ve Orman Müdürlüğü', url: 'https://mugla.tarimorman.gov.tr/Haber/95/Datca-Ilcesinde-Badem-Konulu-Ciftci-Egitimi' },
    tr: copy('Cumalı’nın badem bahçeleri', 'Çiçek zamanında yolu süsleyen ağaçlar, yılın geri kalanında köylülerin çalıştığı bahçelerdir. Cumalı’da ne göreceğini ziyaret ettiğin mevsim belirler.'),
    en: copy('Cumalı: the almond orchards of western Datça', 'See Cumalı as part of an agricultural area shared with Yazı, Yaka and Sındı.',
      ['From blossom to harvest', 'The provincial agriculture office identifies Cumalı among the peninsula’s main almond-growing neighbourhoods. Growers meet to discuss orchard establishment, pruning and care. The flowering slopes are working farms throughout the year.'],
      ['Viewing an orchard', 'A walk along a public village road can be enough to appreciate the rows of trees. Ask the grower in advance if you hope to enter an orchard or observe harvesting. A blossom visit and a harvest visit belong to different seasons.']),
    ru: copy('Джумалы: миндальные сады западной Датчи', 'Джумалы, Язы, Яка и Сынды составляют один из главных районов выращивания миндаля на полуострове.',
      ['От цветения до урожая', 'Областное управление сельского хозяйства относит Джумалы к основным миндальным хозяйствам Датчи. Здесь производители обсуждают закладку садов и уход за деревьями. Цветущие склоны остаются рабочими сельхозугодьями и в остальное время года.'],
      ['Посещение сада', 'Ряды деревьев можно увидеть с общественной деревенской дороги. Чтобы войти в сад или посмотреть сбор урожая, заранее договоритесь с хозяином. Цветение и сбор происходят в разное время.'])
  },
  {
    slug: 'yaka-kumyer-palamutbuku', groups: ['places', 'history'], photo: 'palamutbuku',
    source: {label: 'Nida Naycı · TÜBA-KED', url: 'https://dergipark.org.tr/tr/pub/tubaked/article/810061'},
    tr: copy('Yaka ve Kumyer’den Palamutbükü kıyısına', 'Palamutbükü adresinde Yaka yazsa da köy merkezi denizden içeridedir. Yaka, Kumyer ve sahili art arda gezmek bu üç yerin birbirine nasıl bağlandığını gösterir.'),
    en: copy('Yaka, Kumyer and Palamutbükü: village to shore', 'One neighbourhood name can point to an inland village address or to a place down by the water.',
      ['Reading the settlement', 'Architect Nida Naycı’s study of rural Datça and Bozburun describes Yakaköy through its central settlement, Kumyer to the south and coastal Palamutbükü. Locate the village core, agricultural land and shore separately on the map before exploring.'],
      ['Finding an exact address', 'A Yaka address on a room listing does not tell you the door is on the beach. Ask for a specific landmark such as the village centre, Kumyer or the harbour when arranging a pickup or deciding where to walk.']),
    ru: copy('Яка, Кумьер и Паламутбюкю: от деревни к морю', 'Одно название района на западе Датчи может указывать как на деревню в глубине суши, так и на побережье.',
      ['Как устроено поселение', 'Архитектор Нида Найджи в исследовании Датчи и Бозбуруна описывает Якакёй через центральную деревню, расположенный южнее Кумьер и прибрежный Паламутбюкю. Найдите отдельно деревенское ядро, сельхозугодья и берег.'],
      ['Уточняйте ориентир', 'Адрес с названием Yaka сам по себе не означает, что жильё находится у пляжа. Для встречи с водителем уточните точку: центр деревни, Кумьер или гавань. Это поможет и при выборе пешего маршрута.'])
  },
  {
    slug: 'karakoy-kormen-koy-yolu', groups: ['places', 'transport', 'nature'], photo: 'kormen', source: carian,
    tr: copy('Körmen İskelesi’nden Karaköy’e', 'Bodrum’dan gelen feribot Körmen’de yanaşır. Kuzey kıyısındaki iskeleden Karaköy’e veya Datça merkeze devam ederken yürüyüş etabıyla araç yolunu ayrı düşünmek gerekir.'),
    en: copy('Karaköy and Körmen: from the ferry to the village road', 'Distinguish the port, the inland village and the walking stage on Datça’s north coast.',
      ['Two names on the map', 'The Carian Trail identifies Körmen as the ferry landing and Karaköy as the village inland. When arranging a lift, specify whether you are meeting beside the ship or on the village road. The neighbourhood name alone can leave this unclear.'],
      ['Connecting to the trail', 'The route lists Mersincik–Karaköy followed by Karaköy–Datça. For a walk on a ferry day, choose a stretch with a clear return point and work backwards from your boarding deadline.']),
    ru: copy('Каракёй и Кёрмен: от парома к деревне', 'На северном берегу различайте паромную пристань, саму деревню и начало пешеходного этапа.',
      ['Два названия', 'На сайте Карийской тропы Кёрменом называют паромную пристань, а Каракёем — деревню дальше от берега. Для встречи уточните, ждёте ли вы у судна или на деревенской дороге.'],
      ['Выход на тропу', 'За участком Мерсинджик — Каракёй следует этап Каракёй — Датча. Если паром уходит в тот же день, выберите короткий отрезок с понятной точкой разворота и отсчитайте время от окончания посадки.'])
  },
  {
    slug: 'hizirsah-ipek-dokuma', groups: ['places', 'history', 'tours'], photo: 'mesudiye',
    source: {label: 'Özemek İpek Dokuma · Hızırşah', url: 'https://www.datcaipek.com/hizirsah'},
    tr: copy('Hızırşah’ın eski okulunda ipek dokuma', 'Hızırşah’ın eski okul binasında bu kez ders sıralarının yerini dokuma tezgâhları alıyor. Atölyeye uğramadan önce tezgâh başındaki çalışmayı ne zaman görebileceğini öğrenebilirsin.'),
    en: copy('Silk weaving in the old school at Hızırşah', 'Walk from the village square to a workshop where a rural school building has found a new use.',
      ['A loom in an old classroom', 'Özemek describes how the two-classroom stone school became a silk workshop. Arrange a visit directly with the weaver if seeing the loom in operation matters to you. Ask for directions from the village square.'],
      ['Looking at the cloth', 'Ask which stages are done by hand, how the thread is coloured and how a finished piece should be washed. A visit, a hands-on lesson and shopping can require different arrangements.']),
    ru: copy('Шёлковое ткачество в старой школе Хызыршаха', 'От деревенской площади пройдите к мастерской, где школьные классы получили новое назначение.',
      ['Станок в бывшем классе', 'Мастерская Özemek рассказывает, как каменная школа с двумя классами стала ткацкой мастерской. Если хотите увидеть работу станка, договоритесь о времени с мастером. Уточните путь от площади.'],
      ['Как рассматривать ткань', 'Спросите, какие этапы выполняются вручную, чем окрашивают нить и как ухаживать за изделием. Посещение мастерской, практический урок и покупка могут требовать отдельных договорённостей.'])
  },
  {
    slug: 'hacetevi-tepesi', groups: ['nature', 'history', 'tours'], photo: 'mesudiye',
    source: {label: 'Güney Ege · Hacetevi Tepesi', url: 'https://www.guneyegeturkiye.com/assets/user_files/DatcaKulturRotasi/HaceteviTepesi.pdf'},
    tr: copy('Hacetevi Tepesi: Hızırşah’tan iki yürüyüş yolu', 'Eski tarım teraslarının arasında yükselen tepede hem bir yürüyüş parkuru hem de yerel bir ziyaret geleneği var.',
      ['Parkuru seç', 'Kültür rotası belgesi, 356 metrelik tepe için köy meydanından ve Eski Cami tarafından iki yaklaşım tarif ediyor. Yaklaşık 2,7 ve 2,2 kilometrelik bu yolları birleştirirsen toplam mesafeye dönüş bağlantını da ekle. Haritayı önceden indir, güncel işaretleri köyde teyit et.'],
      ['Tepedeki ziyaret yeri', 'Hacetevi adı zirvedeki taşlık ziyaret yerinden geliyor. Yerel anlatılarda burası rüyaya yatma geleneğiyle anılır. Alanı gezerken taşları yerinde bırak, tarım teraslarının üzerinden kestirme yapmadan patikayı kullan.']),
    en: copy('Hacetevi Hill: two routes above Hızırşah', 'Ancient field terraces surround a hilltop with both a walking route and a local tradition of dream seeking.',
      ['Choose an approach', 'The cultural route leaflet describes two approaches to the 356-metre summit, one from the village square and the other near the old mosque. The paths run roughly 2.7 and 2.2 kilometres. Add your return connection, download the map and check the present waymarking locally.'],
      ['The hilltop site', 'The stone site on the summit gives Hacetevi its name. Local accounts associate it with seeking guidance through dreams. Leave the stones undisturbed and follow the path around the field terraces.']),
    ru: copy('Холм Хаджетеви: два пути от Хызыршаха', 'Над старыми земледельческими террасами проходит тропа к месту, связанному с местной традицией сновидений.',
      ['Подход к вершине', 'В описании культурного маршрута указаны два пути к вершине высотой 356 метров: от площади и со стороны старой мечети. Длины примерно 2,7 и 2,2 километра. Учтите обратную дорогу, скачайте карту и уточните состояние указателей в деревне.'],
      ['На вершине', 'Каменистое почитаемое место дало холму название. В местных преданиях люди приходили сюда за ответом во сне. Оставляйте камни на месте и не срезайте путь через террасы.'])
  },
  {
    slug: 'mehmet-ali-aga-konagi', groups: ['history', 'places'], photo: 'eski-datca',
    source: {label: 'Saruhan Mimarlık · Mehmet Ali Ağa Konağı', url: 'https://saruhanmimarlik.com.tr/tr/portfolio/mehmet-ali-aga-konagi/'},
    tr: copy('Reşadiye’de Mehmet Ali Ağa Konağı', 'Konağın taş alt katı, ahşap üst katı ve başodasındaki kalem işleri Reşadiye’nin geçmişine açılır. Yapının ayrıntılarını restorasyon kayıtlarında da görebilirsin.'),
    en: copy('Mehmet Ali Ağa Mansion: reading a house in Reşadiye', 'Use the restoration team’s images to compare the stone ground floor with the timber upper storey.',
      ['How the house was built', 'The restoration architects date the mansion to the 1820s. Slit openings punctuate the masonry base, while an open hall and timber construction define the upper floor. A private bath gives another clue to daily life in a large household.'],
      ['Look for the painted decoration', 'Inspect the painted work in the principal room in the restoration photographs. Confirm visitor access and photography arrangements before making an interior visit. The project images also offer a way to compare details remotely.']),
    ru: copy('Особняк Мехмет Али Ага: архитектура Решадие', 'По фотографиям реставраторов сравните каменное основание дома с деревянным верхним этажом.',
      ['Устройство дома', 'Архитекторы реставрации относят особняк к 1820-м годам. В каменном нижнем этаже видны узкие проёмы, наверху — деревянные конструкции и открытая софа. Собственная баня рассказывает о быте большого дома.'],
      ['Роспись главной комнаты', 'Рассмотрите расписной декор по фотографиям реставрации. Если хотите попасть внутрь, заранее проверьте, принимают ли посетителей и можно ли фотографировать. Детали можно сопоставить и по материалам проекта.'])
  },
  {
    slug: 'resadiye-antik-seramik-atolyeleri', groups: ['history'], photo: 'mesudiye',
    source: {label: 'ODTÜ TAÇDAM', url: 'https://tacdam.metu.edu.tr/en/datcaresadiye-knidos-ceramic-workshops-excavation'},
    tr: copy('Reşadiye’de antik seramik atölyelerinin izleri', 'Knidos’un ticaretini limandan başka bir yerde, amforaların üretildiği Reşadiye çevresinde düşün.',
      ['Toprağın altından çıkan işlik', 'ODTÜ’nün araştırma kayıtlarına göre Reşadiye yakınındaki işliklerde amfora ve gündelik kaplar yapılıyordu. Kazılarda büyük fırınlar, suyla ilgili hazneler ve üretim atıkları birlikte bulundu. Bu izler, tek bir bitmiş kaptan daha fazlasını, bir üretim sürecini gösterir.'],
      ['Geziyi araştırmayla tamamla', 'Kurtarma kazılarının sonuçlarını gezi öncesi proje sayfasından okuyabilirsin. Atölyelerin bulunduğu alanla turistik bir günümüz seramik stüdyosunu karıştırma. Yerinde erişim hakkında turizm danışmadan güncel bilgi al.']),
    en: copy('The ancient pottery workshops near Reşadiye', 'Explore the commercial history of Knidos from the production side, where transport jars were made.',
      ['A workshop in the ground', 'METU’s project records amphorae and everyday coarse ware made near Reşadiye. Excavations uncovered large kilns, water tanks and production waste together. These traces reveal a manufacturing process beyond the finished pot.'],
      ['Reading before the visit', 'The rescue excavation report is available on the project page. These are archaeological production sites, distinct from a contemporary pottery studio. Ask the tourism office about any present access.']),
    ru: copy('Античные гончарные мастерские близ Решадие', 'Познакомьтесь с торговлей Книда со стороны производства — там, где изготавливали транспортные амфоры.',
      ['Следы мастерских', 'По данным проекта METU, близ Решадие делали амфоры и обычную хозяйственную посуду. Археологи нашли печи, ёмкости для воды и отходы производства. Вместе эти находки показывают последовательность работы гончаров.'],
      ['До поездки', 'Материалы спасательных раскопок опубликованы на странице проекта. Речь об археологическом участке, а не о современной художественной мастерской. Уточните в туристическом бюро, есть ли доступ на месте.'])
  },
  {
    slug: 'mersincik-kuzey-kiyisi', groups: ['nature', 'places'], photo: 'datca-koylari', source: carian,
    tr: copy('Karia Yolu’nda Mersincik Koyu', 'Mersincik, Datça’nın Gökova’ya bakan kıyısında iki yürüyüş etabının birleştiği yer. Buraya giden yolculuğun süresini haritadaki düz çizgiden çok arazi belirler.'),
    en: copy('Mersincik: planning a north-coast stage', 'Treat Mersincik as a junction of walking stages on the remote shore of the peninsula.',
      ['Between two stages', 'As the Carian Trail turns east from the western tip, its itinerary lists Knidos–Mersincik followed by Mersincik–Karaköy. Decide how long you can walk and how you will leave the finish before marking the bay as a destination.'],
      ['Preparing for the north side', 'There are few settlements along this coast. Confirm water, pickup and accommodation arrangements in advance. Download the individual stage tracks and agree which one your party will follow.']),
    ru: copy('Мерсинджик: маршрут по северному побережью', 'Рассматривайте Мерсинджик как точку соединения двух пешеходных этапов в малонаселённой части полуострова.',
      ['Между этапами', 'Когда Карийская тропа поворачивает от западной оконечности к востоку, идут участки Книд — Мерсинджик и Мерсинджик — Каракёй. До выбора конечной точки решите, сколько сможете идти и как уехать после финиша.'],
      ['Подготовка', 'На северном берегу мало поселений. Договоритесь о запасе воды, встрече и ночлеге заранее. Скачайте треки участков отдельно и согласуйте выбранный маршрут со спутниками.'])
  },
  {
    slug: 'deveboynu-feneri', groups: ['history', 'nature', 'sea'], photo: 'knidos',
    source: {label: 'Kıyı Emniyeti Genel Müdürlüğü', url: 'https://www.kiyiemniyeti.gov.tr/yer-detay/404/DEVEBOYNU-FENERI'},
    tr: copy('Deveboynu Feneri: Knidos’un ucundaki ışık', 'Knidos kıyısına bakarken antik limanların ötesindeki fenerin gemilere neden bu kadar yüksekten seslendiğini gör.',
      ['Kule ve burun', 'Kıyı Emniyeti’nin kaydına göre fener 1931’de kuruldu. Dokuz metrelik kâgir kulesi denizden 104 metre yukarıdadır. Manzaradaki etkisini anlamak için kulenin boyuyla burnun doğal yüksekliğini ayrı düşün.'],
      ['Karadan veya denizden bakış', 'Fener ve bekçi binası korunan yapılardır. Araziye çıkmayı planlıyorsan güncel geçiş iznini ve dönüş yolunu yerinde sor. Tekneden bakarken körfezdeki modern seyir işaretini kıyıdaki antik yapı kalıntılarından ayırt edebilirsin.']),
    en: copy('Deveboynu Lighthouse beyond Knidos', 'Look beyond the ancient harbours to the light standing high above the last headland.',
      ['Tower and cape', 'The coastal safety authority dates the lighthouse to 1931. Its nine-metre masonry tower stands 104 metres above sea level. Distinguish the height of the structure from the height of the cape to understand its place in the view.'],
      ['Seeing the light', 'The tower and keeper’s house are protected structures. Check current access and a return route before approaching by land. From the water, distinguish the modern navigation light from the lower archaeological remains along the shore.']),
    ru: copy('Маяк Девебойну за гаванями Книда', 'За античным портом виден маяк, возвышающийся над последним мысом полуострова.',
      ['Высота мыса и башни', 'Служба береговой безопасности датирует маяк 1931 годом. Каменная башня высотой девять метров стоит на отметке 104 метра над морем. Её заметность во многом объясняется высотой самого мыса.'],
      ['Как посмотреть', 'Башня и дом смотрителя находятся под охраной. Для пешего подхода уточните нынешний доступ и обратный маршрут. С моря хорошо различаются современный навигационный знак наверху и античные руины ниже у воды.'])
  },
  {
    slug: 'datca-hurmasi', groups: ['nature'], photo: 'datca-koylari', source: localProduce,
    tr: copy('Datça hurması: yarımadanın doğal palmiye toplulukları', 'Doğu Datça’nın vadi ve dere yataklarında yetişen hurmaları yarımadanın bitki örtüsü içinde tanı.',
      ['Nerede yetişir?', 'İl turizm müdürlüğü Eksera Vadisi ile Lindos ve Bozan burunları arasındaki vadileri Datça hurmasının görüldüğü alanlar arasında sayar. Ağaçların belirli dere yataklarında toplanması, yarımadayı yalnızca kıyı şeridinden ibaret görmemek için iyi bir neden.'],
      ['Bitki gözlemi', 'Hurmaları gözlemlemek için bir yerel rehberle kamuya açık bir güzergâh seç. Yaprak veya meyve toplamadan, dar dere yatağına inmeden uzaktan gözlem yapabilirsin. Fotoğrafta ağacın çevresindeki araziyi de göstermek yaşam ortamını anlatır.']),
    en: copy('Datça’s wild palms and their habitat', 'Look inland to the eastern valleys and stream beds to understand the peninsula’s palms.',
      ['Where palms grow', 'The provincial tourism office identifies the Eksera Valley and valleys between the Lindos and Bozan headlands among the palm habitats. Their concentration along particular watercourses highlights a landscape beyond the shore.'],
      ['Observing them', 'Choose a public route with a local guide. View the palms without collecting leaves or fruit or descending into narrow stream beds. Including the surrounding terrain in a photograph helps to show the habitat.']),
    ru: copy('Дикие пальмы Датчи и их среда', 'Посмотрите на долины и русла восточной части полуострова, чтобы понять, где растут местные пальмы.',
      ['Где искать', 'Управление туризма называет долину Эксера и долины между мысами Линдос и Бозан. Скопления пальм вдоль отдельных русел показывают другую сторону ландшафта Датчи, помимо морского берега.'],
      ['Наблюдение', 'Выберите с местным проводником доступный для посетителей путь. Наблюдайте с расстояния, не собирая листья и плоды и не спускаясь в узкое русло. Снимок дерева вместе со склоном поможет показать его среду обитания.'])
  },
  {
    slug: 'datca-bozburun-deniz-koruma', groups: ['nature', 'sea'], photo: 'datca-koylari',
    source: {label: 'Akdeniz Koruma Derneği', url: 'https://akdenizkoruma.org.tr/tr/calismalarimiz/projeler/b/datca-bozburun-ozel-cevre-koruma-bolgesi-ekosistem-restorasyonu-icin-denizel-ve-kulturel-korumanin-butunlestirilmesi-projesi'},
    tr: copy('Datça-Bozburun: deniz koruma alanını tanı', 'Yüzdüğün koyun altında nelerin izlendiğini öğren ve tekne gününü korunan kıyıya göre planla.',
      ['Suyun altında izlenen yaşam', 'Akdeniz Koruma Derneği bölgedeki çalışmasında deniz çayırlarını, makroalgleri, balık topluluklarını ve su sıcaklığını izliyor. Su altında gördüğün her bitki aynı değil. Maskeyle bakarken dipteki örtüyü sökmeden ve canlıları eline almadan da farklılıkları fark edebilirsin.'],
      ['Koy seçerken', 'Koruma bölgesi içinde balıkçılığa kapalı alanlar gibi farklı statüler bulunur. Kaptandan o gün izleyeceği rotayı ve bağlanma düzenini anlatmasını iste. Bir koyun yüzmeye uygun olması orada her etkinliğin serbest olduğu anlamına gelmez.']),
    en: copy('Datça–Bozburun: understanding the protected sea', 'See what is monitored below the surface and plan boat outings around the protected coast.',
      ['Life below the water', 'The Mediterranean Conservation Society’s local project monitors seagrass, macroalgae, fish communities and water temperature. When looking through a mask, observe differences in the seabed cover without disturbing plants or picking up wildlife.'],
      ['Choosing a stop', 'Areas with different designations, including fishing closures, exist within the wider protected area. Ask the skipper about the day’s route and mooring arrangements, and check the rules for a particular activity at your stop.']),
    ru: copy('Датча — Бозбурун: охраняемое морское побережье', 'Узнайте, что изучают под водой и как учитывать охрану побережья в морской прогулке.',
      ['Под поверхностью', 'В проекте Средиземноморской природоохранной организации следят за морскими травами, крупными водорослями, рыбными сообществами и температурой воды. В маске можно рассмотреть различия донного покрова, не трогая растения и животных.'],
      ['Выбор стоянки', 'Внутри общей охраняемой территории действуют разные режимы, включая участки с ограничением рыболовства. Уточните у капитана маршрут и порядок швартовки и проверьте правила для запланированного занятия.'])
  },
  {
    slug: 'kizlan-osmanli-batigi', groups: ['history', 'sea'], photo: 'kizlan',
    source: {label: 'Dokuz Eylül Üniversitesi · Deniz Bilimleri ve Teknolojisi Enstitüsü', url: 'https://imst.deu.edu.tr/tr/news/mavi-miras-projesi-duyurusu-22-09-2024/'},
    tr: copy('Kızlan Osmanlı Batığı: porselenler ne anlatıyor?', 'Kızlan açıklarında bulunan bir geminin yükü, Datça kıyısını Osmanlı denizcilik tarihine bağlar.',
      ['Paketiyle bulunan porselen', 'Dokuz Eylül Üniversitesi kazı ekibi 2024’te gemide paketli Çin porselenleri bulduğunu açıkladı. Bir tabağa tek başına bakmakla, taşınmaya hazırlanmış bir grup kabı görmek farklı sorular doğuruyor. Ambalaj ve kapların bir arada bulunması, yükün gemideki durumunu düşünmeye imkân veriyor.'],
      ['Kazı duyurusu nasıl okunur?', 'Çalışma üniversitenin deniz bilimleri enstitüsü ve sualtı kültür mirası araştırma merkezi tarafından yürütüldü. Ekip hangi buluntuları kayda geçmiş, hangilerinin anlamını henüz tartışıyor? Duyuruyu bu ayrımla okuyup Kızlan’ı denizden gelip geçen insanların tarihiyle birlikte düşünebilirsin.']),
    en: copy('The Kızlan Ottoman wreck: what can porcelain tell us?', 'Cargo from a wreck off Kızlan adds an Ottoman maritime chapter to the history of the Datça coast.',
      ['Porcelain found in its packing', 'In 2024 the Dokuz Eylül University excavation team reported finding packed Chinese porcelain on the wreck. A single dish prompts different questions from a group of vessels prepared for transport. The packing and vessels together give researchers evidence about their condition on board.'],
      ['Reading the excavation report', 'The university’s marine sciences institute and underwater heritage research centre conducted the work. When reading their announcement, distinguish reported objects from the questions they raise about the voyage. It is a way to see Kızlan through the people and goods that once passed offshore.']),
    ru: copy('Османское судно у Кызлана: о чём говорит фарфор', 'Груз затонувшего у Кызлана корабля открывает османскую главу в морской истории Датчи.',
      ['Фарфор в упаковке', 'В 2024 году археологи Университета Докуз Эйлюль сообщили о китайском фарфоре, найденном на судне в упаковке. Один сосуд и целая партия, подготовленная для перевозки, ставят разные вопросы. Положение посуды вместе с упаковкой помогает понять, как груз лежал на борту.'],
      ['Как читать сообщение археологов', 'Работы проводили институт морских наук университета и исследовательский центр подводного наследия. В отчёте полезно различать описание найденных предметов и вопросы о назначении рейса. Так можно увидеть Кызлан через историю проходивших у берега кораблей.'])
  },
  {
    slug: 'murdala-koyu', groups: ['beaches', 'nature', 'sea'], photo: 'datca-koylari',
    source: {label: 'Muğla İl Kültür ve Turizm Müdürlüğü', url: 'https://mugla.ktb.gov.tr/TR-296372/nereye-gidilir.html'},
    tr: copy('Gökova kıyısında Murdala Koyu', 'Yarımadanın kuzeyinde, Gökova’ya açılan Murdala’ya Cumalı tarafından yaklaşılır. Güney kıyısındaki bir pansiyondan yola çıkarken dönüş güzergâhını da planlamak gerekir.'),
    en: copy('Murdala Bay on the Gulf of Gökova', 'Plan a day on the peninsula’s northern side separately from the bays facing south.',
      ['Place the bay on the map', 'The provincial tourism office lists Murdala with Mersincik and İskandil among Datça’s Aegean-facing bays. If staying near Palamutbükü, the straight-line distance across the peninsula is a poor guide to travel time. Check the actual route in and out.'],
      ['By sea or by land', 'A boat itinerary advertised as Gökova can cover many bays. Ask the skipper if Murdala is on the day’s route. By land, check the current approach locally in Cumalı, pack food and water ahead of time and allow daylight for your return.']),
    ru: copy('Мурдала: бухта с видом на залив Гёкова', 'Планируйте поездку к северному побережью отдельно от маршрута по южным бухтам полуострова.',
      ['Место на карте', 'Управление туризма относит Мурдалу, Мерсинджик и Искандиль к бухтам Датчи, обращённым к Эгейскому морю. Если вы живёте у Паламутбюкю, расстояние по прямой через полуостров мало говорит о времени в пути. Посмотрите дорогу в обе стороны.'],
      ['С берега или с воды', 'Название «Гёкова» в описании морской экскурсии может относиться к разным бухтам. Уточните, входит ли Мурдала в маршрут в этот день. При поездке по суше узнайте о состоянии подъезда в Джумалы, возьмите воду и еду и оставьте светлое время на возвращение.'])
  },
  {
    slug: 'knidos-aslani', groups: ['history'], photo: 'knidos',
    source: {label: 'British Museum · Google Arts & Culture', url: 'https://artsandculture.google.com/asset/colossal-marble-lion-from-a-tomb-monument/lAEXXvILbPZ3LQ?hl=en'},
    tr: copy('Knidos Aslanı: bir mezar anıtını çevrimiçi okumak', 'Londra’daki mermer aslanı müzenin dijital kaydından inceleyerek Knidos kıyısındaki özgün bağlamını hayal et.',
      ['Denize bakan bir anıt', 'British Museum’un anlatımına göre tek parça mermerden yontulan aslan bir mezar anıtının tepesindeydi. Kare planlı yapının iç odası yuvarlaktı. Heykeli tek başına bir kaide üzerinde değil, kıyıdaki yüksek anıtın parçası olarak düşününce ölçeği daha iyi anlaşılıyor.'],
      ['Hangi ayrıntıya bakılır?', 'Dijital görüntüde boş göz çukurlarını incele. Müze buralarda renkli cam bulunmuş olabileceğini belirtiyor. Yapım tarihine ilişkin farklı öneriler var; kayıttaki yorumları kesin tarihlerden ayırarak oku.']),
    en: copy('The Lion of Knidos: reading a funerary monument online', 'Study the London museum object record and reconstruct the coastal setting of the original marble lion.',
      ['A monument above the sea', 'The British Museum describes a lion carved from one piece of marble, crowning a square tomb monument with a circular chamber. Picture the statue high above the coast to understand the scale of the sculpture in its original setting.'],
      ['Look at the eyes', 'Zoom in on the empty eye sockets. The museum suggests they may once have contained coloured glass. Several dates have been proposed for the monument, so distinguish the catalogue’s interpretations from established observations.']),
    ru: copy('Книдский лев: как читать памятник по музейной карточке', 'Рассмотрите лондонский экспонат онлайн и представьте, где мраморный лев находился на побережье Книда.',
      ['Памятник над морем', 'Британский музей описывает льва из цельного куска мрамора на вершине квадратной гробницы с круглой внутренней камерой. Представьте фигуру высоко над берегом, чтобы понять её масштаб в первоначальном окружении.'],
      ['Глаза и датировка', 'На цифровом изображении рассмотрите пустые глазницы. Музей предполагает, что в них могли находиться цветные стеклянные вставки. Для памятника предложено несколько датировок; отделяйте трактовки от наблюдаемых деталей.'])
  },
  {
    slug: 'datca-bali', groups: ['food'], photo: 'kizlan', source: localProduce,
    tr: copy('Datça balı: kekik, çam ve badem çiçeği', 'Pazar tezgâhında aynı renk kavanozların ardında farklı üretim mevsimleri ve bitkiler bulabilirsin.',
      ['Etiketteki bitki', 'İl turizm müdürlüğü Datça’da kekik, çam, harnup ve çiçek balını sayar. Badem çiçeği balı da yarımadanın bahar ürünleri arasında yer alır. Kavanozun ön yüzündeki adın yanında hasat dönemini ve üretici bilgisini de oku.'],
      ['Bir tadım karşılaştırması', 'Üretici tadım sunuyorsa birbirinden farklı iki küçük örnek iste. Aromalarına bakıp çayla, yoğurtla veya kahvaltıda nasıl kullanmak istediğine karar ver. Ürünü dönüş yolunda taşıyacaksan kapağın sızdırmazlığını ve paketlemeyi kontrol et.']),
    en: copy('Datça honey: thyme, pine and almond blossom', 'Different flowers, trees and seasons can stand behind similar-looking jars at a market stall.',
      ['Read the plant name', 'The provincial tourism office lists thyme, pine, carob and blossom honeys from Datça, along with spring almond blossom honey. Check the harvest period and producer information as well as the prominent variety name on the label.'],
      ['Compare a tasting', 'If a producer offers samples, compare two different honeys in small quantities. Decide which aroma you want with tea, yoghurt or breakfast. For the return journey, check the seal and pack the jar separately.']),
    ru: copy('Мёд Датчи: тимьян, сосна и цветущий миндаль', 'За похожими банками на рынке могут стоять разные растения и сезоны сбора.',
      ['Название на этикетке', 'Управление туризма называет тимьяновый, сосновый, рожковый и цветочный мёд Датчи, а также весенний мёд с цветков миндаля. Кроме названия сорта посмотрите период сбора и сведения о производителе.'],
      ['Сравнение вкусов', 'Если хозяин предлагает дегустацию, сравните небольшие порции двух сортов. Выберите аромат для чая, йогурта или завтрака. Перед дорогой проверьте крышку и заверните банку отдельно.'])
  },
  {
    slug: 'datca-mentese-aktarmasi', groups: ['transport', 'plans'], photo: 'datca-merkez',
    source: {label: 'MUTTAŞ · Datça–Menteşe', url: 'https://ulasim.muttas.com.tr/hat/48-15-datca-mentese-416'},
    tr: copy('Menteşe üzerinden Datça’ya otobüs bağlantısı', 'Muğla il merkezinde şehirlerarası yolculuğu bitirip Datça’ya bölgesel otobüsle geçecekler için.',
      ['48-15 hattını bul', 'MUTTAŞ’ın 48-15 sayfasında Datça ve Menteşe yönleri, hareket saatleri ve duraklar gösterilir. Datça’ya gelişte Menteşe kalkışını seç. Önceki biletindeki varış terminaliyle yerel otobüsün biniş durağını haritadan ayrı kontrol et.'],
      ['Aktarma payı', 'Bölgesel hat yarımadaya karadan ulaşır. Gecikmiş bir şehirlerarası otobüse dayanarak günün son hattına kesin bağlantı varsayma. Menteşe’ye inmeden iki sefer arasındaki beklemeyi ve Datça’da köye son ulaşımı birlikte hesapla.']),
    en: copy('Reaching Datça via Menteşe bus connections', 'Connect a long-distance journey ending in Muğla’s central district with a regional bus to the peninsula.',
      ['Find route 48-15', 'The MUTTAŞ route page shows the two directions, departure times and stops for Datça–Menteşe. Select Menteşe departures when travelling towards Datça. Check the exact arrival terminal on your first ticket against the regional bus boarding stop.'],
      ['Allow for a change', 'The regional bus reaches the peninsula by road. A delayed coach can leave little time for the final service. Before arriving in Menteşe, work out both the wait between buses and the final connection to your village in Datça.']),
    ru: copy('Как доехать в Датчу с пересадкой в Ментеше', 'Соедините междугороднюю поездку до центра провинции Мугла с региональным рейсом на полуостров.',
      ['Линия 48-15', 'На странице MUTTAŞ для датчинско-ментешинской линии указаны направления, отправления и остановки. Для поездки в Датчу выберите отправление из Ментеше. Сопоставьте терминал прибытия в вашем билете с местом посадки на региональный автобус.'],
      ['Запас на пересадку', 'Автобус идёт на полуостров по суше. Опоздавший междугородний рейс может не успеть к последнему отправлению. Заранее рассчитайте пересадку в Ментеше и последнюю поездку из Датчи к деревне.'])
  },
  {
    slug: 'can-yucel-datca', groups: ['history', 'places'], photo: 'eski-datca',
    source: {label: 'Dayanışma Datça · Can Yücel', url: 'https://www.dayanisma-datca.org/datca-can-yucel-icin-tek-yurek-olacak'},
    tr: copy('Can Yücel’in Datça’sında bir edebiyat yürüyüşü', 'Eski Datça’daki evi, adını taşıyan sokak ve anıt mezarı şairin Datça yıllarını hatırlatır. Anma etkinlikleri düzenlendiğinde bu duraklara şiir dinletileri de eklenir.'),
    en: copy('Can Yücel’s Datça: poetry and remembrance', 'Trace the poet’s local presence through street names, readings and the town’s commemorations.',
      ['From the lane to a poem', 'After visiting the Eski Datça street named for Can Yücel, find a quiet place to read a poem. A literary walk can explore the poet’s surroundings while respecting the privacy of the house and its neighbours.'],
      ['Attending a commemoration', 'A Datça programme paired a ceremony at his memorial grave with a reading at the cultural centre in Hızırşah. For a future commemoration, find a notice for the relevant year and note the time and address of each part separately.']),
    ru: copy('Датча Джана Юджеля: поэзия и памятные места', 'Познакомьтесь с присутствием поэта в жизни города через названия улиц, чтения и памятные встречи.',
      ['Прогулка с книгой', 'После улицы Джана Юджеля в Старой Датче найдите тихое место, чтобы прочитать стихотворение. Окружение поэта можно увидеть и с общественной улицы, уважая частную жизнь дома и соседей.'],
      ['Памятные встречи', 'В одной из программ Датчи церемония у мемориальной могилы сопровождалась чтениями в культурном центре Хызыршаха. Для будущего события найдите объявление нужного года и отдельно сохраните адрес и время каждой части.'])
  }
]
