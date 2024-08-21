'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { skillsImage } from '@/utils/skill-icons'

export const AnimatedTooltip = ({ tools }: { tools: string[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  )
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  )
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <>
      {tools.map((tool, idx) => (
        <div
          className="-mr-4  relative group"
          key={tool}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                }}
                className="absolute -top-10 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md dark:bg-black bg-white z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[30%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-6 w-[50%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {/* <Image
                    src={skillsImage(tool)}
                    alt={tool}
                    width={40}
                    height={40}
                    className="size-6"
                  /> */}
                </div>
                <div className="text-foreground text-xs">{tool}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="relative ml-1 flex size-10 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-full border bg-primary-foreground transition-colors hover:bg-muted active:scale-[0.98] ">
            <Image
              onMouseMove={handleMouseMove}
              height={40}
              width={40}
              src={skillsImage(tool)}
              alt={tool}
              className="size-6"
            />
          </div>
        </div>
      ))}
    </>
  )
}
