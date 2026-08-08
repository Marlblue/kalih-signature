import Image from "next/image";
import Link from "next/link";

export default function LegalClinicTeaser() {
  return (
    <section data-reveal className="py-16 sm:py-24 px-gutter bg-background">
      {/* Sengaja lebih sempit daripada max-w-container-max yang dipakai section
          lain di home, supaya kartunya tidak terbaca memanjang. Efek sampingnya
          kolom fotonya ikut menyempit sehingga framenya jadi lebih tinggi
          daripada lebar — justru menguntungkan, karena object-cover lalu
          memotong sisi kiri-kanan, bukan bagian bawah jas. */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-surface rounded-2xl sm:rounded-3xl overflow-hidden border border-primary/5 shadow-xl flex flex-col md:flex-row items-center">
          {/* Foto khusus kartu ini sudah di-crop mengikuti desain (1328x1244),
              beda dari foto di /hubungi/legal-clinic yang memakai versi utuh.
              Di md ke atas tingginya mengikuti tinggi kartu (self-stretch), bukan
              rasio filenya — kalau dikunci ke rasio, di layar md fotonya jadi
              lebih pendek daripada kolom teks dan muncul jalur kosong krem di
              atas-bawahnya. */}
          <div className="relative w-full aspect-square md:aspect-auto md:w-1/3 md:self-stretch overflow-hidden">
            <Image
              src="/legal-clinic/prof-margono-teaser.webp"
              alt="Prof. Dr. Margono, S.H., M.H."
              fill
              // Lebar kartunya dibatasi max-w-5xl, jadi kolom foto ini tidak
              // pernah lebih dari ~341px; 440px sudah menutupi itu plus zoom di
              // bawah, dan jauh lebih hemat daripada memakai satuan vw.
              sizes="(max-width: 768px) 100vw, 440px"
              // Zoom yang sama dipakai di semua ukuran layar supaya framingnya
              // identik dengan foto di halaman /hubungi/legal-clinic.
              className="object-cover object-top scale-[1.25]"
            />
          </div>
          <div className="w-full md:w-2/3 p-6 sm:p-10 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 sm:mb-4">
              Kolaborasi Eksklusif bersama Yayasan Indonesia Salam Jaya
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Legal Clinic bersama
              <br />
              Prof. Dr. Margono, S.H., M.H.
            </h2>
            <p className="text-secondary text-base sm:text-lg mb-6 sm:mb-10 leading-relaxed">
              Konsultasi hukum private GRATIS selama 30 menit di Kalih Signature.
            </p>
            <Link
              href="/hubungi/legal-clinic"
              className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all active:scale-95"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
