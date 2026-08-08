import Link from "next/link";

export default function LegalClinicSuccess() {
  return (
    <section className="px-gutter max-w-container-max mx-auto pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-4xl fill-1">
            check_circle
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
          Terima Kasih
        </h1>
        <p className="text-secondary text-base sm:text-lg leading-relaxed mb-6">
          Pendaftaran Legal Clinic Anda telah berhasil kami terima. Tim kami akan menghubungi Anda
          melalui WhatsApp dalam waktu 24 jam untuk proses verifikasi, penjadwalan, penyelesaian
          commitment fee, dan konfirmasi akhir.
        </p>
        <p className="text-primary font-medium text-base sm:text-lg leading-relaxed mb-10">
          Mohon pastikan nomor WhatsApp yang Anda masukkan aktif. Terima kasih. Sampai bertemu di
          Kalih Signature.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:shadow-xl active:scale-95"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
