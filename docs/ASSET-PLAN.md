# Rencana aset dan status pengumpulan

Disiapkan 5 November 2026. Arah sudah disesuaikan ke Marketing, website berbahasa Inggris. Tidak semua baris di bawah sudah tersedia; status menentukan apa yang benar-benar dapat dipakai.

**Pembaruan implementasi:** portrait dan ketiga cover sudah tersedia sebagai WebP responsif di `public/media/`. Social/landing-page mockup, positioning canvas, insight sheet, dan dashboard dibuat dalam HTML/CSS sehingga copy dan angka tetap akurat. Font produksi WOFF2 dan lisensinya ada di `public/fonts/`. Lihat [IMPLEMENTATION.md](IMPLEMENTATION.md) dan [ASSET-CREDITS.json](ASSET-CREDITS.json). Daftar produksi di bawah disimpan sebagai brief awal; video dan portrait alternatif tetap tidak diproduksi.

## Sudah tersedia

| Aset | Lokasi | Verifikasi |
| --- | --- | --- |
| Barlow Condensed ExtraBold TTF | `reference-assets/fonts/barlow-condensed/BarlowCondensed-ExtraBold.ttf` | Dibuka dengan fontTools, 694 glyph |
| Manrope variable TTF | `reference-assets/fonts/manrope/Manrope-variable.ttf` | Dibuka dengan fontTools, 742 glyph |
| Lisensi kedua font | `reference-assets/fonts/*/OFL.txt` | SIL Open Font License 1.1, sudah dibaca |
| Sumber, ukuran, checksum font | `reference-assets/fonts/SOURCES.json` | SHA-256 tercatat per berkas |
| Portrait fiktif awal | `reference-assets/images/arka-portrait-concept.png` | PNG 1536×1024, sudah ditampilkan di percakapan; konsep belum dipilih final |
| Sumber dan checksum portrait | `reference-assets/images/SOURCES.json` | Sumber generatif dan SHA-256 tercatat |
| Dua skenario funnel sintetis | `reference-assets/data/marketing-scenarios.json` | Definisi conversion dan disclaimer disertakan; bukan hasil kampanye |

TTF adalah sumber persiapan. Saat implementasi, subset sesuai karakter konten dan konversi ke WOFF2 dengan tool yang sesuai; verifikasi hasil dan sertakan lisensi. Jangan meminta Google Fonts melalui runtime jika aset dapat disajikan lokal.

## Daftar produksi visual

Target MVP: satu portrait master, tiga cover dan enam still detail proyek, satu visual proses strategi dan satu storyboard kampanye. Video dan portrait aktivitas strategi tambahan bersifat opsional.

| ID | Aset | Crop / kebutuhan | Status |
| --- | --- | --- | --- |
| P01 | Portrait master Arka | Landscape dengan ruang teks kiri; turunan 4:5 | Tersedia lokal sebagai `reference-assets/images/arka-portrait-concept.png`; belum diseleksi pengguna |
| P02 | Portrait / hero alternatif | 16:9, identitas mengacu P01 | Planned, opsional |
| W01 | After Hours cover | 16:9 dan crop 4:5 | Planned |
| W02–03 | After Hours social ad dan landing-page mockup | 3:2 | Planned |
| W04 | Quiet Form cover | 16:9 dan crop 4:5 | Planned |
| W05–06 | Quiet Form positioning board dan landing-page mockup | 3:2 | Planned |
| W07 | Tidal Memory cover | 16:9 dan crop 4:5 | Planned |
| W08–09 | Tidal Memory ad dan email mockup | 3:2 | Planned |
| D01 | Strategic workshop / desk moodboard | 3:2 | Planned |
| D02 | Storyboard After Hours | SVG/HTML, enam panel dengan teks akurat | Planned |
| D03 | Arka meninjau campaign board | 3:2, gunakan P01 untuk identitas | Planned, opsional |
| V01 | Video kampanye / reel pendek | MP4/WebM dengan poster, tanpa audio otomatis | Belum diproduksi; opsional |
| B01 | Wordmark Arka + tiga brand konsep | Teks/SVG orisinal | Planned |
| O01 | Open Graph preview | 1200×630 dari artwork terpilih | Planned |

Foto kampanye adalah ilustrasi pendukung strategi marketing, bukan klaim bahwa Arka membuat fotografi/filmnya. Generasi still tidak menghasilkan video. Animasi scale/crop sebuah still juga tidak dihitung sebagai footage atau dokumentasi shooting nyata.

## Identitas visual yang konsisten

Deskripsi Arka untuk visual awal: fictional Indonesian male brand and growth strategist, approximately 29, medium brown skin, short textured wavy black hair, clean-shaven, charcoal work jacket. Ini usulan karakter, bukan identitas seseorang yang nyata.

Gunakan portrait master yang diseleksi sebagai reference image untuk aset yang menampilkan orang yang sama. Jangan membuat wajah baru pada setiap section. Untuk objek proyek, kunci bentuk produk/ruangan melalui satu cover sebelum membuat detailnya.

## Prompt produksi siap pakai

**P01 master portrait:**

> Cinematic editorial portrait of a wholly original fictional Indonesian male brand and growth strategist, approximately 29, medium brown skin, short textured wavy black hair, clean-shaven, charcoal work jacket over a deep blue shirt. Half body, subject on the right third of a wide frame, generous deep midnight blue negative space on the left for later typography, soft side light and restrained amber edge light, realistic photographic detail, fine film grain. Head and shoulders clear of edges for a 4:5 crop. No text, logos, watermarks, celebrity likeness, or collage.

**P02 portrait alternatif, menggunakan referensi P01:**

> The same fictional marketing strategist from the reference portrait, three-quarter profile beside a campaign planning wall with abstract unlettered layouts, dark negative space, restrained blue and amber studio light, realistic editorial photography, no readable text or logos.

**W01 After Hours:**

> Original unbranded electric bicycle at blue hour in a fictional Indonesian city, wet pavement, sculptural rim lighting, restrained cinematic composition with a clean bicycle silhouette, no riders, signs, plates, text, or logos.

**W02–03:** gunakan referensi W01, buat layout social ad dan landing page memakai foto produk yang sama. Pertahankan geometri sepeda dan warna. Buat headline, CTA dan interface dengan HTML/SVG, bukan tulisan generatif.

**W04 Quiet Form:**

> Original sculptural timber chair inside a quiet concrete studio, warm directional afternoon light, precise architectural composition, tactile wood grain, generous spatial depth, fictional furniture design, no people, logos or text.

**W05–06:** gunakan referensi W04, buat positioning board dan landing-page mockup. Pertahankan model kursi dan pencahayaan; semua copy marketing ditata dengan HTML/SVG.

**W07 Tidal Memory:**

> Fictional coastal retreat overlooking a dramatic tropical shoreline, linen curtains and warm natural stone, sea breeze implied through fabric, cinematic natural light, no recognizable landmark, people, branding, or text.

**W08–09:** gunakan referensi W07, buat ad mockup dan email preview. Pertahankan interior/material yang sama; copy, CTA dan interface dibuat dengan HTML/SVG.

**D01 proses:**

> Editorial close-up of a marketing strategy desk with abstract unlettered audience cards, campaign thumbnail printouts and a notebook, restrained midnight blue and warm amber accents, illustrative fictional workshop, no readable text or brand marks. Add accurate labels later through HTML/SVG.

**D03 aktivitas strategi, menggunakan P01 dan W01 sebagai referensi:**

> The same fictional marketing strategist reviewing an original electric bicycle campaign board, natural studio environment, campaign thumbnails with no readable lettering, editorial photography, illustrative fictional strategy session, no brand marks.

Untuk D02, lebih baik menggambar panel/storyboard dalam SVG/HTML, lalu masukkan still sebagai referensi komposisi. Caption selalu menyebut ilustrasi strategi untuk proyek fiktif. Sequence memakai insight → idea → launch; billboard, social ad, dan landing page dirakit dengan layout HTML/SVG agar pesannya akurat.

## Sumber stock cadangan

Belum ada foto stock yang dipilih, diunduh, atau diverifikasi lisensinya. Daftar ini adalah sumber pencarian, bukan manifest aset yang sudah siap.

| Sumber | Kebutuhan pencarian | Halaman lisensi yang perlu dibaca |
| --- | --- | --- |
| [Unsplash](https://unsplash.com/) | `cinematic concrete interior`, `tropical coast linen`, `wet street night` | <https://unsplash.com/license> |
| [Pexels](https://www.pexels.com/) | `strategy desk`, `ocean aerial`, `curtain sunlight` | <https://www.pexels.com/license/> |

Gunakan stock terutama untuk tekstur, lanskap dan elemen pendukung. Wajah model stock tidak dipakai sebagai identitas fiktif Arka. Caption tidak boleh mengubah foto stock menjadi klaim dokumentasi hasil kerja orang fiktif.

Sebelum memakai setiap aset, catat: URL halaman aset, pembuat, URL file asli, tanggal unduh, jenis lisensi dan pembatasan, kebutuhan attribution/release bila berlaku, lokasi lokal, dimensi, ukuran, dan checksum. Untuk generatif: simpan prompt, referensi, tanggal, serta status seleksi. Jangan menambahkan logo terkenal atau sertifikat palsu sebagai bukti.

Sajikan aset terpilih dari file lokal yang telah dioptimalkan; jangan hotlink foto remote dalam versi akhir.

## Kendala akses yang sudah terkonfirmasi

Pada sesi planning, proxy menolak `landonorris.com`, `unsplash.com`, `www.pexels.com`, `gsap.com`, serta `api.github.com` dengan 403. Raw GitHub dapat diakses untuk font dan sumber dokumentasi GSAP. Tidak ada usaha mematikan proxy/TLS atau melewati policy.

Jika pengguna ingin audit referensi dan pemilihan stock langsung dari environment, tambahkan domain yang diperlukan melalui environment settings. Mulai dari `landonorris.com`, `unsplash.com`, `images.unsplash.com`, `www.pexels.com`, `images.pexels.com`, dan `gsap.com`; domain CDN tambahan harus mengikuti bukti URL yang benar-benar dibutuhkan. Jangan mengganti allowlist yang sudah ada. Pekerjaan generatif dan layout dapat dilanjutkan tanpa perlu domain stock.

## Pemakaian aset saat implementasi

- Hero diprioritaskan; siapkan crop mobile, jangan hanya mengecilkan desktop.
- Buat AVIF/WebP berbagai ukuran dan poster video. Cantumkan width/height untuk mencegah layout shift.
- Utamakan hasil gambar yang bisa dikompresi dan tetap terbaca; cek wajah, tangan, roda sepeda, geometri kursi dan kontinuitas ruangan secara visual.
- Simpan source image terpisah dari media produksi. Nama final harus spesifik, misalnya `after-hours-cover-1280.webp`.
- Gunakan manifest produksi setelah file final tersedia. Status planned tidak boleh dianggap ready.
