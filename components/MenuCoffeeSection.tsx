import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";
import Eyebrow from "@/components/ui/Eyebrow";

const COFFEE_ITEMS = [
  {
    name: "Swan Latte Art Reserve",
    price: "IDR 55K",
    description: "Double-shot espresso dengan susu bertekstur lembut dan aroma floral.",
  },
  {
    name: "V60 Single Origin",
    price: "IDR 48K",
    description: "Rotasi biji kopi musiman pilihan, diseduh manual untuk rasa yang jernih.",
  },
];

export default function MenuCoffeeSection() {
  return (
    <section id="coffee" data-reveal className="py-24 px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <Eyebrow tone="secondary">Brewing Excellence</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
            Kopi Spesial
          </h2>
          <p className="text-secondary leading-relaxed mb-10">
            Biji kopi kami dipilih secara etis dan disangrai dalam batch kecil untuk menjaga
            karakter uniknya, dari tanah vulkanik Indonesia langsung ke cangkir Anda.
          </p>
          <div className="space-y-8">
            {COFFEE_ITEMS.map((item) => (
              <div key={item.name} className="group relative pb-6 border-b border-black/10">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <h3 className="font-bold text-lg text-primary">{item.name}</h3>
                  <span className="text-sm font-bold text-primary whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-secondary italic">{item.description}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 rounded-2xl overflow-hidden aspect-[4/5] shadow-xl shadow-black/10">
          <Image
            src={STOCK_IMAGES.menuShowcase.src}
            alt={STOCK_IMAGES.menuShowcase.alt}
            width={800}
            height={1000}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
