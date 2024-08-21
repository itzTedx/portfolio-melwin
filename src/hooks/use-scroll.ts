import { useState, useEffect } from 'react'

const useScroll = (
  topThreshold: number = 50,
  bottomThreshold: number = 100
) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (
        scrollTop > topThreshold &&
        documentHeight - scrollTop - windowHeight > bottomThreshold
      ) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [topThreshold, bottomThreshold])

  return isScrolled
}

export default useScroll
