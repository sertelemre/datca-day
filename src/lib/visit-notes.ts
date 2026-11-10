type Locale = 'tr' | 'en' | 'ru'

interface VisitNote {
  stops: string[]
  faqs: { question: string; answer: string }[]
}

export const visitNotes: Record<string, Record<Locale, VisitNote>> = {
  'eski-datca': {
    tr: {
      stops: [
        'Mahallenin girişinden taş döşeli sokaklara yürü. Rota uzarsa kolayca dönebilmek için geldiğin durağı haritada işaretle.',
        'Can Yücel Sokağı’na sap. Şairin yaşadığı evin çevresini, komşuların kapılarını açık bırakarak sokaktan gör.',
        'Bir yan sokaktan geri dön. Eski taş evlerden birinin avlusunda kahve molası ver veya açık bir el sanatları dükkânına uğra.',
      ],
      faqs: [
        { question: 'Eski Datça’ya merkezden hangi otobüs gider?', answer: 'MUTTAŞ’ın 9-1 Datça–Eski Datça–Reşadiye hattına bak. Giderken dönüş durağının adını da kaydet.' },
        { question: 'Buradan yürüyüşün sonunda denize girilir mi?', answer: 'Eski Datça içeride kalır. Aynı güne yüzme eklemek için merkezdeki Taşlık veya Kumluk’a ulaşım planla.' },
      ],
    },
    en: {
      stops: [
        'Start at the entrance to the neighbourhood and follow the stone-paved lanes. Mark your arrival stop on the map for the way back.',
        'Turn into Can Yücel Street. View the surroundings of the poet’s house from the lane, keeping the neighbours’ doorways clear.',
        'Return by a side street and stop for coffee in a courtyard or look inside an open craft shop.',
      ],
      faqs: [
        { question: 'Which bus runs here from town?', answer: 'Look up MUTTAŞ route 9-1, Datça–Eski Datça–Reşadiye. Save the name of the return stop as well.' },
        { question: 'Can I end the walk with a swim?', answer: 'The old village sits inland. Plan a separate ride to Taşlık or Kumluk beach in central Datça.' },
      ],
    },
    ru: {
      stops: [
        'У входа в старый квартал сверните на мощёные улочки. Отметьте на карте свою остановку для обратной дороги.',
        'Пройдите по улице Джана Юджеля мимо дома, где жил поэт. Оставляйте свободным проход к соседним дворам.',
        'Вернитесь по боковому переулку. Загляните в открытую ремесленную лавку или остановитесь на кофе во дворе каменного дома.',
      ],
      faqs: [
        { question: 'Какой автобус идёт из центра?', answer: 'Посмотрите линию MUTTAŞ 9-1, Datça–Eski Datça–Reşadiye. Запишите также название остановки для обратной поездки.' },
        { question: 'Можно ли искупаться в конце прогулки?', answer: 'Старая Датча находится вдали от воды. Запланируйте отдельную поездку к пляжу Ташлык или Кумлук в центре.' },
      ],
    },
  },
  'knidos-antik-kenti': {
    tr: {
      stops: [
        'Ören yerinin girişinde plandan büyük ve küçük limanları bul. İki su alanı arasındaki dar kara şeridinin kenti nasıl böldüğüne bak.',
        'Açık ziyaret güzergâhını küçük tiyatroya kadar izle. Buradan denizle oturma sıraları arasındaki ilişkiyi görebilirsin.',
        'Dionysos Terası yönünde devam et. Liman Caddesi’ne uzanan stoanın yerini girişte gördüğün planla karşılaştır.',
      ],
      faqs: [
        { question: 'Knidos’taki büyük ve küçük tiyatro aynı yapı mı?', answer: 'İki ayrı yapı. Büyük limanın kuzeyindeki küçük tiyatro, kıyı yürüyüşüne eklenebilecek duraktır. Açık alanları girişte kontrol et.' },
        { question: 'Gün batımı için son giriş saatini nasıl öğrenirim?', answer: 'Knidos’un resmî müze sayfasında o günkü gişe ve kapanış saatlerine bak. Son girişi esas alarak virajlı yol için zaman bırak.' },
      ],
    },
    en: {
      stops: [
        'At the entrance, locate the large and small harbours on the site plan. Look at the narrow strip of land between them.',
        'Follow the open visitor route to the small theatre and look from its seating towards the water.',
        'Continue towards the Terrace of Dionysos. Use the plan to trace the line of the stoa leading to Harbour Street.',
      ],
      faqs: [
        { question: 'Are the large and small theatres the same building?', answer: 'They are separate structures. The small theatre stands north of the large harbour and fits a waterfront visit. Check which areas are open at the entrance.' },
        { question: 'How late can I enter for a sunset visit?', answer: 'Check the date-specific ticket-office and closing times on the official Knidos museum page. Work backwards from last admission for the winding drive.' },
      ],
    },
    ru: {
      stops: [
        'У входа найдите на плане большую и малую гавани. Посмотрите на узкую полосу суши, разделяющую их.',
        'По открытому для посетителей маршруту дойдите до малого театра и взгляните от зрительских рядов в сторону воды.',
        'Продолжите к террасе Диониса. По плану проследите, как портик тянулся к Портовой улице.',
      ],
      faqs: [
        { question: 'Большой и малый театры — это одно сооружение?', answer: 'Это два разных сооружения. Малый театр находится к северу от большой гавани. У входа уточните, какие участки доступны.' },
        { question: 'До какого времени можно войти ради заката?', answer: 'Сверьтесь с часами работы кассы и закрытия на официальной странице Книда. При расчёте времени учитывайте последний вход и извилистую дорогу.' },
      ],
    },
  },
  palamutbuku: {
    tr: {
      stops: [
        'Balıkçı barınağından başla. Kıyıya bağlı küçük tekneleri izleyip plajın uzandığı yöne dön.',
        'Sahil boyunca ilerle. Kum ve çakılın karıştığı kıyıda, suya rahat girebileceğin bölümü yürüyerek seç.',
        'Yürüyüşü sahildeki lokantalardan birinde bitir. Balık seçiyorsan siparişi vermeden tartılmış fiyatı sor.',
      ],
      faqs: [
        { question: 'Palamutbükü plajı tamamen kum mu?', answer: 'Kum ve çakıl karışıktır. Havlunu sermeden önce kıyının birkaç bölümüne bak. Deniz ayakkabısı çakıllı girişlerde işe yarar.' },
        { question: 'Merkezden hangi seferi seçmeliyim?', answer: 'MUTTAŞ’ta 9-5 hattının Palamutbükü yönünü aç. Aynı numarada Belen’e devam eden seferler de listelenebildiği için duraklarını ve dönüş saatini karşılaştır.' },
      ],
    },
    en: {
      stops: [
        'Start by the fishing harbour. Watch the smaller boats at their berths, then turn towards the long beach.',
        'Follow the waterfront and compare stretches of sand and shingle before choosing your place to swim.',
        'Finish at a restaurant along the shore. If buying fish by weight, ask for the total after weighing and before ordering.',
      ],
      faqs: [
        { question: 'Is the whole beach sandy?', answer: 'The shore mixes sand and shingle. Walk a short way before settling down. Water shoes can help at a pebbly entry.' },
        { question: 'Which service should I look for from town?', answer: 'Find the Palamutbükü direction on MUTTAŞ route 9-5. Some services continue to Belen, so check the stops and return departure for your date.' },
      ],
    },
    ru: {
      stops: [
        'Начните у рыбацкой гавани. Посмотрите на небольшие лодки и поверните в сторону длинного пляжа.',
        'Идите вдоль воды и сравните песчаные и галечные участки, прежде чем выбрать место для купания.',
        'Закончите прогулку в прибрежном ресторане. Заказывая рыбу на вес, попросите назвать общую цену после взвешивания.',
      ],
      faqs: [
        { question: 'Весь пляж песчаный?', answer: 'Берег состоит из песка и гальки. Осмотрите несколько участков. На галечном входе в воду пригодится обувь для купания.' },
        { question: 'Какой рейс искать из центра?', answer: 'Посмотрите направление Palamutbükü линии MUTTAŞ 9-5. Часть рейсов продолжается до Белена, поэтому сравните остановки и обратное расписание.' },
      ],
    },
  },
  hayitbuku: {
    tr: {
      stops: [
        'Hayıtbükü’nde sahile in ve önce koyun kavisini kıyıdan izle. Havlu bırakacağın yeri dönmeden önce seç.',
        'Kumlu plajda bir yüzme molası ver. Gölgeli bir öğle arası için sahil boyunca açık bir yer bul.',
        'İkinci bir koy görmek istersen komşu Kızılbük’e geç. Dönüş için Mesudiye hattındaki durağını önceden belirle.',
      ],
      faqs: [
        { question: 'Bir pansiyonun Mesudiye adresi Hayıtbükü’nde olduğu anlamına gelir mi?', answer: 'Mesudiye, Hayıtbükü’nün yanında Ovabükü ve Kızılbük’ü de kapsar. Rezervasyonda pansiyonun konumunu haritada iste.' },
        { question: 'Merkezden plaja otobüsle gidebilir miyim?', answer: 'MUTTAŞ 9-3 Datça–Mesudiye güzergâhında Hayıtbükü adı geçer. Seyahat gününde bu güzergâha ait gidiş ve dönüş seferlerini aç.' },
      ],
    },
    en: {
      stops: [
        'Reach the waterfront at Hayıtbükü and follow the curve of the bay before picking a place for your towel.',
        'Stop for a swim at the sandy beach, then choose an open waterfront spot with shade for lunch.',
        'For a second bay, continue to nearby Kızılbük. Identify your return stop on the Mesudiye route before moving on.',
      ],
      faqs: [
        { question: 'Does a Mesudiye address put my guesthouse in Hayıtbükü?', answer: 'Mesudiye also includes Ovabükü and Kızılbük. Ask the guesthouse for its exact map location before booking.' },
        { question: 'Can I reach the bay by bus from town?', answer: 'MUTTAŞ route 9-3 Datça–Mesudiye lists Hayıtbükü. Select the service for that route and check both directions for your date.' },
      ],
    },
    ru: {
      stops: [
        'Спуститесь к воде в Хаытбюкю, пройдитесь по дуге берега и выберите место для полотенца.',
        'Искупайтесь у песчаного пляжа. Для обеда найдите открытое заведение с тенью на берегу.',
        'Если хотите увидеть вторую бухту, отправляйтесь в соседний Кызылбюк. Заранее отметьте остановку обратного рейса через Месудие.',
      ],
      faqs: [
        { question: 'Адрес в Месудие означает, что пансион находится в Хаытбюкю?', answer: 'К Месудие также относятся Овабюкю и Кызылбюк. Попросите точку жилья на карте до бронирования.' },
        { question: 'Ходит ли сюда автобус из центра?', answer: 'Хаытбюкю указан в маршруте MUTTAŞ 9-3 Datça–Mesudiye. Откройте расписание этого рейса туда и обратно на день поездки.' },
      ],
    },
  },
  ovabuku: {
    tr: {
      stops: [
        'Ovabükü sahiline çıktığında geri dönmek istediğin noktayı işaretle. Mesudiye’nin uzun plajı kıyı yürüyüşüne elverişli.',
        'Su çizgisini takip ederek plajın farklı bir bölümüne yürü. Deniz molanı burada ver ve geldiğin yöne kıyıdan bak.',
        'Başlangıç noktasına sahil boyunca dön. Bir çay veya öğle yemeğinden sonra dönüş durağına geç.',
      ],
      faqs: [
        { question: 'Uzun bir sahil yürüyüşü için Hayıtbükü mü Ovabükü mü?', answer: 'Ovabükü, Mesudiye’nin en geniş koyudur ve Datça’nın uzun plajlarından birine sahiptir. Kıyıda yürümek için günün daha büyük kısmını burada ayırabilirsin.' },
        { question: 'Otobüste hangi güzergâha bakmalıyım?', answer: 'MUTTAŞ 9-3 Datça–Mesudiye hattında Ovabükü durağını ara. Aynı numaranın farklı son durakları olabildiğinden Hızırşah’ta biten seferle karıştırma.' },
      ],
    },
    en: {
      stops: [
        'On reaching Ovabükü beach, mark where you want to return. The long waterfront makes a good base for a shore walk.',
        'Follow the waterline to another stretch of beach, stop for a dip and look back along the curve you have walked.',
        'Retrace the shore to your starting point. Stop for tea or lunch before heading to the return bus stop.',
      ],
      faqs: [
        { question: 'Hayıtbükü or Ovabükü for a long beach walk?', answer: 'Ovabükü is the largest of the Mesudiye bays and has one of Datça’s longer beaches. Give it the longer walking slot.' },
        { question: 'Which bus route should I check?', answer: 'Look for Ovabükü on MUTTAŞ 9-3 Datça–Mesudiye. The same number also appears on services ending in Hızırşah, so check the destination.' },
      ],
    },
    ru: {
      stops: [
        'На выходе к пляжу Овабюкю отметьте точку возвращения. Длинный берег подходит для прогулки вдоль воды.',
        'Пройдите по кромке воды в другую часть пляжа, искупайтесь и посмотрите назад на пройденную дугу берега.',
        'Вернитесь вдоль берега к началу. Выпейте чаю или пообедайте перед дорогой на обратную остановку.',
      ],
      faqs: [
        { question: 'Где длиннее прогулка у воды: в Хаытбюкю или Овабюкю?', answer: 'Овабюкю — крупнейшая бухта Месудие с одним из длинных пляжей Датчи. Для продолжительной прогулки лучше выделить время здесь.' },
        { question: 'Какую линию искать?', answer: 'Найдите Овабюкю среди остановок MUTTAŞ 9-3 Datça–Mesudiye. Под этим номером есть рейсы до Хызыршаха, поэтому проверяйте конечную.' },
      ],
    },
  },
  'kargi-koyu': {
    tr: {
      stops: [
        'Merkezdeki Cumhuriyet Meydanı çevresinden Kargı yönüne geç. Otobüs kullanıyorsan Özbel–Kargı hattını kontrol et.',
        'Koyun taşlı kıyısı boyunca kısa bir yürüyüş yap. Denize giriş yerini ve yüzmeden çıkacağın noktayı kıyıdan seç.',
        'Sahildeki bir kafede mola ver. Geri dönmeden önce durak yönünü kontrol edip Datça merkezde günü tamamla.',
      ],
      faqs: [
        { question: 'Kargı Koyu’nda deniz ayakkabısı gerekli mi?', answer: 'Kıyı ve deniz tabanı taşlıdır. Taş üzerinde yürümeyi rahat bulmuyorsan deniz ayakkabısı götür.' },
        { question: 'Kargı’ya yarım gün ayırmak yeter mi?', answer: 'Koy merkeze yaklaşık üç kilometredir. Tek bir yüzme molası ve kıyı gezisi için yarım gün planlamak mümkün. Dönüş seferini önceden kontrol et.' },
      ],
    },
    en: {
      stops: [
        'Start around Cumhuriyet Square in town and head towards Kargı. If taking the bus, check the Özbel–Kargı route.',
        'Walk along the stony shore of the bay and choose where you want to enter and leave the water.',
        'Pause at a café by the shore. Check the direction of your return stop and finish the day back in town.',
      ],
      faqs: [
        { question: 'Do I need water shoes at Kargı?', answer: 'The shore and seabed are stony. Bring water shoes if walking over stones is uncomfortable for you.' },
        { question: 'Is half a day enough?', answer: 'The bay is about three kilometres from the centre. A half day can accommodate a swim and short shore walk. Check your return bus in advance.' },
      ],
    },
    ru: {
      stops: [
        'От района площади Джумхуриет в центре направляйтесь к Каргы. Для поездки автобусом проверьте линию Özbel–Kargı.',
        'Пройдитесь по каменистому берегу и выберите удобные места для входа в воду и возвращения на сушу.',
        'Остановитесь в кафе у берега. Уточните направление обратной остановки и завершите день в центре Датчи.',
      ],
      faqs: [
        { question: 'Нужна ли обувь для купания?', answer: 'В Каргы каменистые берег и дно. Возьмите обувь для воды, если вам неудобно ходить по камням.' },
        { question: 'Достаточно ли половины дня?', answer: 'Бухта находится примерно в трёх километрах от центра. Полдня подойдёт для купания и короткой прогулки. Заранее проверьте обратный автобус.' },
      ],
    },
  },
  'kizlan-yel-degirmenleri': {
    tr: {
      stops: [
        'Değirmenleri önce biraz uzaktan seyret. Yapıları yamaç ve açık arazinin içinde aynı kareye alabileceğin, yoldan uzak bir nokta seç.',
        'Kızlan yerleşimine geç. Köy içinde kısa bir yürüyüş ve mola için aracını burada bırakabilir veya dönüş durağını bulabilirsin.',
        'Araçla geziyorsan günü Kızlan sınırlarındaki Gebekum kıyısıyla birleştir. Fosil kumulları açık geçişlerden izle.',
      ],
      faqs: [
        { question: 'Kızlan otobüsü beni değirmenlerin kapısında mı bırakır?', answer: '9-9 hattının köy duraklarına bak. Değirmenlerin haritadaki konumuyla durağı karşılaştırıp aradaki yürüyüşü ayrıca planla.' },
        { question: 'Değirmenlerin içine girmek gerekiyor mu?', answer: 'Yapıları ve yerleşim düzenini dışarıdan görmek için gezi planlayabilirsin. İç mekân için açık olacağını varsaymadan önce erişimi yerinde sor.' },
      ],
    },
    en: {
      stops: [
        'View the windmills first from a little way back. Choose a position clear of the road to include the hillside and open landscape.',
        'Continue into Kızlan village for a short walk and a break. Locate the stop for your return if travelling by bus.',
        'With onward transport, add the Gebekum shore in the Kızlan area. Observe the fossil dunes from established access routes.',
      ],
      faqs: [
        { question: 'Does the village bus drop me at the windmills?', answer: 'Check the village stops on route 9-9. Compare the stop on a map with the position of the mills and plan the walk between them.' },
        { question: 'Do I need to go inside the windmills?', answer: 'You can see their shapes and their setting from outside. If you want to enter a building, ask about current access locally.' },
      ],
    },
    ru: {
      stops: [
        'Сначала посмотрите на мельницы издали. Встаньте в стороне от проезжей части, чтобы в кадр попали и склон, и открытая местность.',
        'Продолжите в деревню Кызлан для короткой прогулки и отдыха. Если вы на автобусе, найдите остановку для возвращения.',
        'При наличии транспорта добавьте побережье Гебекум в районе Кызлана. Осматривайте древние дюны с существующих проходов.',
      ],
      faqs: [
        { question: 'Автобус привозит прямо к мельницам?', answer: 'Посмотрите деревенские остановки линии 9-9. Сравните на карте остановку с положением мельниц и отдельно наметьте пеший участок.' },
        { question: 'Обязательно ли заходить внутрь?', answer: 'Форму мельниц и их расположение хорошо видно снаружи. Для входа в здание отдельно уточните, доступно ли оно в день поездки.' },
      ],
    },
  },
  'datca-limani': {
    tr: {
      stops: [
        'Kumluk kıyısından başlayıp İskele’deki yat limanına yürü. Sahilin şehirle buluştuğu bu bölümde tekneleri kıyıdan izle.',
        'Limandan Taşlık yönüne dön. Sevgi Yolu’nda bir mola verip deniz tarafındaki plaja geç.',
        'Ilıca Gölü’ne uğra. Kısa bir yürüyüşte hem tuzlu deniz kıyısını hem de tatlı su gölünü görmüş olursun.',
      ],
      faqs: [
        { question: 'Bodrum feribotu bu limandan mı kalkıyor?', answer: 'Bodrum feribotunun Datça tarafındaki limanı Karaköy’deki Körmen’dir. Biletteki terminali kullan ve merkezden oraya ayrı ulaşım planla.' },
        { question: 'Tekne turu için limanda nerede buluşulur?', answer: 'İşletmeden tekne adını ve harita konumunu iste. Kumluk, merkezdeki yat limanı ve Palamutbükü farklı buluşma yerleridir.' },
      ],
    },
    en: {
      stops: [
        'Start on Kumluk shore and walk to the yacht harbour in İskele. Watch the boats where the waterfront meets the town.',
        'Turn towards Taşlık. Pause along Sevgi Yolu and walk down to the beach on the seaward side.',
        'Finish at Lake Ilıca. In one short walk you will have seen both the saltwater shore and a freshwater lake.',
      ],
      faqs: [
        { question: 'Does the Bodrum ferry leave from this harbour?', answer: 'The Datça terminal for the Bodrum ferry is Körmen in Karaköy. Use the terminal on your ticket and plan the separate ride from town.' },
        { question: 'Where do I meet a boat tour?', answer: 'Ask the operator for the boat name and a map pin. Kumluk, the town yacht harbour and Palamutbükü are different meeting points.' },
      ],
    },
    ru: {
      stops: [
        'Начните у берега Кумлук и пройдите к яхтенной гавани Искеле. Посмотрите с набережной на лодки рядом с городскими кварталами.',
        'Поверните к Ташлыку. Остановитесь на Севги-Йолу и спуститесь к пляжу с морской стороны.',
        'Завершите прогулку у озера Ылыджа. На одном коротком маршруте вы увидите солёное море и пресноводное озеро.',
      ],
      faqs: [
        { question: 'Отсюда уходит паром в Бодрум?', answer: 'Паром в Бодрум отправляется из Кёрмена в Каракёе. Проверьте терминал в билете и запланируйте отдельную поездку из центра.' },
        { question: 'Где искать свой прогулочный катер?', answer: 'Попросите у организатора название судна и точку на карте. Кумлук, городская яхтенная гавань и Паламутбюкю — разные места встречи.' },
      ],
    },
  },
}
