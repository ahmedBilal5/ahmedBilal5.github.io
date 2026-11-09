import Link from "next/link";

export interface WorkCardProps {
  title: string;
  year: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  href: string;
  showOutline?: { show: boolean; mb: "some" | "none" };
  headingLevel?: "h2" | "h3";
  extraPadY?: boolean;
}

const mbConfig = {
  none: "mb-0",
  some: "mb-2 md:mb-4",
};

const WorkCard = ({
  title,
  year,
  description,
  tags,
  imageUrl,
  href,
  showOutline = { show: true, mb: "some" },
  headingLevel: Heading = "h3",
  extraPadY = false,
}: WorkCardProps) => {
  return (
    <Link href={href} className="block">
      <article
        className={`flex flex-col sm:flex-row gap-3 sm:gap-5 rounded-md ${extraPadY ? "py-7" : "py-5"} px-4 sm:px-5 cursor-pointer hover:bg-hover transition-colors`}
      >
        <div className="relative w-full sm:w-56 lg:w-64 h-48 bg-banner rounded-md overflow-hidden flex-shrink-0">
          {imageUrl && (
            // Decorative: the title next to it already names the link
            <img className="w-full h-full object-contain" src={imageUrl} alt="" loading="lazy" />
          )}
        </div>

        <div className="flex flex-col gap-2 min-w-0">
          <Heading className="text-xl sm:text-2xl font-extrabold line-clamp-2">{title}</Heading>
          <div className="flex flex-row gap-3 items-center">
            <span className="px-3 h-6 inline-flex items-center bg-blue-950 dark:bg-[#AFC3EB] text-white dark:text-blue-950 text-sm font-extrabold rounded-full">
              {year}
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-lg font-normal line-clamp-1">
              {tags.join(", ")}
            </span>
          </div>
          <p className="text-base font-normal line-clamp-3">{description}</p>
        </div>
      </article>
      {showOutline.show && (
        <div className={`h-0 outline outline-neutral-200 dark:outline-[#1F2228] ${mbConfig[showOutline.mb]}`} />
      )}
    </Link>
  );
};

export default WorkCard;
