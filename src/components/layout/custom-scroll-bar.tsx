'use client'

import { useEffect, useRef, useState } from 'react'

const ScrollBar: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [windowHeight, setWindowHeight] = useState(0)
  const [scrollPer, setScrollPer] = useState(0)

  const render = () => {
    const canvas = canvasRef.current
    const c = canvas?.getContext('2d')
    const scrolled = window.pageYOffset
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
      makeScrollBar(c, 0, windowH, 'rgba(255, 255, 255, 0.5)', 100, '#fff')
    }
  }

  const makeScrollBar = (
    c: CanvasRenderingContext2D,
    y: number,
    height: number,
    bgcolor: string,
    thumbHeight: number,
    thumbColor: string
  ) => {
    // Track
    c.beginPath()
    c.fillStyle = bgcolor
    c.rect(0, y, 10, height)
    c.fill()
    // Thumb
    c.beginPath()
    c.fillStyle = thumbColor
    c.rect(0, y + scrollPer * height - scrollPer * thumbHeight, 10, thumbHeight)
    c.fill()
  }

  useEffect(() => {
    render()
    window.addEventListener('resize', render)
    window.addEventListener('scroll', render)

    console.log('render')

    return () => {
      window.removeEventListener('resize', render)
      window.removeEventListener('scroll', render)
    }
  }, [scrollPer])

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
