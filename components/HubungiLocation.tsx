import LazyMapEmbed from "@/components/LazyMapEmbed";
import {
  BUSINESS_ADDRESS,
  BUSINESS_ADDRESS_LINE_2,
  BUSINESS_HOURS,
  GOOGLE_MAPS_URL,
} from "@/lib/constants";

export default function HubungiLocation() {
  return (
    <section className="px-gutter max-w-container-max mx-auto mb-16">
      <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm">
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <LazyMapEmbed
            src="https://www.google.com/maps?q=Kalih+Signature+Coffee+and+Eatery+Tegal&ll=-6.8887307,109.1503639&z=17&output=embed"
            title="Lokasi Kalih Signature di Google Maps"
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Kunjungi Kami</h2>
          <p className="text-secondary mb-6">
            {BUSINESS_ADDRESS}
            <br />
            {BUSINESS_ADDRESS_LINE_2}
            <br />
            {BUSINESS_HOURS}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Get Directions
              <span className="material-symbols-outlined text-sm">directions</span>
            </a>
            <a
              href="#"
              className="border border-primary text-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-center hover:bg-primary/5 transition-colors"
            >
              View Hours
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
