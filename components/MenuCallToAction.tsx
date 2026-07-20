import Link from "next/link";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

export default function MenuCallToAction() {
  return (
    <section data-reveal className="bg-primary text-white py-24">
      <div className="px-gutter max-w-container-max mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 tracking-tight">
          Siap merasakan hospitality
          <br />
          sesungguhnya?
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-base">chat_bubble</span>
            Order via WhatsApp
          </a>
          <Link
            href="/"
            className="border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
