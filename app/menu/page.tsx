import type { Metadata } from "next";
import MenuHero from "@/components/MenuHero";
import MenuCategoryNav from "@/components/MenuCategoryNav";
import MenuPosterGallery from "@/components/MenuPosterGallery";
import MenuCallToAction from "@/components/MenuCallToAction";

export const metadata: Metadata = {
  title: "Menu | Kalih Signature",
  description:
    "Jelajahi menu Kalih Signature: kopi spesial, menu utama signature, artisanal dessert, hingga signature snacks di Tegal.",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MenuCategoryNav />
      <MenuPosterGallery />
      <MenuCallToAction />
    </>
  );
}
