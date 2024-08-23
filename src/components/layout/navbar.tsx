'use client'

import useScroll from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { links } from '@/utils/nav-links'
import Link from 'next/link'

export default function Navbar() {
  const isScrolled = useScroll(100, 0)

  return (
    <nav
      className={cn(
        'z-[999999] fixed hidden sm:block left-1/2 -translate-x-1/2 rounded-full  py-2 px-4 top-2 lg:top-3',
        isScrolled
          ? 'bg-background/50 backdrop-blur-md border mt-0'
          : 'bg-transparent backdrop-blur-0 mt-1'
      )}
      style={{
        transitionProperty: 'background-color, backdrop-filter, margin-top',
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
      <ul
        className="flex-col items-start hidden text-sm md:flex max-h-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0"
        id="navbar"
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
    </nav>
  )
}
