interface TopBannerProps {
  text?: string;
  href?: string;
  flagSrc?: string;
  ariaLabel?: string;
  className?: string;
}

export const TopBanner = ({
  text = "I stand with Palestine",
  href,
  flagSrc = "/images/palestine-flag.svg",
  ariaLabel = "Palestine solidarity message",
  className = "",
}: TopBannerProps) => {
  return (
    <section
      aria-label={ariaLabel}
      className={`bg-banner text-font ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] border-y border-black/8 dark:border-white/8 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] ${className}`}
    >
      <div className="max-w-sections mx-auto px-4 md:px-8">
        <div className="relative flex min-h-10 items-center justify-center py-2">
          {href ? (
            <a
              href={href}
              className="inline-flex items-center justify-center gap-2 px-3 text-center text-xs sm:text-sm font-bold tracking-wide leading-5 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30 rounded-sm"
            >
              <img
                src={flagSrc}
                alt="Palestinian flag"
                className="h-3.5 w-6 shrink-0 rounded-[2px] ring-1 ring-black/20 dark:ring-white/20"

              />
              <span>{text}</span>
            </a>
          ) : (
            <div className="inline-flex items-center justify-center gap-2 px-3 text-center text-xs sm:text-sm font-bold tracking-wide leading-5">
              <img
                src={flagSrc}
                alt="Palestinian flag"
                className="h-3.5 w-6 shrink-0 rounded-[2px] ring-1 ring-black/20 dark:ring-white/20"

              />
              <span>{text}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};