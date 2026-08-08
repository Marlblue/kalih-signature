import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

export default function HubungiQuickActions() {
  return (
    <section className="px-gutter max-w-xl mx-auto space-y-4 mb-8">
      <a
        href={WHATSAPP_RESERVATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rise-in shimmer-button flex items-center justify-between w-full bg-primary text-on-primary p-5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined">chat</span>
          <span className="text-xs font-bold uppercase tracking-widest">Reservasi via WhatsApp</span>
        </div>
        <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
      </a>
      <Link
        href="/hubungi/kolaborasi"
        style={{ animationDelay: "120ms" }}
        className="rise-in group flex items-center justify-between w-full bg-surface text-primary p-5 rounded-xl border border-outline-variant transition-all hover:bg-primary/5 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99]"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined">handshake</span>
          <span className="text-xs font-bold uppercase tracking-widest">Form Kolaborasi KOL</span>
        </div>
        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
          arrow_forward_ios
        </span>
      </Link>
      {/* Dibuat sebagai kartu berfoto, bukan baris ikon seperti dua tautan di
          atas, karena isinya perlu dijelaskan — nama narasumber dan bentuk
          acaranya tidak terbaca hanya dari judul "Form Kolaborasi Exclusive". */}
      <Link
        href="/hubungi/legal-clinic"
        style={{ animationDelay: "240ms" }}
        className="rise-in group flex items-start gap-3 sm:gap-4 sm:items-center w-full bg-surface text-primary p-4 rounded-xl border border-outline-variant transition-all hover:bg-primary/5 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99]"
      >
        {/* 64px di mobile, bukan 80px: di layar sempit tiap piksel foto
            langsung mengambil jatah kolom teks di sebelahnya, dan paragrafnya
            yang butuh ruang untuk tidak pecah jadi banyak baris pendek. */}
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/legal-clinic/prof-margono-teaser.webp"
            alt="Prof. Dr. Margono, S.H., M.H."
            fill
            // Kotaknya 64px (96px di >=sm), tapi scale di bawah membuatnya
            // terpakai di 80px/120px. Angka di sini harus ukuran tampil
            // sebenarnya — kalau ditulis sebesar kotaknya, browser mengambil
            // bitmap kecil lalu merentangkannya dan hasilnya buram.
            sizes="(min-width: 640px) 120px, 80px"
            // Framing disamakan dengan kartu Legal Clinic di home dan halamannya.
            className="object-cover object-top scale-[1.25]"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span className="block text-xs font-bold uppercase tracking-wide sm:tracking-widest mb-1 sm:mb-1.5">
            {/* "Form" dibuang di mobile — labelnya sendiri sudah 2 baris tanpa
                kata itu, dan "Kolaborasi Exclusive" saja cukup jelas di kolom sempit. */}
            <span className="sm:hidden">Kolaborasi Exclusive</span>
            <span className="hidden sm:inline">Form Kolaborasi Exclusive</span>
          </span>
          {/* Detail sekunder (kata "hukum", durasi, gelar lengkap) disembunyikan
              di mobile supaya paragrafnya muat ~2 baris sejajar tinggi foto,
              bukan melebar jauh ke bawah dan bikin kartunya terlihat berantakan. */}
          <p className="text-xs sm:text-sm text-secondary leading-snug">
            Legal Clinic: konsultasi <span className="hidden sm:inline">hukum </span>
            privat GRATIS<span className="hidden sm:inline"> 30 menit</span> bersama{" "}
            <span className="font-bold text-primary">
              Prof. Dr. Margono<span className="hidden sm:inline">, S.H., M.H.</span>
            </span>
          </p>
        </div>

        <span className="material-symbols-outlined text-sm shrink-0 self-center transition-transform group-hover:translate-x-1">
          arrow_forward_ios
        </span>
      </Link>
    </section>
  );
}
