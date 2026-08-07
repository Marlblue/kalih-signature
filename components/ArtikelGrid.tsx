import Image from "next/image";
import Link from "next/link";
import { getNonFeaturedArticlesCount, getNonFeaturedArticlesPage } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

const PAGE_SIZE = 8;

function getPageNumbers(current: number, total: number): Array<number | "ellipsis"> {
  const delta = 1;
  const pages: Array<number | "ellipsis"> = [];

  for (let i = 1; i <= total; i++) {
    const isEdge = i === 1 || i === total;
    const isNearCurrent = i >= current - delta && i <= current + delta;
    if (isEdge || isNearCurrent) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "ellipsis") {
      pages.push("ellipsis");
    }
  }

  return pages;
}

type Props = {
  page?: number;
};

export default async function ArtikelGrid({ page = 1 }: Props) {
  const totalCount = await getNonFeaturedArticlesCount();
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const gridArticles = await getNonFeaturedArticlesPage(currentPage, PAGE_SIZE);

  return (
    <section data-reveal id="artikel-grid" className="px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {gridArticles.map((article) => (
          <article key={article.slug} className="group h-full flex flex-col">
            <Link href={`/artikel/${article.slug}`} className="relative aspect-square rounded-xl overflow-hidden mb-4 block">
              <Image
                src={urlFor(article.coverImage).width(600).height(600).url()}
                alt={article.coverImage.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              {article.topic}
            </span>
            <h3 className="font-bold text-lg leading-snug mb-2 line-clamp-2 min-h-[3.1rem] group-hover:text-primary transition-colors">
              <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
            </h3>
            <p className="text-sm text-secondary leading-relaxed mb-3 line-clamp-2 flex-1">{article.excerpt}</p>
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

      {totalPages > 1 && (
        <nav aria-label="Halaman artikel" className="flex items-center justify-center gap-2 mt-16">
          <Link
            href={`/artikel?page=${currentPage - 1}#artikel-grid`}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={`w-9 h-9 flex items-center justify-center rounded-full text-secondary transition-colors ${
              currentPage <= 1 ? "opacity-30 pointer-events-none" : "hover:bg-surface"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </Link>

          {getPageNumbers(currentPage, totalPages).map((pageNumber, index) =>
            pageNumber === "ellipsis" ? (
              <span key={`ellipsis-${index}`} className="w-9 h-9 flex items-center justify-center text-secondary">
                …
              </span>
            ) : (
              <Link
                key={pageNumber}
                href={`/artikel?page=${pageNumber}#artikel-grid`}
                aria-current={pageNumber === currentPage ? "page" : undefined}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  pageNumber === currentPage
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-surface"
                }`}
              >
                {pageNumber}
              </Link>
            )
          )}

          <Link
            href={`/artikel?page=${currentPage + 1}#artikel-grid`}
            aria-disabled={currentPage >= totalPages}
            tabIndex={currentPage >= totalPages ? -1 : undefined}
            className={`w-9 h-9 flex items-center justify-center rounded-full text-secondary transition-colors ${
              currentPage >= totalPages ? "opacity-30 pointer-events-none" : "hover:bg-surface"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </nav>
      )}
    </section>
  );
}
