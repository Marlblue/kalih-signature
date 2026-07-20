import type { Metadata } from "next";
import ArtikelHeader from "@/components/ArtikelHeader";
import ArtikelFeatured from "@/components/ArtikelFeatured";
import ArtikelGrid from "@/components/ArtikelGrid";
import ArtikelNewsletter from "@/components/ArtikelNewsletter";

export const metadata: Metadata = {
  title: "Artikel | Kalih Signature",
  description:
    "Inspirasi dan cerita dari Kalih Signature: kopi, keluarga, produktivitas, hingga tips merancang event di Tegal.",
};

export default function ArtikelPage() {
  return (
    <div className="pb-24">
      <ArtikelHeader />
      <ArtikelFeatured />
      <ArtikelGrid />
      <ArtikelNewsletter />
    </div>
  );
}
