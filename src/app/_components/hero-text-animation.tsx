'use client'

import TextFlip from '@/components/text-flip'
import { FlipWords } from '@/components/ui/flip-words'
import { useIsMounted } from '@/hooks/useIsMounted'
import { useMediaQuery } from '@/hooks/useMediaQuery'

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
    return (
      <div className="flex flex-col overflow-hidden h-[31px] md:h-16 text-accent">
        Visual Creator
      </div>
    )
  }

  if (isMobile) return <TextFlip text={designations} />

  return <FlipWords words={designations} />
}
