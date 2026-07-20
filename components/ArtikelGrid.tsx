import Image from "next/image";
import { STOCK_IMAGES } from "@/lib/stock-images";

const ARTICLES = [
  {
    topic: "Coffee Culture",
    title: "Seni Manual Brew: Lebih dari Sekadar Kafein",
    excerpt: "Menelusuri perjalanan biji kopi pilihan dari petani lokal hingga ke meja Anda.",
    image: STOCK_IMAGES.articleCoffee,
  },
  {
    topic: "Family Bonding",
    title: "Akhir Pekan yang Berarti: Menciptakan Kenangan Keluarga",
    excerpt: "Tips merencanakan quality time yang bermakna di tengah kesibukan harian.",
    image: STOCK_IMAGES.articleFamily,
  },
  {
    topic: "Productivity",
    title: "Deep Work di Ruang Terbuka: Mengapa Alam Memacu Kreativitas",
    excerpt: "Eksplorasi tentang bagaimana elemen biofilik di Kalih meningkatkan fokus Anda.",
    image: STOCK_IMAGES.articleCoworking,
  },
  {
    topic: "Events & Planning",
    title: "Panduan Merancang Intimate Gathering yang Tak Terlupakan",
    excerpt: "Dari pemilihan menu hingga dekorasi: memastikan tamu Anda merasa istimewa.",
    image: STOCK_IMAGES.articleEventPlanning,
  },
];

export default function ArtikelGrid() {
  return (
    <section data-reveal className="px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {ARTICLES.map((article) => (
          <article key={article.title} className="group cursor-pointer">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              {article.topic}
            </span>
            <h3 className="font-bold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-secondary leading-relaxed mb-3">{article.excerpt}</p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary"
            >
              Baca Selengkapnya
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
