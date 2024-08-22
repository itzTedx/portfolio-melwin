'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { LampContainer } from './ui/lamp'
import { motion } from 'framer-motion'

export default function ProjectsTitle() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <LampContainer>
      <motion.h2
        initial={{ opacity: 0.5, y: isMobile ? 0 : 100 }}
        whileInView={{ opacity: 1, y: isMobile ? -100 : 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="z-50 text-4xl font-bold leading-[1] tracking-wide text-center text-transparent font-monument bg-gradient-to-br from-foreground to-gray-200 bg-clip-text md:text-7xl md:leading-[0.8] uppercase"
      >
        Projects <br />{' '}
        <span className="text-2xl md:text-4xl">{`I’ve worked on`}</span>
      </motion.h2>
    </LampContainer>
  )
}
