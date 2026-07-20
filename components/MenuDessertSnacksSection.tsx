import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";

const DESSERTS = [
  {
    name: "Panna Cotta Berry",
    price: "IDR 55K",
    description: "Panna cotta lembut dengan topping stroberi segar musiman.",
    image: STOCK_IMAGES.menuDessertBerry,
  },
  {
    name: "Chocolate Ganache Cake",
    price: "IDR 65K",
    description: "Kue cokelat lembut disiram ganache cokelat leleh hangat.",
    image: STOCK_IMAGES.menuDessertChocolate,
  },
];

const SNACKS = [
  {
    name: "Kentang Goreng Bumbu Rempah",
    price: "IDR 45K",
    description: "Kentang goreng renyah dengan taburan bumbu rempah pilihan.",
    image: STOCK_IMAGES.menuFries,
  },
  {
    name: "Garden Buddha Bowl",
    price: "IDR 42K",
    description: "Aneka sayuran segar, avokad, dan biji-bijian dalam satu mangkuk sehat.",
    image: STOCK_IMAGES.menuBowl,
  },
];

function MenuListItem({
  name,
  price,
  description,
  image,
}: {
  name: string;
  price: string;
  description: string;
  image: { src: string; alt: string };
}) {
  return (
    <div className="flex gap-4 group">
      <div className="w-28 h-28 flex-shrink-0 overflow-hidden rounded-xl relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="112px"
          className="object-cover group-hover:scale-110 transition-transform"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-between items-baseline gap-4 mb-1">
          <h4 className="font-bold text-lg">{name}</h4>
          <span className="text-sm font-bold text-primary whitespace-nowrap">{price}</span>
        </div>
        <p className="text-sm text-secondary">{description}</p>
      </div>
    </div>
  );
}

export default function MenuDessertSnacksSection() {
  return (
    <section id="dessert" data-reveal className="py-24 px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-10 tracking-tight">
            Artisanal Dessert
          </h2>
          <div className="space-y-8">
            {DESSERTS.map((item) => (
              <MenuListItem key={item.name} {...item} />
            ))}
          </div>
        </div>
        <div id="snacks">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-10 tracking-tight">
            Signature Snacks
          </h2>
          <div className="space-y-8">
            {SNACKS.map((item) => (
              <MenuListItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
