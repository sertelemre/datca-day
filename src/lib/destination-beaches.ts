import type { DestinationDetail } from './destination-types';

const district = { title: 'Datça Kaymakamlığı · Koylar ve plajlar', url: 'https://datca.gov.tr/turizm' };
const province = { title: 'Muğla İl Kültür ve Turizm Müdürlüğü · Datça', url: 'https://mugla.ktb.gov.tr/TR-296372/nereye-gidilir.html' };
const mesudiye = { title: 'Türkiye Kültür Portalı · Kızılbük ve Hayıtbükü', url: 'https://www.kulturportali.gov.tr/turkiye/mugla/gezilecekyer/kizil-ve-hayit-bukler' };
const carianTrail = { title: 'Karia Yolu · Datça Yarımadası etapları', url: 'https://kariayolu.com/datca-yarimadasi/' };

const coastalHistory = { title: 'Datça Tarih · Palamut İninden Değirmenlere', url: 'https://dayanisma-datca.org/palamut-ininden-degirmenlere/' };
const accessibleBeaches = { title: 'Muğla Büyükşehir Belediyesi · Engelsiz plajlar', url: 'https://www.mugla.bel.tr/haber/buyuksehir-engelsiz-plaj-sayisini-23e-cikardi' };

export const beachDetails: Record<string, DestinationDetail> = {
  palamutbuku: {
    sections: [
      { heading: 'Bademliklerden balıkçı barınağına', paragraphs: [
        'Palamutbükü’ne köylerden inince yarımadanın iki geçim kaynağını aynı manzarada görürsün. Geride Yaka ile Cumalı’nın badem bahçeleri, önünde balıkçı teknelerinin bağlandığı barınak uzanır. Palamutbükü bu iki mahallenin kıyısıdır. Adresler farklı görünse de Yaka’da bir pansiyonla Cumalı’da bir balık lokantası aynı sahil yürüyüşünün iki durağı olabilir.',
        'Barınak plajın batı ucundadır. Mendirekten kıyıya doğru baktığında plajın uzunluğunu, denize çevrildiğinde ise açıktaki küçük Palamutbükü Adası’nı görürsün. Teknelerin giriş çıkışını buradan seyredip yüzmek için barınağın dışındaki plaj kesimine geçebilirsin.',
      ] },
      { heading: 'Plajın doğu ucunda bir köy hikâyesi', paragraphs: [
        'Sahilin doğusunda Palamut İni diye anılan bir yer var. Datça’nın yerel tarih kayıtlarında, köylülerin eskiden sürülerini burada dinlendirdikleri ve sağdıkları sütten peynir yaptıkları anlatılır. Barınağın gündelik işlerini izledikten sonra öbür uca yürürken bu hikâyeyi hatırlamak, sahili yalnızca plajlarıyla tanımaktan farklı bir tat verir.',
      ] },
      { heading: 'Deniz molası için kıyıda yer seçmek', paragraphs: [
        'Koy boyunca yaklaşık iki kilometre uzanan plajın zemini yer yer ince çakıl, yer yer kumdur. Bu yüzden denize girdiğin nokta, kıyıda oturmak istediğin yerden biraz ileride olabilir. Öğle sıcağında çakıllar çıplak ayakla yürümeyi güçleştirebilir. Havlunun altına ince bir mat sermek de uzun bir deniz molasında işine yarar.',
      ] },
      { heading: 'Sahil sofrası mı, Knidos’a devam mı?', paragraphs: [
        'Öğleden sonrayı burada geçireceksen dönüş yürüyüşünü sahildeki balık lokantalarından birinde bitirebilirsin. İki kişilik sipariş verirken hangi balığın porsiyonla, hangisinin tartıyla satıldığını sormak menüyü okumayı kolaylaştırır. Badem almak istersen köylerde yetişen çeşidin adını da sorabilirsin.',
        'Aynı gün Knidos’u da görmek isteyenler için Palamutbükü güzel bir öğle durağıdır. Ören yeri ayrı bir yolculuk gerektirir. Gişenin son giriş saatinden geriye doğru hesap yaparsan yüzmeyi yarıda kesmeden antik kente de vakit ayırabilirsin.',
      ] },
    ],
    map: { label: 'Palamutbükü Plajı', query: '36.67382,27.50944' },
    access: ['Datça merkezden Palamutbükü yaklaşık 25 kilometredir. Toplu taşımada 9-5 Datça–Palamutbükü hattı Sındı, Yaka ve Kumyer üzerinden kıyıya ulaşır. Otelden barınağa ya da plaja gideceksen uzun sahilin hangi ucunda inmenin daha uygun olduğunu şoföre sorabilirsin.'],
    routes: ['datca-palamutbuku-9-5'],
    stayNote: 'Ceylan Hotel Palamutbükü ile Badem Otel, kıyının Yaka tarafında yer alır. Barınağa yakın bir konum arıyorsan Cumalı tarafındaki Liman Pansiyon’un adresine de bakabilirsin.',
    stayIds: ['2022-48-1021', '2022-48-1022', '2022-48-1923'],
    sources: [coastalHistory, district, province],
  },
  ovabuku: {
    sections: [
      { heading: 'Ovanın denize açıldığı kıyı', paragraphs: [
        'Mesudiye’de denize inen yolun sonunda birbirinden farklı üç kıyı bulunur. Doğuda küçük Kızılbük ve kavisli Hayıtbükü, batıda ise önü denize açık Ovabükü uzanır. Mesudiye’nin en geniş koyu olan Ovabükü’nün güzelliği, suyun kenarından epeyce yürüdüğünde hâlâ aynı plajda olmandadır. Sahilden geriye döndüğünde kıyıdaki evlerle iç taraftaki tepeleri bir arada görebilirsin.',
      ] },
      { heading: 'Kumla çakılın buluştuğu plaj', paragraphs: [
        'Kıyı kum ve çakıl karışımıdır. Sabah yürürken bir bölümde ayakların kuma gömülürken birkaç adım sonra çakılların sesini duyabilirsin. Uzaktan aynı görünen kıyıda suya giriş de yer yer değişir. Yüzmeyi yeni öğrenen biriyle geldiysen yerleşmeden önce birlikte deniz kenarına kadar gidip o günkü dalgaya ve dibe bakmak yer seçimini kolaylaştırır.',
        'Ovabükü’ne sırf yürümek için de gelinir. Öğle sıcağından önce kısa bir kıyı yürüyüşüyle başlayıp dönüşü deniz molasına ayırabilirsin. Kıyının genişliğini fotoğraflamak için su çizgisinden birkaç adım geriye çekil. Böylece kadraja plajın kıvrımı da girer.',
      ] },
      { heading: 'Sahilin gerisindeki Mesudiye', paragraphs: [
        'İçeri doğru çıktığında sahil adreslerinin hepsinde yazan Mesudiye adının neden bu kadar geniş bir alanı anlattığı anlaşılır. Mezgit ve Döşeme adları yörede köyün iç kesimlerini tarif etmekte kullanılır. Geceyi iç tarafta geçireceksen dönüşte pansiyonunu ararken kıyıdaki bük adının yanı sıra bu yer adlarını da duyman mümkün.',
      ] },
      { heading: 'Mesudiye’de iki koyluk bir gün', paragraphs: [
        'Bu sahildeki küçük pansiyon, kafe ve lokantalar öğle arasında köy merkezine dönmek zorunda kalmadan günü geçirmeyi kolaylaştırır. Kalabalık bir grupla geliyorsan buluşma yeri olarak bir pansiyon ya da kafeyi seçebilirsin. Sahilin bir ucundan ötekine seslenmek kolay değil.',
        'İkinci bir durak için doğudaki Hayıtbükü’nü seçebilir veya araçla batıdaki Kurubük yönüne devam edebilirsin. Birinde küçük bir yerleşimin sahiline, diğerinde kıyı yolunun aşağısında kalan bir koya varırsın. İkisine birden yetişmeye çalışmadan, kalan gün ışığına göre seçim yap.',
      ] },
    ],
    map: { label: 'Ovabükü Plajı, Mesudiye', query: '36.68074,27.55674' },
    access: ['Merkezden araçla batıya giderken Mesudiye ayrımından sahile inilir. Toplu taşımada 9-3 Datça–Mesudiye güzergâhı Hayıtbükü ile Ovabükü’nden geçer. Yalnızca Hızırşah’a giden 9-3 seferi sahile ulaşmaz. Dönüş için Ovabükü’ndeki biniş yerini ve seyahat gününün saatlerini birlikte kontrol et.'],
    routes: ['datca-mesudiye-9-3'],
    stayNote: 'Ova Otel ve Karia Pansiyon, Ovabükü Sokak çevresindedir. Ayrı mutfak arayanlar için aynı mevkideki Leman Apart da bir seçenek. Odanın denizle arasındaki yolu haritadan karşılaştırabilirsin.',
    stayIds: ['2022-48-2388', '2022-48-1865', '2022-48-1862'],
    sources: [coastalHistory, district, province],
  },
  hayitbuku: {
    sections: [
      { heading: 'Mesudiye’nin küçük, kavisli koyu', paragraphs: [
        'Hayıtbükü’nün biçimini en iyi sahilin bir ucundan öbürüne bakarken fark edersin. Plaj yay gibi kıvrılır. Su kenarına oturduğunda karşı görüş alanında yine aynı koyun öbür ucu kalır. Mesudiye’nin üç koyundan ikisi burada birbirine yaklaşır. Doğudaki küçük kıyı Kızılbük, batıdaki daha uzun sahil ise Ovabükü’dür.',
        'Hayıtbükü’nün kumlu sahilinde havlunu suya yakın serebilirsin. Özellikle çocukla giderken kıyının yumuşak zemini oyun için avantaj sağlar. Öğleden sonra rüzgâr dönerse sabah durgun gördüğün su dalgalanabilir.',
      ] },
      { heading: 'Sahilde geçen bir öğle', paragraphs: [
        'Koyun arkasında uzanan küçük işletmeler sayesinde yüzme molasıyla yemek arasına uzun bir yol girmez. Çantayla bütün koyu dolaşmak yerine önce kısa bir tur atıp denize girmek istediğin yeri seçebilirsin. Kendi havlunu sermek istiyorsan boş kıyı bölümünü, bir işletmede oturacaksan gölgenin öğlen nereye düştüğünü görmek bu küçük sahilde fark yaratır.',
        'Yemeğe ara verdiğinde denize bakmayı sürdürmek istersen sahilde açık bir masaya otur. Daha sakin bir öğle arayanlar kıyıdan bir sokak gerideki pansiyonlara da bakabilir. Akşamı burada geçireceksen sezon dışında mutfağın açık olduğu saatleri gündüzden öğrenmekte yarar var.',
      ] },
      { heading: 'Kıyının ötesinde köy yaşamı', paragraphs: [
        'Sahilden yukarıya bakınca Mesudiye’nin yerleşiminin plajla sınırlı kalmadığını görürsün. Hayıtbükü’nden içeri çıkan yollardan biri Mezgit’ten geçer. Deniz molasına bir köy gezisi eklemek istersen öğle sıcağını kıyıda geçirip günün daha serin saatinde bu yöne dönebilirsin.',
      ] },
      { heading: 'Hayıtbükü’nden Gabaklar’a', paragraphs: [
        'Sabahı Hayıtbükü’nde geçirip öğleden sonra doğudaki Kızılbük’e geçebilirsin. Bu ikinci koy yörede Gabaklar adıyla da bilinir. Haritada iki kıyıyı birlikte açarsan yürüyüşün hangi koyda son bulacağını ve dönüşte Hayıtbükü durağına nasıl ulaşacağını görürsün. Daha uzun bir sahil yürüyüşü istersen diğer yöndeki Ovabükü daha fazla alan sunar.',
      ] },
    ],
    map: { label: 'Hayıtbükü Plajı, Mesudiye', query: '36.68447,27.57331' },
    access: ['Datça’dan Mesudiye ayrımını izleyip Hayıtbükü yönünde sahile inebilirsin. Araçsız geliyorsan 9-3 Datça–Mesudiye hattındaki Hayıtbükü durağını seç. Üç koyu aynı gün gezerken son seferin hangi koydan geçtiğine bakmak akşam gereksiz yere geri yürümeni önler.'],
    routes: ['datca-mesudiye-9-3'],
    stayNote: 'Hayıtbükü kıyısında Ogün Pansiyon ve Türkeli Pansiyon, aynı bölgede ise Hayıtbükü Ahşap Evleri bulunur. Oda seçerken plaja kadar yürünecek yolu ve akşam yemeği imkânını tesisten öğrenebilirsin.',
    stayIds: ['2022-48-2101', '2022-48-2103', '2022-48-1874'],
    sources: [coastalHistory, mesudiye, province],
  },
  'kargi-koyu': {
    sections: [
      { heading: 'Merkezin güneyinde, tepelerin arasında', paragraphs: [
        'Kargı’ya giderken Datça’nın şehir kıyısından kısa sürede tepelerle çevrili bir koya geçersin. Merkezden yaklaşık üç kilometre uzaktaki koyun kuzeye ve güneybatıya karşı korunaklı yapısı, sahilden bakınca anlaşılır. Açıklığa doğru baktığında kıyıyı çeviren yamaçların nerede son bulduğunu görürsün. Yarımadada uzun bir yolculuğa çıkmadan deniz kenarında birkaç saat geçirmek isteyenler için bu yakınlık büyük kolaylık.',
      ] },
      { heading: 'Çakılın altından görünen deniz dibi', paragraphs: [
        'Kargı’da kıyıdaki taşlar suya girince de devam eder. Yumuşak kuma alışkınsan ilk birkaç adım farklı gelir. Çakıllı zeminde rahat edeceğin bir ayakkabı, kıyıda oturmak için de katlayabileceğin küçük bir mat işe yarar. Su duruyken kıyıdan dibi seçmek kolaylaşır. Maskeyle yüzmek istersen taşların arasına bakmak için açılmana gerek yok.',
        'Koyda küçük teknelerin karaya çekildiği bir bölüm de vardır. Kıyıyı dolaşırken çalışanlara ve teknelerin geçişine yer bırak. Yüzmek için sahilin plaj olarak kullanılan bölümünü seçersen hem denize girişin hem de eşyalarını kıyıdan takip etmen daha kolay olur.',
      ] },
      { heading: 'Kargı’dan geçen eski patikalar', paragraphs: [
        'Karia Yolu’nun 10A etabı Datça merkezden Kargı’ya gelir, ardından yarımadanın sırtlarını aşarak Domuzçukuru’na iner. Rota haritasında Kızılova Sarnıcı ve Siyah Gediği’ni de bulabilirsin. Deniz kenarında başlayıp biten bu yürüyüşün tamamı tek yönde yaklaşık 11 kilometredir. Yol boyunca toplam 350 metre kadar yükselirsin.',
        'Merkezden yürüyüp Kargı’da yüzmek istiyorsan plajı günün son durağı olarak seçebilirsin. Domuzçukuru’na devam edenlerin ise dönüşlerini yola çıkmadan ayarlaması gerekir. Yürüyüşün o ucunda araç yolu yoktur.',
      ] },
      { heading: 'Kargı’yı merkezle birleştiren öğleden sonra', paragraphs: [
        'Kıyıdaki yeme içme yerleri sayesinde Kargı’ya piknik hazırlamadan da gelebilirsin. Sabah yüzüp öğle yemeğini koyda yemek ya da öğleden sonra kısa bir yüzmeden sonra merkezdeki limana dönmek iki ayrı yarım günlük plan sunar. Yürümeyi seviyorsan yolu tek yönde yürüyüp öbür yönde otobüse binmek de mümkün. Kargı yolu yokuşlu olduğu için dönüşte otobüse binmek özellikle sıcak bir günde rahat ettirir.',
      ] },
    ],
    map: { label: 'Kargı Plajı, Datça', query: '36.70032,27.67562' },
    access: ['Merkezden Kargı Yolu’nu izleyerek koya gidilir. Toplu taşımada Cumhuriyet Meydanı bağlantılı 9-2 Özbel–Kargı hattına bak. Sıcağa kalmadan yürümek istiyorsan sabah gidişini yaya planlayıp dönüş seferini önceden seçebilirsin.'],
    routes: ['ozbel-kargi-9-2'],
    stayNote: 'Bizim Ev Datça’nın adresi doğrudan Kargı Koyu’nda. Little House Datça, İskele Mahallesi’nde koyun merkez yönünde kalır. İki tesisin plaja yürüyüşünü konumları üzerinden karşılaştırabilirsin.',
    stayIds: ['2022-48-1522', '26405'],
    sources: [carianTrail, { title: 'Karia Yolu · Datça–Kargı–Domuzçukuru etap kaydı', url: 'https://www.wikiloc.com/hiking-trails/karia-yolu-10a-datca-kargi-domuzcukuru-69339756' }, district, province],
  },
  'cocuklarla-datca': {
    sections: [
      { heading: 'Kumda oyun için Karaincir', paragraphs: [
        'Çocuklarla Datça’da deniz günü planlarken önce o gün nerede kalacağınızı düşünün. Marmaris yönünden geliyorsanız ince kumlu Karaincir, ilçe merkezine ulaşmadan önce yolunuzun üzerinde kalır. Kumsalda kepçe ve kovayla oyalanmayı seven küçükler için kıyıda uzun bir mola verebilirsiniz. Sığ giriş suya alışmayı kolaylaştırır. Çocuk denize girdiğinde ona bir yetişkinin eşlik etmesi önemli.',
        'Öğleden sonraki uyku için odaya dönmeniz gerekecekse tek bir plaj seçmek yeterli. Karaincir ile yarımadanın batısındaki Palamutbükü’nü peş peşe plana eklemek, kısa bir yüzme gününün büyük bölümünü yeniden arabada geçirmek demek.',
      ] },
      { heading: 'Merkezde arabaya binmeden bir gün', paragraphs: [
        'İskele Mahallesi’nde kalıyorsanız sabah Kumluk Plajı’nda başlayabilirsiniz. Kumlu tabanı ve merkezdeki konumu sayesinde bir şey unuttuğunuzda geri dönmek kolay. Öğle sıcağında sahilden çıkıp yemek veya uyku molası verin. Akşama doğru yeniden dışarı çıktığınızda limana kadar yürüyüp tekneleri seyretmek, ikinci bir yüzme molası kadar iyi bir uğraş olabilir.',
        'Daha büyük çocuklarla limanın ötesindeki Taşlık Plajı ve Ilıca Gölü’nü keşfedebilirsiniz. Burada küçük bir gözlem oyunu kurabilirsiniz. Gölün suyu hangi yönde akıyor, denize nereden ulaşıyor? Yan yana duran iki suyu kıyıdan izlemek için mayo giymek bile gerekmiyor.',
      ] },
      { heading: 'Batıda kalıyorsanız Hayıtbükü', paragraphs: [
        'Mesudiye’de geceleyen aileler için Hayıtbükü, kumlu küçük bir koyda günü bölmeden geçirme olanağı sunar. Pansiyona yaya dönebileceğiniz bir yer seçtiyseniz bir yetişkin büyük çocukla kıyıda kalırken diğeri küçük çocukla dinlenmeye gidebilir. Yanınızda bebek arabası varsa haritada kısa görünen mesafenin son bölümünü de sorun. Kumda ilerlemekle sokaktan yürümek aynı süreyi almaz.',
      ] },
    ],
    map: { label: 'Karaincir Plajı · ailece deniz günü için başlangıç', query: '36.76049,27.79206' },
    access: ['Karaincir için merkezden 9-4 Datça–Karaincir, Hayıtbükü için 9-3 Datça–Mesudiye hattına bakın. Kumluk ile Taşlık ise İskele Mahallesi’nde, limanın iki yanında kalır. Çocuklarla merkezde yürürken birini sabaha, öbürünü akşam gezintisine bırakabilirsiniz.'],
    routes: ['datca-karaincir-9-4', 'datca-mesudiye-9-3'],
    stayNote: 'Karaincir’de Çümen Apart, merkezde Kumluk Otel, Hayıtbükü’nde ise Hayıtbükü Ahşap Evleri üç ayrı gün planına uygundur. Bebek yatağı, mutfak ve odaya merdivensiz erişim gibi gereksinimleri rezervasyon öncesinde seçtiğiniz tesisle görüşün.',
    stayIds: ['2022-48-2351', '2022-48-1801', '2022-48-1874'],
    sources: [district, mesudiye],
  },
  'taslik-plaji': {
    sections: [
      { heading: 'Limandan Ilıca’ya yürümek', paragraphs: [
        'Taşlık Plajı, Datça merkezinde limanla Ilıca arasında uzanır. Liman tarafından gelirken önce tekneleri ve mendireği görür, sonra çakıllı kıyıya çıkarsın. Biraz daha yürüyünce de plajın hemen arkasında küçük bir göl belirir. Su kenarından ayrılmadan hem limanı hem gölü görebilmek Taşlık’ı yarım günlük bir yürüyüş için güzel bir başlangıç yapar.',
        'Sabah yalnızca yüzmeye vaktin varsa çantanı plajın limana yakın bölümünde bırakabilirsin. Daha uzun bir gezintide ise önce göle kadar yürümek iyi olur. Geri dönerken nerede denize gireceğini ve güneş yükselince nerede dinlenmek isteyeceğini kıyıyı görerek seçersin.',
      ] },
      { heading: 'Göl ile denizin yan yana geldiği yer', paragraphs: [
        'Ilıca Gölü küçük bir kaynak gölüdür. Taşlık’ta görülecek en ilginç ayrıntılardan biri, gölden çıkan suyun denize ulaşmasıdır. Göl kıyısında durup su yüzeyine baktıktan sonra deniz tarafına geçtiğinde aralarındaki mesafenin ne kadar kısa olduğunu fark edersin. Kent Park çevresi de su kenarından biraz uzaklaşarak mola vermek isteyenler için yürüyüşe eklenebilir.',
      ] },
      { heading: 'Denize erişim', paragraphs: [
        'Taşlık Halk Plajı, Muğla Büyükşehir Belediyesinin engelsiz plajlar listesinde yer alır. Tekerlekli sandalye kullanan biriyle geliyorsan sezonluk platformun o gün kurulu olduğu noktayı belediyeden öğrenmek yararlı olur. Plaj uzun olduğu için limana yakın girişle platformdan suya ulaşılan kısım aynı yerde olmayabilir.',
      ] },
      { heading: 'Kumluk’tan farklı bir yüzme molası', paragraphs: [
        'Adında taş geçse de sahilde kum ve çakıl birlikte bulunur. Çakılların yoğunlaştığı yerde ince bir havlu yerine katlanabilir bir mat daha rahat ettirir. Merkezde iki farklı plajı karşılaştırmak istersen aynı yürüyüşü limandan Cumhuriyet Meydanı’na, oradan kumlu tabanıyla tanınan Kumluk’a uzatabilirsin. Dönüşte kıyıdan uzaklaşmadan aynı yoldan meydana çıkabilirsin.',
      ] },
    ],
    map: { label: 'Taşlık Plajı, İskele Mahallesi', query: '36.71966,27.68723' },
    access: ['Cumhuriyet Meydanı’ndan Datça Limanı yönünde yürüyüp limanın güneyindeki Taşlık sahiline geç. Ilıca Gölü plajın devamında kalır. Arabayla gelenler için son kısmı merkezden yürümek, plajda park yeri aramaktan daha kullanışlıdır.'],
    stayNote: 'Kargı Yolu çevresinde Datça Sapphire Hotel ve Cape Krio, liman ile Taşlık arasında zaman geçirmek isteyenler için iki konaklama seçeneğidir. Tesise giriş ile plaja inilen yolun konumlarını karşılaştırabilirsin.',
    stayIds: ['2022-48-1588', '18239'],
    sources: [accessibleBeaches, district, { title: 'GoTürkiye · Datça’nın plajları', url: 'https://goturkiye.com/tr/datca/dokun' }],
  },
  'kumluk-plaji': {
    sections: [
      { heading: 'Meydandan kumsala', paragraphs: [
        'Kumluk, İskele Mahallesi’nde, Cumhuriyet Meydanı ile Öğretmenevi arasında uzanan şehir plajıdır. Meydandan gelirken birkaç sokak içinde denize çıkarsın. Sahil yolundan aşağı bir adımda kumu hissettiğin, denizin hemen arkasında çarşıya açılan sokakların uzandığı bir kıyı burası. Bu kısa geçiş, Datça’da az vaktin kaldığı bir günde bile denize girmeyi mümkün kılar.',
        'Hem kumsal hem deniz tabanı kumludur. Suyun kıyıda sığ kalması, ayaklarını suya sokup bir süre yürümek isteyenler için de elverişlidir. Küçük çocukla geliyorsan konakladığın yere ya da meydana kolay dönebileceğin bir yer seçebilirsin. Kıyının o günkü dalgasını ve yüzme alanını suya girmeden gözden geçir.',
      ] },
      { heading: 'Bir plajın akşama doğru değişen hâli', paragraphs: [
        'Kumluk’ta aynı noktaya iki farklı saatte uğramaya değer. Gündüz havluların serildiği kıyıda hava serinleyince lokantalar masalarını kurmaya başlar. Kumsalda akşam yemeği düşünüyorsan denize girerken beğendiğin yeri aklında tut. Masanın gerçekten kum üzerinde mi yoksa sahil yolunun gerisinde mi olduğunu gündüz görmek, özellikle çocukla ya da bebek arabasıyla geldiğinde işe yarar.',
      ] },
      { heading: 'Kumda masa seçerken', paragraphs: [
        'Menüye bakarken balığın porsiyonla mı yoksa tartıyla mı satıldığını sorabilirsin. Gün batımında sofrada kalmak istiyorsan bunu rezervasyonda belirtmek de işe yarar. Kumsaldaki ilk sıra suya daha yakınken sahil yolu tarafındaki masalara bastonla ya da bebek arabasıyla ulaşmak daha kolay olabilir.',
      ] },
      { heading: 'Yemekten önce kısa bir liman turu', paragraphs: [
        'Akşamüstü kumsaldan meydan yönüne çıkıp Datça Limanı’na kadar yürüyebilirsin. Kıyı yolunu izlersen yön tarifine ihtiyaç duymadan önce restoranların önünden, ardından teknelerin bağlandığı bölümden geçersin. Bu kısa tur yemekten önce vakit geçirmek için yeter. Daha uzun yürümek istediğinde limanın öbür tarafında Taşlık başlar. Orada kumun yerini çakılla karışık bir kıyı alır.',
      ] },
    ],
    map: { label: 'Kumluk Plajı, Datça merkez', query: '36.72562,27.68662' },
    access: ['Kumluk’a merkezden yürüyerek ulaşılır. Cumhuriyet Meydanı’nda indikten sonra Öğretmenevi yönüne, kıyı boyunca ilerle. Taşlık ve Ilıca Gölü ters yönde, limanın öbür tarafındadır. Akşam bir restoranda buluşacaksan “Kumluk” yerine işletmenin adını vermek daha kolay buluşmanı sağlar.'],
    stayNote: 'Kumluk Otel ve Konak Tuncel Efe, İskele Mahallesi’nde plaj ile meydan çevresinde kalır. Sahile bakan bir oda düşünüyorsan akşam restoranlarının bulunduğu cepheyi de hesaba katabilirsin.',
    stayIds: ['2022-48-1801', '2022-48-1576'],
    sources: [district, { title: 'GoTürkiye · Datça’nın plajları', url: 'https://goturkiye.com/tr/datca/dokun' }],
  },
  'karaincir-koyu': {
    sections: [
      { heading: 'Marmaris yolunda ince kumlu bir koy', paragraphs: [
        'Karaincir, Datça’nın batısındaki büklerden farklı bir gün planına uyar. Marmaris’ten gelirken ilçe merkezinden önce, Emecik Mahallesi sınırlarında kalır. Datça’ya giriş gününü yolda geçirmek yerine valizlerini bırakıp denize ulaşmak istiyorsan doğu yakasında konaklamak bu nedenle işe yarar. Merkezden gelecekler için mesafe yaklaşık 15 kilometredir.',
      ] },
      { heading: 'Kıyıda uzun zaman geçirmeyi sevenlere', paragraphs: [
        'Karaincir’in ayırt edici özelliği ince kumu ve kıyıya yakın bölümdeki sığ sudur. Çakıllı plajlarda kıyıya oturmakta zorlananlar burada havlusunu kum üzerine serebilir. Bir süre suyun kenarında yürümek, küçük çocukla kumda oynamak ve oturduğun yerden denizi seyretmek, koydan keyif almak için yüzmeye iyi birer alternatiftir.',
        'Gölgeye ihtiyacın varsa koya iner inmez güneşin yönüne bak. Kendi şemsiyeni getirmek serbest bir kıyı bölümünü kullanmayı kolaylaştırır. Sahilde bir işletmeden yararlanacaksan şezlong, duş ve yemek imkânlarından hangilerinin o gün sunulduğunu yerleşmeden önce öğrenebilirsin. Rüzgâra göre dalga değişebilir. Çocukla geldiğinde kıyıda oyunu birlikte suya girerek sürdürebilirsin.',
      ] },
      { heading: 'Plajda erişilebilirlik', paragraphs: [
        'Karaincir Halk Plajı, büyükşehir belediyesinin engelsiz plaj uygulamasına dâhil ettiği kıyılardan biridir. Tekerlekli sandalye kullanan misafirler için araçtan inilen noktayla suya yaklaşmayı sağlayan platform arasındaki yol önemlidir. Yolculuk öncesinde platformun sezon için kurulup kurulmadığını ve hangi girişten ulaşıldığını belediyeye sorabilirsin.',
      ] },
      { heading: 'Karaincir’i doğu yakasında bir güne bağlamak', paragraphs: [
        'Öğleye kadar burada kalıp sonra merkeze geçmek istiyorsan kıyıdan tekrar Marmaris–Datça yoluna çıkman gerekir. Aynı günü batıdaki Knidos’a kadar uzatmak uzun bir araç yolculuğu ekler. Doğuda kalmak istersen Emecik çevresinde dinlenmeyi ya da Aktur yönünde ikinci bir kıyı molasını düşünebilirsin. Otobüs kullanıyorsan ikinci durağı seçmeden önce bu kez dönüşün nereden yapılacağını belirle.',
      ] },
    ],
    map: { label: 'Karaincir Plajı, Emecik', query: '36.76049,27.79206' },
    access: ['Marmaris–Datça yolu üzerindeki Karaincir ayrımını kullan. Haritada Emecik, Datça konumunu seç. Bodrum’un Akyarlar tarafında da Karaincir adlı bir plaj bulunur. Toplu taşımada Datça–Karaincir 9-4 hattının gidiş ve dönüş saatleri günlere göre ayrı listelenir.'],
    routes: ['datca-karaincir-9-4'],
    stayNote: 'Karaincir Suit Otel ve Filiz Apart, Emecik’te bu kıyıyı kullanmak isteyenlere iki seçenek sunar. Çümen Apart’ın adresi Karaincir Tatil Köyü içindedir. Aynı bölgede olsalar da tesislerden plaja yürünecek mesafe farklıdır.',
    stayIds: ['2022-48-2130', '2022-48-1843', '2022-48-2351'],
    sources: [accessibleBeaches, province, district],
  },
  'akvaryum-koyu': {
    sections: [
      { heading: 'Palamutbükü’nün doğusundaki Gerence', paragraphs: [
        'Datça’da tekne turlarının programında da “Akvaryum” adıyla karşılaşabilirsin. Buradaki koy, Palamutbükü’nün doğusunda, Ovabükü’ne giden kıyı yolu üzerindeki Gerence’dir. Palamutbükü’nün uzun sahilinden sonra iki yamaç arasına çekilmiş daha küçük bir plaja varırsın. Buluşma yeri tarif ederken “Palamutbükü Akvaryum Plajı” veya “Gerence” demek aynı adlı başka bir yüzme durağına gitmeyi önler.',
      ] },
      { heading: 'Bir maskeyle kıyıya bakmak', paragraphs: [
        'Koy adını, su durulduğunda kıyıdan bile deniz dibinin seçilebilmesinden alır. Maske kullanmayı seviyorsan burada uzun mesafe yüzmekten çok bir noktada durup bakmak keyiflidir. Dibi seçebildiğin sığ bölümde bir süre hareketsiz kaldığında önce taşların biçimlerini, ardından aralarında hareket eden küçük balıkları fark edebilirsin. Dalga çakılı oynatıyorsa o gün görüş de farklı olacaktır.',
        'Gerence’nin iki burun arasına sığan plajında yer sınırlı. Küçük bir çantayla gelmek hem inişi hem de suya gireceğin yerde geçiş için boşluk bırakmayı kolaylaştırır. Yanında su, havlu ve deniz gözlüğü olduğunda kısa bir yüzme molası için yeniden bir işletme araman gerekmez.',
      ] },
      { heading: 'Sudan çıkınca çakıllara bak', paragraphs: [
        'Gerence’yi kıyı yolundaki diğer koylardan ayıran bir ayrıntı da çakılların rengidir. Kırmızı ve pembeye çalan taşlar ıslandığında renkleri daha kolay seçilir. Deniz maskesini çantaya kaldırdıktan sonra sahilde kısa bir gezintiye vakit bırak. Bir avuç çakılı yanında götürmek yerine renklerini su çizgisinde fotoğraflayabilirsin.',
      ] },
      { heading: 'İki kıyıyı birlikte görmek', paragraphs: [
        'Sabahı Gerence’de geçirip öğle yemeği için Palamutbükü’ne dönmek kısa bir gezi oluşturur. Böylece küçük koyda masa ya da gölge bulmaya bağlı kalmazsın. Yola Ovabükü yönünde devam edeceksen Akçabük ve Kurubük de bu kıyı dizisinde yer alır. Kalan vaktine göre birini seçmek, her virajdan sonra yol kenarında durmaktan daha rahat bir gezi sağlar.',
      ] },
    ],
    map: { label: 'Akvaryum Plajı (Gerence), Palamutbükü', query: '36.67808,27.51654' },
    access: ['Karadan Palamutbükü’nün doğu ucundan Ovabükü yönüne giden kıyı yolunu izle. Haritadaki nokta plajı gösterir. Araçtan sonra kıyıya yaya inilir. 9-5 otobüsü Palamutbükü yerleşimine ulaşır. Hattın güzergâhında Gerence durağı gösterilmediği için plaja kalan bölümü ayrıca planla.'],
    routes: ['datca-palamutbuku-9-5'],
    stayNote: 'Konaklama için yakın yerleşim Palamutbükü’dür. Badem Otel, Çuhadar Ahşap Evleri ve Ceylan Hotel Palamutbükü koyun batısında, Palamutbükü sahilinin Yaka tarafında yer alır.',
    stayIds: ['2022-48-1022', '2022-48-0670', '2022-48-1021'],
    sources: [district, { title: 'Bozalan Sahil Evleri · Gerence ve Akvaryum Plajı', url: 'https://bozalansahilevleri.com/gerence/' }],
  },
  kurubuk: {
    sections: [
      { heading: 'Ovabükü ile Palamutbükü arasındaki kıvrım', paragraphs: [
        'Ovabükü’nden batıya doğru kıyı yoluna çıktığında yol su seviyesinden yükselir. Kurubük burada, yamaçların arasında geniş bir kavis çizerek aşağıda kalır. Adı Aktur tarafındaki Kurucabük’e benzer. İki koy yarımadanın farklı kesimlerindedir. Kurubük için bakacağın yerleşimler Mesudiye ve Palamutbükü’dür.',
        'Buraya yalnızca manzara görmek için uğrayanlarla kıyıya inip saatlerce kalanlar aynı yolu kullanır. Yolu ilk kez geçiyorsan önce aracı trafiği aksatmadan bırakabileceğin yeri bul. Koyun kıvrımı en iyi yüksekten görünür. Fotoğraf çekmeyi düşünüyorsan durmak için viraj dışında bir yer seç.',
      ] },
      { heading: 'Yalı Burnu’ndan kum tanelerinin arasına', paragraphs: [
        'Datçalıların kıyı anlatılarında bu manzaraya bakan çıkıntı Yalı Burnu adıyla geçer. Açık havada karşıya baktığında Sömbeki’yi, yani Simi Adası’nı seçmek mümkün. Kıyıya indiğinde ise bu manzaranın gözle seçilmesi güç bir yanı var.',
        'Alp Alper, Süphan Karaytuğ ve Serdar Sak’ın Datça–Bozburun kıyılarındaki çalışmasında Kurubük ile komşusu Ovabükü de örnek alınan koylar arasında. Araştırmacıların incelediği kopepodlar, kum tanelerinin arasındaki su dolu boşluklarda veya yosunların üzerinde yaşayan küçük kabuklular. Su çekildiğinde geride kalan ıslak kum, bu canlılar için başlı başına bir yaşam alanı.',
      ] },
      { heading: 'Kıyıya inmek için ne ayırmalı?', paragraphs: [
        'Kurubük’te günü, kıyıda bir işletmeye ihtiyaç duymadan geçirecek şekilde hazırlamak yerinde olur. Suyu ve yiyeceği Ovabükü’nde ya da Palamutbükü’nde alabilirsin. Önce yukarıdan inişe bak. Çocuğunla ya da dik yokuşta yürümekte zorlanan biriyle gelmişsen plajdan dönerken aynı yolu çıkacağını hesaba kat.',
        'Kısa bir deniz molasından sonra öğle yemeğini Ovabükü’nde yemek istersen sahile taşıyacakların azalır. Uzun kalacaksan kendi gölgeliğin ve oturacağın bir örtü daha rahat ettirir. Dönüşte boş şişeleri ve ambalajları aldığın yerleşime kadar götürmek için çantanda yer bırak.',
      ] },
      { heading: 'Bu kıyının yerel hikâyesi', paragraphs: [
        'Kurubük bir dönem plajın işletilmesine ilişkin kiralama girişimiyle Datça’nın gündemine geldi. 2018’de Datça Kent Konseyi’nin kıyı çalışma grubu ve Muğla Çevre Platformu, Mesudiye ve Yaka’dan katılanlarla bir araya geldi. Kiralama ihalesi o yıl iptal edildi. Koyun yerel halk için ne ifade ettiğini anlamak istersen bu toplantının kaydını okuyabilirsin. Toplantıda özellikle kıyıya serbestçe ulaşabilme meselesinin neden önemsendiğini, söz alanların anlatımlarında görebilirsin.',
      ] },
    ],
    map: { label: 'Kurubük kıyısı, Mesudiye', query: '36.67606,27.53756' },
    access: ['Kurubük’e Ovabükü–Palamutbükü kıyı yolundan gidilir. Merkezden 9-3 ile Ovabükü’ne veya 9-5 ile Palamutbükü’ne ulaştıktan sonra koya kalan yol için ayrıca araç ayarlayabilirsin. Bu hatların programında Kurubük plajında bir durak yer almıyor.'],
    routes: ['datca-mesudiye-9-3', 'datca-palamutbuku-9-5'],
    stayNote: 'Kurubük’ü günübirlik gezmek için iki yönde de konaklama bulunur. Ova Otel ile Karia Pansiyon doğuda Ovabükü’nde, Badem Otel batıda Palamutbükü’ndedir. Haritadaki yol bağlantısına göre seçim yapabilirsin.',
    stayIds: ['2022-48-2388', '2022-48-1865', '2022-48-1022'],
    sources: [coastalHistory, { title: 'Alper, Karaytuğ ve Sak · Datça–Bozburun kıyılarında yaşayan küçük kabuklular', url: 'https://dergipark.org.tr/tr/download/article-file/116306' }, { title: 'Muğla Çevre Platformu · Kurubük’te 2018’deki kiralama girişimi', url: 'https://mucep.org/datca-kurubuk-koyu-ihalesi-iptal-edildi/' }, district],
  },
  domuzbuku: {
    sections: [
      { heading: 'Domuzçukuru adıyla da bilinen kıyı', paragraphs: [
        'Datça’nın güney kıyısındaki Domuzbükü’ne denizden yaklaşırken çamla kaplı yamaçların aşağıda kum ve çakılla buluştuğunu görürsün. Koy kara yoluna bağlanmadığı için sahildeki günün ritmini teknelerin geliş gidişi belirler. Kıyıya çıkıp plajda kalmakla, tekneden suya girip kısa süre sonra yola devam etmek iki ayrı ziyaret biçimidir.',
        'Bir tur seçerken programdaki “yüzme molası” ifadesinin ne anlama geldiğini sor. Bazı programlarda mola tekneden denize girmek içindir. Kıyıya çıkmak veya plajda dolaşmak için süre ayrılmayabilir. Özellikle iyi yüzemeyen biriyle geliyorsan iskeleden mi binileceğini, suya tekneden mi girileceğini önceden bilmek önemli.',
      ] },
      { heading: 'Karia Yolu’nun denize indiği etap', paragraphs: [
        'Karia Yolu haritasında Domuzçukuru adıyla işaretlenen koy, Eski Datça’dan ya da Kargı üzerinden yürüyenlerin denize ulaştığı noktadır. Buradan batıya giden 11 numaralı etap, Mesudiye kıyılarını aşarak Palamutbükü’ne varır. İki ucu da deniz seviyesinde olmasına rağmen patika koyların arasındaki yamaçları tekrar tekrar aşar. Yaklaşık 17,5 kilometrelik etabın toplam tırmanışı 740 metreyi bulur.',
        'Tekne molasında patikanın girişini görmek istiyorsan kaptanın belirttiği saatte kıyıya dönebileceğin kadar ilerle. Etabın tamamını yürümek içinse ayrı bir gün ayırıp dönüş aracını Palamutbükü tarafında planlayabilirsin.',
      ] },
      { heading: 'Güneyden esen rüzgârı hesaba kat', paragraphs: [
        'Koyun denize açılan yüzü güneydedir. Yamaçlar kıyıyı birçok yönden kuşatsa da güneyden rüzgâr geldiğinde teknenin nerede duracağı değişebilir. Karada daha uzun kalmak isteyenler için en uygun turu belirlerken yalnızca kalkış saatini değil, kaptanın bu koyda o gün nasıl mola vermeyi düşündüğünü de öğrenmek yararlı olur.',
      ] },
      { heading: 'Karada kalacaksan dönüşünü de ayarla', paragraphs: [
        'Tekne seni koyda bırakacaksa hareket etmeden önce dönüşün aynı tekneyle yapılıp yapılmayacağını öğren. Buluşma saatine ek olarak kıyının hangi bölümünden alınacağını da konuş. Çamlar ve plaj denizden tek parça görünür. Karaya çıkınca bir uçtan diğerine yürümek zaman alır. İçme suyunu ve kuru giysini tekneden ayrılırken almak, koyda açık bir tesis aramak zorunda kalmadan deniz molanı tamamlamanı sağlar.',
      ] },
    ],
    map: { label: 'Domuzbükü (Domuzçukuru) kıyısı · tekne buluşma yeri ayrıca belirlenir', query: '36.67490,27.63713' },
    access: ['Günübirlik ziyaret için Datça Limanı’ndan veya Mesudiye kıyısından kalkan teknelerle görüşebilirsin. İskeleni, teknenin adını ve Domuzbükü’nün o günkü programa dâhil olduğunu teyit et. Harita koyun yerini gösterir. Tekneye bineceğin yer için kaptanın verdiği konumu kullan. Yürüyüş için Karia Yolu’nun resmî etap izini kullan.'],
    stayNote: 'Aşağıdaki tesisler tekne yolculuğundan önce veya sonra kalabileceğin yerlerdir. Datça Sapphire Hotel ve Konak Tuncel Efe merkez limanına, Ogün Pansiyon ise Mesudiye’deki Hayıtbükü kıyısına yakındır. Konaklamayı teknenin kalkacağı yere göre seçebilirsin.',
    stayIds: ['2022-48-1588', '2022-48-1576', '2022-48-2101'],
    sources: [district, province, carianTrail, { title: 'Karia Yolu · Domuzçukuru–Palamutbükü etap kaydı', url: 'https://www.wikiloc.com/hiking-trails/karia-yolu-11-domuzcukuru-palamutbuku-69187305' }],
  },
  kizilbuk: {
    sections: [
      { heading: 'Gabaklar adı hangi koyu anlatıyor?', paragraphs: [
        'Mesudiye’de Hayıtbükü’nün hemen doğusundaki küçük koya hem Kızılbük hem Gabaklar denir. Yarımadada başka Kızılbük adlarına da rastlandığı için buluşma konumunu gönderirken “Gabaklar Plajı, Mesudiye” diye aramak özellikle işe yarar.',
        'Mesudiye’ye gelenlerin sıkça birlikte andığı üç kıyıyı batıdan doğuya sıralarsan önce uzun Ovabükü, sonra kavisli Hayıtbükü ve en son Kızılbük gelir. Kıyılarını adlarıyla eşleştirmenin güzel bir yolu sabah birinde yüzüp diğerine öğleden sonra geçmektir. Kızılbük küçük olduğu için sahili tanımaya kısa bir gezinti yeter.',
      ] },
      { heading: 'Gabaklar’ın çakılları ve kayalık ucu', paragraphs: [
        'Yürürken ayaklarının altında kumla küçük çakıllar birbirine karışır. Su durgunsa maskeyle kıyının hemen açığında bu zeminin su altında nasıl devam ettiğini görebilirsin. Biraz dönüp karaya baktığında Hayıtbükü ile arana giren tepenin koyu nasıl çevrelediği de seçilir.',
        'Kumsalın ucunda kayalar başlar. Bu noktadan sonra kıyı dikleşir, su çizgisini izleyerek bir sonraki koya yürümek mümkün olmaz. Kısa bir kıyı gezisi için kayalıkların başladığı yerde dön. Hayıtbükü’ne geçmek istiyorsan iki koyu karadan birbirine bağlayan yolu kullan.',
      ] },
      { heading: 'Kıyıdan içerideki patikalara', paragraphs: [
        'Gabaklar, Karia Yolu’nun Mesudiye kıyılarından geçtiği kesime yakındır. Burada deniz çantasını bırakıp önüne çıkan ilk patikayı izlemek kısa bir sahil gezintisinden daha uzun bir yürüyüşe dönüşebilir. Kıyıdan biraz uzaklaşmak istiyorsan başlangıç noktanı kaydedip dönüşünü aynı yoldan yapabilirsin. Domuzçukuru’na devam edeceksen resmî etap haritasını açıp yürüyüşe ayrı bir gün ayır.',
      ] },
      { heading: 'Kızılbük’te kalmak mı, Hayıtbükü’nden gelmek mi?', paragraphs: [
        'Odadan çıkıp kısa bir yürüyüşle yüzmeye gitmek istiyorsan Gabaklar çevresindeki konaklama yerlerinin tam konumuna bak. Sokak adresinde “Hayıtbükü” yazdığı hâlde tesis Kızılbük kıyısında olabilir. Yemek için kıyıda kalmayı düşünüyorsan mutfağın o gün açık olup olmadığını sor. Akşamı başka bir sahilde geçirmek isteyenler ise dönüşü Hayıtbükü’ne ayırabilir. Araçsız geziyorsan gidiş kadar dönüş yürüyüşünün ışığını ve saatini de gözet.',
      ] },
    ],
    map: { label: 'Kızılbük (Gabaklar Plajı), Mesudiye', query: '36.68394,27.57825' },
    access: ['Araçla Mesudiye üzerinden Hayıtbükü’ne inip doğudaki Gabaklar yönüne devam edilir. 9-3 Datça–Mesudiye hattıyla Hayıtbükü’ne gelebilirsin. Buradan kıyıya kalan bölümü ayrıca yürümen veya araçla geçmen gerekir. Hayıtbükü durağından ayrılmadan önce Gabaklar’a giden yolun girişini sorabilirsin.'],
    routes: ['datca-mesudiye-9-3'],
    stayNote: 'Gabaklar Boutique Otel ve Kızılbük Ahşap Evleri bu koy çevresindedir. Her iki tesisin adresinde de Hayıtbükü Sokak adı geçer. Denize inen yolu, oda konumunu ve varsa yemek düzenini tesisle görüşebilirsin.',
    stayIds: ['2022-48-1986', '2022-48-2405'],
    sources: [mesudiye, { title: 'inDatça · Kızılbük kıyısı ve kayalıklar', url: 'https://indatca.com/datca-kizilbuk/' }, carianTrail],
  },
  'murdala-koyu': {
    sections: [
      { heading: 'Cumalı’dan yarımadanın kuzey yüzüne', paragraphs: [
        'Murdala’yı Palamutbükü’nde denize girilen bir günün sonuna eklemek haritada kolay görünür. Oysa iki kıyının arasında hem yarımadanın sırtı hem de Cumalı’dan sonra başlayan bir toprak yol var. Datça Kaymakamlığı koyun Cumalı’ya uzaklığını yaklaşık on kilometre olarak verir. Son bölümde yolun taşlı zemini nedeniyle kısa görünen bu mesafe için zaman ayırmak gerekir.',
        'Cumalı’dan kuzeye inerken manzara da değişir. Çam ve sandal ağaçları yamaçlarda kalır. Koya yaklaştıkça daha düz kesimlerde zeytin ve incir bahçeleri görülür. Bu alanlar köyün üretim arazileridir. Kıyıya geçerken mevcut yolu izlemek hem geri dönüşü kolaylaştırır hem bahçelere girmeden manzarayı görmeni sağlar.',
      ] },
      { heading: 'Gökova’ya bakan kıyıda bir gün', paragraphs: [
        'Murdala’nın kıyısı yer yer kumlu, yer yer kayalıktır. Gökova’ya açılan bu tarafta rüzgâr ve dalga, aynı sabah güneyde yüzdüğün koydan farklı olabilir. Önce kıyının iki yönünü dolaşıp sana uygun giriş yerini seç. Suya girmek istemediğin bir günde bile açık denizi ve arkadaki bahçeleri bir arada görebileceğin bir kıyı gezintisi yapabilirsin.',
      ] },
      { heading: 'Güneyde kurduğun planı kuzeye taşırken', paragraphs: [
        'Yarımadanın bu tarafında Murdala ile Mersincik sık sık birlikte anılır. İkincisi haritada komşu görünse de iki koy arasında bir sahil caddesi bulunmaz. Tek günlük gezide dinlenmek istiyorsan birini seç. Tekneden yaklaşacaksan da kaptana hangi koyda durulacağını sorarak beklediğin sahille programdaki noktayı eşleştirebilirsin.',
      ] },
      { heading: 'Karia Yolu ve dönüş hazırlığı', paragraphs: [
        'Murdala’dan geçen Karia Yolu’nun 13 numaralı etabı Knidos’tan başlar, Değirmenbükü üzerinden Mersincik’e uzanır. Knidos ile Mersincik arasındaki yürüyüş tek yönde yaklaşık 18,4 kilometredir. Deniz seviyesine defalarca inip çıkan patikada toplam tırmanış 830 metreyi aşar. Güzergâhı incelerken kıyı çizgisine olduğu kadar bu iniş çıkışlara da bak.',
        'Yalnızca Murdala’da bir gün geçireceksen karadan dönüşün Cumalı yönündeki toprak yol üzerindendir. Suyunu köyden al, taşlı bölümü gün ışığında geçecek kadar vakit bırak.',
      ] },
    ],
    map: { label: 'Murdala Koyu, Cumalı · kuzey kıyısı', query: '36.74550,27.44870' },
    access: ['Karadan ulaşım Cumalı üzerinden yapılır. Son yaklaşık on kilometre toprak yoldur. Özellikle yağışın ardından yolun durumunu köyde sor. 9-5 Belen hattının Cumalı’dan geçen seferleri köye ulaşım sağlar. Buradan Murdala’ya düzenli sahil seferi gösterilmediği için kalan bölümle dönüşü ayrıca planla.'],
    routes: ['datca-belen-9-5'],
    stayNote: 'Murdala’yı günübirlik görmek için Cumalı’da kalabilirsin. Gocakapı Taşevler köy merkezinde, Karia Hotel ise Palamutbükü yönündedir. İkisinden de koya varmak için toprak yolu ayrıca geçmen gerekir.',
    stayIds: ['26245', '2022-48-0675'],
    sources: [district, carianTrail, { title: 'Karia Yolu · Knidos–Mersincik etap kaydı', url: 'https://www.wikiloc.com/hiking-trails/karia-yolu-13-knidos-mersincik-69187725' }],
  },
};
