# datca.day

Datça’nın Türkçe, İngilizce ve Rusça tatil ve ulaşım rehberi. Astro, her dil ve içerik için ayrı bir statik HTML sayfası üretir.

## Geliştirme ve denetim

Node.js 22 ile çalıştırın.

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run events:test
npm run transport:test
npm run build
npm run verify
```

Son komut derlenen sayfalardaki iç bağlantıları, görselleri, başlıkları, kanonik adresleri, diller arası karşılıklı bağlantıları, site haritasını ve yapılandırılmış verileri denetler.

## İçerik güncellemeleri

Etkinlik ve ulaşım görevleri GitHub Actions üzerinde her gün çalışır. Kaynak ve takvim verileri `src/lib` altında tutulur. Her rehber, etkinlik ve sefer sayfası okuru özgün kaynağına götürür. Yerelde yenilemek için `npm run events:update` veya `npm run transport:update` çalıştırın.

## Yayın

Cloudflare Pages, `sertelemre/datca-day` deposunun `main` dalını izler. Derleme komutu `npm run build && npm run verify`, çıktı dizini `dist`, ana alan adı `datca.day`. `infra/www-redirect` altındaki Cloudflare Worker, www adreslerini kalıcı olarak ana alan adına yönlendirir.

İletişim sayfası varsayılan olarak deponun herkese açık geri bildirim sayfasına gider. Özel bir form kullanmak için `PUBLIC_CONTACT_FORM_URL` tanımlanabilir. İsteğe bağlı analiz için `PUBLIC_GA4_MEASUREMENT_ID` kullanılabilir.
