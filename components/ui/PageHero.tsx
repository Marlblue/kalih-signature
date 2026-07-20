import Image from "next/image";

type PageHeroProps = {
  image: { src: string; alt: string };
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
};

export default function PageHero({ image, eyebrow, title, description, children }: PageHeroProps) {
  return (
    <header className="relative min-h-[70vh] flex items-center pt-28 pb-16 sm:pt-24 sm:pb-10">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full text-white">
        <div className="max-w-2xl">
          <span className="text-sm font-bold tracking-[0.3em] uppercase mb-4 block">{eyebrow}</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg mb-10 max-w-xl opacity-90 leading-relaxed font-light">
            {description}
          </p>
          {children}
        </div>
      </div>
    </header>
  );
}
