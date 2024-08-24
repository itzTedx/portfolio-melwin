'use client'

import { motion, useScroll as scrollProgress } from 'framer-motion'
import useScroll from '@/hooks/use-scroll'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const ScrollToTop = () => {
  const onClickBtn = () => window.scroll({ top: 0, behavior: 'smooth' })
  const isScrolled = useScroll(150, 0)

  const { scrollYProgress } = scrollProgress()

  return (
    <button
      className={cn(
        'fixed bottom-2 sm:bottom-4 z-[99999999] transition-all duration-500 ease-in-out',
        isScrolled ? 'right-2 sm:right-4' : '-right-24'
      )}
      style={{
        transitionProperty: 'right',
      }}
      onClick={onClickBtn}
    >
      <ArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/5 p-3 size-14 rounded-full backdrop-blur-md -z-10 text-muted-foreground" />

      <svg id="progress" width="100" height="100" className="-rotate-90">
        <circle
          cx="50"
          cy="50"
          r="25"
          pathLength="1"
          className="stroke-foreground/30 fill-none stroke-[4]"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="25"
          pathLength="1"
          strokeLinecap="round"
          className="stroke-foreground fill-none stroke-[3]"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </button>
  )
}

export default ScrollToTop
