'use client'

import Lottie from 'lottie-react'

const AnimationLottie = ({ animationPath }: { animationPath: any }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    },
  }

  return <Lottie {...defaultOptions} />
}

export default AnimationLottie
