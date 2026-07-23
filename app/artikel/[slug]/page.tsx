import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";
import ArtikelNewsletter from "@/components/ArtikelNewsletter";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Kalih Signature`,
    description: article.excerpt,
  };
}

export default async function ArtikelDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const otherArticles = ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <div className="pb-24">
      <div className="pt-32 pb-10 px-gutter max-w-3xl mx-auto">
        <Link
          href="/artikel"
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary mb-8"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Kembali ke Artikel
        </Link>
        <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-4">
          {article.topic}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
          {article.title}
        </h1>
        <p className="text-secondary text-lg">{article.excerpt}</p>
      </div>

      <div className="px-gutter max-w-5xl mx-auto mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="px-gutter max-w-3xl mx-auto flex flex-col gap-6">
        {article.content.map((paragraph, index) => (
          <p key={index} className="text-secondary leading-relaxed text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      {otherArticles.length > 0 && (
        <div className="px-gutter max-w-container-max mx-auto mt-24">
          <h2 className="font-display text-2xl font-bold text-primary mb-8">
            Artikel Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherArticles.map((item) => (
              <Link key={item.slug} href={`/artikel/${item.slug}`} className="group block">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}

      <ArtikelNewsletter />
    </div>
  );
}
