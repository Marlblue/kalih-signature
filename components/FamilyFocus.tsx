import Image from "next/image";

export default function FamilyFocus() {
  return (
    <section data-reveal className="py-24 overflow-hidden">
      <div className="px-gutter max-w-container-max mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images-familyfocus/rindang.webp"
              alt="Area keluarga & kids area di Kalih Signature"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            OUTDOOR EXPERIENCE
          </span>
          <h2 className="font-display text-4xl font-bold text-primary mb-6 leading-tight">
            Nikmati Suasana Asri di Tengah Kota Tegal
          </h2>
          <p className="text-secondary text-lg mb-8 leading-relaxed">
            Kalih Signature menghadirkan area outdoor yang rindang dengan pepohonan hijau, udara yang sejuk, dan suasana yang nyaman untuk bersantai, berkumpul, maupun menikmati waktu bersama keluarga.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <div>
                <p className="font-bold">Area Outdoor Luas</p>
                <p className="text-sm text-secondary">Rindang dan nyaman sepanjang hari.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <div>
                <p className="font-bold">Kids Area</p>
                <p className="text-sm text-secondary">Area bermain yang aman untuk si kecil.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
