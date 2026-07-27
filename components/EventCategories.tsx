import Image from "next/image";

const CATEGORIES = [
  {
    title: "Corporate Meeting",
    tagline: "Fokus, nyaman, dan produktif.",
    image: { src: "/event-categories/Corporate Meeting .webp", alt: "Corporate Meeting" },
  },
  {
    title: "Special Moment",
    tagline: "Hangat, akrab, dan berkesan.",
    image: { src: "/event-categories/Special Moment.webp", alt: "Special Moment" },
  },
  {
    title: "Engagement / Lamaran",
    tagline: "Intim, hangat, dan penuh cerita.",
    image: { src: "/event-categories/Enggagment.webp", alt: "Engagement" },
  },
  {
    title: "Community Gathering",
    tagline: "Tempat berkumpul untuk komunitas, organisasi, dan berbagai kegiatan bersama.",
    image: { src: "/event-categories/Community Gathering.webp", alt: "Community Gathering" },
  },
  {
    title: "Rooftop Activity",
    tagline: "Area rooftop untuk yoga, gathering, komunitas, dan berbagai acara outdoor.",
    image: { src: "/event-categories/Rooftop Activity.webp", alt: "Rooftop Activity" },
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {CATEGORIES.map((category, index) => {
          const isLastOdd = CATEGORIES.length % 2 === 1 && index === CATEGORIES.length - 1;
          return (
            <div
              key={category.title}
              className={`group cursor-pointer ${index % 2 === 1 ? "lg:mt-12" : ""} ${
                isLastOdd ? "col-span-2 w-1/2 mx-auto md:col-span-1 md:w-auto md:mx-0" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-3 sm:mb-4">
                <Image
                  src={category.image.src}
                  alt={category.image.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-primary mb-1">{category.title}</h3>
              <p className="text-xs sm:text-sm text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                {category.tagline}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
