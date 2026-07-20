import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";

const CATEGORIES = [
  {
    title: "Corporate Meeting",
    tagline: "Profesional, fokus, tanpa hambatan.",
    image: STOCK_IMAGES.eventCorporate,
  },
  {
    title: "Birthday Celebration",
    tagline: "Ceria, elegan, personal.",
    image: STOCK_IMAGES.eventBirthday,
  },
  {
    title: "Engagement",
    tagline: "Romantis, timeless, penuh makna.",
    image: STOCK_IMAGES.eventEngagement,
  },
  {
    title: "Community Workshop",
    tagline: "Kreatif, kolaboratif, hidup.",
    image: STOCK_IMAGES.eventWorkshop,
  },
  {
    title: "Rooftop Yoga",
    tagline: "Tenang, mindful, menyegarkan.",
    image: STOCK_IMAGES.eventYoga,
  },
];

export default function EventCategories() {
  return (
    <section data-reveal className="py-24 px-gutter max-w-container-max mx-auto">
      <div className="max-w-xl mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
          Destinasi yang Bisa Disesuaikan
        </h2>
        <p className="text-secondary">
          Dari kumpul intim hingga milestone perusahaan, kami menyediakan ruang untuk visi Anda.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {CATEGORIES.map((category, index) => (
          <div key={category.title} className={`group cursor-pointer ${index % 2 === 1 ? "lg:mt-12" : ""}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4">
              <Image
                src={category.image.src}
                alt={category.image.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-lg text-primary mb-1">{category.title}</h3>
            <p className="text-sm text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              {category.tagline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
