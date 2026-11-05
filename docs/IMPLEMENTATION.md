# Implementasi dan verifikasi

5 November 2026. Website selesai diimplementasikan pada checkout yang sama, tanpa publikasi atau perubahan konfigurasi cloud.

## Hasil

- Astro 7.4.5 + TypeScript, output statis; dependency exact-pinned dengan package-lock.
- GSAP 3.15.1 + ScrollTrigger untuk sequence desktop insight → idea → launch. Scroll native, scrub dapat dibalik, mask reveal dan perubahan framing terbatas pada focal sequence.
- Mobile dan reduced motion memakai tiga tahap vertikal yang terbaca tanpa pin. Portrait memiliki gerakan skala ringan hanya ketika preferensi motion mengizinkan.
- Homepage Inggris, tiga case study dengan URL tersendiri, halaman demo info, dan 404.
- Tiga brand fiktif dengan strategi, positioning canvas, campaign billboard/social/landing mockup, channel plan dan deliverables. Dataset sintetis memiliki label dekat dashboard dan bisa diunduh.
- Portrait dan tiga gambar kampanye generatif; WebP responsif dan font WOFF2 disajikan lokal.
- Dialog menu memakai perilaku native, Escape dan pemulihan fokus. Dialog brief memiliki validasi input, unduhan lokal, penjelasan privasi dan status yang jujur; tidak ada endpoint pengiriman.

## Verifikasi yang telah dijalankan

| Pemeriksaan | Hasil |
| --- | --- |
| `npm run check` | 0 errors, 0 warnings, 0 hints |
| `npm run build` | 6 halaman statis berhasil dibuat |
| `npm test` | 20 tes Playwright lulus di system Chromium |
| Production smoke test | 5 route utama HTTP 200, script scroll termuat, menu mobile berfungsi, 0 page errors |
| Gambar, link dan disclosure | Diperiksa melalui browser suite |
| Responsive | Tidak ada horizontal overflow pada viewport 360, 390, 768 dan 1440 px untuk halaman yang diuji |
| Aksesibilitas otomatis | Tidak ada pelanggaran serious/critical pada home, Aeru case study, demo info dan dialog brief yang diuji |
| Keyboard dan fallback | Escape/focus menu, dialog brief, reduced motion, navigasi tanpa JS, reverse scroll dan resize lulus |
| Unduhan brief | Isi nama/tujuan benar, berkas lokal terunduh, tidak ada request POST, status tidak mengklaim pengiriman |

Suite diuji pada development build; smoke test terpisah memeriksa output production melalui Astro preview. Perubahan terakhir ikon dekoratif dan penghilangan dev toolbar diverifikasi pada output production. Ini bukan klaim pengujian perangkat fisik atau browser lain.

## Lighthouse lokal

Satu audit Lighthouse 13.6.0 pada homepage **production preview**, preset mobile dan simulasi throttling default, menggunakan system Chromium:

| Kategori / metrik | Hasil |
| --- | ---: |
| Performance | 100 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |
| LCP lab | 0,9 detik |
| CLS lab | 0 |
| Total blocking time | 0 ms |

Ini hasil lab lokal sekali jalan, bukan jaminan skor pada hosting publik, Core Web Vitals lapangan, INP, atau perangkat nyata. Peluang optimasi minor yang tersisa: unused JS sekitar 21 KiB, pengiriman gambar sekitar 23 KiB, dan render-blocking stylesheet. Tidak menghalangi fungsi yang diuji.

Audit lengkap tersimpan di [lighthouse-mobile.json](verification/lighthouse-mobile.json). Screenshot hasil production: [desktop](screenshots/home-desktop.png) dan [mobile](screenshots/home-mobile.png).

## Scope akhir dan hal yang belum dilakukan

- Fokus marketing dipertahankan; foto kampanye adalah ilustrasi untuk strategi, bukan bukti pekerjaan fotografi/film Arka.
- Mockup HTML/CSS menggantikan kebutuhan banyak foto detail dan gambar proses. Wordmark dan ikon dibuat sebagai teks/SVG orisinal. Video, image sequence, Lenis, CMS dan backend tidak ditambahkan.
- Audit langsung website Lando Norris belum tersedia karena pembatasan jaringan yang teridentifikasi pada planning. Situs ini mengembangkan brief cinematic scrolling secara orisinal; tidak mengklaim menyalin persis website referensi.
- Safari/iOS, Firefox, Chrome Android di perangkat fisik dan data performa lapangan belum diuji.
- Kontak bisnis pemilik showcase dan domain hosting belum diberikan. Brief tetap bisa dibuat/diunduh; tidak ada pesan yang dikirim.
- Pembaruan deployment: workflow GitHub Pages sudah disiapkan dengan base `/dummy-portfolio`, canonical dan sharing-image absolut. Aktivasi Pages dan hasil workflow menentukan apakah URL publik sudah tersedia; lihat README.
- Tidak ada deployment, perubahan environment draft, commit atau publikasi otomatis.

## Melanjutkan

Jalankan perintah pada README. Sebelum menyunting, cek perubahan pengguna dan baca sumber konten; gunakan existing checkout, tanpa membuat worktree baru kecuali diminta. Screenshot dan laporan berada dalam repository; original campaign PNG berada pada path workspace yang direkam di asset manifest, sementara WebP produksi sudah disertakan dalam repo.
