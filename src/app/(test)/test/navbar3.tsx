'use client'

import { motion } from 'framer-motion'
import { Dispatch, SetStateAction, useRef, useState } from 'react'

const tabs = ['Home', 'Search', 'About', 'FAQ']
import { links } from '@/utils/nav-links'
import useScroll from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useHover } from '@/hooks/useHover'
import Link from 'next/link'

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0])
  const isScrolled = useScroll(100, 0)

  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  console.log('isHover', isHover)

  return (
    <nav
      className={cn(
        'z-[999999] fixed hidden md:block left-1/2 -translate-x-1/2 rounded-full  py-3 px-4 top-2 lg:top-3',
        isScrolled
          ? 'bg-background/50 backdrop-blur-md border-b mt-0'
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
      <ul className="flex" ref={hoverRef}>
        {links.map((link) => (
          <Chip
            link={link}
            selected={selected === link.href}
            setSelected={setSelected}
            key={link.id}
            isHover={isHover}
          />
        ))}
      </ul>
    </nav>
  )
}

const Chip = ({
  link,
  selected,
  setSelected,
  isHover,
}: {
  link: {
    id: number
    title: string
    href: string
  }
  isHover: boolean
  selected: boolean
  setSelected: Dispatch<SetStateAction<string>>
}) => {
  const pathname = usePathname()
  const active = link.href === pathname
  console.log(pathname)

  return (
    <li className="px-3 relative">
      <Link
        href={link.href}
        onClick={() => setSelected(link.href)}
        onMouseEnter={() => setSelected(link.href)}
        className={`${
          selected ? 'text-foreground' : 'text-foreground/80'
        } text-sm transition-colors rounded-md`}
      >
        <span className="relative z-10">{link.title}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: 'spring', duration: 0.5 }}
            className="absolute z-0 bg-amber-400 rounded-full size-2 left-1/2 -translate-x-1/2 -bottom-4"
          />
        )}
      </Link>
    </li>
  )
}

export default ChipTabs
