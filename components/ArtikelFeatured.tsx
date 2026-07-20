import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";

export default function ArtikelFeatured() {
  return (
    <section data-reveal className="px-gutter max-w-container-max mx-auto mb-16">
      <article className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={STOCK_IMAGES.galleryArsitektur1.src}
            alt={STOCK_IMAGES.galleryArsitektur1.alt}
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="md:col-span-4 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Featured Story
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
            Menemukan Harmoni: Arsitektur yang Bernapas di Kalih Signature
          </h2>
          <p className="text-secondary leading-relaxed">
            Bagaimana desain kontemporer berpadu dengan lanskap tropis untuk menciptakan ruang
            yang mendukung restorasi mental dan produktivitas.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary hover:gap-2 transition-all mt-2"
          >
            Baca Selengkapnya
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </article>
    </section>
  );
}
