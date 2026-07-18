import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";

const ARTICLES = [
  {
    title: "5 Tips Kerja Produktif di Coworking Space",
    excerpt: "Maksimalkan fokus Anda dengan pengaturan meja dan suasana yang tepat...",
    image: STOCK_IMAGES.articleCoworking,
  },
  {
    title: "Mengapa Kalih Signature Menjadi Destinasi Favorit Keluarga?",
    excerpt: "Dari area bermain hingga menu sehat, temukan alasan kenyamanan kami...",
    image: STOCK_IMAGES.articleFamily,
  },
  {
    title: "Seni Menyeduh: Rahasia Kopi Artisan Kalih",
    excerpt: "Mengenal lebih dekat proses pemilihan biji kopi terbaik kami...",
    image: STOCK_IMAGES.articleCoffee,
  },
];

export default function Articles() {
  return (
    <section id="articles" data-reveal className="py-24 bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-4 tracking-tight">
            Inspirasi &amp; Cerita dari Kalih
          </h2>
          <p className="text-secondary">
            Temukan tips dan cerita menarik seputar gaya hidup dan produktivitas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div key={article.title} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
