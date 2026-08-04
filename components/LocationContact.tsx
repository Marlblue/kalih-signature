import LazyMapEmbed from "@/components/LazyMapEmbed";
import {
  BUSINESS_ADDRESS,
  BUSINESS_ADDRESS_LINE_2,
  BUSINESS_HOURS,
  WHATSAPP_RESERVATION_URL,
} from "@/lib/constants";

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
            <LazyMapEmbed
              src="https://www.google.com/maps?q=Kalih+Signature+Coffee+and+Eatery+Tegal&ll=-6.8887307,109.1503639&z=17&output=embed"
              title="Lokasi Kalih Signature di Google Maps"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
