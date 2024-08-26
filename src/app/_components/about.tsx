import AnimatedBorderTrail from '@/components/ui/animated-trail-border'
import dynamic from 'next/dynamic'

const Particles = dynamic(() => import('@/components/particles'))
const Lightbox = dynamic(() => import('@/components/lightbox'))

function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-8 pb-6 md:py-12 lg:py-16 lg:px-0"
    >
      <div className="absolute flex-col items-center hidden top-[8.5rem] lg:flex -right-8">
        <AnimatedBorderTrail
          trailSize="sm"
          trailColor="#8b5cf6"
          className="rotate-90 pointer-events-none"
          contentClassName="p-2 px-5 bg-secondary w-fit text-white text-xl rounded-md font-monument font-light tracking-wider"
        >
          ABOUT ME
        </AnimatedBorderTrail>
        <span className="h-36 w-[2px] bg-secondary" />
      </div>
      <div className="grid items-center justify-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h5 className="mb-5 text-3xl font-extrabold text-accent font-bricolage">
            Who I am?
          </h5>

          <p className="text-balance !leading-9 text-foreground text-sm lg:text-lg flex gap-6 mb-4">
            <span className="size-4 rounded-full shadow-sm flex items-center justify-center relative mt-2.5 ">
              <span className="absolute border rounded-full size-3 border-amber-500/20 animate-ping" />
              <span className="w-2 h-2 border rounded-full border-amber-600" />
            </span>
            Hi, I&apos;m Melwin, a passionate graphic designer with over four
            years of experience in creating impactful visual content. I hold a
            B.Sc. in Visual Communication and have worked with companies like
            Digital Desk in Dubai and Zoomin Editing Lab in Tamil Nadu.
          </p>
          <p className="text-balance !leading-9 text-foreground text-sm lg:text-lg flex gap-6">
            <span className="size-4 rounded-full  shadow-sm flex items-center justify-center relative mt-2.5 ">
              <span className="absolute border rounded-full size-3 border-amber-500/20 animate-ping" />
              <span className="border rounded-full size-2 border-amber-600" />
            </span>
            I&apos;m skilled in Adobe Creative Suite, Figma, and more,
            delivering high-quality designs for both digital and print media.
            I&apos;m looking for challenging opportunities where I can
            contribute creatively while advancing my career.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:justify-start lg:order-2">
          <div className="relative order-1 border rounded-lg lg:order-2 from-background bg-gradient-to-r to-primary/5 group">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 py-5 lg:px-8">
              <div className="flex flex-row space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] p-3 lg:p-6">
              <Lightbox />
            </div>
          </div>
        </div>
      </div>
      <Particles className="absolute inset-0 pointer-events-none" />
    </section>
  )
}

export default AboutSection
