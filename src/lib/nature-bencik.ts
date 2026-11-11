import type { DestinationDetail } from './destination-types'

export const bencikVisit: DestinationDetail = {
  sections: [
    {
      heading: 'Balıkaşıran’ın güney kıyısı',
      paragraphs: [
        'Marmaris’ten Datça’ya giderken yarımadanın iyice inceldiği yerde iki körfez birbirine yaklaşır. Kuzeyde Gökova, güneyde Hisarönü vardır. Aradaki dar kara parçası Balıkaşıran adıyla bilinir. Bencik, Hisarönü tarafından gelip bu kıstağın içine doğru sokulan koydur. Haritada kıyı çizgisini parmağınla izlersen neden bir kanalı andırdığını görürsün. Denizin kuzeye doğru en çok ilerlediği yerde bile karşı körfeze geçmek için karaya çıkmak gerekir.',
        'Bencik’in bir kıyısı Datça’ya, öbürü Marmaris’e bağlıdır. Bu yüzden iki ilçenin gezi rehberlerinde de karşına çıkar. Bördübet adıyla karşılaşırsan yönüne dikkat et. Bördübet, kıstağın öbür tarafında, Gökova kıyısında kalır.',
      ],
    },
    {
      heading: 'Dişlice Adası’ndan iç koya',
      paragraphs: [
        'Denizden yaklaşırken koyun ağzında Dişlice Adası’nı görürsün. Tekne içeri girdikçe açık körfez arkanda kalır, iki kıyının birbirine ne kadar yaklaştığını suyun üzerinden seçebilirsin. Tur programlarında Dişlice ile Bencik bu yüzden sık sık yan yana yazılır. Adanın kayalıkları çevresinde verilen yüzme molası ile içerideki koyu gezmek, aynı gün yapılabilecek iki ayrı duraktır.',
        'Koy boyunca çamlık yamaçlar suya kadar iner. Kuzey ucunda kıyının görünüşü değişir. Burada su sığlaşır ve kıyı boyunca sazlıklar görülür. Adanın kayalık yüzünü de bu sazlık kıyıyı da görmek istiyorsan teknenin hangi kesime kadar gideceğini kaptana sor. İki manzara arasındaki fark, koyun ağzından dibine doğru yapılan seyirde daha iyi anlaşılır.',
      ],
    },
    {
      heading: 'Kıstakta yürüyüş ve koruma sınırları',
      paragraphs: [
        'Balıkaşıran’ı yürüyerek tanımak isteyenler için Karia Yolu’nun Çakal’dan gelen 18. etabı kıstağa ulaşır. Yürüyüşü planlarken etabın bitişiyle koyda yüzmek istediğin yeri haritada ayrı ayrı işaretle. Kıyının bazı kesimlerinde tesis girişleri bulunur. Bencik Koyu ve Eski MTA Kampı çevresinde sınırları belirlenmiş alanlar da 2022’de kesin korunacak hassas alan olarak tescil edilmiş. Haritada gördüğün eski kamp adından hareketle çadır kurulabilecek bir yer aramak yerine, kara gezisini işaretli yürüyüş güzergâhına göre planla.',
      ],
    },
  ],
  map: { label: 'Bencik Koyu’nun iç kesimi · denizdeki konum', query: '36.7807,28.0425' },
  access: [
    'Karadan Balıkaşıran’a Marmaris–Datça yoluyla yaklaşılır. Haritadaki işaret suyun üstündedir. Bir kıyı tesisine gideceksen açık olan girişi ve araç bırakabileceğin yeri tesisten öğren. Yürüyüş için Karia Yolu’nun Çakal–Balıkaşıran izini kullan.',
    'Denizden gelmek için Hisarönü kıyısından veya Orhaniye’den kalkan teknelerin programında Bencik’i ara. Buluşacağın iskeleyi işletmeden al. 48-16 Datça–Marmaris hattı Aktur ve Hisarönü üzerinden geçer. Otobüsten iskeleye kadar olan bölümü kalkış yerine göre ayrıca planla.',
  ],
  routes: ['datca-marmaris-48-16'],
  stayNote: 'Datça tarafından gelenler için Dadya Bora Otel Emecik’te, Ak-Tur Datça Kamping Tesisleri ise Aktur’da. Her ikisi de kıstağın batısında kalıyor. Tekneye bineceğin iskeleyi veya yürüyüşün başlangıcını belirledikten sonra tesisten oraya ulaşımı planlayabilirsin.',
  stayIds: ['20704', '17183'],
  sources: [
    { title: 'Muğla İl Kültür ve Turizm Müdürlüğü · Bencik Limanı ve Hisarönü', url: 'https://mugla.ktb.gov.tr/TR-296583/nereye-gidilir.html' },
    { title: 'Marmaris İlçe Millî Eğitim Müdürlüğü · Balıkaşıran ve Bencik kıyısı', url: 'https://marmaris.meb.gov.tr/www/ilcemiz-hakkinda/icerik/27' },
    { title: 'Marmaris Turizm Birliği · Hisarönü Körfezi ve tekne rotaları', url: 'https://www.kalkinmakutuphanesi.gov.tr/assets/upload/dosyalar/marmaris-turizm-birligi-koyleri-kirsal-turizm-envanteri-calismasi-ve-pazar-analizi-raporu.pdf' },
    { title: 'Adriyachts · Bencik Koyu’nun kıyıları ve sazlıkları', url: 'https://www.adriyachts.com/tr/datca-hisaronu-2/' },
    { title: 'Muğla Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü · Bencik koruma alanı ve sınırları', url: 'https://mugla.csb.gov.tr/dogal-sit-tescil-duyurusu-mugla-ili-datca-ve-marmaris-ilceleri-bencik-koyu-ve-eski-mta-kampi-mevkii-ve-cevresinin-koruma-statusunun-kesin-korunacak-hassas-alan-olarak-tescil-edilmesi-duyuru-436164' },
    { title: 'Karia Yolu · Çakal–Balıkaşıran etabı', url: 'https://kariayolu.com/datca-yarimadasi/' },
  ],
}
