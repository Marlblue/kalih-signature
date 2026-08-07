import type { Metadata } from "next";
import ArtikelHeader from "@/components/ArtikelHeader";
import ArtikelFeatured from "@/components/ArtikelFeatured";
import ArtikelGrid from "@/components/ArtikelGrid";
import ArtikelNewsletter from "@/components/ArtikelNewsletter";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Artikel | Kalih Signature",
  description:
    "Inspirasi dan cerita dari Kalih Signature: kopi, keluarga, produktivitas, hingga tips merancang event di Tegal.",
};

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ArtikelPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  return (
    <div className="pb-24">
      <ArtikelHeader />
      <ArtikelFeatured />
      <ArtikelGrid page={page} />
      <ArtikelNewsletter />
    </div>
  );
}
