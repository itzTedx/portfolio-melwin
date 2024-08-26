import type { Metadata, Viewport } from "next";

import "../style/globals.css";

import { bricolage, monument, plusJakarta } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/utils/siteConfig";

import BreakpointIndicator from "@/components/breakpoint-indicator";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/components/layout/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";
import Provider from "@/provider";

export const metadata: Metadata = {
  title: "Portfolio of Melwin Af - Graphic Designer",
  description:
    "Energetic visual creator looking for the opportunity to achieve my goal. Looking for a challenging career in a reputable organization where I can utilize the best of my skills and experiences allowing career growth and contribution to growth of organization.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: [
    {
      name: siteConfig.shortName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.shortName,
  openGraph: {
    type: "website",
    locale: "en_AE",
    alternateLocale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@itzTedx_",
  },
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          plusJakarta.className,
          monument.variable,
          bricolage.variable,
          "no-scrollbar relative w-screen overflow-x-hidden antialiased",
        )}
      >
        <Provider>
          {/* <ScrollBar /> */}
          <div vaul-drawer-wrapper="">
            <Header />
            <Navbar />
            {children}
            {modal}

            <Footer />
            <Toaster richColors />
            <ScrollToTop />
          </div>
          <BreakpointIndicator />
        </Provider>
      </body>
    </html>
  );
}
