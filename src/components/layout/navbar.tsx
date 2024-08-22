'use client'

import Image from 'next/image'
import Link from 'next/link'

import useScroll from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

import { ModeToggle } from '@/components/layout/theme-toggle'
import { links } from '@/utils/nav-links'

function Navbar() {
  const isScrolled = useScroll(100, 250)

  return (
    <nav
      className={cn(
        'sticky w-full z-[999999] transition-all duration-700 ease-in-out',
        isScrolled
          ? 'bg-background/50 backdrop-blur-md py-3 top-0'
          : 'bg-transparent backdrop-blur-0 py-4 -top-24'
      )}
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

        <ul
          className="absolute flex-col items-start hidden w-full text-sm -translate-x-1/2 md:flex max-h-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 left-1/2"
          id="navbar-default"
        >
          {links.map((nav) => (
            <li key={nav.id}>
              <Link
                className="block px-4 py-2 transition-colors rounded-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-offset-secondary-foreground"
                href={nav.href}
              >
                <div className="text-sm transition-colors duration-300 text-foreground hover:text-primary">
                  {nav.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
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
    </nav>
  )
}

export default Navbar
