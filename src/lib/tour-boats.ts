import type { DestinationDetail } from './destination-types'

const section = (heading: string, ...paragraphs: string[]) => ({ heading, paragraphs })
const townQuay = '36.722249,27.687921'
const palamutRoute = 'datca-palamutbuku-9-5'
const meydanRoute = 'cumhuriyet-meydani-hizirsah-9-11'
const balli = { title: 'Ballı Tour · Palamutbükü buluşma yeri ve Knidos programı', url: 'https://ballitour.com/' }
const ferryTimetable = { title: 'MUTTAŞ · 48-48 Bodrum–Datça seferleri ve ücret tarifesi', url: 'https://ulasim.muttas.com.tr/hat/48-48-bodrum-datca-371' }

export const boatTours: Record<string, DestinationDetail> = {
  'datca-tekne-turu': {
    sections: [
      section('İlk buluşma hangi limanda?',
        'Datça merkez çıkışlı bir tura katılıyorsan İskele Mahallesi’ndeki Datça Yat Limanı’na git. Cumhuriyet Meydanı’ndan kıyı boyunca limana yürüyebilirsin. Teknenin adını ve bağlı olduğu yeri bir akşam önce kaptandan al. Kıyı boyunca birkaç iskele var ve satış yapılan yerle tekneye bineceğin yer farklı olabilir. Teklifte Palamutbükü yazıyorsa sabah batıdaki köy limanında olman gerekir. Körmen ise Bodrum feribotunun yanaştığı kuzey limanıdır.'),
      section('Gününü koylara göre seç',
        'Merkezden çıkan Dadya Yatçılık, örnek programında Armutlu Su, İncirli İn ve İnceburun gibi durakları sayıyor. Teknenin kıyı girintilerine denizden yaklaşması, karadan giderken yanından geçtiğin bir burnu bu kez karşıdan görmeni sağlar. Domuzbükü’nü merak ediyorsan Kaymakamlığın günübirlik teknelerin yüzme durakları arasında anlattığı bu koyun kendi turunda olup olmadığını sor.',
        'Koy sayısının yanında her birindeki süreye de bak. Maskeyle yüzmek isteyen biri için aynı koyda uzun kalmak güzel olabilir. Fotoğraf için giden biri ise seyir sırasında güvertede daha fazla zaman geçirmek isteyebilir. Rüzgâr rotayı değiştirdiğinde hangi kıyının seçenek olduğunu önceden öğrenebilirsin.'),
      section('Teknede geçecek günü düşün',
        'Bazı molalarda tekne açıkta demirler ve suya merdivenden girilir. Yüzmeden de vakit geçirmek isteyenler gölgeyi ve oturma düzenini, küçük çocuklu aileler uygun beden can yeleğini ve güverteden suya geçişi sorabilir. Öğle yemeği, içme suyu, diğer içecekler ve maske her işletmede farklı şekilde sunulur.',
        'Rezervasyonda tekneye kabul saatiyle limana dönüş saatini birlikte not et. Günün sonunda kıyıya ayak bastıktan sonra otele yürümekle başka bir köye otobüsle dönmek farklı zaman ister. Özellikle Palamutbükü çıkışlı bir tur alırken dönüş aracını da aynı tarihe göre seç.'),
    ],
    map: { label: 'Datça Yat Limanı · merkez kalkışlı turlar için rıhtıma yaklaşım', query: townQuay },
    access: ['Merkez limanı için otogardan Cumhuriyet Meydanı yönündeki 9-11 hattına bakıp son kısmı yürüyebilirsin. Palamutbükü kalkışlı turlar için 9-5 Datça–Palamutbükü hattı ayrı bir yolculuktur. Haritadaki işaret merkez rıhtımını gösterir. Tam biniş yerinde işletmenin verdiği konumu kullan.'],
    routes: [meydanRoute, palamutRoute],
    stayNote: 'Datça Yat Limanı’ndan çıkacaksan Konak Tuncel Efe ile Datça Sapphire Hotel, İskele’de iki konaklama seçeneği. Teknen Palamutbükü’nden kalkıyorsa Liman Pansiyon, o kıyıda ve barınağa yakındır.',
    stayIds: ['2022-48-1576', '2022-48-1588', '2022-48-1923'],
    sources: [
      { title: 'Dadya Yatçılık · Merkez çıkışlı günlük tur ve koylar', url: 'https://dadyayatcilik.com/' },
      { title: 'Datça Kaymakamlığı · Domuzbükü ve yarımadanın koyları', url: 'https://datca.gov.tr/turizm' },
      balli,
    ],
  },
  'bodrum-datca-feribotu': {
    sections: [
      section('Bodrum’dan ve Datça’dan biniş noktaları',
        'Bodrum’dan yola çıkıyorsan Kale Limanı’ndaki Datça Feribot İskelesi’ne git. Karşı kıyıda gemi, Karaköy’deki Körmen Limanı’na yanaşır. İşletmenin yol tarifinde Datça iskelesi Kairos Marina adıyla geçer. Datça’dan Bodrum’a döneceksen ilk durağın da burasıdır. İskele Mahallesi’ndeki gezi teknelerinin bağlandığı liman yarımadanın öbür kıyısında kalır. İki kıyıyı birbirine karıştırırsan limandaki bekleme süresine bir de yarımadayı karadan geçmek için gereken süre eklenir. Bodrum Feribot’un iletişim sayfasında iki yön için ayrı harita bağlantısı var.'),
      section('Yaya biletiyle araç rezervasyonu arasındaki fark',
        'Yaya yolcu olarak iki kıyı arasındaki seferi seçersin. Arabayla geçerken gemide hem yolcular hem de taşıt için yer gerekir. Satış ekranında önce doğru yönü ve günü, sonra araç sınıfını ve birlikte seyahat edecek kişi sayısını seç. Özellikle minibüs, motosiklet veya karavanla geliyorsan doğru taşıt sınıfını ücret tarifesinde bul. Sürücünün ve araçtaki diğer yolcuların nasıl ücretlendirildiğini toplam tutarı onaylamadan kontrol et.',
        'İşletmenin satış ekranı, çevrim içi bilet satışının hareketten iki saat önce kapandığını belirtiyor. Bu süre gemiye kabul saati değildir. Son anda yola çıkacaksan gişede yer olup olmadığını, araç sırasına ne zaman girmen gerektiğini işletmeden öğren.'),
      section('Körmen’e varınca nereye gideceksin?',
        'Yaya inenler için Körmen, ilçe merkezinden ayrı bir ulaşım durağıdır. Aynı gün Palamutbükü’ne veya Mesudiye’ye gideceksen önce Karaköy’den Datça’ya geçişi, sonra köy hattını planla. Arabayla iniyorsan otelinin mahalle adını navigasyona ekle. Örneğin otelin Hayıtbükü’ndeyse gideceğin yön ilçe merkezi değil, Mesudiye’dir.',
        'Dönüşü planlarken MUTTAŞ tarifesinde hafta gününü ve kalkış yönünü yeniden seç. Deniz koşulları veya teknik nedenler seferi değiştirebildiğinden aynı gün bir uçağa ya da şehirler arası otobüse yetişeceksen limandan sonraki yol için pay bırak.'),
    ],
    map: { label: 'Datça tarafı · Karaköy’deki Körmen Limanı (Kairos Marina)', query: 'Kairos Marina, Karaköy Sokak 577, Datça, Muğla' },
    access: ['Datça merkezden 9-8 Karaköy (Körmen) hattıyla kuzey kıyısına ulaşılır. Seferin iskeleye bağlantısını ve limana giriş için gereken süreyi kontrol et. Bodrum tarafında Kale Limanı’ndaki Datça Feribot İskelesi’ni hedef olarak seç. 48-48 sayfasında tarihine uygun seferi ve tarife bağlantısını bulabilirsin.'],
    routes: ['bodrum-datca-48-48', 'datca-karakoy-9-8'],
    stayNote: 'Damyan Çiftliği, Körmen’in bağlı olduğu Karaköy’ün iç kesiminde. Gemiden sonra ilçe merkezinde kalmak istersen Datça Sapphire Hotel İskele’de. İki seçenek için de iskeleden ayrıca ulaşım gerekir.',
    stayIds: ['22141', '2022-48-1588'],
    sources: [
      ferryTimetable,
      { title: 'Bodrum Feribot · Bodrum ve Datça iskelelerinin ayrı yol tarifleri', url: 'https://bodrumferibot.com/iletisim' },
      { title: 'Bodrum Feribot · Tarihe göre satış ve sefer bilgileri', url: 'https://bodrumferibot.com.tr/termal/' },
    ],
  },
  'palamutbukunden-knidos-tekne-turu': {
    sections: [
      section('Palamutbükü Limanı’nda buluşma',
        'Knidos’a denizden gitmek için ilk durağın Palamutbükü Limanı. Ballı Tour, kendi teknesi için jandarmanın yanını tarif ediyor. Başka bir işletmeyle gidiyorsan teknenin adını ve limanın hangi tarafında bağlı olduğunu ondan öğren. Palamutbükü’nün uzun sahilinde herhangi bir noktada inmekle doğrudan barınağa gitmek arasında sabah programını etkileyen bir yürüyüş olabilir.',
        'Ballı Tour’un örnek programında tekne 09.45’te kalkıp 17.00’de aynı limana dönüyor. Gidiş ve dönüş aracını ayarlarken sana verilen rezervasyon saatlerini esas al. Yer ayırtırken o gün Knidos’ta karaya çıkış olup olmadığını, bindikten sonra yüzme ve yemek molalarının nasıl sıralanacağını sor. Ören yerinde yürümekle teknenin güvertesinden antik limanı görmek iki ayrı deneyim.'),
      section('Kıyı boyunca küçük limanlar',
        'Palamutbükü’nden batıya doğru seyirde yer adları kıyıyı okumayı kolaylaştırır. Ballı Tour, örneğin Mağnıç Limanı, Goca Hüseyin Taşı, Çay Limanı ve Gıyrap Koyu’nu kendi rotasında sayıyor. Bu adların hepsi bir iskeleye karşılık gelmez. Bazısı kayalık bir kıyıyı, bazısı yüzme molası verilen bir koyu tarif eder. Kaptan bir burun ya da kayayı gösterdiğinde haritaya göz atarsan dönüşte aynı yeri ters yönden tanıyabilirsin. Hava değişirse uğranan yerlerin sırası da değişebilir.'),
      section('Knidos’ta bir saati nasıl kullanmalı?',
        'İşletmenin yayımladığı programda isteyenlere karada yaklaşık bir saat ayrılıyor. Süreni iskeleden ayrılmadan öğren. Ören yeri girişinin tekne ücretine dâhil olup olmadığını da sor. Karaya çıktığında küçük tiyatro ile hemen altındaki ticaret limanını birlikte görmek, kenti bütün teraslarına tırmanmadan tanımanın güzel bir yolu. Kap Krio ile anakarayı birleştiren dar kara şeridinin öte yanında, antik dönemde askerî amaçla kullanılan küçük kuzey limanı yer alır.',
        'Geri dönerken çıkışa ve iskeleye yürüyüş için zaman ayır. Özellikle yüzdükten sonra ören yerine geçeceksen taş yolda rahat yürünecek ayakkabıyı yanında götür. Bütün terasları ve tapınak alanlarını görmek isteyenler Knidos için ayrıca bir kara gezisi planlayabilir.'),
    ],
    map: { label: 'Palamutbükü Limanı · Knidos turları için kalkış bölgesi', query: 'Palamutbükü Limanı, Cumalı, Datça, Muğla' },
    access: ['Datça merkezden 9-5 Palamutbükü hattını kullanabilirsin. Limana en yakın iniş yerini ve tekneye kabul saatine yetişip yetişmeyeceğini kontrol et. Tekne limana son otobüsten sonra dönecekse merkeze giden bir taksiyi önceden ayarlayabilir veya geceyi Palamutbükü’nde geçirebilirsin.'],
    routes: [palamutRoute],
    stayNote: 'Liman Pansiyon, Palamutbükü’nün barınağa yakın Cumalı kesiminde yer alıyor. Palamutbükü Çeşme Otel ise aynı kıyının Yaka tarafında. Sabah rıhtımda buluşacağın noktaya göre iki adres arasından seçim yapabilirsin.',
    stayIds: ['2022-48-1923', '2022-48-2039'],
    sources: [balli,
      { title: 'Kültür ve Turizm Bakanlığı · Knidos Örenyeri, limanlar ve tiyatro', url: 'https://muze.gov.tr/muze-detay?DistId=KND&SectionId=KND01' },
      { title: 'MUTTAŞ · Datça–Palamutbükü hattı', url: 'https://ulasim.muttas.com.tr/hat/9-5-datca-palamutbuku-78' },
    ],
  },
  'datcada-mavi-yolculuk': {
    sections: [
      section('İlk gece tekneye nerede bineceksin?',
        'Mavi yolculukta ilk akşam hangi limanda tekneye bineceğini rezervasyondan öğren. Bazı yatılı turlar Datça’da başlar, bazıları ise başka bir limandan yola çıkar ve bir geceyi Datça’da geçirir. Örneğin Dadya 2, Datça Yat Limanı’nı hareket noktası olarak veriyor. Andrea Yachting’in Hisarönü üzerinden Datça’ya uğrayan örnek turu ise Marmaris’te başlıyor ve orada bitiyor. İlk gecenin bağlama yerini, teknenin adını, kamaraya yerleşme saatini ve son sabah hangi limanda ineceğini biletlerini almadan önce öğren.'),
      section('Knidos, Hisarönü ve Gökova arasında',
        'Datça’nın batı ucunu hedefleyen bir teknede birkaç günlük seyri koy molalarıyla bölebilirsin. Ukiyo’nun Knidos programı en az üç gece için düzenlenmiş. İşletme hava ve deniz koşullarına göre Armutlu Su, İncirli İn ve Çay Limanı gibi duraklara yer veriyor. Amacın antik kenti gezmekse yalnızca Knidos açıklarında gecelemeyi değil, karaya ne zaman ve nasıl çıkacağını da konuş.',
        'Hisarönü yönünü seçersen Bencik, Selimiye veya Bozburun çevresi aynı seyahat planında yer alabilir. Gökova ise Datça ile Bodrum yarımadaları arasındaki kuzey körfezidir. Haritayı açıp en çok görmek istediğin iki koyu işaretlemek, kısa bir tatilde seyirle yüzmeye ayrılan vakti dengelemeni sağlar.'),
      section('Kamaradan sofraya teknede yaşam',
        'Bir kamarayı ayırdığında ortak alanları diğer konuklarla paylaşırsın. Teknenin tamamını kiralıyorsan grubun büyüklüğüne göre yatak ve banyo düzenini baştan konuşabilirsin. Yemek hizmeti de tekneden tekneye değişir. Ukiyo örneğinde kumanya alışverişi misafire, pişirme ve servis ekibe aittir. Teklifleri karşılaştırırken mutfak alışverişini kimin yapacağını ve içme suyunu hesaba kat.',
        'Gece demirde kalınacak bir koyda karaya ulaşmakla limanda bağlıyken güverteden inmek aynı şey değildir. Akşam kıyıda yemek istiyorsan bunun hangi durakta yapılabileceğini sor. Son sabah için de otelini ya da transferini teknenin gerçek iniş limanına göre ayarla.'),
    ],
    map: { label: 'Datça Yat Limanı · Datça merkez çıkışlı yatılı turlar için örnek buluşma bölgesi', query: townQuay },
    access: ['Harita İskele Mahallesi’ndeki merkez rıhtımını gösterir. Datça çıkışlıysan Cumhuriyet Meydanı’ndan kaptanın gönderdiği bağlama yerine yürüyebilirsin. Biniş limanın Marmaris ise önce oradaki rıhtıma gitmen gerekir. İki ilçe arasında karayoluyla aktarma için 48-16 Datça–Marmaris hattına bakabilirsin.'],
    routes: ['datca-marmaris-48-16', meydanRoute],
    stayNote: 'Turun merkez limanında başlıyor ya da bitiyorsa, tekneden önceki veya sonraki gece için İskele’deki Konak Tuncel Efe ve Pier Marine Otel iki seçenek. Marmaris kalkışlı bir programda bu tesisleri ancak Datça’da ayrıca karada kalacaksan değerlendir.',
    stayIds: ['2022-48-1576', '23023'],
    sources: [
      { title: 'Dadya 2 · Datça çıkışlı yatılı turlar', url: 'https://datcayatturu.com/' },
      { title: 'Ukiyo · Knidos yatılı rotası ve kumanya düzeni', url: 'https://www.ukiyodatca.com/knidosturu.php?lang=tr' },
      { title: 'Andrea Yachting · Marmaris çıkışlı örnek Hisarönü–Datça rotası', url: 'https://www.andreayachting.com/datca-mavi-tur' },
      { title: 'Muğla İl Kültür ve Turizm Müdürlüğü · Mavi yolculuk ve kabin seçenekleri', url: 'https://mugla.ktb.gov.tr/TR-271466/mavi-yolculuk.html' },
    ],
  },
  'datca-turu-acente-sorgulama': {
    sections: [
      section('İlk durak TÜRSAB’ın çevrim içi sicili',
        'Datça için bir seyahat acentesinden tur teklifi aldığında işe TÜRSAB’ın “Üye Seyahat Acentaları” ekranından başla. Bu işlem için Datça’da bir ofise gitmen gerekmiyor. Teklifte acentenin kayıtlı adı veya belge numarası bulunmalı. Yalnızca teknenin adı, kaptanın adı ya da bir sosyal medya hesabı verilmişse satışı hangi acentenin yaptığını sor. Tekneyi işletenle rezervasyonu satan acentenin farklı olması mümkündür.'),
      section('Acenteyi ve satış sitesini ayrı ayrı ara',
        'İlk aramada belge numarasını veya acentenin adını kullan. Sonuçta çıkan acente bilgilerini yazılı teklifin üzerindeki adla karşılaştır. Sonra satışın yapılacağı internet adresini doğrula. TÜRSAB ekranında internet adresi için ayrı bir arama seçeneği vardır. Ödemeyi yapacağın sitenin adresini tarayıcının adres çubuğundan alırsan tanıtımda görünen bir adla gerçek alan adını karıştırmazsın.',
        'Sitede bir TÜRSAB logosu görmen tek başına eşleşmeyi göstermez. Birliğin kendi sayfasından yaptığın aramada sonuç alamazsan bilgileri satıcıdan yeniden iste. Belge numarası başka bir acenteye çıkıyorsa uyuşmazlık açıklığa kavuşmadan ödeme yapma. Sicildeki eşleşme satıcıyı tanımana yarar. Belirli bir tarihte teknenin kalkacağını ya da son koltuğun sana ayrıldığını ayrıca işletme teyit etmelidir.'),
      section('Datça’daki buluşma yerini teklife eklet',
        'Son adımda tur tarihini, kişi sayısını ve biniş yerini rezervasyon teyidine yazdır. “Datça’dan hareket” sözü tek başına yeterli olmaz. İskele Mahallesi’ndeki merkez limanı, Palamutbükü Limanı ve feribotun kullandığı Körmen birbirinden farklı kıyılardadır. Otelden alma varsa bunun bedelini ve dönüşte bırakılacağın yeri de öğren.',
        'Öğünler, ören yeri girişi, rüzgâr nedeniyle rota değişikliği ve iptal hâlinde uygulanacak koşullar yazılı olduğunda aynı adlı iki turu karşılaştırmak kolaylaşır. Ödeme kaydını rezervasyon teyidiyle birlikte sakla. Hareket sabahı elinde tekne veya araç adıyla birlikte ulaşabileceğin bir telefon numarası da olsun.'),
    ],
    map: { label: 'Datça Yat Limanı · merkez çıkışlı tur için örnek buluşma bölgesi', query: townQuay },
    access: ['Sorgulama TÜRSAB’ın sitesinde yapılır. Harita, merkezden başlayan bir tur için örnek limanı gösterir. Acentenin ofis adresi veya tüm turların hareket noktası olarak kullanma. Datça Limanı yazan bir teyitte Cumhuriyet Meydanı’ndan, Palamutbükü yazan bir teyitte ise köyün limanından verilen buluşma konumuna geç.'],
    routes: [meydanRoute, palamutRoute],
    stayNote: 'Tur teyidindeki limana göre konaklayabilirsin. Datça Sapphire Hotel İskele’deki merkez limanı çevresinde, Liman Pansiyon ise Palamutbükü’nde. Bunlar tur paketinden ayrı değerlendirebileceğin konaklama seçenekleri.',
    stayIds: ['2022-48-1588', '2022-48-1923'],
    sources: [
      { title: 'TÜRSAB · Ad, belge numarası ve internet adresiyle acente sorgulama', url: 'https://online.tursab.org.tr/publicpages/embedded/agencysearch/' },
      { title: 'TÜRSAB · Üye Seyahat Acentaları', url: 'https://www.tursab.org.tr/acenta-arama' },
      { title: 'TÜRSAB · Dijital doğrulama sisteminin işleyişi', url: 'https://www.tursab.org.tr/haberler/dijital-dogrulama-sistemi-devreye-girdi_17805' },
    ],
  },
}
