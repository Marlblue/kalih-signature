import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";

type IntentCard =
  | { type: "photo"; title: string; description: string; src: string; alt: string }
  | { type: "icon"; title: string; description: string; icon: string; tone: "solid" | "subtle" };

const CARDS: IntentCard[] = [
  {
    type: "photo",
    title: "Makan Bersama Keluarga",
    description: "Momen hangat dengan sajian kuliner terbaik.",
    src: "/images-intent/makan-bersama.png",
    alt: "Keluarga makan bersama di Kalih Signature",
  },
  {
    type: "photo",
    title: "Kerja & WFC",
    description: "WiFi kencang dan suasana tenang untuk fokus.",
    src: "/images-intent/wfc.png",
    alt: "Area kerja dan WFC di Kalih Signature",
  },
  {
    type: "photo",
    title: "Corporate Meeting & Workshop",
    description: "Ruang profesional dengan fasilitas lengkap.",
    src: "/images-intent/meeting.png",
    alt: "Meeting room Kalih Signature",
  },
  {
    type: "photo",
    title: "Rooftop Experience",
    description: "Sunset dan angin sejuk di ketinggian Tegal.",
    src: "/images-intent/rooftop.png",
    alt: "Rooftop Kalih Signature saat senja",
  },
  {
    type: "photo",
    title: "Event & Gathering",
    description: "Rayakan ulang tahun atau tunangan dengan berkelas.",
    src: "/images-intent/event.png",
    alt: "Event & Gathering Kalih Signature"
  },
  {
    type: "photo",
    title: "Menu Favorit",
    description: "Kopi artisan dan pastry yang memanjakan lidah.",
    src: "/images-intent/menu-fav.png",
    alt: "Menu kopi dan pastry favorit Kalih Signature",
  },
];

export default function IntentGrid() {
  return (
    <section id="intent" data-reveal className="py-24 px-gutter max-w-container-max mx-auto">
      <div className="mb-16">
        <h2 className="font-display text-4xl font-bold text-primary mb-4">
          Mau ke Kalih untuk apa hari ini?
        </h2>
        <div className="w-20 h-1 bg-primary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CARDS.map((card) =>
          card.type === "photo" ? (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/5] flex items-center justify-center p-8 text-center cursor-pointer border border-primary/5 hover:bg-primary hover:text-white transition-colors duration-500 ${card.tone === "solid" ? "bg-primary/5" : "bg-primary/10"
                }`}
            >
              <div>
                <span className="material-symbols-outlined text-5xl mb-6">{card.icon}</span>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
