'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { LampContainer } from './ui/lamp'
import { motion } from 'framer-motion'

export default function ProjectsTitle() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: isMobile ? 0 : 100 }}
        whileInView={{ opacity: 1, y: isMobile ? -100 : 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl z-50"
      >
        Projects <br /> I have done
      </motion.h1>
    </LampContainer>
  )
}
