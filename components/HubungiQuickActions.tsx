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
        className="rise-in group flex items-center gap-4 w-full bg-surface text-primary p-4 rounded-xl border border-outline-variant transition-all hover:bg-primary/5 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99]"
      >
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/legal-clinic/prof-margono-teaser.webp"
            alt="Prof. Dr. Margono, S.H., M.H."
            fill
            // Kotaknya 80px (96px di >=sm), tapi scale di bawah membuatnya
            // terpakai di 100px/120px. Angka di sini harus ukuran tampil
            // sebenarnya — kalau ditulis sebesar kotaknya, browser mengambil
            // bitmap 96px lalu merentangkannya jadi 120px dan hasilnya buram.
            sizes="(min-width: 640px) 120px, 100px"
            // Framing disamakan dengan kartu Legal Clinic di home dan halamannya.
            className="object-cover object-top scale-[1.25]"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span className="block text-xs font-bold uppercase tracking-widest mb-1.5">
            Form Kolaborasi Exclusive
          </span>
          <p className="text-sm text-secondary leading-snug">
            Legal Clinic: konsultasi hukum privat GRATIS 30 menit bersama{" "}
            <span className="font-bold text-primary">Prof. Dr. Margono, S.H., M.H.</span>
          </p>
        </div>

        <span className="material-symbols-outlined text-sm shrink-0 transition-transform group-hover:translate-x-1">
          arrow_forward_ios
        </span>
      </Link>
    </section>
  );
}
