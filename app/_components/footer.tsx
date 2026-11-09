import { contactEmail } from "../constants";

export interface Platform {
  name: string;
  iconSrc: string;
  href: string;
}

interface FooterProps {
  platforms: Platform[];
  className?: string;
  id?: string;
}

const Footer = ({ platforms, className = "", id }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer id={id} className={`py-4 md:py-6 my-15 sm:my-20 scroll-mt-20 ${className}`}>
      <div className="flex flex-col gap-4 items-center justify-center">
        {contactEmail && (
          <p className="text-center text-base sm:text-lg">
            Get in touch:{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium underline decoration-red-400 underline-offset-4 hover:text-red-500"
            >
              {contactEmail}
            </a>
          </p>
        )}
        <div className="flex flex-row gap-4 items-center justify-center">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform.name}
              title={platform.name}
              className="inline-flex items-center justify-center p-1 rounded hover:bg-hover focus:outline-none focus-visible:ring-2"
            >
              <img src={platform.iconSrc} alt="" className="dark:invert" />
            </a>
          ))}
        </div>
        <p className="font-normal">Copyright © {year}. All Rights Reserved</p>
        <div className="flex flex-row gap-3 items-center justify-center text-sm">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <span>Made with</span>
            <img src="/platforms/nextjs.svg" alt="Next.js" height={20} width={20} />
          </div>
          <span aria-hidden="true" className="text-slate-400 font-bold">·</span>
          <a
            href="https://github.com/ahmedBilal5/ahmedBilal5.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 transition-colors whitespace-nowrap flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
            View Source Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
