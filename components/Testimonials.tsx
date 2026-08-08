const TESTIMONIALS = [
  {
    quote:
      "Pertama kali ke sini bareng keluarga dan ternyata tempatnya nyaman banget. Area cukup luas, suasananya adem, jadi enak buat ngobrol dan makan santai. Pilihan makanannya juga banyak dan pelayanannya ramah. Cocok buat yang cari tempat makan dan kumpul keluarga di Tegal.",
    name: "Rita & Keluarga",
  },
  {
    quote:
      "Kemarin bikin acara meeting bulanan bareng teman-teman di Kalih Signature dan semuanya berjalan lancar. Meeting room-nya nyaman, makanannya enak, dan staff-nya juga support banget dari awal sampai acara selesai. Kebutuhan acara seperti mic, speaker, sampai proyektor juga dibantu disiapkan. Recommended kalau cari tempat meeting atau bikin acara di Tegal.",
    name: "Alvin Sigit",
  },
  {
    quote:
      "Enak banget nongkrong sore-sore di rooftop-nya. Suasananya adem, sejuk, pemandangannya juga bagus. Jadi betah ngobrol lama di sini. Tempat duduknya nyaman, makanan dan minumannya enak. Salah satu tempat nongkrong di Tegal yang pengen banget didatengin lagi.",
    name: "Rani",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" data-reveal className="py-24 bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-primary mb-4 tracking-tight">
            Apa Kata Mereka?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Ulasan dari komunitas dan mitra kami yang telah bertumbuh bersama Kalih Signature.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex text-yellow-400 mb-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="material-symbols-outlined fill-1">
                    star
                  </span>
                ))}
              </div>
              <p className="text-on-surface italic mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
