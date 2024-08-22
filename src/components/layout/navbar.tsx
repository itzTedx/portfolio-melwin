'use client'

import Image from 'next/image'
import Link from 'next/link'

import useScroll from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

import { ModeToggle } from '@/components/layout/theme-toggle'

function Navbar() {
  const isScrolled = useScroll(100, 250)

  const NAVLINKS = [
    {
      id: 1,
      title: 'About',
      href: '/#about',
    },
    {
      id: 2,
      title: 'Experience',
      href: '/#experience',
    },
    {
      id: 3,
      title: 'Skills',
      href: '/#skills',
    },
    {
      id: 4,
      title: 'Education',
      href: '/#education',
    },
    {
      id: 5,
      title: 'Projects',
      href: '/#projects',
    },
  ]
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
        <div className="absolute bottom-0 h-px w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>
      <div className="flex items-center justify-between w-full container">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-foreground text-xl font-extrabold tracking-widest uppercase -mx-4 px-4 py-2"
          >
            Melwin af
          </Link>
        </div>

        <ul
          className="md:flex max-h-0 w-full flex-col items-start text-sm hidden md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 absolute left-1/2 -translate-x-1/2"
          id="navbar-default"
        >
          {NAVLINKS.map((nav) => (
            <li key={nav.id}>
              <Link
                className="block px-4 py-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-offset-secondary-foreground rounded-sm"
                href={nav.href}
              >
                <div className="text-sm text-foreground transition-colors duration-300 hover:text-primary">
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
              className="py-2 flex gap-2 hover:bg-foreground-50 px-2 rounded-lg active:scale-95 scale-100 transition shrink-0"
            >
              <div className="w-9 h-9 relative">
                <Image fill src="/phone.svg" alt="" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] lg:text-[10px]">Call me now</span>
                <span className="text-sm lg:text-base font-bold text-primary-800">
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
