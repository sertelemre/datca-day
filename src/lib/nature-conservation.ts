import type { DestinationDetail } from './destination-types'

const section = (heading: string, ...paragraphs: string[]) => ({ heading, paragraphs })
const source = (title: string, url: string) => ({ title, url })

export const conservationDetails: Record<string, DestinationDetail> = {
  'deveboynu-feneri': {
    sections: [
      section('Knidos’un limanlarından Deveboynu’na',
        'Yazıköy’den gelen yol, Knidos’un iki limanına ulaşır. Limanların ötesinde Kap Krio’nun kayalıkları yükselir. Deveboynu Feneri, yerleşimin ötesinde burnun denize bakan ucundadır. Geziye liman çevresinden başlamak, iki ayrı dönemin denizcilerini aynı manzara içinde düşünmek için iyi bir fırsat. Antik gemiler yük indirmek ya da hava düzelene kadar beklemek için limana giriyordu. Bugün burnu dolaşan tekneler için kıyıyı tanıtan işaret, tepede belli aralıklarla çakan beyaz ışık.'),
      section('Dokuz metrelik kule nasıl bu kadar yüksekten görünür?',
        'Kıyı Emniyeti Genel Müdürlüğü, kâgir kulenin yüksekliğini dokuz, fenerin deniz seviyesinden yüksekliğini 104 metre olarak veriyor. Kıyıdan baktığında gözüne önce burnun kendisi çarpar. Denizden bakıldığında ise ışığın o yüksekte görünmesini sağlayan büyük ölçüde kulenin üzerinde durduğu kayalıktır. Kurum kaydına göre fener 1931’de inşa edilmiş. Deveboynu adı da burnun biçiminden geliyor.',
        'Işık önce gaz yağıyla, sonra LPG’yle çalışan lambalardan elde ediliyordu. Bugün güneş enerjisi kullanılıyor. Güncel ışık düzeninde beyaz ışık on saniyelik aralık içinde iki kez çakar. Kısa arayla gelen bu iki parıltıyı daha uzun bir karanlık izler. Denizciler bu tekrar eden ritmi seyir kayıtlarındaki işaretle eşleştirebilir. Eski döner optik paneller ve onları çeviren saat mekanizması ise İstanbul’da koruma altında.'),
      section('Fenerin patikası ve ziyaret sınırı',
        'Karia Yolu’nun yarımada tarifinde yürüyüş Deveboynu Feneri’ne kadar uzanır. Buna karşılık kule ve bekçi binası Kıyı Emniyeti tarafından korunan, seyir hizmetiyle ilişkili yapılardır. Patikanın o gün açık olan kısmını ören yeri girişinde sor. Kuleye çıkmayı gezi planına eklemeden önce Kıyı Emniyetinden ziyaret koşullarını öğren.',
        'Gün batımını izlemek istiyorsan döneceğin noktayı aydınlıkken seç. Kayalık patikada yürüyüşle Yazıköy’e uzanan virajlı araç yolu, dönüşün ayrı ayrı zaman isteyen iki bölümüdür.'),
    ],
    map: { label: 'Knidos Ören Yeri, Deveboynu Burnu gezisine karadan yaklaşım', query: '36.688652,27.374460' },
    access: ['Özel araçla Datça’dan Yazıköy üzerinden Knidos Ören Yeri’ne gelinir. Harita, liman çevresindeki başlangıcı gösterir. 9-5 Datça–Belen hattı Yazıköy’den geçer. Buradan Knidos’a ulaşmak ve günün sonunda Yazıköy’e dönmek için ayrıca araç ayarlamak gerekir. Ören yerinin son giriş saatini bakanlığın ziyaret sayfasından kontrol edebilirsin.'],
    routes: ['datca-belen-9-5'],
    stayNote: 'Tarihi Knidos Pansiyonu Yazıköy’de, Knidia Ecofarm köyün Değirmenbükü tarafında. Fener gezisini bir kıyı tatiline ekleyeceksen Palamutbükü’ndeki Otel Beyaz İnci de batı yarımadasında kalabileceğin seçeneklerden.',
    stayIds: ['24408', '20113', '2022-48-1249'],
    sources: [
      source('Kıyı Emniyeti Genel Müdürlüğü · Deveboynu Feneri', 'https://www.kiyiemniyeti.gov.tr/yer-detay/404/DEVEBOYNU-FENERI'),
      source('Karia Yolu · Datça Yarımadası', 'https://kariayolu.com/datca-yarimadasi/'),
      source('Kültür ve Turizm Bakanlığı · Knidos Ören Yeri', 'https://muze.gov.tr/muze-detay?DistId=KND&SectionId=KND01'),
    ],
  },
  'datca-hurmasi': {
    sections: [
      section('Aynı hurmanın iki kıyıdaki adı',
        'Datça hurması ve Girit hurması aynı bitkiyi anlatıyor. Bilimsel adı Phoenix theophrasti olan bu palmiyenin Girit’teki bir topluluğu 1967’de bilim dünyasına tanıtıldı. Orman bilimci Melih Boydak, 1982’de Datça Yarımadası’nda da iki ayrı yerde doğal olarak yetiştiğini saptadı. Tatilde bir otelin bahçesinde gördüğün palmiyeyle yabani hurma topluluğu arasındaki önemli fark burada. Yabani ağaçlar bulundukları vadinin bitki örtüsünün parçası olarak yetişiyor.'),
      section('Kuru yamaçta suyun izini okumak',
        'Yarımadanın doğusunda yaz güneşi makilikleri kuruturken, bazı dere yatakları ile korunaklı vadiler bambaşka bir görünüm alır. İl kültür ve turizm müdürlüğü Datça hurmasının özellikle bu vadilerde kümeler oluşturduğunu kaydediyor. Karşı yamaçtan bakma olanağın varsa yalnızca tek bir ağacın tepesine odaklanma. Ağaçların vadi boyunca nasıl dizildiğini ve çevredeki daha alçak bitkilerden ne kadar yükseldiklerini de gözlemle.',
        'Bazı örnekler 10–15 metreye ulaşabilir. Uzaktan bakıldığında yaprağın iki yanına sıralanan ince yaprakçıklar, tepede tüye benzeyen bir siluet oluşturur. Meyveler sonbaharda olgunlaşır. Görüntü almak için yaklaşman gerekirse rehberin gösterdiği açık yolda kal. Dürbün ya da uzaktan çekilmiş bir fotoğraf, meyveyi daldan almadan bakmanın iyi bir yolu.'),
      section('Aktur’daki bahçeler neden bu hikâyede?',
        'Doğa Koruma Merkezi, kırmızı palmiye böceğinin yabani hurmalara ulaşma riskini araştırırken Aktur’daki süs palmiyelerini de çalışmasına kattı. Site sakinleriyle yapılan buluşmada bahçelerde gözlenen hasar ve alınan önlemler konuşuldu. Yakındaki bir bahçeye dikilen ağaçla vadide kendiliğinden yetişen hurmanın sağlığı böylece aynı koruma çalışmasının konusu oldu.',
        'Geziye çıkmadan önce Datça Turizm Danışma Bürosundan veya bölgeyi bilen bir doğa rehberinden o gün izlenebilecek halka açık güzergâhı öğren. Dere yatağına kendiliğinden açılmış bir iz, ziyaret yolu anlamına gelmeyebilir.'),
    ],
    map: { label: 'Aktur yerleşimi · rehberli bir gezi için bölgeye ulaşım', query: '36.757275,27.886707' },
    access: ['Datça merkezinden 9-4 Aktur hattı Emecik üzerinden doğu kıyısına ulaşır. Harita Aktur yerleşimini gösteriyor. Doğal hurma toplulukları vadilerde dağınık hâlde bulunur. Rehberle gezeceksen köyden ya da duraktan sonrasını, buluşma yerini öğrendikten sonra planla. Datça Turizm Danışma Bürosunun telefonu 0252 712 35 46.'],
    routes: ['datca-aktur-9-4'],
    stayNote: 'Aktur’da Ak-Tur Datça Kamping Tesisleri, Karaincir tarafında ise Datça Doris Hotel ve Filiz Apart bulunuyor. Bunlar doğu yarımadasında konaklama seçenekleri. Hurmalara yürüyüş mesafesi, seçeceğin açık güzergâha bağlı.',
    stayIds: ['17183', '16264', '2022-48-1843'],
    sources: [
      source('Melih Boydak · Datça hurmasının doğal yayılışı', 'https://dergipark.org.tr/tr/pub/tabin/article/1251423'),
      source('Muğla İl Kültür ve Turizm Müdürlüğü · Datça hurması', 'https://mugla.ktb.gov.tr/TR-296377/neyi-meshur.html'),
      source('Doğa Koruma Merkezi · Aktur’da hurmaları koruma çalışması', 'https://dkm.org.tr/tr/haber/datca-hurmalari-korunuyor-projesi-kapsaminda-datca-aktur-yaz-evlerinde-sunum-yaptik'),
      source('Muğla İl Kültür ve Turizm Müdürlüğü · Turizm danışma büroları', 'https://mugla.ktb.gov.tr/TR-156107/turizm-danisma-burolari.html'),
    ],
  },
  'datca-bozburun-deniz-koruma': {
    sections: [
      section('Limanda başlarken hangi koya gidileceğini sor',
        'Datça–Bozburun Özel Çevre Koruma Bölgesi iki yarımadanın kıyılarını ve geniş bir deniz alanını kapsıyor. İskele’deki limandan bir geziye katılıyorsan kaptana önce o gün hangi körfezde kalacağınızı sor. Kuzey kıyısı Gökova’ya, güney kıyısı Hisarönü Körfezi’ne bakıyor. Aynı ilçe adıyla satılan iki tekne turunun uğrayacağı koylar büsbütün farklı olabilir. Hava değişirse kaptanın hangi kıyıda mola vermeyi düşündüğünü de öğrenebilirsin.'),
      section('Deniz çayırına maskeyle bak',
        'Sığ bir koyda suya baktığında kumluk zeminin ortasında koyu renkli bir örtü görebilirsin. Bu örtünün bir bölümü, Akdeniz’e özgü çiçekli bir bitki olan Posidonia oceanica’nın oluşturduğu deniz çayırı olabilir. Yapraklarla kaplı kesimler balıklara barınak sağlar. Oradan geçen balıkları bir süre hareketsiz durup izlemek, üzerlerine doğru yüzmekten daha çok ayrıntı görmeni sağlar. Dipte gezineceksen paletini yapraklardan yukarıda tut.',
        'Bölgede yürütülen bilimsel izleme çalışmaları çayırları, büyük deniz yosunlarını, balık topluluklarını ve su sıcaklığını ayrı ayrı ele alıyor. Tek bir yüzme molasında gördüğün balık sayısı başka bir koydakinden az çıkabilir. Araştırmacılar uzun vadeli değişimi anlamak için aynı göstergeleri zaman içinde tekrar ölçüyor.'),
      section('Demir yeri, mağaralar ve olta',
        'Bir teknenin su üstünde durduğu yer kadar demirinin ve zincirinin dipte nereye oturduğu da önemli. Demir kaldırılırken deniz çayırlarını yerinden sökebilir. Tur seçerken kaptana molalarda çayırlara zarar vermeden nerede bağlanacağını sorabilirsin. Kıyıdaki mağaraların bir bölümü Akdeniz foklarının dinlendiği ve yavruladığı alanlardır. Fokla karşılaşırsan uzaktan izle, peşinden yüzme ve mağaraya girme.',
        'Oltanı da getirmek istiyorsan gideceğin koyu Tarım ve Orman Bakanlığının güncel amatör avcılık haritalarında bul. Hisarönü Körfezi için noktalarla belirlenmiş birden çok alan var. Kıyıdan ve tekneden avlanmanın koşulları yere göre değişebiliyor. Alandaki levhaları ve kullanacağın yönteme ilişkin kuralı kontrol ettikten sonra karar ver.'),
    ],
    map: { label: 'Datça Yat Limanı · merkez çıkışlı tekne gezilerinin rıhtımı', query: '36.722249,27.687921' },
    access: ['Datça merkezindeki rıhtıma İskele sahilinden yürüyerek veya 9-2 hattının Cumhuriyet Meydanı bağlantısıyla gelebilirsin. Haritadaki nokta şehir içindeki limanı işaret ediyor. Biletinde Palamutbükü ya da başka bir liman yazıyorsa buluşma yerini tekne işletmesinden al. Özel çevre koruma bölgesinin tek bir giriş kapısı yok.'],
    routes: ['ozbel-kargi-9-2'],
    stayNote: 'Merkezden kalkan turlar için İskele’de Konak Tuncel Efe ve Datça Sapphire Hotel liman çevresinde kalmayı kolaylaştırır. Palamutbükü kalkışlı bir gezi seçersen Yaka Mahallesi’nin kıyısındaki Otel Beyaz İnci daha uygun bir başlangıç olabilir.',
    stayIds: ['2022-48-1576', '2022-48-1588', '2022-48-1249'],
    sources: [
      source('Tabiat Varlıklarını Koruma Genel Müdürlüğü · Datça–Bozburun Özel Çevre Koruma Bölgesi', 'https://ockb.csb.gov.tr/datca-bozburun-ozel-cevre-koruma-bolgesi-2747'),
      source('Akdeniz Koruma Vakfı · Datça–Bozburun’da ekosistem izleme ve yerel balıkçılık', 'https://akdenizkoruma.org.tr/tr/calismalarimiz/projeler/b/datca-bozburun-ozel-cevre-koruma-bolgesi-ekosistem-restorasyonu-icin-denizel-ve-kulturel-korumanin-butunlestirilmesi-projesi'),
      source('Akdeniz Koruma Vakfı · Deniz çayırları', 'https://www.akdenizkoruma.org.tr/tr/calismalarimiz/denizel-turler/b/deniz-cayirlari'),
      source('Tarım ve Orman Bakanlığı · 6/2 sayılı amatör avcılık tebliği ve haritalar', 'https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241'),
      source('Tarım ve Orman Bakanlığı · 2026 tarihli amatör avcılık değişikliği', 'https://www.tarimorman.gov.tr/HHGM/Haber/267/'),
    ],
  },
}
