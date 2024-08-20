// @flow strict

import { experiences } from '@/utils'
import Image from 'next/image'
import { BsPersonWorkspace } from 'react-icons/bs'
import AnimationLottie from '@/components/animation-lottie'
import GlowCard from '@/components/glow-card'
import experience from '../../../public/lottie/code.json'
import HeadingCard from '@/components/heading-card'

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <HeadingCard heading="Experiences" />

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-20 dark:opacity-80"
                    />

                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-accent">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-start gap-x-8 px-3 py-5">
                      <div className="text-violet-500">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <h6 className="text-base sm:text-xl font-semibold uppercase">
                          {experience.title}
                        </h6>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {experience.company}
                        </p>
                        <p className="text-xs sm:text-sm font-light text-balance text-muted-foreground/80 mt-2">
                          {experience.description}
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
  )
}

export default Experience
