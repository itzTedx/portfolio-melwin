'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useEffect, useRef, useState } from 'react'

const ScrollBar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [windowHeight, setWindowHeight] = useState(0)
  const [scrollPer, setScrollPer] = useState(0)

  const render = () => {
    const canvas = canvasRef.current
    const c = canvas?.getContext('2d')
    const scrolled = window.scrollY
    const docHeight = Math.max(
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      document.body.scrollHeight,
      document.body.offsetHeight
    )
    const windowH = window.innerHeight
    setWindowHeight(windowH)
    setScrollPer(scrolled / (docHeight - windowH))

    if (canvas && c) {
      canvas.height = windowH
      c.clearRect(0, 0, 10, windowH)
      makeScrollBar(c, 0, windowH, 'rgba(255, 255, 255, 0.5)', 100, '#fff', 999)
    }
  }

  const makeScrollBar = (
    c: CanvasRenderingContext2D,
    y: number,
    height: number,
    bgcolor: string,
    thumbHeight: number,
    thumbColor: string,
    borderRadius: number
  ) => {
    // Track
    c.beginPath()
    c.fillStyle = bgcolor
    c.rect(0, y, 10, height)
    c.fill()

    // Thumb
    // Thumb with rounded edges
    c.beginPath()
    c.fillStyle = thumbColor
    const x = 0
    const width = 10
    const radius = Math.min(borderRadius, width / 2, thumbHeight / 2)

    // Top left corner
    c.moveTo(x + radius, y + scrollPer * height - scrollPer * thumbHeight)
    c.arcTo(
      x + width,
      y + scrollPer * height - scrollPer * thumbHeight,
      x + width,
      y + scrollPer * height - scrollPer * thumbHeight + radius,
      radius
    )

    // Top right corner
    c.arcTo(
      x + width,
      y + scrollPer * height - scrollPer * thumbHeight + thumbHeight,
      x + width - radius,
      y + scrollPer * height - scrollPer * thumbHeight + thumbHeight,
      radius
    )

    // Bottom right corner
    c.arcTo(
      x,
      y + scrollPer * height - scrollPer * thumbHeight + thumbHeight,
      x,
      y + scrollPer * height - scrollPer * thumbHeight + thumbHeight - radius,
      radius
    )

    // Bottom left corner
    c.arcTo(
      x,
      y + scrollPer * height - scrollPer * thumbHeight,
      x + radius,
      y + scrollPer * height - scrollPer * thumbHeight,
      radius
    )

    c.closePath()
    c.fill()
  }

  useEffect(() => {
    render()
    window.addEventListener('resize', render)
    window.addEventListener('scroll', render)

    return () => {
      window.removeEventListener('resize', render)
      window.removeEventListener('scroll', render)
    }
  }, [scrollPer])

  if (isMobile) return null

  return (
    <>
      <canvas
        ref={canvasRef}
        width="10px"
        height="1000"
        className="fixed top-1/2 -translate-y-1/2 right-4 rounded-full w-1 scale-y-50 mix-blend-difference z-[999999999999]"
      ></canvas>
    </>
  )
}

export default ScrollBar
