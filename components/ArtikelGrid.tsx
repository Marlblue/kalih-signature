import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";

const GRID_ARTICLES = ARTICLES.filter((article) => !article.featured);

export default function ArtikelGrid() {
  return (
    <section data-reveal className="px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {GRID_ARTICLES.map((article) => (
          <article key={article.slug} className="group h-full flex flex-col">
            <Link href={`/artikel/${article.slug}`} className="relative aspect-square rounded-xl overflow-hidden mb-4 block">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              {article.topic}
            </span>
            <h3 className="font-bold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
              <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
            </h3>
            <p className="text-sm text-secondary leading-relaxed mb-3 flex-1">{article.excerpt}</p>
            <Link
              href={`/artikel/${article.slug}`}
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary mt-auto"
            >
              Baca Selengkapnya
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
