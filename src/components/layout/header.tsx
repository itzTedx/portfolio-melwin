'use client'

import Image from 'next/image'
import Link from 'next/link'

import useScroll from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

import { ModeToggle } from '@/components/layout/theme-toggle'
import { links } from '@/utils/nav-links'

function Header() {
  const isScrolled = useScroll(100, 250)

  return (
    <header
      className={cn('w-full py-3 transition-all duration-700 ease-in-out')}
      style={{
        transitionProperty:
          'background-color, backdrop-filter, padding-top, padding-bottom, top',
      }}
    >
      <div
        className={cn(
          'flex justify-center -z-40 transition-opacity duration- 500 ease-in-out',
          isScrolled ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="absolute bottom-0 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>
      <div className="container flex items-center justify-between w-full">
        <div className="flex items-center flex-shrink-0">
          <Link
            href="/"
            className="px-4 py-2 -mx-4 text-3xl font-extrabold text-foreground font-bricolage"
          >
            Melwin af
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden lg:block">
            <Link
              href="tel:+971588102324"
              className="flex gap-2 px-2 py-2 transition scale-100 rounded-lg hover:bg-foreground-50 active:scale-95 shrink-0"
            >
              <div className="relative w-9 h-9">
                <Image fill src="/phone.svg" alt="" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] lg:text-[10px]">Call me now</span>
                <span className="text-sm font-bold lg:text-base text-primary-800">
                  058 810 2324
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
