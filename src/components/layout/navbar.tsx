'use client'

import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'

import useScroll from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { links } from '@/utils/nav-links'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { FloatingNav } from './floating-navbar'
import { useIsMounted } from '@/hooks/useIsMounted'

const Navbar = () => {
  const pathname = usePathname()
  const isScrolled = useScroll(100, 0)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const isMounted = useIsMounted()

  if (!isMounted) return null
  if (isDesktop)
    return (
      <nav
        className={cn(
          'z-[999999] fixed hidden md:block left-1/2 -translate-x-1/2 rounded-full py-3 px-5 top-3 transition-all duration-500 ease-in-out',
          isScrolled
            ? 'bg-background/50 backdrop-blur-md border-b'
            : 'bg-transparent backdrop-blur-0'
        )}
        style={{
          transitionProperty: 'background-color, backdrop-filter, margin-top',
        }}
      >
        <div
          className={cn(
            'flex justify-center -z-40 transition-opacity duration-500 ease-in-out',
            isScrolled ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="absolute bottom-0 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
        <ul className="flex flex-row items-center bg-transparent w-full">
          {links.map((link, index) => {
            const active = link.link === pathname

            return (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className={'flex gap-1.5 items-center relative px-4'}
                >
                  <span
                    className={cn(
                      active && 'text-foreground z-10',
                      'hidden sm:block'
                    )}
                  >
                    {link.name}
                  </span>
                  {active ? <Span /> : null}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )

  return <FloatingNav navItems={links} />
}

export default Navbar

const Span = () => {
  return (
    <motion.span
      layoutId="pill-tab"
      transition={{ type: 'spring', duration: 0.5 }}
      className={cn(
        'absolute left-1/2 -translate-x-1/2 -bottom-4 z-0 size-2 bg-gradient-to-br rounded-full bg-amber-400 -ml-[2px]'
      )}
    />
  )
}
