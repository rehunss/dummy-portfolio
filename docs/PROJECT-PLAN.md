# Rencana website dummy portfolio

Disiapkan 5 November 2026. Dokumen ini merekam rencana awal. **Implementasi sudah dikerjakan**; status terkini, hasil pengujian dan perbedaan scope dicatat di [IMPLEMENTATION.md](IMPLEMENTATION.md). Pernyataan “belum” pada rincian persiapan di bawah merupakan kondisi saat planning.

## Tujuan dan keputusan awal

Website ini adalah contoh hasil jasa pembuatan website yang dapat diperlihatkan kepada calon klien. Pengunjung perlu melihat kualitas visual, memahami karya, dan menemukan cara menghubungi pembuat showcase tanpa harus menunggu semua animasi selesai.

Permintaan yang sudah pasti:

- Persona, pengalaman, proyek, klien, dan dokumentasi merupakan fiksi.
- Arah pengalaman mengacu pada website Lando Norris: immersive scrolling, interaksi, dan cinematic scrolling.
- Desain tetap nyaman di ponsel dan dapat digunakan tanpa mengikuti urutan animasi.

Pilihan yang sudah dikonfirmasi pengguna: **bidang Marketing** dan **bahasa Inggris** untuk website. Rincian persona berikut merupakan usulan yang dapat diubah:

- Persona: **Arka Pradana**, brand & growth strategist fiktif berbasis Jakarta.
- Bahasa tampilan utama: Inggris; dokumentasi proyek dalam bahasa Indonesia.
- Target: calon klien yang membutuhkan personal branding, creative portfolio, atau website brand dengan visual kuat.
- Kontak awal: demo tanpa backend. Kontak asli pemilik showcase ditambahkan hanya setelah diberikan.

Spesialisasi yang diusulkan: brand positioning, campaign strategy, dan acquisition journey untuk brand lifestyle. Nama, lokasi dan spesialisasi ini merupakan pengembangan brief; bidang marketing dan bahasa Inggris sudah pasti.

## Referensi dan batas bukti

Referensi utama: <https://landonorris.com/>. Akses langsung dari environment mendapat penolakan proxy 403; website belum diinspeksi secara visual. Detail storyboard di bawah adalah proposal berdasarkan brief pengguna, bukan klaim hasil audit website tersebut.

Saat akses tersedia, lakukan audit desktop dan mobile: hero/loading, ukuran dan komposisi tipografi, perpindahan scene, menu, perilaku scroll cepat, gallery, serta versi reduced motion. Catat tanggal dan screenshot karena website referensi bisa berubah. Gunakan ritme, hierarki, dan cara bercerita sebagai inspirasi; buat nama, artwork, logo, copy, dan implementasi milik proyek ini sendiri.

## Arah kreatif: From insight to launch

Pengunjung masuk melalui portrait marketer dan judul besar “Make attention mean something.” Sequence utama menunjukkan satu observasi audiens berubah menjadi pesan kampanye, lalu menjadi billboard dan aplikasi digital. Perubahan **insight → idea → launch** mengikat cerita strategi marketing dengan scrolling. Seluruh sequence memakai kampanye Aeru / After Hours agar keputusan dan outputnya saling berhubungan. Bagian berikutnya memberi ruang untuk membaca.

Palet awal:

| Token | Warna | Fungsi |
| --- | --- | --- |
| Midnight | `#101C2C` | Latar utama dan kedalaman gambar |
| Paper | `#F1F3F5` | Teks utama pada latar gelap |
| Signal blue | `#6C8EFF` | Fokus, tautan, dan kontrol terpilih |
| Amber | `#E6AD72` | Cahaya fotografi dan aksen terbatas |
| Slate | `#8995A6` | Teks sekunder yang tetap harus diuji kontrasnya |

Tidak semua pasangan token otomatis lolos kontras; verifikasi pada komponen nyata. Ruang baca case study dapat berganti ke Paper dengan teks Midnight.

Tipografi:

- **Barlow Condensed ExtraBold**: nama persona dan judul kampanye besar; bentuk rapat cocok untuk headline billboard. Huruf kapital hanya pada wordmark/display yang membutuhkannya.
- **Manrope variable**: navigasi, paragraf, caption, dan tombol. Paragraf maksimum sekitar 60–70 karakter per baris.
- Sumber TTF dan lisensi sudah tersedia di [reference-assets/fonts](reference-assets/fonts). Buat subset WOFF2 untuk produksi; sertakan lisensinya.
- Skala awal: body 16–18 px, heading bagian 36–72 px, display memakai `clamp()` sekitar 64–180 px. Sesuaikan terhadap crop gambar dan lebar layar.

Layout: foto besar dengan crop yang disengaja, teks rata kiri, banyak ruang bernapas, dan pergantian area penuh gambar dengan area baca. Hindari meratakan semua konten menjadi kartu seragam.

```text
Menu                                  Work / About / Contact

ARKA                         portrait editorial
PRADANA                      marketer fiktif
Make attention mean something.

           insight → idea → launch (kampanye Aeru)

After Hours                  still proyek besar
Quiet Form                   komposisi karya berikutnya
Tidal Memory                 penutup kumpulan karya

About / pengalaman           portrait & proses

Let's plan your next move.   kontak / keterangan demo
```

## Struktur dan alur pengunjung

| Halaman / bagian | Konten | Tindakan utama |
| --- | --- | --- |
| `/` Hero | Nama, profesi, portrait, kalimat pendek | Jelajahi karya atau langsung ke kontak |
| `/` Selected work | Tiga proyek konsep dengan judul, tahun, dan peran | Buka detail proyek |
| `/` About | Bio singkat, pengalaman fiktif, pendekatan | Baca proses atau lihat demo info |
| `/` Contact | Ajakan diskusi dan status kontak demo | Kontak nyata hanya jika sudah disediakan |
| `/work/after-hours/` | Riset simulasi, positioning, launch campaign, rencana pengukuran | Karya berikutnya / kembali |
| `/work/quiet-form/` | Strategi repositioning furnitur dan contoh messaging | Karya berikutnya / kembali |
| `/work/tidal-memory/` | Acquisition journey retreat pesisir dan contoh email | Kembali ke karya |
| `/about-this-demo/` | Penjelasan persona, visual, dan dokumentasi fiktif | Kembali ke showcase |
| 404 | Halaman tidak ditemukan | Kembali ke beranda |

Menu berfungsi melalui tautan biasa. Judul dan peran proyek selalu terlihat; hover hanya menambah feedback. Semua detail karya memiliki URL sendiri agar bisa dibagikan kepada calon klien.

## Storyboard motion

Jarak di bawah merupakan perkiraan prototype, bukan angka final yang sudah diuji.

| Momen | Desktop | Mobile | Reduced motion |
| --- | --- | --- | --- |
| Masuk halaman | Konten langsung terbaca; satu entrance 500–700 ms setelah media siap, tanpa loader buatan | Entrance lebih singkat | Komposisi langsung tampil |
| Insight → idea → launch | Pin pendek sekitar 1–1,5 viewport; potongan brief memusat pada insight, menjadi headline lalu campaign billboard | Tiga tahap vertikal dengan mockup yang selalu terbaca; tanpa pin panjang | Tiga komposisi statis, tanpa scrub/zoom/pin |
| Selected work | Media besar, pergantian fokus mengikuti posisi scroll; tidak ada horizontal scroll wajib | Susunan vertikal dan judul tetap terlihat | Alur baca biasa |
| Buka karya | Halaman statis terlebih dahulu; shared transition opsional setelah baseline stabil | Navigasi biasa tetap utama | Navigasi langsung |
| Menu dan tombol | Respons 150–300 ms; menu bisa diinterupsi dan ditutup Escape | Tap feedback, target sentuh memadai | Feedback warna/opacity singkat |
| About / contact | Tenang, utamakan baca dan tindakan | Sama | Sama |

Scroll tetap native. Tidak ada kewajiban menonton intro, scroll snapping paksa, atau cursor khusus yang menggantikan pointer standar. Jika ada marquee atau video loop, tersedia pause; berhenti ketika offscreen atau tab tersembunyi. Audio tidak diputar otomatis.

Video bukan prasyarat versi pertama. Still kampanye dan mockup sudah cukup untuk sequence cinematic. Arka tidak diklaim membuat film atau foto tersebut. Video scrub dan image sequence besar berada di luar MVP karena biaya unduhan dan perilaku mobile.

## Stack yang direkomendasikan

**Astro + TypeScript + CSS + GSAP/ScrollTrigger** untuk website statis yang berfokus pada gambar dan cerita.

- Astro menghasilkan HTML untuk setiap halaman sehingga konten, metadata, dan link karya tersedia tanpa menunggu client rendering.
- GSAP hanya mengatur sequence yang membutuhkannya. `gsap.matchMedia()` memisahkan desktop, mobile, dan reduced motion; animasi dibersihkan ketika halaman ditinggalkan atau breakpoint berubah.
- Konten typed dalam modul data atau Astro content collections; tidak perlu CMS/backend untuk tiga proyek fiktif.
- CSS menangani hover, focus, feedback, dan layout. Jangan menambahkan library kedua untuk efek yang sama.
- Lenis opsional setelah native scroll diuji; bukan dependency awal. Three.js/WebGL tidak diperlukan untuk perubahan brief menjadi billboard.
- Playwright untuk alur browser; axe untuk bantuan audit aksesibilitas; Lighthouse untuk pengukuran lab. Pilih versi kompatibel dan kunci di lockfile saat implementasi, bukan menebak versi sekarang.
- Deploy statis dapat memakai hosting yang mendukung output Astro. Pilih akun/domain dan provider pada fase deployment; belum ada deployment yang diotorisasi dalam pekerjaan planning ini.

Struktur yang dituju saat implementasi:

```text
src/pages/index.astro
src/pages/work/[slug].astro
src/pages/about-this-demo.astro
src/pages/404.astro
src/components/{Hero,SelectedWork,SiteMenu,Contact}.astro
src/data/{persona,projects}.ts
src/scripts/hero-motion.ts
src/styles/{tokens,global}.css
public/media/{portrait,projects,process}/
docs/{PROJECT-PLAN,CONTENT-BRIEF,ASSET-PLAN}.md
```

Nama struktur masih rencana. Belum ada aplikasi atau dependency yang dipasang.

## Anggaran performa dan aksesibilitas

Target untuk diukur, bukan hasil yang sudah dicapai:

- LCP ≤2,5 detik, CLS ≤0,1, INP ≤200 ms. Lighthouse memberi sinyal lab; Core Web Vitals lapangan baru dapat dinilai setelah ada trafik yang cukup.
- Payload awal sekitar ≤1,5 MB sebelum video; portrait/hero versi mobile diusahakan ≤300 KB. Total gambar halaman lebih besar diperbolehkan jika dimuat lazy dengan benar.
- AVIF/WebP, `srcset` dan `sizes`, dimensi/aspect ratio eksplisit, hero diprioritaskan; jangan preload semua karya.
- JavaScript utama ditargetkan ≤150 KB gzip sebagai titik awal pengukuran; evaluasi setelah build, jangan mengorbankan fungsi demi angka semu.
- Target mendekati 60 fps pada perangkat acuan. Hindari layout read/write tiap frame, blur layar penuh, atau banyak media bergerak sekaligus.
- Teks dan link tetap terlihat ketika JavaScript gagal. Pertahankan urutan DOM yang sesuai alur baca.
- Keyboard: skip link, fokus terlihat, urutan tab logis, menu dapat ditutup Escape, fokus kembali ke tombol pemicu. Tidak ada informasi yang hanya muncul lewat hover.
- Reduced motion menghapus pin, parallax, scrub dan perpindahan besar. Feedback interaksi tetap tersedia.
- Video opsional memakai `muted`, `playsinline`, poster, tombol pause, dan tidak menghalangi konten saat autoplay ditolak. Jika ada dialog, kelola focus trap dan pemulihan fokus.

## Tahapan pengerjaan dan pintu kelulusan

1. **Kunci arah dan aset.** Gunakan marketing dan bahasa Inggris; rapikan detail persona; audit referensi bila dapat diakses; seleksi portrait dan tiga cover; cek sumber/lisensi. Selesai ketika visual dan cerita konsisten, serta status setiap aset tercatat.
2. **Bangun layout statis.** Buat halaman responsif, data, metadata per karya, navigasi, dan disclosure fiksi. Selesai ketika semua konten dapat dibaca tanpa motion.
3. **Prototype sequence utama.** Kerjakan insight → idea → launch untuk Aeru saja; uji scroll cepat, balik arah, resize, reload dan breakpoint. Selesai ketika desktop, mobile, dan reduced motion punya perilaku stabil.
4. **Integrasi karya dan interaksi.** Lengkapi halaman case study, menu, kontak demo, poster dan caption dokumentasi. Pastikan status demo tidak menyerupai pengiriman pesan sungguhan.
5. **Optimasi dan QA.** Build, type check, smoke test tiap route, pemeriksaan aset, keyboard, reduced motion, dan pengukuran performa. Perbaiki masalah yang ditemukan.
6. **Paket showcase.** Siapkan README cara menjalankan, catatan fiksi/lisensi, screenshot desktop/mobile dan penjelasan singkat untuk calon klien. Deploy ketika diminta, dengan kontak pemilik yang benar.

Estimasi kapasitas awal: sekitar 5–8 hari kerja untuk satu implementer, termasuk penulisan strategi fiktif, revisi motion dan QA, tanpa produksi video. Ini perkiraan perencanaan, bukan jadwal kalender atau komitmen. Tambahan footage, 3D atau backend memerlukan estimasi baru.

## Definition of done

- Tiga proyek dan semua route dapat dibuka langsung; navigasi kembali/maju dan anchor bekerja.
- Desktop 1440 px, tablet 768 px, mobile 390 px dan 360 px tidak overflow atau kehilangan konten.
- Scroll cepat dua arah, reload di tengah halaman, perubahan orientasi dan pergantian tab tidak merusak sequence.
- Chrome, Firefox dan Safari yang tersedia diuji; pemeriksaan perangkat nyata dilaporkan terpisah jika tidak tersedia.
- Menu, kartu karya dan kontak bisa digunakan dengan keyboard dan touch.
- Reduced motion, JavaScript gagal dan autoplay video ditolak memiliki fallback yang sengaja dirancang.
- Build dan type check lulus; test browser benar-benar mengeksekusi alur, bukan sekadar memeriksa port terbuka.
- Tidak ada aset rusak, link palsu yang menjanjikan fungsi, klaim klien nyata, atau materi tanpa sumber yang tercatat.
- Footer menyebut konsep fiktif; detail karya menandai dokumentasi sebagai ilustrasi.

## Skills, tools, dan referensi untuk sesi implementasi

| Sumber | Status / penggunaan |
| --- | --- |
| [frontend-design](skill://user/6abdf3b8c7ec819193db9323e6f0ad68/frontend-design/SKILL.md) | Sudah dibaca; arah visual, sistem token, layout, review screenshot |
| [impeccable-motion](skill://user/6abf6fbc1bd08191b4f0d3796ed4a3d3/impeccable-motion/SKILL.md) | Sudah dibaca bersama `references/animate.md`; tesis motion, budget, fallback, interruption |
| Image generation | Tersedia untuk persona dan karya fiktif. Mulai dari portrait master, gunakan sebagai referensi identitas aset berikutnya |
| [GSAP source README](https://raw.githubusercontent.com/greensock/GSAP/master/README.md) | Berhasil dibaca; ScrollTrigger dan matchMedia sesuai kebutuhan. GSAP bukan MIT; sertakan dan periksa lisensi distribusinya saat memilih versi |
| [ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | URL rujukan; akses langsung saat planning diblokir jaringan |
| HyperFrames / Remotion | Tersedia dalam katalog, tetapi bukan dependency website; hanya relevan jika nanti diminta membuat video showcase terpisah |
| Browser QA | Tidak ada tool browser langsung dalam sesi planning ini. Saat implementasi, siapkan runner browser lokal dan verifikasi ketersediaannya |

## Status persiapan dan hal yang masih terbuka

- Checkout `/workspace/dummy-portfolio` telah diperiksa: hanya README, belum ada app, manifest, test suite, atau instruksi AGENTS.md.
- Planning dan brief tersimpan di `docs/`; font sudah diunduh, dibuka dengan fontTools, dan disertai lisensi serta SHA-256. Satu portrait generatif 1536×1024 tersimpan lokal sebagai konsep persona; belum menjadi pilihan final pengguna. Dataset dua skenario marketing sintetis juga tersedia.
- Rincian konten: [CONTENT-BRIEF.md](CONTENT-BRIEF.md). Status foto, video dan sumber stok: [ASSET-PLAN.md](ASSET-PLAN.md).
- Website Lando, Unsplash, Pexels, serta domain dokumentasi GSAP mendapat 403 dari proxy. Belum ada stock foto berlisensi yang dipilih atau diunduh. Tidak ada pengubahan network settings dalam pekerjaan ini.
- Audit referensi langsung membutuhkan akses domain tersebut. Brief tetap dapat diimplementasikan dengan aset orisinal/generatif tanpa menunggu stock atau footage.
- Kontak asli pembuat showcase, hosting/domain, dan kebutuhan formulir nyata belum diberikan. Tidak menghalangi prototype.
- Tidak ada instalasi dependency, perubahan konfigurasi cloud, commit, atau publikasi dalam tahap perencanaan.

## Pegangan untuk melanjutkan percakapan

Mulai implementasi dengan membaca dokumen ini dan status aset. Gunakan checkout yang sudah ada, tanpa membuat worktree baru kecuali diminta. Periksa perubahan pengguna sebelum menyunting. Terapkan jawaban persona/bahasa terbaru bila berbeda dari asumsi awal. Bangun layout statis dan satu prototype hero sebelum memperluas efek. Jangan menganggap aset yang berstatus planned sebagai tersedia atau website referensi telah diaudit. Jangan mempublikasikan environment atau website secara otomatis.
