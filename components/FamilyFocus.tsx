import Image from "next/image";

export default function FamilyFocus() {
  return (
    <section data-reveal className="py-24 overflow-hidden">
      <div className="px-gutter max-w-container-max mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images-familyfocus/family-focus.png"
              alt="Area keluarga & kids area di Kalih Signature"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            Family Friendly
          </span>
          <h2 className="font-display text-4xl font-bold text-primary mb-6 leading-tight">
            Waktu Berkualitas di Bawah Rindangnya Pepohonan
          </h2>
          <p className="text-secondary text-lg mb-8 leading-relaxed">
            Kami memahami pentingnya waktu bersama keluarga. Dengan area outdoor yang luas, udara
            segar dari pepohonan besar, dan fasilitas kids area khusus, Kalih Signature adalah
            destinasi paling aman dan nyaman untuk si kecil.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <div>
                <p className="font-bold">Playground</p>
                <p className="text-sm text-secondary">Area bermain edukatif.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <div>
                <p className="font-bold">Menu Anak</p>
                <p className="text-sm text-secondary">Sajian sehat &amp; lezat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
