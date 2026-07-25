import { sanityClient } from "./client";
import type { SanityArticle } from "./types";

const ARTICLE_PROJECTION = `{
  _id,
  "slug": slug.current,
  topic,
  title,
  excerpt,
  coverImage,
  content,
  "featured": featured == true
}`;

export async function getAllArticles(): Promise<SanityArticle[]> {
  return sanityClient.fetch(
    `*[_type == "article"] | order(_createdAt desc) ${ARTICLE_PROJECTION}`
  );
}

export async function getNonFeaturedArticles(): Promise<SanityArticle[]> {
  return sanityClient.fetch(
    `*[_type == "article" && featured != true] | order(_createdAt desc) ${ARTICLE_PROJECTION}`
  );
}

export async function getFeaturedArticle(): Promise<SanityArticle | null> {
  const featured = await sanityClient.fetch<SanityArticle | null>(
    `*[_type == "article" && featured == true] | order(_createdAt desc) [0] ${ARTICLE_PROJECTION}`
  );
  if (featured) return featured;

  return sanityClient.fetch<SanityArticle | null>(
    `*[_type == "article"] | order(_createdAt desc) [0] ${ARTICLE_PROJECTION}`
  );
}

export async function getArticleBySlug(slug: string): Promise<SanityArticle | null> {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0] ${ARTICLE_PROJECTION}`,
    { slug }
  );
}

export async function getOtherArticles(excludeSlug: string, limit: number): Promise<SanityArticle[]> {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current != $excludeSlug] | order(_createdAt desc) [0...$limit] ${ARTICLE_PROJECTION}`,
    { excludeSlug, limit }
  );
}

export async function getLatestArticles(limit: number): Promise<SanityArticle[]> {
  return sanityClient.fetch(
    `*[_type == "article"] | order(_createdAt desc) [0...$limit] ${ARTICLE_PROJECTION}`,
    { limit }
  );
}

export async function getAllArticleSlugs(): Promise<string[]> {
  return sanityClient.fetch(`*[_type == "article"].slug.current`);
}
