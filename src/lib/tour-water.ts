import type { DestinationDetail } from './destination-types';

const ucpaQuestions = { title: 'UCPA Türkiye · Ekipman, yaş ve çıkış noktaları', url: 'https://ucpa.com.tr/sss/' };

export const waterTours: Record<string, DestinationDetail> = {
  'datcada-ruzgar-sorfu': {
    sections: [
      { heading: 'İlk buluşma Kızlanaltı’ndaki sörf okulunda', paragraphs: [
        'Kızlanaltı’nda rüzgâr sörfü denemek için Flow Datça’nın Kösekesik mevkiindeki okulundan ders alabilirsin. Ders için otelin sahilindeki okulda buluşulur. Sabah Datça merkezinde uyanıp denizi durgun görmen, Kızlanaltı’nda aynı koşulları bulacağın anlamına gelmez. Eğitmenle konuşurken kaç saat ayırabileceğini ve daha önce tahta üzerine çıkıp çıkmadığını söyle. Böylece hem uygun saati hem de seviyene uygun çalışmayı birlikte seçebilirsiniz.',
      ] },
      { heading: 'Tahtada denge, elde yelken', paragraphs: [
        'Rüzgâr sörfünde yelken doğrudan tahtaya bağlıdır. İlk derste hızlanmaktan önce tahtanın üzerinde durmayı, yelkeni kaldırmayı ve rüzgârın nereden geldiğini anlamayı çalışırsın. Gidiş kadar geri dönüşü de öğrenmek gerekir. Kıyıda eğitmenin göstereceği iki noktayı işaret olarak seçmek, denize çıktığında yönündeki değişikliği fark etmeyi kolaylaştırır.',
        'Daha önce birkaç saat ders aldıysan bunu “başlangıç seviyesi” demekle geçiştirme. Örneğin gidebildiğini ama dönerken dengeni kaybettiğini söylemek, eğitmenin zamanı doğru beceriye ayırmasını sağlar. Ekipman kiralamayı düşünüyorsan okulun bağımsız kullanım için beklediği düzeyi, çalışabileceğin alanı ve kıyıya dönüş saatini önceden öğren.',
      ] },
      { heading: 'Tek ders, kurs ve belediye okulu', paragraphs: [
        'Kısa tatilde bir seans, sporu tanımak için yeterli bir başlangıç olabilir. Birkaç gün ayıracaksan aynı manevrayı farklı rüzgârlarda yeniden deneme imkânın olur. Bölgede UCPA da tek ders ve beş derslik paket sunuyor. UCPA’da dersler 90 dakika sürüyor. Okul en fazla dört kişilik grupları yaşa ve deneyime göre oluşturuyor.',
        'Datça Belediyesinin Yelken ve Windsurf Okulu ise yedi yaşından itibaren çocuklar için eğitim ve yetişkin seansları duyuruyor. Belediye programına başvuracaksan kayıt dönemini ve eğitimin yapılacağı kıyıyı doğrudan okuldan öğren. Haritadaki işaret Flow’un ders yerine aittir.',
      ] },
    ],
    map: { label: 'Flow Datça Sörf Okulu, Kızlanaltı', query: '36.764562,27.730313' },
    access: ['Merkezden Marmaris yönüne çıkıp Kızlanaltı Kösekesik mevkiinde Flow Datça’ya giden sahil yolunu kullan. Okulun verdiği adres Marmaris yolunun 10. kilometresidir. Toplu taşımayla geleceksen yalnızca “Kızlan” demek yerine bu kıyı adresini okulla paylaş ve en uygun iniş noktasını öğren.'],
    stayNote: 'Flow Datça Surf & Beach Hotel ders yerinde, Dirik Surf Club ise aynı Kızlanaltı–Gebekum kıyısında bulunur. Derin Bahçe Pansiyon da yakın çevrede bir seçenektir. Ders ve konaklamayı ayrı alacaksan rezervasyonların hangi işletmede olduğunu karşılaştır.',
    stayIds: ['12228', '26822', '23053'],
    sources: [
      { title: 'Flow Datça · Sörf okulu ve adresi', url: 'https://flowdatca.com/sorf/' },
      { title: 'UCPA Türkiye · Datça’da rüzgâr sörfü dersleri', url: 'https://ucpa.com.tr/tum-turlar/ruzgar-sorfu-egitimi/' },
      { title: 'Datça Belediyesi · Yelken ve Windsurf Okulu', url: 'https://www.datca.bel.tr/haberler/ruzgari-arkasina-alan-gencler-denizle-bulusuyor' },
    ],
  },
  'datcada-kano-sup': {
    sections: [
      { heading: 'Gün batımı turu Acroter sahilinden başlıyor', paragraphs: [
        'UCPA’nın Datça’daki gün batımı gezisi için buluşma yeri Kızlan kıyısındaki Acroter Surf Okulu. Grup otelin sahilinde eğitmenle tanışır, kürekleri ve can yeleklerini alır. Buradan Yassıada yönüne gidilir ve hava kararmadan kıyıya dönülür. Gün batımını su üzerinde izlemek istiyorsan kaydını bu çıkışa yaptır. Dirik Surf Club’dan düzenlenen gün doğumu buluşması ayrı bir etkinliktir.',
      ] },
      { heading: 'Kano ile ayakta kürek arasında seçim', paragraphs: [
        'Kanoda oturarak kürek çekersin. Göz hizan suya yakın kalır ve aynı anda ayakta dengede durmaya çalışmadan çevreyi izleyebilirsin. SUP tahtasında ayakta durduğunda ise Yassıada’ya giden grubu ve kıyının çizgisini daha yüksekten görürsün. İlk kez deneyeceksen bunu kayıt sırasında söyle. Eğitmen kıyıda göstereceği hareketleri ve sana ayıracağı ekipmanı ona göre hazırlar.',
        'İki kişi gidiyorsanız ikinizin de aynı aracı seçmesi gerekip gerekmediğini ve çift kişilik kano seçeneğini sorabilirsiniz. Turun ilanında kano ve SUP birlikte sunuluyor. Tahta, kürek ve can yeleği işletme tarafından sağlanıyor. Gezi boyunca kendi telefonunla fotoğraf çekeceksen su geçirmez bir kılıf kullanmak ve ellerini kürek için serbest bırakmak işini kolaylaştırır.',
      ] },
      { heading: 'Dönüş saati güneşin batışına bağlı', paragraphs: [
        'Yola çıkış, yaz boyunca her gün aynı saate bağlanabilecek bir randevu değil. UCPA bu geziyi sezon içinde, hava uygunsa düzenliyor. Gidişte sakin görünen su dönüş yönünde dalgalanabileceği için rotayı ve süreyi eğitmen belirliyor. Hava elvermezse işletme etkinliği uygun bir güne erteliyor. Datça’da tek akşamın varsa ödeme yapmadan önce alternatif tarihi kullanıp kullanamayacağını konuş.',
        'Akşam başka bir koya geçeceksen transferini güneşin batışına göre ayarla. Kıyıya dönüşten sonra ekipmanı teslim etmek ve üstünü değiştirmek için de vakit gerekir. Kuru giysini ve havlunu buluşma yerinde bırakabileceğin bir dolap olup olmadığını başlarken sor.',
      ] },
    ],
    map: { label: 'Acroter Hotel sahili · UCPA gün batımı turu', query: '36.762611,27.771521' },
    access: ['Çıkış, Kızlan Mahallesi Kızlan Sokak 537 numaradaki Acroter Hotel & Spa’nın sahilindedir. Merkezden 9-9 Datça–Gölmar hattı bu bölgeye gider. Acroter’e ulaşmak için en yakın durağı işletmeyle belirle. Akşam dönüşünde sefer kalıp kalmadığını gün batımı saatine göre kontrol et.'],
    routes: ['datca-golmar-9-9'],
    stayNote: 'Acroter Hotel & Spa turun başladığı kıyıdadır. Adaburnu Gölmar Otel ve Nima Apart Otel de Kızlan’ın bu kesiminde yer alır. Erken saatli Dirik çıkışını seçtiysen onun sahile giriş konumunu ayrıca al.',
    stayIds: ['16485', '14059', '2022-48-1727'],
    sources: [
      { title: 'UCPA Türkiye · Yassıada rotasında gün batımı turu', url: 'https://ucpa.com.tr/tum-turlar/sunset-stand-up-paddle-kano/' },
      ucpaQuestions,
    ],
  },
  'datcada-kitesurf': {
    sections: [
      { heading: 'Adaburnu’nda konaklama, rüzgâra göre eğitim kıyısı', paragraphs: [
        'Datça’da uçurtma sörfü için UCPA’nın konaklamalı programı Adaburnu Gölmar Otel’de düzenleniyor. Harita oteli gösteriyor. İlk eğitmen buluşmasının saatini ve hangi kıyıda yapılacağını rezervasyonda öğren. Okul, denizdeki çalışmayı rüzgâra göre planlıyor ve gerektiğinde daha uygun bir sahile servisle geçtiğini belirtiyor. Zaten Datça’da kalacak yerin varsa konaklamasız ders için de kayıt alıyor.',
      ] },
      { heading: 'Önce uçurtma, sonra tahta', paragraphs: [
        'Uçurtma sörfünde tahtayı su üzerinde ilerleten, uçurtmanın rüzgârdan aldığı çekiş gücüdür. Yeni başlayanlar ilk buluşmada eğitmenle çalışma alanını tanır, ekipmanı ve güvenlik sistemini inceler. Sudan kalkıp tahta üzerinde ilerlemeden önce uçurtmayı yönlendirme ve onun çekişiyle suda hareket etme çalışmaları yapılır. Tatilinde yalnızca bir ders alacaksan neyi deneyebileceğini bu sıraya göre düşün. İlk seansın önemli bir bölümü uçurtmayı tanımaya ayrılabilir.',
        'Daha önce ders aldıysan en son hangi aşamada kaldığını tarif et. Suda uçurtmayı yönetmekle tahtayla düzenli olarak kalkabilmek farklı başlangıç noktalarıdır. Eğitmen seviye tespitinden sonra çalışmanı planlar. UCPA, açık deniz uygulamalarında grubu bir güvenlik teknesinin izlediğini belirtiyor.',
      ] },
      { heading: 'Üç gecelik kampta derslerin dağılımı', paragraphs: [
        'Gölmar’daki dört günlük pakette üç gece konaklamaya bir buçuk saatlik kuramsal ders ile ikişer saatlik iki uygulama dersi eşlik ediyor. Ders grupları en çok dört kişilik. Bu süreler grubun ders saatlerini gösterir. Uçurtmayla fiilen ne kadar çalışacağını merak ediyorsan grupta kaç uçurtma kullanılacağını ve katılımcıların nasıl sıraya girdiğini sor. Ders sırasında ekipman kullanımı pakete dâhil.',
        'UCPA, Datça’daki uçurtma sörfü etkinlikleri için 18 yaş ve üzerini öneriyor. Rüzgâr çıkmayan günlerde alternatif etkinlik sunulabildiğinden, önceliğin suda eğitimse başka güne ders aktarma koşulunu kayıtta konuş. Tek derslik rezervasyon ile konaklamalı kampın süresi ve içeriği farklıdır.',
      ] },
    ],
    map: { label: 'Adaburnu Gölmar Otel · konaklamalı programın tesisi', query: '36.760791,27.774340' },
    access: ['Datça merkezden 9-9 Gölmar hattıyla Adaburnu tarafına ulaşılabilir. Araçla gelirken Kızlan Mahallesi, Kızlan Küme Evleri 627 adresini kullan. Tek derse katılacaksan doğruca otele gitmeden önce UCPA’dan o günkü buluşma konumunu al.'],
    routes: ['datca-golmar-9-9'],
    stayNote: 'Adaburnu Gölmar Otel, üç gecelik pakette adı geçen tesistir. Yalnız ders alıp kendi konaklamanı düzenleyeceksen çevrede Acroter Hotel & Spa ile Nima Apart Otel de bulunur.',
    stayIds: ['14059', '16485', '2022-48-1727'],
    sources: [
      { title: 'UCPA Türkiye · Adaburnu Gölmar konaklamalı kitesurf programı', url: 'https://ucpa.com.tr/tum-turlar/datca-adaburnu-golmarda-3-gece-4-gun-kitesurf-programi/' },
      { title: 'UCPA Türkiye · Konaklamasız uçurtma sörfü dersleri', url: 'https://ucpa.com.tr/tum-turlar/kitesurf-egitimi/' },
      ucpaQuestions,
    ],
  },
  'datca-cocuk-yelken-kampi': {
    sections: [
      { heading: 'Çocuğu teslim edeceğiniz yer Emecik’teki kamp', paragraphs: [
        'Ana Yelken’in Datça kampı, Emecik Küme Evleri 440/A adresinde. Kampçıların kaldığı odalar ve denize çıktıkları eğitim parkuru aynı koyda yer alıyor. Program, çocuğun bir grupla kalıp gününü eğitmenleriyle geçirdiği yatılı bir kamp. Ailece tatil yaparken yalnız gündüzleri derse katılmayı düşünüyorsanız okulun ayrı bir yaz okulu başvurusu var. Hangi programa kayıt yaptığınızı yolculuğu ayarlamadan önce belirleyin.',
      ] },
      { heading: 'Yaş grupları ve kullanılacak tekneler', paragraphs: [
        'Ana Yelken kampta 7–16 yaş aralığında katılımcı kabul ettiğini belirtiyor. Çocuklar dönem başındaki değerlendirmede deneyimlerine göre gruplara ayrılıyor. Küçük yaş grubunda boy ve kiloya göre tek kişilik Hartley 10 veya RS Tera kullanılıyor. Daha büyük çocukların eğitiminde iki ya da üç kişinin birlikte kullanabildiği Hartley 12 ve RS Feva da yer alıyor.',
        'Kardeşlerin aynı döneme katılması, teknede ya da ders grubunda birlikte olacakları anlamına gelmeyebilir. İlk kez tekneye binecek çocuğa günü anlatırken yalnızca denizde geçecek saatlerden söz etmeyin. Karada tekneyi hazırlamak, dersin sonunda malzemeyi toplamak ve ekiple yapılan çalışmalara katılmak da kampın bir parçası.',
      ] },
      { heading: 'Konaklama, çanta ve aileyle iletişim', paragraphs: [
        'Okul yedi ve on günlük kamp programları yayımlıyor. Açık dönemleri başvuru sırasında öğrenebilirsiniz. Kampçılar tesisin ortak odalarında kalıyor. Her çocuğa gelişimini izleyeceği bir seyir defteri veriliyor. Deniz dışında kuramsal yelken dersleri ve takım oyunları da var. Deniz eğitiminin saatleri hava koşullarına göre değişebiliyor.',
        'Kampın eşya listesinde can yeleği, deniz ayakkabısı, matara ve yelken likrası var. Alışverişten önce çocuğun bedenine uygun yeleği nasıl temin edeceğinizi sorun. Velilerin kampa ziyaretçi olarak girişi sınırlandırılıyor ve çocuklarla telefon görüşmesi belirlenen zamanlarda yapılıyor. Ayrılmadan önce görüşme düzenini çocuğunuza anlatmak ilk günleri kolaylaştırır.',
      ] },
    ],
    map: { label: 'Ana Yelken Datça kampı, Emecik Küme Evleri 440/A', query: '36.759557,27.777584' },
    access: ['Tesis, Datça–Marmaris yolunun Emecik tarafındadır. Okul ulaşım ve transferi kamp ücretinden ayrı tutuyor. Varış saatinizi bildirip teslim için kamp girişinde kiminle buluşacağınızı öğrenin. 9-4 Datça–Aktur hattı Periliköşk ve Emecik yönünden geçer. En yakın durakla kamp girişi arasını ayrıca planlayın.'],
    routes: ['datca-aktur-9-4'],
    stayNote: 'Yatılı kampçıların konaklamasını Ana Yelken düzenler. Çocuğunu bırakırken veya almaya gelirken bölgede gecelemek isteyen aileler için Kastro Tireli Pansiyon ve Dört Mevsim Butik Otel, Emecik’te ayrı konaklama seçenekleridir.',
    stayIds: ['24167', '2022-48-1577'],
    sources: [
      { title: 'Ana Yelken · Kamp alanı ve programlar', url: 'https://anayelken.com.tr/tr/kesfet/datca-yelken-kampi-hakkinda/' },
      { title: 'Ana Yelken · Yaş grupları, tekneler ve aileler için bilgiler', url: 'https://anayelken.com.tr/tr/kesfet/datca-yelken-kampi-merak-ettikleriniz/' },
    ],
  },
  'datcada-dalis': {
    sections: [
      { heading: 'Datça Limanı’nda Uçanbalık teknesiyle buluşma', paragraphs: [
        'Uçanbalık Dalış Merkezi, buluşma adresini İskele Mahallesi’nde, Atatürk Caddesi tarafındaki Datça Limanı olarak veriyor. Rıhtıma geldiğinde Uçanbalık adlı tekneyi ara. Aynı limandan günübirlik gezi tekneleri de kalkıyor. Eğitmenle kayıt saatini ve teknenin o sabah nerede bağlı olduğunu konuşmak, ilk dersine zamanında yetişmeni kolaylaştırır.',
      ] },
      { heading: 'Bir dalışlık tanışma mı, iki aşamalı deneme mi?', paragraphs: [
        'Tüple ilk kez suya gireceksen merkez iki farklı deneyim anlatıyor. Deneme dalışında teknedeki kısa bilgilendirmenin ardından suya bire bir eğitmen eşliğinde giriliyor. Amaç ekipmanı ve su altında olma hissini tanımak. O gün için vaktin sınırlıysa dalışın kendi süresiyle rıhtıma dönüş arasındaki zamanı ayrı ayrı öğren. Teknede başka dalıcıların da sırasını beklemen gerekebilir.',
        'PADI Discover Scuba Diving daha kapsamlı bir tanışma programı. Merkezin tarifinde önce eğitmenle sığ suda temel beceriler çalışılıyor ve ardından ikinci bir dalışta bunlar uygulanıyor. İlk günden sonra da bu sporu sürdürmek istiyorsan aldığın programın adını ve eğitmenin kaydettiği çalışmaları sakla. Sertifika eğitimi için döndüğünde hangi aşamadan devam edebileceğini birlikte değerlendirebilirsiniz.',
      ] },
      { heading: 'Kurs almak veya belgeli dalıcı olarak katılmak', paragraphs: [
        'PADI Open Water Diver kursunda kuramsal çalışma, sığ su uygulamaları ve açık su dalışları birlikte yürütülür. Tatil takvimine yerleştirirken yalnız tekne gününü sormak yerine tüm aşamaların hangi günlere yayıldığını öğren. Dönüşte uçak yolculuğun varsa rezervasyonda uçuş saatini de bildir.',
        'Belgesi olanlar için merkezin Datça listesinde Kargı Koyu, Gök Liman’daki duvar ve Armutlu Burnu gibi farklı noktalar var. Gitmek istediğin yeri belirtirken sertifika düzeyini ve son dalış tarihini de paylaş. Merkezin haritasındaki “Akvaryum” adı Gök Liman için kullanılıyor. Gitmek istediğin noktayı bu adla tarif edersen kaptan, grubun düzeyine ve o günkü denize göre rotayı seninle değerlendirebilir.',
      ] },
    ],
    map: { label: 'Uçanbalık teknesinin buluşma adresi, Datça Limanı', query: 'Uçanbalık Dalış Merkezi, Datça Limanı, Atatürk Caddesi, İskele, Datça, Muğla' },
    access: ['İskele Mahallesi’nde Cumhuriyet Meydanı’ndan Atatürk Caddesi yönündeki merkez rıhtımına yürüyebilirsin. Özbel veya Kargı tarafından gelirken meydan bağlantılı 9-2 hattı kullanılabilir. Karaköy’deki Körmen feribot iskelesi yarımadanın başka tarafındadır.'],
    routes: ['ozbel-kargi-9-2'],
    stayNote: 'Konak Tuncel Efe ve Kumluk Otel, Atatürk Caddesi tarafında bulunur. Datça Sapphire Hotel ise limanın Taşlık yönünde kalır. Sabah teknesine katılacaksan bu adreslerden rıhtıma yaya ulaşabilirsin.',
    stayIds: ['2022-48-1576', '2022-48-1801', '2022-48-1588'],
    sources: [
      { title: 'Uçanbalık Dalış Merkezi · Başlangıç programları ve liman adresi', url: 'https://www.ucanbalik.com/' },
      { title: 'Uçanbalık · Datça dalış noktaları', url: 'https://www.ucanbalik.com/dal%C4%B1%C5%9F-noktalar%C4%B1' },
      { title: 'PADI · Discover Scuba Diving ile Open Water Diver arasındaki fark', url: 'https://blog.padi.com/discover-scuba-diving-and-open-water-whats-the-difference/' },
    ],
  },
  'datcada-snorkelle-yuzme': {
    sections: [
      { heading: 'Maske ve şnorkelle denize çıkış için merkez liman', paragraphs: [
        'Datça’da şnorkelle yüzmeyi bir tekne gezisine eklemek istersen Dadya 2’nin buluşma yeri merkezdeki Datça Yat Limanı. Teknenin günlük rota listesinde İnceburun, İncirli İn, Armutlusu ve Akvaryum yer alıyor. İşletme güzergâhı kaptanla birlikte planlama olanağı da sunuyor. Belli bir koy için geliyorsan turu seçerken o gün nerede ve ne kadar yüzüleceğini konuş.',
        'Akvaryum adı burada özellikle önemli. Palamutbükü’nün doğusunda karadan ulaşılabilen Gerence Plajı da aynı adla anılıyor. Datça merkezden kalkan teknenin programını bu plajın harita noktasına göre kurma. Kaptanın işaretlediği mola yerini esas alırsan yolculuk süresi ve kıyıya çıkma imkânı konusunda doğru beklentiyle gelirsin.',
      ] },
      { heading: 'Yüzme molasında suyun altına bakmak', paragraphs: [
        'Şnorkel, su yüzeyinde yüzerek dibi izlemek için kullanılır. Berrak bir günde maskeyle baktığında çıplak kumun bittiği yerde çakıllı kesimi veya suyun altında uzanan bitki örtüsünü seçebilirsin. Datça–Bozburun kıyılarında deniz çayırları da bulunuyor. Her koyda aynı canlılar görülmez. Çayırların içindeki hareketi uzaktan izlemek, ellerinle taşları kaldırmadan da küçük balıkları fark etmene fırsat verir.',
        'Daha önce tekneden denize girmediysen suya giriş ve çıkışın nereden yapılacağını kaptandan öğren. Koyda durulduğunda teknenin seni bekleyeceği yeri ve yüzebileceğin alanı görerek suya gir. Maske ile şnorkelin teknede ve kendi bedenine uygun olup olmadığını rıhtımdan ayrılmadan kontrol et.',
      ] },
      { heading: 'Kıyıdan yüzmek isteyenler için Gerence', paragraphs: [
        'Tekneye binmeden yüzmek istersen Palamutbükü ile Ovabükü arasındaki kıyı yolunda Gerence Koyu’na gidebilirsin. Yukarıdan gördüğün çakıllı kıyıya eğimli bir patikayla inilir. Dönüşte aynı yolu çıkacağını düşünerek yalnızca taşıyabileceğin kadar eşya al. Koyu rüzgâr alıyorsa giriş noktasında suyun hareketine bak. Şnorkelle yüzmek için daha durgun bir günü seçmek de mümkün.',
      ] },
    ],
    map: { label: 'Datça Yat Limanı · Dadya 2 için buluşma bölgesi', query: '36.722249,27.687921' },
    access: ['Cumhuriyet Meydanı’ndan İskele’deki yat limanına yürüyerek gelinir. Harita rıhtıma yaklaşımı gösterir. Belirli bir bağlama yeri için rezervasyonda kaptanın verdiği konumu kullan. Merkez rıhtımı için Özbel–Kargı 9-2 hattının Cumhuriyet Meydanı bağlantısına bak. Karadan Gerence’ye gideceksen 9-5 ile Palamutbükü’ne gelebilirsin. Palamutbükü’nden koya uzanan kıyı yolu için ayrıca ulaşım ayarla.'],
    routes: ['ozbel-kargi-9-2', 'datca-palamutbuku-9-5'],
    stayNote: 'Datça Sapphire Hotel ve Konak Tuncel Efe, limandan tekneye binecekler için İskele Mahallesi’nde iki seçenek. Kıyıdan yüzmek için Gerence’yi seçtiysen Palamutbükü Çeşme Otel’e bakabilirsin.',
    stayIds: ['2022-48-1588', '2022-48-1576', '2022-48-2039'],
    sources: [
      { title: 'Dadya 2 · Günlük tur durakları, tekne ve kalkış limanı', url: 'https://datcayatturu.com/' },
      { title: 'Akdeniz Koruma Derneği · Datça–Bozburun’da deniz yaşamı', url: 'https://www.akdenizkoruma.org.tr/tr/calismalarimiz/projeler/b/datca-bozburun-ozel-cevre-koruma-bolgesi-ekosistem-restorasyonu-icin-denizel-ve-kulturel-korumanin-butunlestirilmesi-projesi' },
    ],
  },
};
