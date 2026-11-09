"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeButton } from "./themeButton";
import Footer from "./footer";
import { socialPlatforms } from "../constants";
import BrandMark from "./brandMark";

const navItems = [
  { title: "Works", href: "/works" },
  { title: "Blog", href: "/blogs" },
  { title: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Hide the bar when scrolling down, show it when scrolling up
    const handleScroll = () => {
      const y = window.scrollY;
      setIsVisible(!(y > lastScrollY.current && y > 50));
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stop the page behind the open menu from scrolling
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const linkClass = "text-lg font-medium cursor-pointer hover:text-red-400";

  return (
    <header className="sticky top-0 z-10">
      {/* Menu overlay for small screens */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        className={`fixed inset-0 flex flex-col items-center justify-start pt-28 bg-background space-y-6 shadow-inner
                    transform transition-transform duration-300 md:hidden
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col items-center justify-start space-y-6">
          {navItems.map((navItem) => (
            <li key={navItem.title}>
              <Link href={navItem.href} className={linkClass} onClick={() => setMenuOpen(false)}>
                {navItem.title}
              </Link>
            </li>
          ))}
          <li>
            <ThemeButton />
          </li>
        </ul>
        <Footer platforms={socialPlatforms} className="mt-auto" />
      </div>

      {/* Top bar */}
      <nav
        aria-label="Main"
        className={`bg-background/90 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] py-2 transform transition-transform duration-100 ${
          isVisible || menuOpen ? "translate-y-0" : "-translate-y-full"
        } ${menuOpen ? "" : "backdrop-blur-[4px]"}`}
      >
        <div className="max-w-sections mx-auto flex flex-row items-center justify-between gap-8 px-4 md:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight hover:text-red-500 transition-colors">
            <BrandMark className="h-8 w-8" />
            Ahmed Bilal
          </Link>
          <ul className="hidden md:flex md:flex-row md:items-center md:space-x-6">
            {navItems.map((navItem) => (
              <li key={navItem.title}>
                <Link href={navItem.href} className={linkClass}>
                  {navItem.title}
                </Link>
              </li>
            ))}
            <li className="flex">
              <ThemeButton />
            </li>
          </ul>

          {/* Hamburger icon (hidden on md and up) */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`relative z-10 mr-2 my-1 flex flex-col justify-between w-5 h-4 cursor-pointer md:hidden
                        ${menuOpen ? "[&>span:nth-child(1)]:rotate-45 [&>span:nth-child(2)]:scale-y-0 [&>span:nth-child(3)]:-rotate-45" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="block h-0.75 bg-font rounded transition-transform duration-300 origin-top-left"></span>
            <span className="block h-0.75 bg-font rounded transition-transform duration-200"></span>
            <span className="block h-0.75 bg-font rounded transition-transform duration-300 origin-bottom-left"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
