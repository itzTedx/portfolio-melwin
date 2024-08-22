// LenisEffect.js - Client component
'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup to prevent memory leaks
    return () => {
      lenis.destroy()
    }
  }, [])

  return null // No need to render anything
}
