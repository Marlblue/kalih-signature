"use client";

import { useState } from "react";
import Image from "next/image";

const CATEGORIES = ["Semua", "Food", "Coffee & Non Coffee", "Ambience", "Event"] as const;
type Category = (typeof CATEGORIES)[number];

const PHOTOS: {
  src: string;
  alt: string;
  category: Exclude<Category, "Semua">;
  span: string;
}[] = [
    // Ambience
    { src: "/images-gallery/a1.webp", alt: "Suasana area duduk utama Kalih Signature", category: "Ambience", span: "masonry-item-tall" },
    { src: "/images-gallery/a1.2.webp", alt: "Sudut interior Kalih Signature dengan pencahayaan hangat", category: "Ambience", span: "" },
    { src: "/images-gallery/a1.3.webp", alt: "Area lounge Kalih Signature", category: "Ambience", span: "" },
    { src: "/images-gallery/a1.4.webp", alt: "Tampilan panorama ruang utama Kalih Signature", category: "Ambience", span: "masonry-item-wide" },
    { src: "/images-gallery/a.2.webp", alt: "Area outdoor Kalih Signature", category: "Ambience", span: "" },
    { src: "/images-gallery/a.2.2.webp", alt: "Detail dekorasi interior Kalih Signature", category: "Ambience", span: "" },
    { src: "/images-gallery/a3.webp", alt: "Rooftop Kalih Signature saat sore hari", category: "Ambience", span: "masonry-item-tall" },
    { src: "/images-gallery/a3.3.webp", alt: "Area rooftop Kalih Signature", category: "Ambience", span: "" },
    { src: "/images-gallery/a4.webp", alt: "Kids area Kalih Signature", category: "Ambience", span: "" },
    { src: "/images-gallery/a4.4.webp", alt: "Suasana working space Kalih Signature", category: "Ambience", span: "masonry-item-wide" },
    { src: "/images-gallery/a4.5.webp", alt: "Meeting room Kalih Signature", category: "Ambience", span: "" },
    // Coffee
    { src: "/images-gallery/c1.webp", alt: "Signature coffee Kalih Signature", category: "Coffee & Non Coffee", span: "" },
    { src: "/images-gallery/c1.1.webp", alt: "Proses manual brew di Kalih Signature", category: "Coffee & Non Coffee", span: "masonry-item-tall" },
    { src: "/images-gallery/c2.webp", alt: "Menu kopi susu khas Kalih Signature", category: "Coffee & Non Coffee", span: "masonry-item-wide" },
    { src: "/images-gallery/c3.webp", alt: "Es kopi Kalih Signature", category: "Coffee & Non Coffee", span: "" },
    { src: "/images-gallery/c4.1.webp", alt: "Minuman non-coffee Kalih Signature", category: "Coffee & Non Coffee", span: "" },
    { src: "/images-gallery/c4.2.webp", alt: "Latte art Kalih Signature", category: "Coffee & Non Coffee", span: "" },
    { src: "/images-gallery/c4..4.webp", alt: "Kopi hitam Kalih Signature", category: "Coffee & Non Coffee", span: "masonry-item-tall" },
    { src: "/images-gallery/c5.webp", alt: "Racikan minuman signature Kalih Signature", category: "Coffee & Non Coffee", span: "" },
    { src: "/images-gallery/c5.5.webp", alt: "Minuman segar khas Kalih Signature", category: "Coffee & Non Coffee", span: "" },
    // Food
    { src: "/images-gallery/f1.webp", alt: "Hidangan favorit Kalih Signature", category: "Food", span: "masonry-item-tall" },
    { src: "/images-gallery/f1.1.webp", alt: "Menu makanan utama Kalih Signature", category: "Food", span: "" },
    { src: "/images-gallery/f2.webp", alt: "Sajian pasta di Kalih Signature", category: "Food", span: "masonry-item-wide" },
    { src: "/images-gallery/f2.2.webp", alt: "Menu snack Kalih Signature", category: "Food", span: "" },
    { src: "/images-gallery/f3.1.webp", alt: "Hidangan pembuka Kalih Signature", category: "Food", span: "" },
    { src: "/images-gallery/f3.2.webp", alt: "Menu dessert Kalih Signature", category: "Food", span: "" },
    { src: "/images-gallery/f4.webp", alt: "Hidangan berat khas Kalih Signature", category: "Food", span: "masonry-item-tall" },
    { src: "/images-gallery/f5.webp", alt: "Menu sarapan Kalih Signature", category: "Food", span: "" },
    { src: "/images-gallery/f5.1.webp", alt: "Sajian favorit pelanggan Kalih Signature", category: "Food", span: "" },
    // Event (placeholder - ganti nanti)
    { src: "/images-gallery/e1.webp", alt: "Suasana acara komunitas di Kalih Signature", category: "Event", span: "masonry-item-wide" },
    { src: "/images-gallery/e2.webp", alt: "Kegiatan corporate event di Kalih Signature", category: "Event", span: "" },
    { src: "/images-gallery/e3.webp", alt: "Gathering tamu di Kalih Signature", category: "Event", span: "" },
    { src: "/images-gallery/e4.webp", alt: "Momen perayaan di Kalih Signature", category: "Event", span: "" },
  ];

const INITIAL_COUNT = 6;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");
  const [showAll, setShowAll] = useState(false);

  const filteredPhotos =
    activeCategory === "Semua"
      ? PHOTOS
      : PHOTOS.filter((photo) => photo.category === activeCategory);

  const visiblePhotos = showAll
    ? filteredPhotos
    : filteredPhotos.slice(0, INITIAL_COUNT);

  const hasMore = filteredPhotos.length > INITIAL_COUNT;

  return (
    <section id="gallery" data-reveal className="py-24 bg-white">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10 md:mb-16">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4 tracking-tight">
              Sudut Kalih
            </h2>
            <p className="text-secondary">Abadikan setiap momen berkesan Anda.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-gutter px-gutter md:mx-0 md:px-0 md:overflow-visible">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                aria-pressed={activeCategory === category}
                aria-label={`Filter galeri: ${category}`}
                className={`text-sm font-bold pb-1 whitespace-nowrap shrink-0 transition-colors ${activeCategory === category
                  ? "text-primary border-b-2 border-primary"
                  : "text-secondary hover:text-primary"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="masonry-grid">
          {visiblePhotos.map((photo) => (
            <div
              key={photo.src}
              className={`relative ${photo.span} rounded-2xl overflow-hidden shadow-lg group`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              aria-label={`Lihat semua foto kategori ${activeCategory}`}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-bold text-sm tracking-wide hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer"
            >
              Lihat Selengkapnya
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
