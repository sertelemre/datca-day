import type { DestinationDetail } from './destination-types';

export const seasonDetails: Record<string, DestinationDetail> = {
  'sezon-disinda-datca': {
    sections: [
      {
        heading: 'Eski Datça’da kısa bir sabah yürüyüşü',
        paragraphs: [
          'Kışın Datça’yı görmek için bir günün varsa sabahı Eski Datça’ya ayır. Mahalle camisinden Can Yücel Sokağı’na doğru yürürken bahçe duvarlarının nerede alçaldığına bak. Biraz önce yalnızca taş duvarını gördüğün evin avlusunu, sokağın bir sonraki kıvrımından görebilirsin. Yağmurdan sonra taş döşemeler kayganlaşır. Böyle günlerde bir sokaktan yukarı çıkıp aynı yoldan dönmek de mahallenin mimarisini görmek için yeter.',
          'Hava açarsa Reşadiye’ye geçip Koca Ev Sokağı’na uğrayabilirsin. Burası deniz kıyısındaki İskele’den önce Datça’nın idari merkeziydi. Eski Datça ile Reşadiye’yi aynı otobüs hattı birbirine bağlar. Kısa kış günlerinde öğle molasını bu iki mahalleden birinde vermek, gün ışığının çoğunu yolda geçirmekten kurtarır.',
        ],
      },
      {
        heading: 'Badem çiçeğini nerede ve ne zaman görebilirsin?',
        paragraphs: [
          'Yarımadanın batısında Cumalı çevresindeki bahçeler, çiçek zamanı ayrı bir geziyi hak eder. Dalında henüz yaprak yokken açan çiçekler uzaktan daha kolay seçilir. Nurlu badem erken çiçeklenen yerel çeşitlerden biridir. Aynı sabah bir ağaç beyaza bürünmüşken yanındaki ağaçta yalnızca tomurcuk görebilirsin. Yola çıkmadan birkaç gün önce köydeki bir üreticiye bahçelerin durumunu sormak, takvimden gün seçmekten daha iyi sonuç verir. Yol kenarından bakabilir, bahçeye girmek istersen sahibinden izin isteyebilirsin.',
          'Festival için geliyorsan belediyenin ilan ettiği tarih 4–7 Şubat 2027, etkinlik yeri ise Datça merkez. Köyde çiçek görmeye ve merkezdeki programa katılmaya ayrı vakit ayır. Çiçeklenme her yıl festival takvimine denk gelmeyebilir.',
        ],
      },
      {
        heading: 'Sonbaharda aynı günü kıyıda bitirmek',
        paragraphs: [
          'Çiçek mevsimi dışında geldiğinde öğleden sonrayı İskele’ye bırakabilirsin. Cumhuriyet Meydanı’ndan limana, oradan Taşlık tarafındaki Ilıca Göleti’ne kadar yürümek için köyler arasında bir yolculuk daha yapman gerekmez. Hava dönerse merkezde bir lokantaya geçmek de kolay. Hafta sonuna denk gelirsen cumartesi günkü Datça pazarı, bademi ve yarımadanın mevsim ürünlerini aynı gezide bulabileceğin bir başka durak.',
        ],
      },
    ],
    map: { label: 'Eski Datça Camii · mahalle yürüyüşünün başlangıcı', query: '36.739319,27.665800' },
    access: ['Merkezden 9-1 hattıyla Eski Datça’ya veya Reşadiye’ye gidebilirsin. Cumalı için ayrı bir yolculuk gerekir. Merkezden kalkan 9-5 Belen hattının Cumalı durağına ve dönüş seferine bak. Köy merkezi ile Palamutbükü sahilinin ikisi de Cumalı adresiyle karşına çıkabilir. Badem bahçesi ziyareti için köyde ineceğini şoföre söyle.'],
    routes: ['datca-eski-datca-resadiye-9-1', 'datca-belen-9-5'],
    stayNote: 'Taş Konak Eski Datça’dan sabah mahalleyi yürüyerek gezebilirsin. Cumalı’daki bahçeleri görmek istiyorsan Gocakapı Taşevler, merkezdeki festival ve sahil yürüyüşü içinse İskele’de Konak Tuncel Efe birer seçenek. Sezon dışında tarihlerini verirken odanın ısıtmasını ve kahvaltı düzenini de sor.',
    stayIds: ['23741', '26245', '2022-48-1576'],
    sources: [
      { title: 'Datça Belediyesi · 2027 Badem Çiçeği Festivali', url: 'https://datca.bel.tr/etkinlikler/8-uluslararasi-badem-cicegi-festivali' },
      { title: 'Datça Kültür Rotası · Eski Datça’nın evleri ve avluları', url: 'https://www.guneyegeturkiye.com/assets/user_files/DatcaKulturRotasi/EskiDatca.pdf' },
      { title: 'Muğla Valiliği · Reşadiye ve Datça’nın yerel bademi', url: 'https://www.mugla.gov.tr/datca' },
    ],
  },
  'datca-hava-ve-ruzgar': {
    sections: [
      {
        heading: 'Koy seçmeden önce iki kıyıyı haritada bul',
        paragraphs: [
          'Datça merkezde sabah rüzgârını ilk hissedeceğin yerlerden biri, İskele’deki yat limanının rıhtımı. Buradan baktığın deniz yarımadanın güneyinde. Aynı saatlerde Bodrum feribotunun yanaştığı Körmen kuzeyde, Gökova Körfezi’ne bakar. Otelinin penceresinden durgun su görmen öteki kıyıdaki geçiş hakkında pek az şey söyler. Planını yaparken önce gideceğin koyu, ardından ona ulaşmak için geçeceğin açık kıyıları haritada bul.',
        ],
      },
      {
        heading: 'İlçe tahminiyle deniz bültenini birlikte okumak',
        paragraphs: [
          'Merkezde dolaşacaksan Meteoroloji Genel Müdürlüğünün Datça tahmininde yağışa, sıcaklığa ve rüzgâra bak. Deniz yolculuğu yapacaksan Piri Reis deniz tahminini de aç. Bu bültende rüzgârın yönü ve kuvvetiyle birlikte dalga yüksekliği ve görüş bilgisi verilir. Tarihi ve saat aralığını kontrol et. Sabah rıhtıma indiğin saat ile teknenin öğleden sonra geri döneceği saat iki farklı tahmin dilimine girebilir.',
          '“Kuzeyden” ifadesi rüzgârın geldiği yönü anlatır. Haritayı açtığında koyun ağzının hangi yöne baktığını ve önünde bir burun olup olmadığını görebilirsin. Bülten geniş bir deniz alanını kapsar. İki burun arasındaki bir plajda o gün dalganın kıyıya nasıl vurduğunu ise en iyi kıyıya vardığında görürsün. Limanda karar vereceksen kaptana rotanın açıkta kalan bölümünü de sor.',
        ],
      },
      {
        heading: 'Feribot, plaj ve yürüyüş için üç ayrı karar',
        paragraphs: [
          'Bodrum’a geçeceksen yola çıkmadan işletmenin sefer duyurusuna bak. Günübirlik tekne turundaysan rüzgâr döndüğünde kaptan başka bir koy seçebilir. Özellikle Knidos’ta karaya çıkmak için bilet aldıysan o sabah uğranacak durakları yeniden öğren.',
          'Kıyıda kalacağın bir gün için daha esnek bir plan yapabilirsin. Örneğin Taşlık’ta dalga yüzmeye elverişli görünmüyorsa limandan Ilıca Göleti’ne kadar yürüyüp merkezde kalabilirsin. Köye gitmek istiyorsan Eski Datça’nın avlulu sokakları da kısa bir öğleden sonra gezisine yeter. Böylece uzaktaki bir koyda havanın değişmesini beklerken son dönüş aracını kaçırmazsın.',
        ],
      },
    ],
    map: { label: 'Datça Yat Limanı · merkezde kıyı yürüyüşünün başlangıcı', query: '36.722249,27.687921' },
    access: ['Cumhuriyet Meydanı’ndan kıyı boyunca yürüyerek haritada işaretli merkez limanına ulaşırsın. Bodrum feribotuna gideceksen Karaköy’deki Körmen Limanı için 9-8 hattına, kıyı planını Eski Datça’ya çevireceksen 9-1 hattına bak. Feribotun kalkışını ve Karaköy otobüsünün saatini ayrı ayrı kontrol et.'],
    routes: ['datca-karakoy-9-8', 'datca-eski-datca-resadiye-9-1'],
    stayNote: 'Merkezde Konak Tuncel Efe, Kumluk kıyısına ve limana yakın. Datça Sapphire Hotel ise Taşlık yönünde. İki konum da o günkü rüzgâra göre kıyı yürüyüşü ile köy gezisi arasında seçim yapmak isteyenlere uygun. Bodrum feribotuna bineceksen bu otellerden Körmen’e ayrıca araç gerekir.',
    stayIds: ['2022-48-1576', '2022-48-1588'],
    sources: [
      { title: 'Meteoroloji Genel Müdürlüğü · Piri Reis üç günlük deniz tahmini', url: 'https://pirireis.mgm.gov.tr/tahmin-raporlari/ucgunluk-tahmin' },
      { title: 'Meteoroloji Genel Müdürlüğü · Deniz yolu tahmin sistemi', url: 'https://pirireis.mgm.gov.tr/deniz-yolu-tahmin-sistemi' },
      { title: 'Bodrum Feribot · Datça ve Bodrum kalkış iskeleleri', url: 'https://bodrumferibot.com/iletisim' },
    ],
  },
};
