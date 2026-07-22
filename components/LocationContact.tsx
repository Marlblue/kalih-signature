import Image from "next/image";
import {
  BUSINESS_ADDRESS,
  BUSINESS_ADDRESS_LINE_2,
  BUSINESS_HOURS,
  GOOGLE_MAPS_URL,
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_RESERVATION_URL,
} from "@/lib/constants";
import { STOCK_IMAGES } from "@/lib/stock-images";

export default function LocationContact() {
  return (
    <section data-reveal className="py-24 bg-white">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl font-bold text-primary mb-8 tracking-tight">
              Kunjungi Kami
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                  Lokasi
                </p>
                <p className="text-primary font-medium leading-relaxed">
                  {BUSINESS_ADDRESS}
                  <br />
                  {BUSINESS_ADDRESS_LINE_2}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                  Jam Operasional
                </p>
                <p className="text-primary font-medium">{BUSINESS_HOURS}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                  Hubungi Kami
                </p>
                <a
                  href={WHATSAPP_RESERVATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  WhatsApp Reservation
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-2xl h-[400px] border-8 border-surface">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={STOCK_IMAGES.locationMap.src}
                alt={STOCK_IMAGES.locationMap.alt}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
              <div className="relative z-10 text-center bg-white/90 p-8 rounded-lg shadow-lg border border-primary/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary text-5xl mb-4">
                  location_on
                </span>
                <h3 className="font-bold text-primary mb-2">Lihat di Google Maps</h3>
                <p className="text-sm text-secondary mb-6 max-w-xs mx-auto">
                  Temukan rute tercepat menuju Kalih Signature melalui navigasi favorit Anda.
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Buka Peta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
