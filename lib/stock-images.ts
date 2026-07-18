/**
 * Temporary Unsplash stock photography for sections that don't have real
 * Kalih Signature photos yet (Hero, Intent grid, and Family focus already
 * use real photos from /public). Each ID was fetch-checked to confirm it
 * resolves and actually shows the described subject. Swap for real venue
 * photography when available — see PRD.md, "Aset & Konten".
 */
function unsplash(id: string, width = 1200) {
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=80&auto=format&fit=crop`;
}

type StockImage = { src: string; alt: string };

export const STOCK_IMAGES = {
  workMeeting: {
    src: unsplash("1517502884422-41eaead166d4"),
    alt: "Meeting room modern dengan pemandangan kota",
  },
  menuShowcase: {
    src: unsplash("1495474472287-4d71bcdd2085", 1600),
    alt: "Dua cangkir kopi dengan latte art beradu",
  },
  galleryArsitektur1: {
    src: unsplash("1600093463592-8e36ae95ef56"),
    alt: "Interior cafe rindang dengan banyak tanaman",
  },
  galleryKeluarga: {
    src: unsplash("1502086223501-7ea6ecd79368"),
    alt: "Anak-anak bermain riang di area hijau",
  },
  galleryArsitektur2: {
    src: unsplash("1523301343968-6a6ebf63c672"),
    alt: "Area outdoor saat golden hour",
  },
  galleryKuliner: {
    src: unsplash("1414235077428-338989a2e8c0"),
    alt: "Sajian fine dining di meja restoran",
  },
  galleryArsitektur3: {
    src: unsplash("1521737604893-d14cc237f11d"),
    alt: "Orang-orang bekerja bersama dengan laptop",
  },
  articleCoworking: {
    src: unsplash("1552581234-26160f608093"),
    alt: "Tim berdiskusi produktivitas di depan whiteboard",
  },
  articleFamily: {
    src: unsplash("1476234251651-f353703a034d"),
    alt: "Dua anak membaca buku bersama saat golden hour",
  },
  articleCoffee: {
    src: unsplash("1509785307050-d4066910ec1e"),
    alt: "Proses menyeduh kopi dengan biji kopi di sekitarnya",
  },
} satisfies Record<string, StockImage>;
