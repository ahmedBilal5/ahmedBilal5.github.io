import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Heebo } from "next/font/google";
import NavBar from "./_components/navBar";
import { siteDescription, siteName, siteUrl, socialPlatforms } from "./constants";
import Footer from "./_components/footer";
import { TopBanner } from "./_components/topBanner";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} · Software Engineer`,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: siteName, url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    url: "/",
    title: `${siteName} · Software Engineer`,
    description: siteDescription,
    images: ["/images/profilePicture.jpeg"],
  },
  twitter: { card: "summary" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={heebo.className} suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem={true} defaultTheme="system">
          <div className="w-full max-w-sections mx-auto px-4 md:px-8 flex flex-col min-h-screen">
            <TopBanner />
            <NavBar />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer platforms={socialPlatforms} id="contact" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
