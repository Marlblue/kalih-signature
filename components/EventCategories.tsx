import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";

const CATEGORIES = [
  {
    title: "Corporate Meeting",
    tagline: "Fokus, nyaman, dan produktif.",
    image: { src: "/event-categories/Corporate Meeting .png", alt: "Corporate Meeting" },
  },
  {
    title: "Special Moment",
    tagline: "Hangat, akrab, dan berkesan.",
    image: { src: "/event-categories/Special Moment.png", alt: "Special Moment" },
  },
  {
    title: "Engagement / Lamaran",
    tagline: "Intim, hangat, dan penuh cerita.",
    image: STOCK_IMAGES.eventEngagement,
  },
  {
    title: "Community Gathering",
    tagline: "Tempat berkumpul untuk komunitas, organisasi, dan berbagai kegiatan bersama.",
    image: { src: "/event-categories/Community Gathering.png", alt: "Community Gathering" },
  },
  {
    title: "Rooftop Activity",
    tagline: "Area rooftop untuk yoga, gathering, komunitas, dan berbagai acara outdoor.",
    image: { src: "/event-categories/Rooftop Activity.png", alt: "Rooftop Activity" },
  },
];

export default function EventCategories() {
  return (
    <section data-reveal className="py-24 px-gutter max-w-container-max mx-auto">
      <div className="max-w-xl mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
          Event & Gathering di Kalih Signature Tegal
        </h2>
        <p className="text-secondary">
          Meeting room, rooftop, coffee break, hingga private event dengan pilihan menu dan suasana yang nyaman.
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
