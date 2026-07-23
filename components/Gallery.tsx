"use client";

import { useState } from "react";
import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";

const CATEGORIES = ["Semua", "Ambience", "Coffee & Non Coffee", "Food", "Event"] as const;
type Category = (typeof CATEGORIES)[number];

const PHOTOS: {
  src: string;
  alt: string;
  category: Exclude<Category, "Semua">;
  span: string;
}[] = [
    // Ambience
    { src: "/images-gallery/a1.png", alt: "Ambience Kalih", category: "Ambience", span: "masonry-item-tall" },
    { src: "/images-gallery/a1.2.png", alt: "Ambience Kalih", category: "Ambience", span: "" },
    { src: "/images-gallery/a1.3.png", alt: "Ambience Kalih", category: "Ambience", span: "" },
    { src: "/images-gallery/a1.4.png", alt: "Ambience Kalih", category: "Ambience", span: "masonry-item-wide" },
    { src: "/images-gallery/a.2.png", alt: "Ambience Kalih", category: "Ambience", span: "" },
    { src: "/images-gallery/a.2.2.png", alt: "Ambience Kalih", category: "Ambience", span: "" },
    { src: "/images-gallery/a3.png", alt: "Ambience Kalih", category: "Ambience", span: "masonry-item-tall" },
    { src: "/images-gallery/a3.3.png", alt: "Ambience Kalih", category: "Ambience", span: "" },
    { src: "/images-gallery/a4.png", alt: "Ambience Kalih", category: "Ambience", span: "" },
    { src: "/images-gallery/a4.4.png", alt: "Ambience Kalih", category: "Ambience", span: "masonry-item-wide" },
    { src: "/images-gallery/a4.5.png", alt: "Ambience Kalih", category: "Ambience", span: "" },
    // Coffee
    { src: "/images-gallery/c1.png", alt: "Coffee Kalih", category: "Coffee & Non Coffee", span: "" },
    { src: "/images-gallery/c1.1.png", alt: "Coffee Kalih", category: "Coffee & Non Coffee", span: "masonry-item-tall" },
    { src: "/images-gallery/c2.png", alt: "Coffee Kalih", category: "Coffee & Non Coffee", span: "masonry-item-wide" },
    { src: "/images-gallery/c3.png", alt: "Coffee Kalih", category: "Coffee & Non Coffee", span: "" },
    { src: "/images-gallery/c4.1.png", alt: "Coffee Kalih", category: "Coffee & Non Coffee", span: "" },
    { src: "/images-gallery/c4.2.png", alt: "Coffee Kalih", category: "Coffee & Non Coffee", span: "" },
    { src: "/images-gallery/c4..4.png", alt: "Coffee Kalih", category: "Coffee & Non Coffee", span: "masonry-item-tall" },
    { src: "/images-gallery/c5.png", alt: "Coffee Kalih", category: "Coffee & Non Coffee", span: "" },
    { src: "/images-gallery/c5.5.png", alt: "Coffee Kalih", category: "Coffee & Non Coffee", span: "" },
    // Food
    { src: "/images-gallery/f1.png", alt: "Food Kalih", category: "Food", span: "masonry-item-tall" },
    { src: "/images-gallery/f1.1.png", alt: "Food Kalih", category: "Food", span: "" },
    { src: "/images-gallery/f2.png", alt: "Food Kalih", category: "Food", span: "masonry-item-wide" },
    { src: "/images-gallery/f2.2.png", alt: "Food Kalih", category: "Food", span: "" },
    { src: "/images-gallery/f3.1.png", alt: "Food Kalih", category: "Food", span: "" },
    { src: "/images-gallery/f3.2.png", alt: "Food Kalih", category: "Food", span: "" },
    { src: "/images-gallery/f4.png", alt: "Food Kalih", category: "Food", span: "masonry-item-tall" },
    { src: "/images-gallery/f5.png", alt: "Food Kalih", category: "Food", span: "" },
    { src: "/images-gallery/f5.1.png", alt: "Food Kalih", category: "Food", span: "" },
    // Event (placeholder - ganti nanti)
    { src: "/images-gallery/e1.png", alt: "Event Kalih", category: "Event", span: "masonry-item-wide" },
    { src: "/images-gallery/e2.png", alt: "Event Kalih", category: "Event", span: "" },
    { src: "/images-gallery/e3.png", alt: "Event Kalih", category: "Event", span: "" },
    { src: "/images-gallery/e4.png", alt: "Event Kalih", category: "Event", span: "" },
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
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl font-bold text-primary mb-4 tracking-tight">
              Sudut Kalih
            </h2>
            <p className="text-secondary">Abadikan setiap momen berkesan Anda.</p>
          </div>
          <div className="hidden md:flex gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={`text-sm font-bold pb-1 transition-colors ${activeCategory === category
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
