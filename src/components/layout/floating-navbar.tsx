'use client'
import { cn } from '@/lib/utils'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-fit fixed bottom-6 inset-x-0 mx-auto border rounded-full bg-background/50 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-3 ',
          className
        )}
      >
        <div className="absolute bottom-0 w-1/2 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

        <ul className="items-center justify-center gap-x-6 flex">
          {navItems.map((navItem: any, idx: number) => {
            const active = navItem.link === pathname
            return (
              <li key={`link=${idx}`}>
                <Link
                  href={navItem.link}
                  className={cn(
                    'relative dark:text-neutral-50 items-center p-3 flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-sm">
                    {navItem.name}
                  </span>
                </Link>
                {active ? <Span /> : null}
              </li>
            )
          })}
        </ul>
      </motion.nav>
    </AnimatePresence>
  )
}

const Span = () => {
  return (
    <motion.span
      layoutId="pill-tab"
      transition={{ type: 'spring', duration: 0.5 }}
      className={cn(
        'absolute left-1/2 -translate-x-1/2 -bottom-1 z-0 size-2 bg-gradient-to-br rounded-full bg-amber-400 -ml-[2px]'
      )}
    />
  )
}
