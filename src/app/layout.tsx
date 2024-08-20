import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cookie } from 'next/font/google'

import './style/globals.css'

import { cn } from '@/lib/utils'
import ScrollToTop from '@/components/scroll-to-top'
import Navbar from '@/components/layout/navbar'
import { Toaster } from '@/components/ui/sonner'
import Footer from '@/components/layout/footer'
import { TracingBeam } from '@/components/ui/tracing-beam'
import BreakpointIndicator from '@/components/breakpoint-indicator'
import { ThemeProvider } from '@/provider/theme-provider'

const inter = Inter({ subsets: ['latin'] })
const cookie = Cookie({
  variable: '--font-cookie',
  subsets: ['latin'],
  weight: ['400'],
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
      <body className={cn(inter.className, cookie.variable, 'relative')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <TracingBeam className="px-4">{children}</TracingBeam>
          <Footer />
          <Toaster />
          <ScrollToTop />
          <BreakpointIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
