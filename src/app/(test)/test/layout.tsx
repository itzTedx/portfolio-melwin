import '../style/globals.css'

import { plusJakarta } from '@/fonts/fonts'
import { cn } from '@/lib/utils'

import LenisProvider from '@/provider/lenis-provider'
import { ThemeProvider } from '@/provider/theme-provider'

import BreakpointIndicator from '@/components/breakpoint-indicator'
import Header from '@/components/layout/header'

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
          <Header />
          {children}

          <BreakpointIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
