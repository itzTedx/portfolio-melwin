import { personalData } from '@/utils'
import Image from 'next/image'

function AboutSection() {
  return (
    <div id="about" className="py-6 md:py-12 lg:py-16 relative px-8 lg:px-0">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className="order-2 lg:order-1">
          <h5 className="font-medium mb-5 text-accent text-3xl uppercase">
            Who I am?
          </h5>

          <p className="text-balance !leading-9 text-foreground text-sm lg:text-lg flex gap-9 mb-6">
            <span className="size-4 rounded-full shadow-sm flex items-center justify-center relative mt-px md:mt-2 ">
              <span className="size-3 absolute rounded-full border border-primary animate-ping" />
              <span className="h-2 w-2 rounded-full border border-primary" />
            </span>
            Hi, I&apos;m Melwin, a passionate graphic designer with over four
            years of experience in creating impactful visual content. I hold a
            B.Sc. in Visual Communication and have worked with companies like
            Digital Desk in Dubai and Zoomin Editing Lab in Tamil Nadu.
          </p>
          <p className="text-balance !leading-9 text-foreground text-sm lg:text-lg flex gap-9">
            <span className="size-4 rounded-full  shadow-sm flex items-center justify-center relative mt-px md:mt-2 ">
              <span className="size-3 absolute rounded-full border border-primary animate-ping" />
              <span className="size-2 rounded-full border border-primary" />
            </span>
            I&apos;m skilled in Adobe Creative Suite, Figma, and more,
            delivering high-quality designs for both digital and print media.
            I&apos;m looking for challenging opportunities where I can
            contribute creatively while advancing my career.
          </p>
        </div>
        <div className="flex justify-center md:justify-start order-1 lg:order-2 ">
          <div className="order-1 lg:order-2 from-background  relative rounded-lg border bg-gradient-to-r to-primary/5 group">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] p-3 lg:p-6">
              <div className="aspect-[4/5] w-80 md:w-96 relative overflow-hidden rounded-lg ">
                <Image
                  src={personalData.profile}
                  fill
                  alt="Melwin af"
                  className="transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
