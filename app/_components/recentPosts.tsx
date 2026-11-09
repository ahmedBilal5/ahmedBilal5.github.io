import Link from "next/link";
import BlogPostCard, { BlogPostCardProps } from "./blogPostCard";

export type Post = BlogPostCardProps & {
  id: string;
};

interface RecentPostsSectionProps {
  title?: string;
  viewAllLink?: string;
  posts: Post[];
  maxPosts?: number;
}

const RecentPosts = ({
  title = "Recent posts",
  viewAllLink = "/blogs",
  posts = [],
  maxPosts = 2,
}: RecentPostsSectionProps) => {
  const displayedPosts = posts.slice(0, maxPosts);
  return (
    <section className="ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] bg-banner py-4 md:py-6 mt-5 sm:mt-10">
      <div className="max-w-sections mx-auto px-4 md:px-8">
        <div>
          <div className="flex flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-normal md:font-medium leading-8 md:leading-9 lg:leading-10">
              {title}
            </h2>
            <Link
              href={viewAllLink}
              className="text-cyan-700 dark:text-cyan-400 text-base md:text-lg font-normal leading-6 hover:text-cyan-600 transition-colors whitespace-nowrap flex items-center gap-1"
            >
              View all posts
            </Link>
          </div>
          {displayedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {displayedPosts.map((post) => (
                <BlogPostCard key={post.id} {...post} display="shadow" />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 text-lg">
              No recent posts available.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default RecentPosts;
