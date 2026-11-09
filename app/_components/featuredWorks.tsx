import WorkCard, { WorkCardProps } from "./workCard";

interface FeaturedWorksProps {
  title: string;
  maxWorks: number;
  works: WorkCardProps[];
}

const FeaturedWorks = ({ title, maxWorks, works }: FeaturedWorksProps) => {
  const displayedWorks = works.slice(0, maxWorks);

  return (
    <section className="py-4 md:py-6 mt-5 sm:mt-10">
      <div>
        <h2 className="text-lg md:text-xl lg:text-2xl font-normal md:font-medium leading-8 md:leading-9 lg:leading-10 mb-4 md:mb-6">
          {title}
        </h2>
        {displayedWorks.length > 0 ? (
          <div className="grid grid-cols-1 -mx-4 sm:-mx-5">
            {displayedWorks.map((work) => (
              <WorkCard key={work.href} {...work} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500 text-lg">
            No works published yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedWorks;
