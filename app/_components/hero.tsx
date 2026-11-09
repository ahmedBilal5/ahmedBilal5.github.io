import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

interface HeroSectionProps {
  name: string;
  title: string;
  description: ReactNode;
  highlights?: {
    label: string;
    iconSrc?: string;
    iconEmoji?: string;
    iconAlt?: string;
  }[];
  buttonText?: string;
  image: StaticImageData;
  buttonHref?: string;
}

const HeroSection = ({
  name,
  title,
  description,
  highlights = [],
  buttonText = "Download Resume",
  image,
  buttonHref,
}: HeroSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 py-8">
      {/* Image - shows first on mobile */}
      <div className="order-1 md:order-2 relative md:w-[280px] md:h-[280px] w-48 h-48 flex-shrink-0">
        <div className="absolute inset-0 bg-banner rounded-full translate-x-2 translate-y-2" />
        <div className="relative w-full h-full rounded-full shadow-lg outline -outline-offset-2 outline-white overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={image}
            alt={`Photo of ${name}`}
            sizes="(min-width: 768px) 280px, 192px"
            placeholder="blur"
            priority
          />
        </div>
      </div>

      {/* Content - shows second on mobile */}
      <div className="order-2 md:order-1 flex-1">
        <h1 className="mb-5 dark:text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-center md:text-left">
          Salam, I am {name},
          <br />
          <span className="text-red-600 dark:text-red-400">{title}</span>
        </h1>

        <p className="mb-6 sm:mb-8 text-base lg:text-lg leading-relaxed text-center md:text-left">
          {description}
        </p>

        {highlights.length > 0 && (
          <div className="mb-6 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-2.5">
            {highlights.map((highlight) => (
              <span
                key={highlight.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/15 bg-hover px-2.5 py-1 text-xs sm:text-sm"
              >
                {highlight.iconSrc ? (
                  <img
                    src={highlight.iconSrc}
                    alt={highlight.iconAlt ?? ""}
                    className="h-4 w-4"
                    loading="lazy"
                  />
                ) : (
                  <span aria-hidden="true" className="text-sm leading-none">
                    {highlight.iconEmoji ?? "•"}
                  </span>
                )}
                <span>{highlight.label}</span>
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-row justify-center md:justify-start">
          <a
            href={buttonHref}
            download
            className="w-48 h-12 bg-red-600 hover:bg-red-700 transition-colors rounded-sm shadow-md text-white text-base font-medium cursor-pointer flex items-center justify-center"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
