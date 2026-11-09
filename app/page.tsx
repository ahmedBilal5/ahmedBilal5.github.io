import FeaturedWorks from "./_components/featuredWorks";
import HeroSection from "./_components/hero";
import RecentPosts, { type Post as RecentPost } from "./_components/recentPosts";
import ProfilePicture from "../public/images/profilePicture.jpeg";
import { WorkCardProps } from "./_components/workCard";
import { formatDate, getAllPosts } from "./_lib/posts";

export default async function Portfolio() {
  const currentCompany = "Zones LLC";
  // Placeholders: swap in the real URLs when the sites are live
  const fabricUrl = "#";
  const chaunsaLabsUrl = "#";

  const featuredBlogs = (await getAllPosts("blogs"))
    .filter((blog) => blog.featured)
    .map(
      (blog): RecentPost => ({
        id: blog.slug,
        title: blog.title,
        date: formatDate(blog.publishDate),
        dateTime: blog.publishDate,
        tags: blog.tags,
        description: blog.excerpt,
        href: `/blog/${blog.slug}`,
        display: "shadow",
      }),
    );

  const featuredWorks = (await getAllPosts("works"))
    .filter((work) => work.featured)
    .map(
      (work): WorkCardProps => ({
        title: work.title,
        description: work.excerpt,
        year: `${new Date(work.publishDate).getFullYear()}`,
        tags: work.tags,
        imageUrl: work.featuredImage,
        href: `/work/${work.slug}`,
      }),
    );

  return (
    <div className="md:mt-16.5 mt-7 flex-grow">
      <HeroSection
        name="Ahmed"
        title="Software Engineer"
        description={
          <>
            Computer Science graduate with distinction. UI Design System Lead at{" "}
            <IntroLink href="https://www.linkedin.com/company/zones-it-solutions/posts/?feedView=all">
              {currentCompany}
            </IntroLink>
            . Working on <IntroLink href={fabricUrl}>Fabric</IntroLink>, an
            open-source design system built on MUI. Co-founding{" "}
            <IntroLink href={chaunsaLabsUrl}>Chaunsa Labs</IntroLink>, a family
            studio for learning apps and games. Interested in nutrition, sports, geopolitics, history, mysticism and meditation.
          </>
        }
        buttonText="Download Resume"
        image={ProfilePicture}
        buttonHref="/other/Ahmed Bilal Resume.pdf"
      />
      <RecentPosts posts={featuredBlogs} maxPosts={3} />
      <FeaturedWorks title="Featured Works" maxWorks={4} works={featuredWorks} />
    </div>
  );
}

// Underlined link used inside the intro paragraph. External links open in a new tab.
function IntroLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="underline decoration-red-400 underline-offset-2 hover:text-red-500"
    >
      {children}
    </a>
  );
}
