'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { PlusIcon } from 'lucide-react'

import { personalData } from '@/utils'
import { ImageCarousel } from '@/components/image-carousel'
import { Cursor } from '@/components/ui/cursor'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export default function Lightbox() {
  const [isHovering, setIsHovering] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect()
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      setIsHovering(isInside)
    }
  }
  return (
    <Dialog>
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15,
        }}
        onPositionChange={handlePositionChange}
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 16,
            height: isHovering ? 32 : 16,
          }}
          className="flex items-center justify-center rounded-[24px] bg-foreground/20 backdrop-blur-md"
        >
          <AnimatePresence>
            {isHovering ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="inline-flex items-center justify-center w-full"
              >
                <div className="inline-flex items-center text-sm text-background">
                  More <PlusIcon className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Cursor>
      <DialogTrigger>
        <div
          ref={targetRef}
          className="aspect-[4/5] w-80 md:w-96 relative overflow-hidden rounded-lg cursor-none"
        >
          <Image
            src={personalData.profile}
            fill
            alt="Melwin af"
            className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="p-2 bg-transparent border-0 rounded-md shadow-none">
        <ImageCarousel />
        <div className="absolute -bottom-16 md:-bottom-9 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/50">
          Photo Courtesy: Nibish
        </div>
      </DialogContent>
    </Dialog>
  )
}
