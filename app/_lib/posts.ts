import { readdir } from "fs/promises";
import path from "path";
import type { MDXContent } from "mdx/types";

export type PostCategory = "works" | "blogs";

export type PostMetadata = {
  title: string;
  featuredImage?: string;
  publishDate: string;
  lastModified?: string;
  excerpt: string;
  tags: string[];
  type: "work" | "blog";
  featured: boolean;
  // Drafts are hidden from listings and their pages return 404
  draft?: boolean;
};

export type Post = PostMetadata & {
  slug: string;
  content: MDXContent;
};

const contentDir = (category: PostCategory) =>
  path.join(process.cwd(), "content", category);

export async function getPost(
  category: PostCategory,
  slug: string,
): Promise<Post | null> {
  try {
    const post = await import(`../../content/${category}/${slug}.mdx`);
    if (post.metadata?.draft) return null;
    return { slug, ...post.metadata, content: post.default } as Post;
  } catch {
    return null;
  }
}

export async function getAllPosts(category: PostCategory): Promise<Post[]> {
  const files = (await readdir(contentDir(category), { withFileTypes: true }))
    .filter((file) => file.isFile() && file.name.endsWith(".mdx"))
    .map((file) => file.name.replace(/\.mdx$/, ""));

  const posts = (await Promise.all(files.map((slug) => getPost(category, slug))))
    .filter((post): post is Post => post !== null);

  // Newest first
  return posts.sort(
    (a, b) => +new Date(b.publishDate) - +new Date(a.publishDate),
  );
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
