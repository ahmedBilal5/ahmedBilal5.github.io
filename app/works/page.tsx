import type { Metadata } from "next";
import WorkCard from "../_components/workCard";
import { getAllPosts } from "../_lib/posts";

export const metadata: Metadata = {
  title: "Works",
  description: "Projects and packages built by Ahmed Bilal.",
  alternates: { canonical: "/works" },
};

export default async function Works() {
  const works = await getAllPosts("works");
  return (
    <div className="flex-grow">
      <h1 className="dark:text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[70px] text-center md:text-left my-5">
        Works
      </h1>
      {works.length > 0 ? (
        <div className="grid grid-cols-1 -mx-4 sm:-mx-5">
          {works.map((work) => (
            <WorkCard
              key={work.slug}
              title={work.title}
              description={work.excerpt}
              year={`${new Date(work.publishDate).getFullYear()}`}
              tags={work.tags}
              imageUrl={work.featuredImage}
              href={`/work/${work.slug}`}
              showOutline={{ show: true, mb: "none" }}
              headingLevel="h2"
              extraPadY
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500 text-lg">
          No works published yet.
        </div>
      )}
    </div>
  );
}
