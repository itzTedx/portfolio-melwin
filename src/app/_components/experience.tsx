import Image from 'next/image'
import { BsPersonWorkspace } from 'react-icons/bs'

import { experiences } from '@/utils'

import GlowCard from '@/components/glow-card'
import HeadingCard from '@/components/heading-card'

import experience from '../../../public/lottie/code.json'
import AnimationLottie from '@/components/animation-lottie'

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

        <div className="py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center md:items-start">
              <div className="w-full h-full scale-110 md:scale-125">
                <AnimationLottie animationPath={experience} />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="relative p-3">
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
                    <div className="flex items-start px-3 py-5 gap-x-8">
                      <div className="text-violet-500">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <h6 className="text-base font-semibold sm:text-xl font-bricolage">
                          {experience.title}
                        </h6>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {experience.company}
                        </p>
                        <p className="mt-2 text-xs font-light sm:text-sm text-balance text-muted-foreground/80">
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
    </section>
  )
}

export default Experience
