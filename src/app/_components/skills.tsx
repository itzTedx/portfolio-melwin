import Image from 'next/image'
import Marquee from 'react-fast-marquee'

import { skillsData } from '@/utils/'
import { skillsImage } from '@/utils/skill-icons'

import HeadingCard from '@/components/heading-card'

function Skills() {
  return (
    <section
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 px-8 lg:px-0"
    >
      <div className="w-[100px] h-[100px] bg-violet-300 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <HeadingCard heading="Skills" />

      <div className="w-full my-12 relative">
        <div className="absolute top-0 left-0 bg-gradient-to-r from-background to-transparent w-32 h-full z-50 pointer-events-none" />
        <div className="absolute top-0 right-0 bg-gradient-to-l from-background to-transparent w-32 h-full z-50 pointer-events-none" />
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="size-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-md group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-md border bg-muted/50 shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="size-8 sm:size-10">
                    <Image
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto"
                    />
                  </div>
                  <p className="text-foreground text-sm">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Skills
