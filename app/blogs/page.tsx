import type { Metadata } from "next";
import BlogPostCard from "../_components/blogPostCard";
import { formatDate, getAllPosts } from "../_lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Write-ups on React, MUI data-grid, TypeScript and open source.",
  alternates: { canonical: "/blogs" },
};

export default async function BlogPosts() {
  const posts = await getAllPosts("blogs");
  return (
    <>
      <h1 className="dark:text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[70px] text-center md:text-left my-5">
        Blog
      </h1>
      <div className="-mx-4 sm:-mx-5">
      {posts.map((post) => (
        <BlogPostCard
          key={post.slug}
          title={post.title}
          date={formatDate(post.publishDate)}
          dateTime={post.publishDate}
          tags={post.tags}
          description={post.excerpt}
          href={`/blog/${post.slug}`}
          display="outline"
          headingLevel="h2"
          className="max-w-full"
        />
      ))}
      </div>
    </>
  );
}
