import type { DestinationDetail } from './destination-types'

const section = (heading: string, ...paragraphs: string[]) => ({ heading, paragraphs })
const source = (title: string, url: string) => ({ title, url })
const club = source('DADADOSK · Datça Dağcılık ve Doğa Sporları Spor Kulübü', 'https://www.dadadosk.org/')
const culturalRoute = source('Güney Ege · Datça Kültür Rotası', 'https://www.guneyegeturkiye.com/rota-kategorileri/datca-kultur-rotasi')

export const landTours: Record<string, DestinationDetail> = {
  'karya-yolu': {
    sections: [
      section('Eski Datça’dan mı, Kargı üzerinden mi?',
        'Karia Yolu’nun Datça bölümünde Domuzçukuru’na ulaşan iki ayrı başlangıç var. Rotayı hazırlayan ekibin 10 numaralı etabı Eski Datça’dan, 10A ise ilçe merkezinden Kargı üzerinden gidiyor. Taş sokaklarda kalıyorsan sabah Eski Datça’dan başlamak daha kolay. Merkezde konaklıyorsan Kargı üzerinden geçen etabın GPS kaydını indir. İkisinin de varış yeri aynı olduğu için telefonuna indirdiğin güzergâhın başlangıç adına dikkat et.'),
      section('Etap rakamları gününe nasıl sığar?',
        'Rota ekibinin GPS kaydında Eski Datça–Domuzçukuru etabı yaklaşık 14,5 kilometre ve toplam 380 metre çıkış içeriyor. Datça–Kargı–Domuzçukuru seçeneği yaklaşık 10,9 kilometre, toplam çıkış ise 350 metre civarında. Yani ikinci izde kilometre azalırken tırmanış miktarı ona yakın kalıyor. Özellikle deniz seviyesinde başlayıp bitecek bir yürüyüşü düz bir kıyı gezisi gibi hesaplamak burada yanıltıcı olur.',
        'İki kayıt da tek yönlü. Domuzçukuru Karia Yolu’nda bir sonraki etabın başlangıcı ve kıyıda düzenli kara ulaşımı yok. Varıştan dönüş ayarlamadıysan kendi hızına göre bir geri dönüş saati belirleyip geldiğin izden dönmek, daha rahat bir gün geçirmeni sağlar. İlk kez yürüyeceksen rotanın bir bölümünü sabah gidip öğleye doğru aynı başlangıç noktasına dönebilirsin. Örneğin arabanı Eski Datça’da bırakırsan öğleden sonra köye döndüğünde başka bir araca ihtiyaç duymazsın.'),
      section('Koydan sonra patika nereye gidiyor?',
        'Domuzçukuru’ndan sonra ayrı bir etap Palamutbükü’ne, bir sonraki de Knidos’a uzanıyor. Yarımadanın batı ucunda rota yön değiştirip daha seyrek yerleşimli kuzey kıyısına geçiyor. Bir günlük gezide bu adların hepsini takip etmek gerekmiyor. Seçtiğin etabı çevrimdışı kaydet, başlangıç konumunu işaretle ve öğleden sonraki gün ışığını dönüşe ayır. Yol üzerinde su bulmayı ummak yerine içeceğin suyu yürüyüşe başladığın yerleşimden al.'),
    ],
    map: { label: 'Eski Datça Camii, 10 numaralı etaba ulaşmak için mahalle içi referans', query: '36.739319,27.665800' },
    access: ['9-1 hattı Datça merkezinden Eski Datça’ya gelir. Mahallede yürüyüşe nereden bağlanacağını rota ekibinin 10 numaralı GPS izinden takip et. Kargı tarafından yalnızca parkurun bir bölümünü yürüyeceksen 9-2 hattının Kargı seferi işine yarayabilir. Domuzçukuru’ndan aynı hatta binerek dönemezsin.'],
    routes: ['datca-eski-datca-resadiye-9-1', 'ozbel-kargi-9-2'],
    stayNote: 'Eski Datça’da Taş Konak ve Kocca Ev, 10 numaralı etap için geceyi başlangıç mahallesinde geçirme olanağı sunar. 10A için merkezde, Taşlık tarafında kalmayı tercih edersen Datça Sapphire Hotel’e de bakabilirsin.',
    stayIds: ['23741', '25305', '2022-48-1588'],
    sources: [
      source('Karia Yolu · Datça Yarımadası etapları', 'https://kariayolu.com/datca-yarimadasi/'),
      source('Karia Yolu · Eski Datça–Domuzçukuru GPS izi', 'https://www.wikiloc.com/hiking-trails/karia-yolu-10-eski-datca-domuzcukuru-69187338'),
      source('Karia Yolu · Datça–Kargı–Domuzçukuru GPS izi', 'https://www.wikiloc.com/hiking-trails/karia-yolu-10a-datca-kargi-domuzcukuru-69339756'),
    ],
  },
  'datcada-bisiklet': {
    sections: [
      section('İlk sürüş için Reşadiye’den başla',
        'Reşadiye Camii’nin çevresi, yarımadanın iç köylerinde kısa bir sürüşe başlamak için uygun bir buluşma noktası. Köy içinde önce yürüyerek Koca Ev Sokağı’na uğrayabilir, sonra bisikletle gezeceğin yönü seçebilirsin. Eski Datça’nın taş sokakları, Hızırşah’taki kültür evi ve Kızlan yel değirmenleri Datça Kültür Rotası’nın durakları arasında. İlk kez geliyorsan bunlardan birini seçip dönüşü aynı yere yapmak yeterli.'),
      section('Kültür rotasının bir bölümünü seçmek',
        'Güney Ege Kalkınma Ajansı, Hızırşah Kültür Evi projesi kapsamında 9,5 kilometrelik bir kültür rotasının oluşturulduğunu ve bisiklet yönlendirmeleri konduğunu belirtiyor. Bu ölçü projedeki güzergâha ait. Kaldığın otelden çıkıp seçtiğin iki köyü birbirine bağladığında yapacağın gerçek mesafe, seçtiğin yol ve dönüş noktasına göre değişir.',
        'Yapıları görmek için geliyorsan bisikleti nerede bırakacağını da hesaba kat. Eski Datça’da taş döşeli dar sokaklara girerken kısa bir bölümü yürümek, Hızırşah’ta ise eski kilisenin bahçesinde mola vermek geziyi iki güzel durağa böler. Hacetevi Tepesi’ne uzanan son bölüm yürüyüş patikasıdır. Zirve gezisini ayrıca planlayabilirsin.'),
      section('Kıyıya inmeden dönüş profilini oku',
        'Datça’da bir koyun adını hedef olarak yazınca harita yokuş aşağı bir gidiş önerebilir. Dönüşte aynı yokuş karşına çıkacak. Sürüşten önce toplam çıkışı, yol yüzeyini ve su alabileceğin son yerleşimi kontrol et. Özellikle sıcak günlerde, serin bir saatte inilen yokuşu öğleden sonra çıkmak daha uzun sürer. Kızlan tarafında rüzgârın dönüş yönüne göre nasıl değişeceğini de hesaba kat.',
        'Grup sürüşü istiyorsan DADADOSK’un o güne ait duyurusunda başlangıç yerini ve tempoyu ara. Bir festivalin konaklama ve destek düzeni kendi başına yapacağın köy gezisinden farklıdır. Bisiklet kiralayacaksan teslim yerini, son teslim saatini ve arıza hâlinde hangi numarayı arayacağını ilk pedalı çevirmeden öğren.'),
    ],
    map: { label: 'Reşadiye Camii, önerilen köy sürüşünün başlangıcı', query: '36.755211,27.664194' },
    access: ['Merkezden Reşadiye’ye 9-1 hattı gider. Bisikletini otobüsle taşıyacaksan kabul koşullarını gitmeden önce MUTTAŞ’a sor. Özel araçla geliyorsan caminin çevresindeki dar sokakları geçişe açık bırakıp bisikleti uygun bir park yerinde indir.'],
    routes: ['datca-eski-datca-resadiye-9-1'],
    stayNote: 'Reşadiye’de Mehmet Ali Ağa Konağı, Koca Ev Sokağı’nda. Guest House By West de aynı mahallede. Geceyi Eski Datça’da geçireceksen Taş Konak bir başka başlangıç noktası. Bisiklet için kapalı saklama yeri gerekecekse bunu rezervasyon sırasında sor.',
    stayIds: ['2022-48-0156', '2022-48-1578', '23741'],
    sources: [culturalRoute, source('Güney Ege Kalkınma Ajansı · Bisiklet rotası ve yönlendirmeler', 'https://geka.gov.tr/tr/haber/hizirsah-kultur-evi-ilk-sergisi-ile-hizmete-acildi'), club],
  },
  'hizirsahta-kaya-tirmanisi': {
    sections: [
      section('Hızırşah’a gelmeden buluşma yerini al',
        'Hızırşah’ta hangi kaya yüzüne gidileceğini o günün programı belirler. Datça Dağcılık ve Doğa Sporları Spor Kulübü (DADADOSK), Hızırşah’ta eğitmenlerle tırmanış yaptığını ve programa katılmak isteyenlerin kulüple iletişime geçebileceğini belirtiyor. Tarihini ve deneyimini bildirip o gün ziyaretçi katılımı olup olmadığını sor. Buluşmanın Datça merkezinde mi, köyde mi, yoksa tırmanılacak kayanın yaklaşım yolunda mı olduğunu netleştir. Harita köy merkezini gösterir. Kayaya yaklaşmak için kulübün gönderdiği konumu kullan.'),
      section('Birbirinden farklı kaya yüzleri',
        'Tırmanma rehberinde, rotaların toplandığı kaya yüzleri “sektör” adıyla ayrı ayrı gösteriliyor. Can Baba, Ejderha ve Ay gibi isimlere bu yüzden rastlayacaksın. Aynı sektördeki iki hattın bile uzunluğu ve zorluk derecesi değişebilir. Rehberde Ejderha’nın batıya baktığı ve sabah gölgede kaldığı yazıyor. Bir bölümü seçerken yalnız gittiğin ayı değil, duvarın günün hangi saatinde güneş aldığını da düşünmek gerekir.',
        'İlk kez açık havada deneyeceksen eğitmenin rota seçmesine yardımcı olacak en iyi bilgi, salonda ya da kayada daha önce ne yaptığın. Örneğin ilk kez tırmanacak biriyle yalnızca doğal kayaya ilk kez çıkacak biri için günün başlangıcı farklı olabilir. Başkalarının tırmandığı en yüksek dereceyi ölçü almak yerine o günün ne kadarının tanışma ve hazırlığa ayrıldığını öğren.'),
      section('Kayaya yaklaşma yürüyüşünü de güne kat',
        'Ekipman dağıtımı, kayaya yaklaşma ve dönüş, duvarda geçirilen zamandan ayrı süre ister. Ayakkabı numaranı önceden bildir. Kulüpten kask, kemer ve tırmanış ayakkabısının hangi koşullarda sağlandığını öğren. Tırmanmayacak bir arkadaşın varsa bekleme yerini de sor. Kayanın dibinde düşen taşlara veya çalışan ekiplere maruz kalmadan günü geçirmenin mümkün olup olmadığı seçilen sektöre bağlıdır.',
        'Dönüş saatine göre köyde kısa bir mola ekleyebilirsin. Tırmanış sonrasında kültür evine uğramak istiyorsan o günkü programını ayrıca kontrol et.'),
    ],
    map: { label: 'Hızırşah yerleşimi, tırmanış bölgesine yaklaşım', query: '36.739056,27.649708' },
    access: ['Datça merkezinden köye 9-3 Hızırşah hattı gider. Sektörlerin başlangıçları köy durağından farklı noktalarda olabilir. Eğitmenden o günkü buluşma konumunu ve durağa gelişinden sonra bir araç bağlantısı gerekip gerekmediğini öğren.'],
    routes: ['datca-hizirsah-9-3'],
    stayNote: 'Hızırşah köyünde W. Antic Pansiyon ve Bal Butik Otel (Riga Pansiyon) bulunuyor. Sabah için hangi tesisten hangi buluşma yerine geçeceğini seçilen sektörü öğrendikten sonra karşılaştırabilirsin.',
    stayIds: ['23593', '24942'],
    sources: [club, source('Muğla İl Kültür ve Turizm Müdürlüğü · Datça Tırmanma Rehberi', 'https://mugla.ktb.gov.tr/TR-316786/ege-rota-analizi-ve-datca-tirmanma-rehberi.html'), source('Doğa Aktiviteleri Grubu · Datça sektörleri ve kaya çizimleri', 'https://www.dag.org.tr/media/webdocs/climbing_datca_guide_low.pdf')],
  },
  'kesifrun-datca-10k': {
    sections: [
      section('4 Nisan 2027’de Yazı’dan Knidos’a',
        'Türkiye Atletizm Federasyonunun yol yarışları takviminde KeşifRun Datça 10K, 4 Nisan 2027 Pazar günü saat 10.00’da başlayacak şekilde ilan edilmiş. Güzergâh Yazı–Knidos olarak geçiyor. Yazı, ziyaretçilerin çoğunlukla Yazıköy adıyla bildiği yerleşim. Knidos ise yarımadanın batı ucunda, Tekir Burnu’nda. Bu iki ismi işaretleyerek yarış sabahı ile öğleden sonra yarımadanın hangi tarafında olacağını planlayabilirsin.'),
      section('Kayıt sayfası ve yarış sabahı',
        'Federasyon kaydında geç başvuru dönemi 1 Ekim 2026 ile 3 Nisan 2027 arasında gösteriliyor ve kontenjan koşulu belirtiliyor. Katılmayı düşünüyorsan başvururken yarış adında hem Datça’yı hem 10K mesafesini kontrol et. Kesin buluşma adresi, yarış numarasının nerede teslim edileceği ve başlangıç alanına hangi saatte girileceği için yarışçı bilgilendirmesini esas al. Federasyonun yazdığı 10.00 koşunun başlangıç saati.',
        'Arkadaşların seni finişte karşılayacaksa sabah aynı araçla köye gelmeden önce dönüşü konuşun. Bir aracın Yazı’da kalmasıyla Knidos tarafında beklemesi günün sonunda farklı bir yolculuk gerektirir. Yarış servisi ya da seyirciler için yol düzenlemesi ilan edilirse saatleri ayrıca kontrol et.'),
      section('Yarış dışında aynı yolu koşmak',
        'Yazı ile Knidos’u birleştiren günlük yol ile organizasyonun yarış günü kullanacağı kesim bire bir aynı olmayabilir. Federasyon sayfasında iki yer adı ve on kilometrelik mesafe var. Buradan hareketle bağımsız bir koşu için dönüşler, su istasyonları veya araç trafiğine kapalı bir parkur çıkarılamaz. Yarış tarihi dışında ören yerini görmeye geliyorsan geziyi kendi ulaşımın ve o gün geçerli müze saatleriyle planla. Finişten sonra tiyatroyu ve liman teraslarını da görmek istiyorsan önce çantanı alabileceğin yeri ve dönüş aracının kalkacağı saati belirle. Küçük tiyatrodan limana bakmak için ne kadar vaktin olduğunu böylece baştan bilirsin.'),
    ],
    map: { label: 'Yazıköy yerleşimi, yarışın başlangıç bölgesi', query: '36.693322,27.447071' },
    access: ['Datça–Belen 9-5 hattı Yazıköy üzerinden geçer. Pazar tarifesindeki köye varışını yarıştan önceki buluşma saatiyle karşılaştır. Hat Knidos’a kadar uzanmaz. Dönüş düzenin, organizatörün duyurduğu bir servis ya da önceden ayarladığın bir araç olabilir. Haritada köy merkezi işaretlidir. Çıkış çizgisinin kesin adresini yarış duyurusundan al.'],
    routes: ['datca-belen-9-5'],
    stayNote: 'Tarihi Knidos Pansiyonu Yazıköy’de. Knidia Ecofarm’ın Yazıköy girişindeki sapaktan sonra ayrıca 3,5 kilometrelik yolu var. Yarış sabahını planlarken tesisin adresinde Yazı yazmasının çıkış çizgisine yürüyebileceğin anlamına gelmediğini hesaba kat.',
    stayIds: ['24408', '20113'],
    sources: [source('Türkiye Atletizm Federasyonu · KeşifRun Datça 10K yarış kaydı', 'https://kosu.taf.org.tr/kesifrun-datca-10k?id=191&lang=tr'), source('MUTTAŞ · Datça–Belen güzergâhı', 'https://ulasim.muttas.com.tr/hat/9-5-datca-belen-76'), source('Knidia Çiftliği · Yazıköy’den ulaşım', 'https://knidia.com/tr/sss/')],
  },
  'hacetevi-tepesi': {
    sections: [
      section('Köy meydanından veya Eski Cami’den yola çık',
        'Hacetevi Tepesi için Hızırşah’ta iki başlangıç var. Datça Kültür Rotası’nın yayımladığı tarife göre köy meydanından çıkan yol 2.690 metre. Ölü Sazağı mevkiinden ve proje kapsamında düzenlenmiş sergi alanından geçiyor. Eski Cami tarafından yaklaşan diğer yol ise 2.210 metre. Bu taraftan çıkacaksan caminin yaklaşık 430 metre ilerisindeki Hacetevi yönlendirmesini ara. Yol buradan Batır Kalesi yakınından tepeye ulaşıyor.'),
      section('Makilik yamaçta neye bakmalı?',
        '356 metrelik tepeyi çevreleyen eski tarım terasları, yamacın geçmişte nasıl işlendiğini gösteriyor. Yükselirken duvarların eğime göre nasıl sıralandığına bak. Bir taş duvarın üzerinden geçmek patikadan kısa görünse de terasın bütünlüğünü bozabilir. Güzergâh belgesinde doğru yönün çift beyaz çizgiyle, Hacetevi’ne çıkmayan yolun ise çarpıyla gösterildiği anlatılıyor. Köyden ayrılmadan o gün seçilecek kolun durumunu ve işaretlerin görünür olup olmadığını öğren.',
        'Çıkış ve iniş için ayrı kollar kullanırsan iki patikanın toplamı yaklaşık 4,9 kilometre eder. Köy meydanı ile Eski Cami arasındaki bağlantıyı, aracı bıraktığın yeri ve molalarını bu hesaba ayrıca ekle.'),
      section('Zirvedeki taşlığın adı',
        'Hacetevi adı, zirvede taşların çevrelediği ziyaret yerinden geliyor. Yerel anlatılarda önemli bir kararın eşiğindeki kişi burada niyet eder, rüyaya yatar ve gördüklerini dönüşte köyün büyüklerine anlatırmış. Zirvedeki çukurlar da bu anlatının parçası. Alanı gezerken taşları yerinde bırak. Tepeye aynı gün hem doğa yürüyüşü hem de yörede kuşaktan kuşağa anlatılan bir geleneği tanımak için çıkmak mümkün. Ziyaret için gelenlerle karşılaşırsan onlara yer aç ve fotoğraf çekeceğin zaman izin iste.',
        'Yazın suyu köyden al, güneş yükselmeden başla ve dönüş kolunu seçmeyi gün ışığı azalana kadar erteleme.'),
    ],
    map: { label: 'Hızırşah Eski Camii, Batır Kalesi yönündeki yürüyüş koluna yaklaşım', query: '36.743977,27.654917' },
    access: ['9-3 Hızırşah hattı Datça merkezinden köye ulaşır. Araca bindiğinde yürüyüşe meydandan mı, Eski Cami tarafından mı başlayacağını söyle. Haritadaki işaret caminin yerini gösteriyor. Tepeye çıkan patikanın ayrıldığı yön levhası biraz ileride. İki farklı koldan yürüyüp köyde otobüse yetişeceksen o günün dönüş seferini önceden seç.'],
    routes: ['datca-hizirsah-9-3'],
    stayNote: 'Bal Butik Otel (Riga Pansiyon) ile W. Antic Pansiyon, Hızırşah yerleşiminde kalmak isteyenler için iki seçenek. Konaklayacağın yerden köy meydanına ve Eski Cami’ye ulaşımı ayrı ayrı değerlendirerek sabah hangi koldan çıkacağına karar verebilirsin.',
    stayIds: ['24942', '23593'],
    sources: [source('Datça Kültür Rotası · Hacetevi yürüyüş yolları ve yerel inanışlar', 'https://www.guneyegeturkiye.com/assets/user_files/DatcaKulturRotasi/HaceteviTepesi.pdf'), culturalRoute, source('Kültür Envanteri · Hızırşah Camii’nin konumu', 'https://kulturenvanteri.com/yer/hizirsah-camii-datca/')],
  },
}
