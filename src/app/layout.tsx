import type { Metadata, Viewport } from 'next'

import './style/globals.css'

import { bricolage, monument, plusJakarta } from '@/fonts/fonts'
import { cn } from '@/lib/utils'

import LenisProvider from '@/provider/lenis-provider'
import { ThemeProvider } from '@/provider/theme-provider'

import BreakpointIndicator from '@/components/breakpoint-indicator'
import Footer from '@/components/layout/footer'
import { Toaster } from '@/components/ui/sonner'

import Header from '@/components/layout/header'
import Navbar from '@/components/layout/navbar'
import { siteConfig } from '@/utils/siteConfig'
import ScrollBar from '@/components/layout/custom-scroll-bar'

export const metadata: Metadata = {
  title: 'Portfolio of Melwin Af - Graphic Designer',
  description:
    'Energetic visual creator looking for the opportunity to achieve my goal. Looking for a challenging career in a reputable organization where I can utilize the best of my skills and experiences allowing career growth and contribution to growth of organization.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  authors: [
    {
      name: siteConfig.shortName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.shortName,
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    alternateLocale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@digitaldesk_uae',
  },
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          plusJakarta.className,
          monument.variable,
          bricolage.variable,
          'relative w-screen overflow-x-hidden antialiased no-scrollbar'
        )}
      >
        <LenisProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollBar />
          <Header />
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          {/* <ScrollToTop /> */}
          <BreakpointIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
