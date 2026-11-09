import { formatDate, type Post } from "../../../_lib/posts";

export default function PostPage({ post }: { post: Post }) {
  const Content = post.content;
  return (
    <article className="max-w-blog mx-auto px-4 md:px-8 w-full">
      {/* Code highlighting theme, only needed on post pages */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/dracula-prism@2.1.16/dist/css/dracula-prism.css"
        precedence="default"
      />
      <h1 className="dark:text-white text-[1.65rem] sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[50px] text-left my-5">
        {post.title}
      </h1>
      <div className="flex flex-row flex-wrap gap-x-3 gap-y-1 items-center my-5 text-slate-500 dark:text-slate-400 text-base sm:text-lg">
        <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
        <span aria-hidden="true">|</span>
        <span>{post.tags.join(", ")}</span>
      </div>
      <section className="prose prose-md md:prose-lg prose-li:mb-2 prose-ul:mt-4 prose-a:underline hover:prose-a:text-red-500 prose-p:mt-2 prose-p:mb-4 max-w-none dark:prose-invert prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-2 prose-img:mx-auto prose-img:rounded-md">
        <Content />
      </section>
    </article>
  );
}
