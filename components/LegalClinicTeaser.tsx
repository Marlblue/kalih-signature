import Image from "next/image";
import Link from "next/link";

export default function LegalClinicTeaser() {
  // bg-surface tidak dipakai di sini walau itu warna "beda" standarnya section
  // lain: nilainya #fcf9f8 sedangkan --background #ffffff, jadi di section yang
  // isinya cuma satu kartu bedanya tidak kelihatan. Tint primary yang dipakai —
  // sekalian membedakan teaser ini dari section reguler, dan kartunya yang
  // bg-surface jadi menonjol di atasnya.
  return (
    <section data-reveal className="py-10 sm:py-24 px-gutter bg-primary/10">
      {/* Sengaja lebih sempit daripada max-w-container-max yang dipakai section
          lain di home, supaya kartunya tidak terbaca memanjang. Efek sampingnya
          kolom fotonya ikut menyempit sehingga framenya jadi lebih tinggi
          daripada lebar — justru menguntungkan, karena object-cover lalu
          memotong sisi kiri-kanan, bukan bagian bawah jas. */}
      <div className="max-w-5xl mx-auto">
        {/* Seluruh kartunya satu tautan, bukan cuma tombolnya. Di mobile
            bentuknya jadi sama persis dengan kartu Legal Clinic di /hubungi:
            foto kecil, teks pendek, panah di kanan. Karena itu tombol "Daftar
            Sekarang" di bawah harus span, bukan Link — anchor di dalam anchor
            tidak valid. */}
        <Link
          href="/hubungi/legal-clinic"
          className="group bg-surface rounded-2xl sm:rounded-3xl overflow-hidden border border-primary/5 shadow-lg md:shadow-xl flex items-center gap-3 p-4 md:gap-0 md:p-0 transition-all hover:border-primary/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99]"
        >
          {/* Di md ke atas tinggi fotonya mengikuti tinggi kartu (self-stretch), bukan
              rasio filenya — kalau dikunci ke rasio, di layar md fotonya jadi
              lebih pendek daripada kolom teks dan muncul jalur kosong krem di
              atas-bawahnya. */}
          {/* 64px, bukan 80px seperti kartu kembarannya di /hubungi: di layar
              375px setiap piksel yang dipakai foto langsung diambil dari kolom
              teks di sebelahnya, dan kolom itu yang tadinya kesempitan. */}
          <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden md:w-1/3 md:h-auto md:shrink md:rounded-none md:self-stretch">
            <Image
              src="/legal-clinic/prof-margono-teaser.webp"
              alt="Prof. Dr. Margono, S.H., M.H."
              fill
              // Kotaknya 64px tapi zoom di bawah membuatnya terpakai di 80px,
              // dan itu yang harus ditulis — kalau ditulis 64px browser ambil
              // bitmap 64px lalu merentangkannya dan hasilnya buram. Di md ke
              // atas lebar kartu dibatasi max-w-5xl sehingga kolom foto tidak
              // pernah lebih dari ~341px; 440px sudah menutupi itu plus zoomnya.
              sizes="(min-width: 768px) 440px, 80px"
              // Zoom yang sama dipakai di semua ukuran layar supaya framingnya
              // identik dengan foto di halaman /hubungi/legal-clinic.
              className="object-cover object-top scale-[1.25]"
            />
          </div>

          <div className="min-w-0 flex-1 md:w-2/3 md:flex-none md:p-10 flex flex-col items-start">
            <h2 className="font-display text-[15px] md:text-4xl font-bold text-primary leading-tight md:leading-tight md:mb-6">
              Legal Clinic bersama
              {/* Pemenggalan barisnya cuma rapi di kolom lebar; di mobile
                  biarkan teksnya membungkus sendiri. */}
              <br className="hidden md:inline" /> Prof. Dr. Margono, S.H., M.H.
            </h2>
            <p className="text-[11px] md:text-lg text-secondary leading-snug md:leading-relaxed mt-1.5 md:mt-0 md:mb-10">
              Konsultasi hukum privat GRATIS
              <span className="hidden md:inline"> di Kalih Signature</span>.
            </p>
            <span className="hidden md:inline-block bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold transition-transform group-hover:scale-105">
              Daftar Sekarang
            </span>
          </div>

          {/* md:hidden dipasang di wrapper, bukan di ikonnya sendiri: aturan
              `html.icons-ready .material-symbols-outlined { display:inline-block }`
              di globals.css spesifisitasnya mengalahkan utility hidden, jadi
              panahnya tetap tampil di desktop kalau ditempel langsung. */}
          <span className="shrink-0 md:hidden">
            <span className="material-symbols-outlined text-sm text-primary transition-transform group-hover:translate-x-1">
              arrow_forward_ios
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
