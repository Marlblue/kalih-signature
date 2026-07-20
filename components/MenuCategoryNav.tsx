const CATEGORIES = [
  { href: "#coffee", label: "Kopi Spesial" },
  { href: "#main", label: "Menu Utama" },
  { href: "#dessert", label: "Dessert" },
  { href: "#snacks", label: "Snack" },
];

export default function MenuCategoryNav() {
  return (
    <nav className="py-4 border-b border-black/5 bg-white sticky top-16 sm:top-20 z-40">
      <div className="px-gutter max-w-container-max mx-auto overflow-x-auto">
        <div className="flex gap-8 items-center justify-center min-w-max">
          {CATEGORIES.map((category) => (
            <a
              key={category.href}
              href={category.href}
              className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors pb-1"
            >
              {category.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
