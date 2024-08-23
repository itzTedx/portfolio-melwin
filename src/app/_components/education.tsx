import Image from 'next/image'
import { BsPersonWorkspace } from 'react-icons/bs'

import { educations } from '@/utils'

import GlowCard from '@/components/glow-card'
import HeadingCard from '@/components/heading-card'

import AnimationLottie from '@/components/animation-lottie'
import lottieFile from '../../../public/lottie/study.json'

function Education() {
  return (
    <section className="px-8 lg:px-0">
      <div id="education" className="relative z-50 my-12 border-t lg:my-24 ">
        <Image
          src="/section.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="absolute top-0 -z-10"
        />
        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>

        <HeadingCard heading="Educations" />

        <div className="py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex items-start justify-center">
              <div className="w-3/4 h-3/4">
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-6">
                {educations.map((education) => (
                  <GlowCard
                    key={education.id}
                    identifier={`education-${education.id}`}
                  >
                    <div className="relative p-3 text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-accent font-bricolage">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center px-3 py-5 gap-x-8">
                        <div className="transition-all duration-300 text-violet-500 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div className="text-foreground">
                          <p className="mb-2 text-base font-medium sm:text-xl font-bricolage">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {education.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education