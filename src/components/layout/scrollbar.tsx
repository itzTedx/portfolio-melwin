'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion'

const Scrollbar = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed right-3 w-1 bg-accent top-0 bottom-0 z-[9999999999999] rounded-full"
      style={{ scaleY }}
    />
  )
}

export default Scrollbar
