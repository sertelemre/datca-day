import type { DestinationDetail } from './destination-types';

const kovanlik = { title: 'Doğa Koruma ve Millî Parklar · Kovanlık Tabiat Parkı', url: 'https://ekotaban.tarimorman.gov.tr/alan/277' };
const akturRates = { title: 'Aktur Datça Kamping · Çadır, karavan ve oda tarifeleri', url: 'https://datcakamping.com/fiyatlar.html' };

export const campDetails: Record<string, DestinationDetail> = {
  'datca-kamp-rehberi': {
    sections: [
      { heading: 'Kovanlık’ta nasıl konaklanır?', paragraphs: [
        'Marmaris’ten Datça’ya gelirken Emecik kıyısındaki Kovanlık Tabiat Parkı kızılçam ormanı ve makilerle kaplıdır. Doğa Koruma ve Millî Parklar, burada bungalov tipi konaklama birimleri bulunduğunu ve parkın günübirlik kullanıma açık olmadığını belirtiyor. Yalnızca piknik yapmak ya da yoldan geçerken plaja inmek istiyorsan bu ziyaret için başka bir durak seç.',
        'Bakanlığın 2026 bungalov tarifesinde Kovanlık için aralık, ocak ve şubatta yüzde 50, kasım, mart, nisan ve mayısta yüzde 30 indirim belirtiliyor. Yer durumunu, senin tarihlerinde uygulanacak bedeli ve anahtar teslim yerini Muğla Doğa Koruma ve Millî Parklar birimine mugla.dkmp@tarimorman.gov.tr adresinden sorabilirsin. Harita parkın genel konumunu gösterir.',
      ] },
      { heading: 'Kendi çadırınla Datça’ya geliyorsan', paragraphs: [
        'Emecik’te çadır veya karavan yeri arıyorsan Aktur Datça Kamping’in parsellerine bak. İşletmenin tarifesinde yer bedeliyle kişi başı ücret ayrı hesaplanır. Çadırını kendin getirmen gerekir. Ekipmansız geliyorsan aynı tesiste ayrıca pansiyon odası bulunur. Bu seçim, merkeze inmeden yarımadanın doğu kıyısında kalmak isteyenler için uygundur.',
        'Amacın her sabah Mesudiye’nin koylarına yürümekse ilçe merkezinin batısında kalmak günlük yolu kısaltır. Örneğin Hayıtbükü Sokak’taki Kapıyanı Camping’in çadır yerleri zeytin ağaçlarının gölgesindedir. İşletme kendi çadırıyla gelenler için kişi başı konaklama ücreti yayımlıyor ve çadır rezervasyonu almıyor. Yola çıkmadan doluluğu sorabilirsin.',
      ] },
      { heading: 'Marmaris tarafındaki Çubucak ve İnbükü', paragraphs: [
        'Marmaris’ten yola çıkanlar Kovanlık’tan önce Hisarönü kıyısındaki Çubucak’a ulaşır. Çubucak işletmesinin 2026 sezonu 1 Mayıs–16 Kasım arasıdır. Bu dönemde hem günübirlik giriş hem de çadır ve karavanla geceleme için ayrı tarifeler uygulanır. Rezervasyon hattı 0850 377 08 48.',
        'İnbükü ise aynı yol üzerindeki ayrı bir tabiat parkı. Resmî tanıtımda çadır ve karavan kullanımından parkın eski mesire yeri dönemine ait bir bilgi olarak söz ediliyor. Geceleme planını buna dayandırmadan önce güncel kabul koşullarını Muğla Doğa Koruma ve Millî Parklar biriminden öğrenebilirsin.',
      ] },
    ],
    map: { label: 'Kovanlık Tabiat Parkı · Emecik’teki park alanı', query: '36.75764,27.89345' },
    access: ['Doğa Koruma ve Millî Parklar, Kovanlık Tabiat Parkı’nı Marmaris–Datça yolunun 44. kilometresinde gösteriyor. 48-16 Marmaris–Datça hattı bu yoldan geçer. Aktur’a ilçe merkezinden 9-4 Datça–Aktur hattıyla gidilir. Çubucak ise Marmaris yönünde, işletmenin tarifine göre Datça yolunun 23. kilometresinde jandarma karakolunun yanındadır.'],
    routes: ['datca-marmaris-48-16', 'datca-aktur-9-4'],
    stayNote: 'Kovanlık çevresinde kendi çadırın veya karavanınla kalmak için Çiftlik’te Ak-Tur Datça Kamping var. Otel odası arıyorsan Datça yönüne devam edip Karaincir ayrımından sahile inerek Kalina Otel’e ulaşabilirsin. Tatilini batıdaki Mesudiye koylarına ayıracaksan Ovabükü’nde Özdemir Kamping daha yakın bir başlangıç noktasıdır.',
    stayIds: ['17183', '2022-48-2188', '2022-48-2148'],
    sources: [
      kovanlik, akturRates,
      { title: 'Doğa Koruma ve Millî Parklar · 2026 bungalov ücretleri ve Kovanlık indirimi', url: 'https://www.tarimorman.gov.tr/DKMP/Belgeler/KORUNAN%20ALANLAR%20%C3%9CCRET%20TAR%C4%B0FES%C4%B0/2026/Ek-9_Kir_Evi_Bungalov_Orman_Kosku_Ucret_Tarifesi-2026.pdf' },
      { title: 'Kapıyanı Camping · Mesudiye’de çadırla konaklama', url: 'https://www.kapiyanicamping.com/kamping-fiyatlar' },
      { title: 'Çubucak Camping · Sezon, giriş ve rezervasyon koşulları', url: 'https://cubucakcamping.com/fiyat-listesi/' },
      { title: 'Doğa Koruma ve Millî Parklar · İnbükü Tabiat Parkı', url: 'https://ekotaban.tarimorman.gov.tr/alan/275' },
    ],
  },
  'aktur-datca-kamp': {
    sections: [
      { heading: 'Çiftlik’te çadır parseli mi, pansiyon odası mı?', paragraphs: [
        'Aktur Datça Kamping, yarımadanın doğusunda, Emecik Mahallesi’nin Çiftlik mevkisinde. Aktur yerleşimi Çiftlik ve Kurucabük olmak üzere iki kıyıya yayılır. Kamp malzemesiyle geliyorsan buluşma noktası olarak kamping resepsiyonunu seç. Ak-Tur’un Datça tesisinde kendi çadırını kurabileceğin veya karavanını bırakabileceğin parsellerin yanı sıra pansiyon odaları da var.',
        'İşletme çadır ya da karavan kiralamıyor. “Çadır yeri” için yapılan rezervasyonda çadırını, yatağını ve diğer kamp malzemelerini kendin getirmelisin. Pansiyon odası ayırırken ise kaç kişinin konaklayacağını bildir. Kamp ile odanın ücretleri ve giriş saatleri ayrı. Kalabalık bir grupla gideceksen kaç parsel gerekeceğini baştan konuş.',
      ] },
      { heading: 'Kamp ücretini nasıl hesaplarsın?', paragraphs: [
        'Tarifede önce seyahat edeceğin ayı, ardından çadır veya karavan sütununu bul. Bir gecenin hesabı, bir parselin yer bedeline o parselde kalacak kişilerin ücretleri eklenerek yapılıyor. Yalnızca çadır yeri için yazan rakama bakarsan aile bütçen eksik kalır. Elektrik, buzdolabı kullanımı ya da çamaşır yıkama gibi ek hizmetleri de kullanacaksan güncel karşılıklarını sor.',
        'Rezervasyon için doğrudan kamp resepsiyonuna 0252 724 61 68 numarasından veya akturcamping@ak-tur.com.tr adresinden ulaşabilirsin. Tarihlerinle birlikte çadır ölçüsünü ya da karavan uzunluğunu ilet. Yanında gelenlerden biri odada kalacaksa bunu ayrıca belirt.',
      ] },
      { heading: 'Orman içinde yemek ve akşam girişleri', paragraphs: [
        'Kampın ortak duşları, bulaşık yıkama ve mutfak alanları var. İşletme parselde mutfak kurulmasına, tüplü ocak ve mangal kullanılmasına izin vermiyor. Karavanla geliyorsan yemek ve su işlerini bu düzene göre planla. Gece 22.00 ile sabah 08.00 arasında sessizlik kuralı uygulanıyor.',
        'İşletmenin 2026 tarifesinde çadır ve karavan parsellerine giriş 13.00–20.00, pansiyon odalarına giriş 14.00–22.00 arasında. Her ikisi için de çıkış saati 12.00. Marmaris’ten geç saatte yola çıkacaksan resepsiyonla aynı gün görüş. Kamp çevresindeki Kovanlık Tabiat Parkı içinse park idaresi ayrıca günübirlik kullanım bulunmadığını bildiriyor.',
      ] },
    ],
    map: { label: 'Ak-Tur Datça Kamping Tesisleri, Çiftlik', query: '36.756752,27.893512' },
    access: ['Datça merkezinden 9-4 Datça–Aktur hattını seç. Marmaris tarafından gelenler 48-16 Datça–Marmaris hattında Aktur durağına bakabilir. Eşyaların ağırsa son bölüm için resepsiyondan girişe en yakın iniş yerini öğren. Bodrum’dan feribotla geliyorsan kara yolculuğun yarımadanın kuzeyindeki Körmen’de başlar.'],
    routes: ['datca-aktur-9-4', 'datca-marmaris-48-16'],
    stayNote: 'Kampın kendi pansiyon odaları için Ak-Tur Datça Kamping ile görüşebilirsin. Kamp alanının dışında otel tercih edersen Kalina Otel Datça, Emecik’in Karaincir tarafında kalır. İki tesis arasındaki yolculuğu ayrıca planla.',
    stayIds: ['17183', '2022-48-2188'],
    sources: [
      { title: 'Ak-Tur · Datça kamping tesisi', url: 'https://www.ak-tur.com.tr/tr/datca-camping.html' },
      akturRates,
      { title: 'Aktur Datça Kamping · Tesis kuralları', url: 'https://datcakamping.com/kamping-kurallari.html' },
      { title: 'Aktur Datça Kamping · Resepsiyon ve ulaşım', url: 'https://datcakamping.com/iletisim.html' },
      kovanlik,
    ],
  },
};
