import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";

export default function WorkMeeting() {
  return (
    <section data-reveal className="bg-primary text-white py-24">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-8">Pusat Produktivitas Tegal</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Lupakan cafe yang bising. Di sini, kami menyediakan lingkungan profesional yang
              mendukung konsentrasi Anda. Dari WiFi fiber optic hingga meeting room dengan
              projector.
            </p>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-2">Corporate Meeting Room</h3>
                <p className="text-sm text-white/70">
                  Kapasitas hingga 15 orang, Smart TV/Projector, dan layanan catering khusus.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-2">Premium Working Space</h3>
                <p className="text-sm text-white/70">
                  Area tenang dengan sofa nyaman dan meja kerja tinggi yang ergonomis.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={STOCK_IMAGES.workMeeting.src}
                alt={STOCK_IMAGES.workMeeting.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white text-primary p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold mb-1">100 Mbps</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                Dedicated Connection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
