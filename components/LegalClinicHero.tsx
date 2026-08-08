import Image from "next/image";

const HIGHLIGHTS = [
  { icon: "location_on", label: "Tegal" },
  { icon: "group", label: "Kuota Terbatas" },
];

export default function LegalClinicHero() {
  return (
    <section data-reveal className="px-gutter max-w-container-max mx-auto pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 border border-outline-variant shadow-2xl shadow-primary/5">
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="font-display text-xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight text-balance">
            FREE PRIVATE LEGAL CONSULTATION BERSAMA YAYASAN INDONESIA SALAM JAYA
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Grid-nya items-center, jadi foto ini ikut turun mengikuti tinggi
              kolom teks di sebelahnya. self-start menyejajarkannya ke atas dan
              margin negatifnya mengangkat sedikit lagi supaya tetap terangkat
              di lebar layar tempat fotonya justru lebih tinggi dari teks. */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/10 shadow-lg md:self-start md:-mt-4">
            <Image
              src="/legal-clinic/prof-margono-teaser.webp"
              alt="Prof. Dr. Margono, S.H., M.H."
              fill
              priority
              // Kolomnya separuh container yang dibatasi 1280px, jadi lebarnya
              // tidak pernah lebih dari ~520px; 660px menutupi itu plus zoom.
              sizes="(max-width: 768px) 100vw, 660px"
              // Disamakan dengan kartu di home: file dan zoom yang sama, supaya
              // wajahnya sama besar dan bahunya sama-sama merapat ke tepi.
              className="object-cover scale-[1.25]"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-6">
            <div>
              <h2 className="font-display text-base sm:text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide leading-tight mb-2">
                Prof. Dr. Margono, S.H., M.H.
              </h2>
              <p className="text-secondary text-base sm:text-lg">Guru Besar Hukum</p>
            </div>

            <div className="space-y-4 text-on-surface/80 leading-relaxed">
              <p>
                Lebih dari 30 tahun berkiprah di dunia hukum sebagai akademisi, advokat, hakim, dan Guru Besar Hukum.
              </p>
              <p>
                Kini hadir di Kalih Signature untuk memberikan konsultasi hukum secara privat kepada masyarakat dan pelaku usaha.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 py-5 border-y border-outline-variant w-full">
              {HIGHLIGHTS.map((highlight) => (
                <div key={highlight.label} className="flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-primary text-lg">
                    {highlight.icon}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {highlight.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
