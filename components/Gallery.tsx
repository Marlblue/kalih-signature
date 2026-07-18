"use client";

import { useState } from "react";
import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";

const CATEGORIES = ["Semua", "Keluarga", "Arsitektur", "Kuliner"] as const;
type Category = (typeof CATEGORIES)[number];

const PHOTOS: {
  src: string;
  alt: string;
  category: Exclude<Category, "Semua">;
  span: string;
}[] = [
  {
    src: STOCK_IMAGES.galleryArsitektur1.src,
    alt: STOCK_IMAGES.galleryArsitektur1.alt,
    category: "Arsitektur",
    span: "masonry-item-tall",
  },
  {
    src: STOCK_IMAGES.galleryKeluarga.src,
    alt: STOCK_IMAGES.galleryKeluarga.alt,
    category: "Keluarga",
    span: "",
  },
  {
    src: STOCK_IMAGES.galleryArsitektur2.src,
    alt: STOCK_IMAGES.galleryArsitektur2.alt,
    category: "Arsitektur",
    span: "masonry-item-wide",
  },
  {
    src: STOCK_IMAGES.galleryKuliner.src,
    alt: STOCK_IMAGES.galleryKuliner.alt,
    category: "Kuliner",
    span: "",
  },
  {
    src: STOCK_IMAGES.galleryArsitektur3.src,
    alt: STOCK_IMAGES.galleryArsitektur3.alt,
    category: "Arsitektur",
    span: "masonry-item-tall",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");

  const visiblePhotos =
    activeCategory === "Semua"
      ? PHOTOS
      : PHOTOS.filter((photo) => photo.category === activeCategory);

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
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-bold pb-1 transition-colors ${
                  activeCategory === category
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
      </div>
    </section>
  );
}
