import { Fragment } from "react";

const CATEGORIES = [
  { href: "#minuman", label: "Minuman" },
  { href: "#utama", label: "Menu Utama" },
  { href: "#snack", label: "Snack & Dessert" },
];

export default function MenuCategoryNav() {
  return (
    <nav className="py-4 border-b border-black/5 bg-white">
      <div className="px-gutter max-w-container-max mx-auto overflow-x-auto no-scrollbar">
        <div className="flex gap-4 sm:gap-8 items-center justify-center min-w-max">
          {CATEGORIES.map((category, index) => (
            <Fragment key={category.href}>
              {index > 0 && <span className="text-secondary/30 text-xs">|</span>}
              <a
                href={category.href}
                className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors pb-1"
              >
                {category.label}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
