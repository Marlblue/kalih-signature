import type { MetadataRoute } from "next";
import { getAllArticleSlugs } from "@/lib/sanity/queries";
import { SITE_URL } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/menu", "/event", "/artikel", "/contact-us", "/hubungi", "/hubungi/kolaborasi", "/hubungi/legal-clinic"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const slugs = await getAllArticleSlugs();
  const articleRoutes = slugs.map((slug) => ({
    url: `${SITE_URL}/artikel/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...articleRoutes];
}
