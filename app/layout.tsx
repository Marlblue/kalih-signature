import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Kalih Signature | Cafe, Working Space & Meeting Room Premium di Tegal",
  description:
    "Kalih Signature: Cafe Tegal premium dengan Working Space Tegal terbaik, Meeting Room Tegal profesional, rooftop eksklusif, dan area ramah keluarga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${hankenGrotesk.variable} ${inter.variable} scroll-smooth h-full`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body antialiased selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
