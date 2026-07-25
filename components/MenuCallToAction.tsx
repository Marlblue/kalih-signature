import Image from "next/image";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

export default function MenuCallToAction() {
  return (
    <section data-reveal className="relative py-24 sm:py-32 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/menu-cta/image-cta-menu.jpeg"
          alt="Suasana Kalih Signature"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/25 to-transparent" />
      </div>
      <div className="relative z-10 px-gutter max-w-container-max mx-auto flex justify-end">
        <div className="max-w-xl text-right">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 tracking-tight">
            Kalau Sudah di Kalih,
            <br />
            Susah Cepat Pulang.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-end items-center">
            <a
              href={WHATSAPP_RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 whitespace-nowrap hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
            >
              Reservasi Sekarang (WA)
            </a>
            <a
              href="https://gofood.link/a/KM8oooY"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-4 rounded-full font-bold whitespace-nowrap hover:bg-white/10 transition-all"
            >
              Order Online (GoFood)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
