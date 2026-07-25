import Image from "next/image";
import Link from "next/link";
import { getLatestArticles } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export default async function Articles() {
  const latestArticles = await getLatestArticles(3);

  if (latestArticles.length === 0) return null;

  return (
    <section id="articles" data-reveal className="py-24 bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-4 tracking-tight">
            Artikel
          </h2>
          <p className="text-secondary">
            Temukan tips dan cerita menarik seputar gaya hidup dan produktivitas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <Link key={article.slug} href={`/artikel/${article.slug}`} className="group block">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <Image
                  src={urlFor(article.coverImage).width(800).height(450).url()}
                  alt={article.coverImage.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
