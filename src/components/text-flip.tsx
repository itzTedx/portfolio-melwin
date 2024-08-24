'use client'

import { useEffect, useMemo, useRef } from 'react'

interface TextFlipProps {
  text: Array<string>
}

export default function TextFlip({ text }: TextFlipProps) {
  const words = useMemo(() => [...text, text[0]], [])

  const tallestRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0

      words.forEach((word) => {
        const span = document.createElement('span')
        span.className = 'absolute opacity-0'
        span.textContent = word
        tallestRef.current?.appendChild(span)
        const height = span.offsetHeight
        tallestRef.current?.removeChild(span)

        if (height > maxHeight) {
          maxHeight = height
        }
      })

      tallestRef.current.style.height = `${maxHeight - 9}px`
    }
  }, [words])

  return (
    <div ref={tallestRef} className="flex flex-col overflow-hidden text-accent">
      {words.map((word, index) => (
        <span key={index} className="animate-flipWords">
          {word}
        </span>
      ))}
    </div>
  )
}
