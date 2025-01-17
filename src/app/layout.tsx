import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../style/globals.css";
import "../style/ui.css";

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
import { NavBar } from "@/components/layout/tubelight-navbar";
import { Briefcase, FileText, Home } from "lucide-react";
import { User } from "lucide-react";
import { links } from "@/utils/nav-links";

export const metadata: Metadata = {
  title: "Portfolio of Melwin Af - Graphic Designer",
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
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

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6d28d9" />
        <meta name="msapplication-TileColor" content="#070c1f" />
        <meta name="theme-color" content="#070c1f" />
        <meta
          name="google-site-verification"
          content="H82IdVplopSwcjY_hXhk8ggR9RwBclOsumEZDHP-c6E"
        />
      </head>
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

            <NavBar items={links} />
            {children}
            {modal}

            <Footer />
            <Toaster richColors />
            <ScrollToTop />
          </div>
          <BreakpointIndicator />
        </Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
