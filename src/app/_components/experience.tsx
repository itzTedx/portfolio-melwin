import Image from 'next/image'

import { experiences } from '@/utils'

import HeadingCard from '@/components/heading-card'
import AnimationLottie from '@/components/animation-lottie'
import Timeline from '@/components/timeline'
import experience from '../../../public/lottie/code.json'

function Experience() {
  return (
    <section className="px-8 lg:px-0">
      <div id="experience" className="relative z-50 my-12 border-t lg:my-24 ">
        <Image
          src="/section.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="absolute top-0 pointer-events-none -z-10"
        />

        <HeadingCard heading="Experiences" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-9 py-8 justify-center">
          <div className="flex items-center justify-center w-full h-full scale-110 md:scale-125">
            <AnimationLottie animationPath={experience} />
          </div>

          <Timeline items={experiences} />
        </div>
      </div>
    </section>
  )
}

export default Experience
