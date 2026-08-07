function unsplash(id: string, width = 1200) {
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=80&auto=format&fit=crop`;
}

type StockImage = { src: string; alt: string };

export const STOCK_IMAGES = {
  menuShowcase: {
    src: unsplash("1495474472287-4d71bcdd2085", 1600),
    alt: "Dua cangkir kopi dengan latte art beradu",
  },
} satisfies Record<string, StockImage>;
