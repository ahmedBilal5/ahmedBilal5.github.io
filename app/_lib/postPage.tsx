import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostPage from "../blog/[slug]/_components/post";
import { getAllPosts, getPost, type PostCategory } from "./posts";

// Shared by /blog/[slug] and /work/[slug] so both stay in sync
export function postRoute(category: PostCategory, basePath: string) {
  type Props = { params: Promise<{ slug: string }> };

  async function generateStaticParams() {
    return (await getAllPosts(category)).map((post) => ({ slug: post.slug }));
  }

  async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPost(category, (await params).slug);
    if (!post) return {};
    const url = `${basePath}/${post.slug}`;
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: url },
      openGraph: {
        type: "article",
        url,
        title: post.title,
        description: post.excerpt,
        publishedTime: post.publishDate,
        modifiedTime: post.lastModified,
        tags: post.tags,
        images: post.featuredImage ? [post.featuredImage] : undefined,
      },
    };
  }

  async function Page({ params }: Props) {
    const post = await getPost(category, (await params).slug);
    if (!post) notFound();
    return <PostPage post={post} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
