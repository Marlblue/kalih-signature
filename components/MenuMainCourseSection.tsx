import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";
import Eyebrow from "@/components/ui/Eyebrow";

export default function MenuMainCourseSection() {
  return (
    <section id="main" data-reveal className="py-24 bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <Eyebrow tone="secondary">Cita Rasa Dunia, Jiwa Lokal</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Menu Utama Signature
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 group">
            <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 shadow-lg shadow-black/5">
              <Image
                src={STOCK_IMAGES.menuSalmon.src}
                alt={STOCK_IMAGES.menuSalmon.alt}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h4 className="font-bold text-lg text-primary">Salmon Panggang Miso</h4>
                <p className="text-sm text-secondary mt-1">
                  Salmon panggang dengan salsa timun-tomat segar dan reduksi balsamic.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Salmon Panggang Miso</h3>
              <span className="text-sm font-bold text-primary">IDR 185K</span>
            </div>
          </div>
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 shadow-lg shadow-black/5">
              <Image
                src={STOCK_IMAGES.menuRisotto.src}
                alt={STOCK_IMAGES.menuRisotto.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Risotto Jamur Parmesan</h3>
              <span className="text-sm font-bold text-primary">IDR 145K</span>
            </div>
            <p className="text-sm text-secondary mt-1">
              Nasi arborio creamy dengan jamur pilihan, parmesan, dan sentuhan lemon.
            </p>
          </div>
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 shadow-lg shadow-black/5">
              <Image
                src={STOCK_IMAGES.menuRibs.src}
                alt={STOCK_IMAGES.menuRibs.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Iga Sapi Bakar</h3>
              <span className="text-sm font-bold text-primary">IDR 210K</span>
            </div>
            <p className="text-sm text-secondary mt-1">
              Iga sapi panggang 12 jam, disajikan dengan saus barbeku dan acar segar.
            </p>
          </div>
          <div className="md:col-span-2 group">
            <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 shadow-lg shadow-black/5">
              <Image
                src={STOCK_IMAGES.menuPasta.src}
                alt={STOCK_IMAGES.menuPasta.alt}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Pasta Pesto Kebun</h3>
              <span className="text-sm font-bold text-primary">IDR 120K</span>
            </div>
            <p className="text-sm text-secondary mt-1">
              Farfalle pesto dengan tomat ceri dan sayuran hijau segar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
