import Image from "next/image";
import Link from "next/link";
import { STOCK_IMAGES } from "@/lib/stock-images";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

export default function MenuShowcase() {
  return (
    <section id="menu" data-reveal className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.menuShowcase.src}
          alt={STOCK_IMAGES.menuShowcase.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full text-white">
        <div className="max-w-2xl">
          <span className="text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
            Crafted with Love
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Karya Seni di Setiap Sajian
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-90 leading-relaxed font-light">
            Mulai dari biji kopi pilihan hingga bahan baku lokal yang segar. Setiap hidangan di
            Kalih Signature adalah perpaduan teknik kuliner modern dan rasa autentik.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/menu"
              className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all text-center"
            >
              Lihat Menu Lengkap
            </Link>
            <a
              href={WHATSAPP_RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 backdrop-blur-md px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-center"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
