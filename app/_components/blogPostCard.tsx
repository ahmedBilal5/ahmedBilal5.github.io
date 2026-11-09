import Link from "next/link";

export interface BlogPostCardProps {
  title: string;
  date: string;
  dateTime?: string;
  tags: string[];
  description: string;
  href: string;
  display: "shadow" | "outline";
  headingLevel?: "h2" | "h3";
  className?: string;
}

const BlogPostCard = ({
  title,
  date,
  dateTime,
  tags,
  description,
  href,
  display,
  headingLevel: Heading = "h3",
  className = "",
}: BlogPostCardProps) => {
  return (
    <Link href={href} className="block h-full">
      <article
        className={`h-full bg-card rounded-md flex flex-col sm:gap-3 gap-1 ${
          display === "shadow"
            ? "p-5 hover:shadow-(--shadow-card) transition-shadow duration-200 cursor-pointer"
            : "px-4 sm:px-5 py-6 hover:bg-hover transition-colors"
        } ${className}`}
      >
        <Heading className="sm:text-2xl text-xl font-extrabold leading-8 line-clamp-2">
          {title}
        </Heading>
        <div className="w-full flex items-center sm:gap-3 gap-2 leading-7 text-slate-500 dark:text-slate-400">
          <time dateTime={dateTime} className="whitespace-nowrap text-lg">
            {date}
          </time>
          <span aria-hidden="true">|</span>
          <span className="text-lg line-clamp-1 min-w-0">{tags.join(", ")}</span>
        </div>
        <p className="text-base font-normal leading-6 line-clamp-2 md:line-clamp-3">
          {description}
        </p>
      </article>
      {display === "outline" && (
        <div className="h-0 outline outline-neutral-200 dark:outline-[#1F2228]" />
      )}
    </Link>
  );
};
export default BlogPostCard;
