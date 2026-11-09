import type { MetadataRoute } from "next";
import { getAllPosts } from "./_lib/posts";
import { siteUrl } from "./constants";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, works] = await Promise.all([getAllPosts("blogs"), getAllPosts("works")]);
  const posts = [
    ...blogs.map((p) => ({ path: `/blog/${p.slug}`, p })),
    ...works.map((p) => ({ path: `/work/${p.slug}`, p })),
  ];
  return [
    { url: siteUrl },
    { url: `${siteUrl}/works` },
    { url: `${siteUrl}/blogs` },
    ...posts.map(({ path, p }) => ({
      url: `${siteUrl}${path}`,
      lastModified: p.lastModified ?? p.publishDate,
    })),
  ];
}
