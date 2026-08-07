export const WHATSAPP_NUMBER_DISPLAY = "+62 823-2808-0354";
export const WHATSAPP_NUMBER_INTL = "6282328080354";
// api.whatsapp.com directly, not wa.me — wa.me is just a redirector that
// hops through api.whatsapp.com before opening the app, adding a visible delay.
export const WHATSAPP_RESERVATION_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER_INTL}`;

export const BUSINESS_ADDRESS = "Jl. Raya Pacul No.18B, Sibata, Mejasem Bar., Kec. Kramat, Kabupaten Tegal, Jawa Tengah 52181";
export const BUSINESS_ADDRESS_LINE_2 = "Kawasan Strategis, Indonesia";
export const BUSINESS_HOURS = "Senin - Minggu: 08:00 - 23:00 WIB";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/cZaSmnPYXkbUyh2J7";

export const INSTAGRAM_URL = "https://www.instagram.com/kalih.signature/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61591835167127&locale=id_ID";
export const TIKTOK_URL = "https://www.tiktok.com/@kalih.signature";
export const GOFOOD_URL = "https://gofood.co.id/tegal/restaurant/kalih-signature-coffee-and-eatery-jl-raya-pacul-mejasem-tegal-0980e8df-eaff-4cb1-bbaa-f9fa88df3e99";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kalihcoffee.com";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/event", label: "Event" },
  { href: "/artikel", label: "Artikel" },
  { href: "/contact-us", label: "Contact Us" },
];
