import { STOCK_IMAGES } from "@/lib/stock-images";

export type Article = {
  slug: string;
  topic: string;
  title: string;
  excerpt: string;
  image: { src: string; alt: string };
  content: string[];
  featured?: boolean;
};

export const ARTICLES: Article[] = [
  {
    slug: "arsitektur-yang-bernapas",
    topic: "Architecture",
    title: "Menemukan Harmoni: Arsitektur yang Bernapas di Kalih Signature",
    excerpt:
      "Bagaimana desain kontemporer berpadu dengan lanskap tropis untuk menciptakan ruang yang mendukung restorasi mental dan produktivitas.",
    image: STOCK_IMAGES.galleryArsitektur1,
    featured: true,
    content: [
      "Sejak awal perancangan, Kalih Signature dibangun dengan satu pertanyaan sederhana: bagaimana sebuah ruang bisa membuat penggunanya bernapas lebih lega? Jawabannya ada pada perpaduan antara garis-garis arsitektur kontemporer dan lanskap tropis yang dibiarkan tumbuh secara alami di sekeliling bangunan.",
      "Bukaan udara yang lebar, langit-langit tinggi, dan material alami seperti kayu dan batu ekspos dipilih bukan sekadar untuk estetika, melainkan untuk menciptakan sirkulasi udara dan cahaya yang membuat setiap sudut terasa lapang. Tanaman rindang yang mengelilingi area duduk berfungsi sebagai peneduh sekaligus penyaring kebisingan dari luar.",
      "Filosofi ini berangkat dari kesadaran bahwa produktivitas dan ketenangan bukan dua hal yang bertolak belakang. Banyak pengunjung yang datang untuk bekerja mengaku merasa lebih fokus justru karena suasana yang tidak terasa seperti kantor konvensional — melainkan seperti ruang tamu besar yang menyatu dengan alam.",
      "Ke depannya, elemen biofilik ini akan terus dikembangkan, termasuk penambahan area hijau baru dan material daur ulang pada fase renovasi berikutnya, sejalan dengan komitmen Kalih Signature terhadap desain yang berkelanjutan.",
    ],
  },
  {
    slug: "seni-manual-brew",
    topic: "Coffee Culture",
    title: "Seni Manual Brew: Lebih dari Sekadar Kafein",
    excerpt: "Menelusuri perjalanan biji kopi pilihan dari petani lokal hingga ke meja Anda.",
    image: STOCK_IMAGES.articleCoffee,
    content: [
      "Setiap cangkir kopi yang disajikan di Kalih Signature membawa cerita panjang — dimulai dari kebun kopi milik petani lokal di dataran tinggi, melewati proses sortir dan sangrai yang cermat, hingga akhirnya diseduh satu per satu di depan mata Anda.",
      "Manual brew dipilih sebagai metode andalan karena memberi kontrol penuh atas rasio air, suhu, dan waktu seduh — tiga variabel yang menentukan karakter rasa sebuah biji kopi. Barista kami dilatih untuk mengenali profil rasa tiap batch, sehingga metode seduh disesuaikan agar potensi terbaik biji kopi benar-benar keluar.",
      "Lebih dari sekadar kafein, secangkir manual brew adalah undangan untuk memperlambat ritme. Prosesnya yang membutuhkan waktu justru menjadi jeda kecil di tengah kesibukan — momen untuk duduk, mengamati, dan menikmati aroma sebelum tegukan pertama.",
      "Kalih Signature bekerja sama langsung dengan kelompok tani kopi lokal untuk memastikan kualitas biji sekaligus mendukung keberlanjutan ekonomi petani, sehingga setiap cangkir yang Anda nikmati juga turut menghidupi rantai produksi di baliknya.",
    ],
  },
  {
    slug: "akhir-pekan-bersama-keluarga",
    topic: "Family Bonding",
    title: "Akhir Pekan yang Berarti: Menciptakan Kenangan Keluarga",
    excerpt: "Tips merencanakan quality time yang bermakna di tengah kesibukan harian.",
    image: STOCK_IMAGES.articleFamily,
    content: [
      "Di tengah jadwal yang padat, akhir pekan sering kali menjadi satu-satunya waktu keluarga bisa benar-benar berkumpul. Tantangannya adalah memastikan waktu tersebut terasa bermakna, bukan sekadar berada di tempat yang sama sambil masing-masing sibuk dengan gawai.",
      "Pilih aktivitas yang melibatkan interaksi langsung, seperti bermain di area outdoor, mencoba menu baru bersama, atau sekadar duduk santai sambil bercerita tanpa distraksi. Ruang terbuka yang nyaman dan area bermain anak di Kalih Signature dirancang agar orang tua tetap bisa bersantai sementara anak-anak leluasa bereksplorasi.",
      "Konsistensi juga penting. Menjadikan satu momen — misalnya sarapan akhir pekan atau makan siang bersama — sebagai ritual keluarga akan membangun kebiasaan yang dinanti, bukan sekadar agenda tambahan di kalender.",
      "Pada akhirnya, kenangan keluarga yang paling berkesan jarang datang dari acara besar yang rumit direncanakan, melainkan dari momen-momen sederhana yang diulang dengan penuh kehadiran.",
    ],
  },
  {
    slug: "deep-work-di-ruang-terbuka",
    topic: "Productivity",
    title: "Deep Work di Ruang Terbuka: Mengapa Alam Memacu Kreativitas",
    excerpt: "Eksplorasi tentang bagaimana elemen biofilik di Kalih meningkatkan fokus Anda.",
    image: STOCK_IMAGES.articleCoworking,
    content: [
      "Konsep deep work menuntut lingkungan yang minim distraksi namun tetap merangsang pikiran. Menariknya, riset di bidang psikologi lingkungan menunjukkan bahwa paparan elemen alam — tanaman, cahaya alami, sirkulasi udara segar — justru dapat meningkatkan kapasitas fokus dibanding ruang kerja tertutup yang serba steril.",
      "Fenomena ini dikenal sebagai desain biofilik: mengintegrasikan unsur alam ke dalam ruang buatan manusia. Di Kalih Signature, prinsip ini diterapkan melalui area kerja yang dikelilingi tanaman rindang, meja-meja dengan akses pandangan ke taman, serta ventilasi alami yang mengurangi kelelahan mata dan pikiran akibat duduk terlalu lama di ruang ber-AC penuh.",
      "Banyak pekerja lepas dan tim kecil yang menjadikan area coworking kami sebagai basis kerja mingguan mengaku produktivitas mereka meningkat justru setelah berpindah dari kantor konvensional ke ruang terbuka semacam ini — bukan karena bekerja lebih lama, tetapi karena kualitas fokus yang lebih baik dalam waktu yang sama.",
      "Bagi Anda yang ingin mencoba, disarankan memilih jam-jam pagi hingga siang ketika cahaya alami paling optimal, dan memanfaatkan jeda singkat untuk berjalan di sekitar area hijau — cara sederhana untuk me-reset fokus di antara sesi kerja yang intens.",
    ],
  },
  {
    slug: "merancang-intimate-gathering",
    topic: "Events & Planning",
    title: "Panduan Merancang Intimate Gathering yang Tak Terlupakan",
    excerpt: "Dari pemilihan menu hingga dekorasi: memastikan tamu Anda merasa istimewa.",
    image: STOCK_IMAGES.articleEventPlanning,
    content: [
      "Intimate gathering menuntut perhatian pada detail yang berbeda dari acara besar. Dengan jumlah tamu yang lebih terbatas, setiap elemen — dari tata letak meja hingga pemilihan menu — punya ruang untuk terasa lebih personal dan disesuaikan dengan karakter acara.",
      "Mulailah dari menentukan suasana yang ingin dibangun: hangat dan santai, elegan dan minimalis, atau ceria dan penuh warna. Suasana ini akan menjadi acuan untuk memilih dekorasi, pencahayaan, hingga susunan menu yang disajikan.",
      "Pemilihan menu sebaiknya mempertimbangkan preferensi tamu secara keseluruhan, bukan hanya selera penyelenggara. Format sajian seperti family style atau tapas kecil sering kali lebih cocok untuk gathering intim karena mendorong interaksi antar tamu dibanding penyajian formal bergilir.",
      "Terakhir, jangan abaikan sentuhan kecil seperti kartu nama di meja, playlist musik yang sesuai suasana, atau area foto sederhana. Detail-detail ini yang biasanya paling diingat tamu setelah acara usai — dan menjadi alasan mereka merasa benar-benar diistimewakan.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}
