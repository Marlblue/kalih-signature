import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";

const featuredArticle = ARTICLES.find((article) => article.featured) ?? ARTICLES[0];

export default function ArtikelFeatured() {
  return (
    <section data-reveal className="px-gutter max-w-container-max mx-auto mb-16">
      <Link
        href={`/artikel/${featuredArticle.slug}`}
        className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
      >
        <div className="md:col-span-8 relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={featuredArticle.image.src}
            alt={featuredArticle.image.alt}
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
            {featuredArticle.title}
          </h2>
          <p className="text-secondary leading-relaxed">{featuredArticle.excerpt}</p>
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-2 transition-all mt-2">
            Baca Selengkapnya
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </span>
        </div>
      </Link>
    </section>
  );
}
