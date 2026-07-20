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
  eventCorporate: {
    src: unsplash("1497366811353-6870744d04b2"),
    alt: "Ruang meeting korporat modern dengan meja kayu panjang",
  },
  eventBirthday: {
    src: unsplash("1519671482749-fd09be7ccebf"),
    alt: "Tamu bersulang dengan gelas anggur saat perayaan",
  },
  eventEngagement: {
    src: unsplash("1519741497674-611481863552"),
    alt: "Pasangan memegang buket bunga saat golden hour",
  },
  eventWorkshop: {
    src: unsplash("1513364776144-60967b0f800f"),
    alt: "Kuas lukis dengan cat warna-warni di atas kanvas",
  },
  eventYoga: {
    src: unsplash("1544367567-0f2fcb009e0b"),
    alt: "Siluet orang yoga di rooftop saat matahari terbenam",
  },
  eventGalleryWedding: {
    src: unsplash("1519167758481-83f550bb49b3"),
    alt: "Ballroom pernikahan dengan meja bundar dan dekorasi mewah",
  },
  eventGalleryLaunch: {
    src: unsplash("1540575467063-178a50c2df87"),
    alt: "Audiens menghadiri acara peluncuran produk di ruang gelap",
  },
  eventGalleryCommunity: {
    src: unsplash("1517457373958-b7bdd4587205"),
    alt: "Kerumunan orang menikmati pesta komunitas outdoor dengan lampu string",
  },
  articleEventPlanning: {
    src: unsplash("1478146059778-26028b07395a"),
    alt: "Meja acara ditata elegan dengan bunga, lilin, dan dessert",
  },
  locationMap: {
    src: unsplash("1524661135-423995f22d0b", 1600),
    alt: "Ilustrasi peta dunia bergaya vintage",
  },
} satisfies Record<string, StockImage>;
