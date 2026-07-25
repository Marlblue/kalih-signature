import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

export default function MenuHero() {
  return (
    <PageHero
      image={{ src: "/menu-hero/page-menu.webp", alt: "Menu Kalih Signature" }}
      eyebrow="Menu"
      title="Apa Pun Mood-mu, Ada Menunya."
      description="Ngopi, makan, ngobrol, atau kerja. Tinggal pilih yang kamu suka."
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a
          href={WHATSAPP_RESERVATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all active:scale-95 text-center"
        >
          Reservasi Sekarang
        </a>
        <Link
          href="/#gallery"
          className="border border-white/40 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all active:scale-95 text-center"
        >
          Lihat Galeri
        </Link>
      </div>
    </PageHero>
  );
}
