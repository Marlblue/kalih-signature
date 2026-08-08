import Image from "next/image";
import Link from "next/link";

export default function LegalClinicTeaser() {
  return (
    <section data-reveal className="py-16 sm:py-24 px-gutter bg-background">
      <div className="max-w-container-max mx-auto">
        <div className="bg-surface rounded-2xl sm:rounded-3xl overflow-hidden border border-primary/5 shadow-xl flex flex-col md:flex-row items-center">
          <div className="relative w-full md:w-1/3 aspect-square md:aspect-auto md:h-[400px]">
            <Image
              src="/legal-clinic/prof-margono.webp"
              alt="Prof. Dr. Margono, S.H., M.H."
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top"
            />
          </div>
          <div className="w-full md:w-2/3 p-6 sm:p-10 md:p-16 flex flex-col items-start">
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
