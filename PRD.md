# PRD — Kalih Signature Website

**Status:** Draft v1 · **Tanggal:** 2026-07-18 · **Pemilik produk:** _TBD (client Kalih Signature)_
**Sumber:** Slicing dari file desain statis (single-page HTML/Tailwind CDN) → diimplementasi ulang sebagai aplikasi Next.js 16 (App Router) + Tailwind v4.

---

## 1. Latar Belakang & Masalah

Kalih Signature adalah venue gaya hidup terpadu di Tegal (cafe, working space, meeting room, rooftop, kids area) yang sebelumnya hanya punya **mockup desain statis** — satu file HTML memakai Tailwind lewat CDN, gambar-gambar sementara dari link Google AI Studio yang bisa kedaluwarsa kapan saja, dan beberapa bagian (form, FAQ, filter galeri) yang secara visual terlihat interaktif tapi sama sekali tidak berfungsi.

Dokumen ini mendefinisikan produk yang sebenarnya harus dibangun dari mockup tersebut: sebuah website marketing/company-profile yang production-ready, cepat, dan mudah dirawat.

## 2. Tujuan

1. Website jadi **kartu nama digital** yang meyakinkan calon pengunjung (personal & keluarga) dan mitra korporat (EO/WO/KOL/corporate) untuk datang atau menghubungi Kalih Signature.
2. Reservasi/kontak (WhatsApp) dan pengajuan kolaborasi harus **1–2 klik** dari mana pun di halaman.
3. Semua yang terlihat interaktif di desain (accordion FAQ, filter galeri, form, navbar) **benar-benar berfungsi**, bukan sekadar hiasan.
4. Kode bisa di-deploy dan dirawat sebagai aplikasi Next.js standar, bukan file HTML tunggal.

### Non-tujuan (di luar scope v1)
- Sistem booking/reservasi online dengan kalender & pembayaran.
- CMS untuk mengubah konten tanpa deploy ulang.
- Multi-bahasa (saat ini bahasa Indonesia saja).
- Akun pengguna / login.

## 3. Target Pengguna

| Persona | Kebutuhan utama |
|---|---|
| Pengunjung individu / keluarga | Tahu fasilitas (kids area, outdoor, menu), jam buka, lokasi, cara reservasi cepat via WA |
| Pekerja lepas / WFC | Yakin ada WiFi kencang, colokan, suasana kerja tenang |
| Corporate / EO / WO / KOL | Tahu kapasitas meeting room, fasilitas presentasi, dan punya jalur kontak khusus kolaborasi |

## 4. Status Implementasi (Slicing v1)

Desain sudah di-slicing penuh menjadi komponen React di `components/`, dirangkai di `app/page.tsx`. Ringkasan per section:

| # | Section | Komponen | Status |
|---|---|---|---|
| 1 | Navbar (shrink on scroll) | `Navbar.tsx` | ✅ Fungsional (client component, `scroll` listener) |
| 2 | Hero | `Hero.tsx` | ✅ |
| 3 | "Mau ke Kalih untuk apa?" grid | `IntentGrid.tsx` | ✅ |
| 4 | Fasilitas (USP icons) | `Facilities.tsx` | ✅ |
| 5 | Family & Kids Area focus | `FamilyFocus.tsx` | ✅ |
| 6 | Work & Meeting | `WorkMeeting.tsx` | ✅ |
| 7 | Form Kemitraan & Kolaborasi | `CollaborationForm.tsx` | ⚠️ UI + validasi client-side selesai; **submit belum terhubung ke backend** (lihat Backlog) |
| 8 | Menu Showcase (banner) | `MenuShowcase.tsx` | ✅ |
| 9 | Galeri | `Gallery.tsx` | ✅ Filter kategori (Semua/Keluarga/Arsitektur/Kuliner) **fungsional**, sebelumnya cuma tombol statis |
| 10 | Testimonials | `Testimonials.tsx` | ⚠️ Konten dari desain dipakai apa adanya — **perlu verifikasi keaslian/izin publikasi**, lihat §6 |
| 11 | FAQ | `FAQ.tsx` | ⚠️ Accordion buka/tutup **fungsional** (sebelumnya tidak ada logic sama sekali); jawaban adalah **draft** yang perlu direview, lihat §6 |
| 12 | Artikel/Blog teaser | `Articles.tsx` | ✅ (kartu statis, belum ada halaman detail artikel — lihat Backlog) |
| 13 | Lokasi & Kontak | `LocationContact.tsx` | ✅ Alamat, jam, dan link Google Maps sudah diisi data asli |
| 14 | Footer | `Footer.tsx` | ✅ |
| — | Scroll-reveal (fade-in per section) | `ScrollReveal.tsx` | ✅ Diporting dari vanilla JS ke satu `IntersectionObserver` client component |

**Tech stack:** Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 (config CSS-first via `@theme` di `app/globals.css`, bukan lagi Tailwind CDN) · TypeScript strict · font `Hanken Grotesk` (display) & `Inter` (body) via `next/font/google` · ikon Material Symbols Outlined via stylesheet Google Fonts · `next/image` untuk semua foto.

Perubahan struktural dari desain asli:
- Warna, spacing, font custom dipindah dari inline `tailwind.config` script (CDN) ke `@theme` block Tailwind v4 — sekarang type-safe dan tidak bergantung ke CDN eksternal saat runtime.
- Semua `<img>` asli (bersumber dari `lh3.googleusercontent.com`, link sementara AI Studio yang berisiko pecah) sudah diganti gambar nyata — lihat §6 untuk sumber tiap foto.
- Info kontak (nomor WA, alamat, link Maps) dipusatkan di `lib/constants.ts` supaya konsisten di semua section (di desain asli, `href="wa.me/your-number"` tidak sinkron dengan teks nomor yang ditampilkan). Data ini sudah diisi dengan nomor/alamat/link Maps asli Kalih Signature.

## 5. Kebutuhan Fungsional (ringkas)

- **FR-1** Navbar menyusut (h-20 → h-16) + shadow saat scroll > 50px, tetap fixed di atas.
- **FR-2** Semua CTA reservasi/order mengarah ke WhatsApp (`wa.me`) dengan nomor yang konsisten di seluruh halaman.
- **FR-3** Galeri bisa difilter per kategori tanpa reload halaman.
- **FR-4** FAQ: satu item terbuka pada satu waktu (accordion), bisa ditutup lagi, dan dapat diakses keyboard (`aria-expanded` sudah diset).
- **FR-5** Form kolaborasi memvalidasi field wajib (nama, email, minat, pesan) sebelum submit; setelah submit menampilkan state konfirmasi.
- **FR-6** Setiap section muncul dengan fade-in halus saat pertama kali masuk viewport.
- **FR-7** Layout responsif penuh: mobile (1 kolom), tablet, desktop (mengikuti breakpoint Tailwind `md`/`lg` yang sudah ada di desain asli).

## 6. Aset & Konten — Perlu Tindakan dari Klien

Ini bagian paling penting supaya situs **berhenti terlihat seperti mockup**:

1. **Foto asli — sebagian sudah masuk, sebagian masih stok sementara.**
   - ✅ **Foto asli venue** sudah terpasang untuk Hero, seluruh kartu foto di "Mau ke Kalih untuk apa?" (Makan Bersama Keluarga, Kerja & WFC, Rooftop Experience, Menu Favorit), dan section Family Focus — file ada di `public/images-hero/`, `public/images-intent/`, `public/images-familyfocus/`.
   - ⚠️ **Masih foto stok Unsplash sementara** (bukan foto Kalih Signature asli) di: Work & Meeting, Menu Showcase (banner "Karya Seni di Setiap Sajian"), 5 foto Galeri "Sudut Kalih", dan 3 foto cover di "Inspirasi & Cerita". Sumbernya terpusat di `lib/stock-images.ts` — tinggal ganti tiap `src` dengan file lokal begitu foto asli venue untuk area-area ini tersedia (working space, meeting room, rooftop, aneka sudut galeri, kopi/menu signature).
2. **Testimoni.** Tiga testimoni di section "Apa Kata Mereka?" (Andi Pratama, Siti Aminah, Budi Santoso) diambil apa adanya dari file desain. **Wajib dipastikan** ini nama & kutipan nyata dengan izin publikasi — jika tidak, ganti dengan testimoni asli atau hapus section sampai ada data valid. Mempublikasikan testimoni fiktif atas nama orang yang tidak nyata berisiko hukum/etika.
3. **Jawaban FAQ.** 8 pertanyaan di desain **tidak punya jawaban sama sekali**. Saya menulis draft jawaban di `components/FAQ.tsx` berdasarkan info yang sudah ada di halaman lain (jam operasional, kapasitas meeting room, dll). **Perlu direview tim operasional** — terutama soal kebijakan parkir yang saya tandai belum ada detail pastinya.
4. **Data kontak.** Nomor WhatsApp, alamat, dan link Google Maps sekarang memakai data yang sudah diisi di `lib/constants.ts` — mohon dikonfirmasi ulang kebenarannya sebelum go-live.
5. **Halaman "Lihat Menu Lengkap".** Tombol ini di section Menu Showcase belum punya tujuan (di desain asli juga tidak ada link). Perlu diputuskan: link ke PDF menu, halaman `/menu` baru, atau menu digital pihak ketiga.
6. **Artikel/blog.** Tiga kartu artikel di section "Inspirasi & Cerita" hanya teaser, belum ada halaman detail. Perlu diputuskan apakah pakai CMS ringan (mis. MDX lokal) atau dihapus dulu sampai ada konten.

## 7. Kebutuhan Non-Fungsional

- **Performa:** hero & section image-heavy harus tetap cepat setelah foto asli masuk — gunakan `next/image` dengan `sizes`/`priority` yang tepat begitu asetnya tersedia, jangan `<img>` biasa.
- **SEO:** metadata dasar (title, description) sudah diisi di `app/layout.tsx`. Perlu ditambah: Open Graph image, `sitemap.xml`, `robots.txt` sebelum go-live.
- **Aksesibilitas:** kontras warna primary (#0F4F34) di atas putih sudah cukup (AA); tombol ikon (share/mail/public di footer) sudah diberi `aria-label`; FAQ pakai `aria-expanded`. Perlu audit lanjutan dengan axe/Lighthouse sebelum launch.
- **Kompatibilitas:** target browser modern (2 versi terakhir Chrome/Safari/Edge/Firefox), mobile-first.
- **Tanpa dependensi CDN runtime:** Tailwind & font sekarang di-build, bukan dimuat dari CDN saat runtime seperti desain asli (lebih cepat & tidak rentan downtime pihak ketiga).

## 8. Metrik Keberhasilan (usulan)

- Klik CTA WhatsApp (reservasi, order menu, kontak) — perlu event tracking (lihat Backlog #2).
- Submission form kolaborasi per bulan.
- Bounce rate & waktu di halaman dari Google Analytics/Search Console.

## 9. Backlog / Next Steps (di luar slicing v1)

Diurutkan berdasarkan dampak ke "bukan cuma design":

1. **Ganti sisa foto stok Unsplash di `lib/stock-images.ts` dengan foto asli venue** (Work & Meeting, Menu Showcase, Galeri, Articles) — dependency: §6.1.
2. **Sambungkan form kolaborasi ke backend nyata** — pilihan: API route Next.js yang mengirim email (Resend/Nodemailer), simpan ke Google Sheet, atau integrasi CRM. Perlu kredensial dari klien.
3. **Tambahkan analytics & event tracking** (GA4/Plausible) untuk klik WhatsApp dan submit form.
4. **Ganti kartu "Buka Peta" dengan embed Google Maps langsung** (iframe) begitu API key/lokasi final dikonfirmasi.
5. **Halaman menu lengkap** (`/menu`) dan **halaman detail artikel** (`/blog/[slug]`) jika section terkait mau tetap ada.
6. **Review testimoni & FAQ** oleh klien (§6.2, §6.3) — blocker sebelum go-live.
7. **SEO lanjutan:** OG image, `sitemap.xml`, `robots.txt`, structured data (LocalBusiness schema) untuk hasil pencarian lokal.
8. **Audit aksesibilitas & Lighthouse** sebelum deploy production.
9. Pertimbangkan CMS ringan (mis. MDX atau headless CMS) jika artikel/menu sering berubah, supaya klien tidak perlu minta developer tiap update konten.

## 10. Asumsi

- Domain & hosting (kemungkinan Vercel, karena Next.js) belum ditentukan — perlu konfirmasi.
- Belum ada kebutuhan multi-bahasa (Inggris) untuk turis; jika ada, perlu direncanakan i18n terpisah.
- Reservasi tetap manual via WhatsApp untuk v1, bukan sistem booking otomatis.
