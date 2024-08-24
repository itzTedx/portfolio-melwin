'use client'

import { FlipWords } from '@/components/ui/flip-words'
import { useIsMounted } from '@/hooks/useIsMounted'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import dynamic from 'next/dynamic'

const TextFlip = dynamic(() => import('@/components/text-flip'))

export default function HeroTextAnimation() {
  const isMounted = useIsMounted()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const designations = [
    'Graphic Designer',
    'Visual Creator',
    'UI/UX Designer',
    'Web Developer',
  ]
  if (!isMounted) {
    return null
  }

  if (isMobile) return <TextFlip text={designations} />

  return <FlipWords words={designations} />
}
