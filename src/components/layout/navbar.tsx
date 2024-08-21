'use client'

import Image from 'next/image'
import Link from 'next/link'

import useScroll from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { ModeToggle } from '../theme-toggle'

function Navbar() {
  const isScrolled = useScroll(100)

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
        'sticky top-0 w-full z-[999999] transition-all duration-1000 ease-in-out',
        isScrolled
          ? 'bg-background/50 backdrop-blur-md'
          : 'bg-transparent backdrop-blur-0'
      )}
      style={{ transitionProperty: 'background-color, backdrop-filter' }}
    >
      <div
        className={cn(
          'flex justify-center -z-40 transition-opacity duration-500 ease-in-out',
          isScrolled ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="absolute bottom-0 h-px w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>
      <div className="flex items-center justify-between py-4 w-full container">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-accent text-3xl font-bold font-cookie"
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
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
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
