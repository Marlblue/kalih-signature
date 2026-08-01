import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_ADDRESS, BUSINESS_HOURS, SITE_URL, WHATSAPP_NUMBER_DISPLAY } from "@/lib/constants";
import "./globals.css";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-K7DFR2MN";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

const TITLE = "Kalih Signature | Cafe, Working Space & Meeting Room Premium di Tegal";
const DESCRIPTION =
  "Kalih Signature: Cafe Tegal premium dengan Working Space Tegal terbaik, Meeting Room Tegal profesional, rooftop eksklusif, dan area ramah keluarga.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Kalih Signature",
    images: [{ url: "/images-hero/hero.webp", width: 1200, height: 630 }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images-hero/hero.webp"],
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Kalih Signature",
  image: `${SITE_URL}/images-hero/hero.webp`,
  logo: `${SITE_URL}/logos-navbar/kalih-logo-square.png`,
  url: SITE_URL,
  telephone: WHATSAPP_NUMBER_DISPLAY,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_ADDRESS,
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  servesCuisine: "Cafe",
  openingHours: BUSINESS_HOURS,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`${hankenGrotesk.variable} ${inter.variable} scroll-smooth h-full`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body antialiased selection:bg-primary selection:text-white">
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
