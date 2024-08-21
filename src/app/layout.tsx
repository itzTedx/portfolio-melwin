import type { Metadata } from 'next'
import { Cookie, Inter, Plus_Jakarta_Sans } from 'next/font/google'

import './style/globals.css'

import BreakpointIndicator from '@/components/breakpoint-indicator'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/provider/theme-provider'
import { LenisProvider } from '@/provider/lenis-provider'

const inter = Inter({ subsets: ['latin'] })
const cookie = Cookie({
  variable: '--font-cookie',
  subsets: ['latin'],
  weight: ['400'],
})
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio of Melwin Af - Graphic Designer',
  description:
    'Energetic visual creator looking for the opportunity to achieve my goal. Looking for a challenging career in a reputable organization where I can utilize the best of my skills and experiences allowing career growth and contribution to growth of organization.',
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
          cookie.variable,
          'relative w-screen overflow-x-hidden'
        )}
      >
        {/* <LenisProvider> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          {/* <ScrollToTop /> */}
          <BreakpointIndicator />
        </ThemeProvider>
        {/* </LenisProvider> */}
      </body>
    </html>
  )
}
