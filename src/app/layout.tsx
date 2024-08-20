import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './style/globals.css'
import { cn } from '@/lib/utils'
import ScrollToTop from '@/components/scroll-to-top'
import Navbar from '@/components/layout/navbar'
import { Toaster } from '@/components/ui/sonner'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={cn(inter.className, 'dark')}>
        <Navbar />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {children}
        </main>
        <Toaster />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
