'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const DEFAULT_BTN_CLS =
  'fixed bottom-8 right-6 z-[9999999] flex items-center rounded-full border border-white/30 p-3 transition-all duration-300 ease-out mix-blend-difference backdrop-blur-md'
const SCROLL_THRESHOLD = 150

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(' hidden', ''))
      } else {
        setBtnCls(DEFAULT_BTN_CLS + ' hidden')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const onClickBtn = () => window.scroll({ top: 0, behavior: 'smooth' })

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp className="text-white " />
    </button>
  )
}

export default ScrollToTop
