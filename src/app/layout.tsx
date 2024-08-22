import type { Metadata } from 'next'

import './style/globals.css'

import { monument, plusJakarta } from './style/fonts/fonts'
import { cn } from '@/lib/utils'

import { ThemeProvider } from '@/provider/theme-provider'
import LenisProvider from '@/provider/lenis-provider'

import BreakpointIndicator from '@/components/breakpoint-indicator'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { Toaster } from '@/components/ui/sonner'

import { siteConfig } from '@/utils/siteConfig'

export const metadata: Metadata = {
  title: 'Portfolio of Melwin Af - Graphic Designer',
  description:
    'Energetic visual creator looking for the opportunity to achieve my goal. Looking for a challenging career in a reputable organization where I can utilize the best of my skills and experiences allowing career growth and contribution to growth of organization.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
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
          'relative w-screen overflow-x-hidden antialiased'
        )}
      >
        <LenisProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          {/* <Scrollbar /> */}
          <Toaster />
          {/* <ScrollToTop /> */}
          <BreakpointIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
