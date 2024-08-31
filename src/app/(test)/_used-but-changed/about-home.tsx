import AnimatedBorderTrail from "@/components/ui/animated-trail-border";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@/components/particles"));
const Lightbox = dynamic(() => import("@/components/lightbox"));

function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-8 pb-6 md:py-12 lg:px-0 lg:py-16"
    >
      <div className="absolute -right-8 top-[8.5rem] hidden flex-col items-center lg:flex">
        <AnimatedBorderTrail
          trailSize="sm"
          trailColor="#8b5cf6"
          className="pointer-events-none rotate-90"
          contentClassName="p-2 px-5 bg-secondary w-fit text-foreground text-xl rounded-md font-monument font-light tracking-wider"
        >
          ABOUT ME
        </AnimatedBorderTrail>
        <span className="h-36 w-[2px] bg-secondary" />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h5 className="mb-5 font-bricolage text-3xl font-bold text-accent">
            A Glimpse into my World
          </h5>

          <p className="mb-4 flex gap-6 text-balance text-sm !leading-9 text-foreground lg:text-lg">
            <span className="relative mt-2.5 flex size-4 items-center justify-center rounded-full shadow-sm">
              <span className="absolute size-3 animate-ping rounded-full border border-amber-500/20" />
              <span className="h-2 w-2 rounded-full border border-amber-600" />
            </span>
            Hi, I&apos;m Melwin, a passionate graphic designer with over four
            years of experience in creating impactful visual content. I hold a
            B.Sc. in Visual Communication and have worked with companies like
            Digital Desk in Dubai and Zoomin Editing Lab in Tamil Nadu.
          </p>
          <p className="flex gap-6 text-balance text-sm !leading-9 text-foreground lg:text-lg">
            <span className="relative mt-2.5 flex size-4 items-center justify-center rounded-full shadow-sm">
              <span className="absolute size-3 animate-ping rounded-full border border-amber-500/20" />
              <span className="size-2 rounded-full border border-amber-600" />
            </span>
            I&apos;m skilled in Adobe Creative Suite, Figma, and more,
            delivering high-quality designs for both digital and print media.
            I&apos;m looking for challenging opportunities where I can
            contribute creatively while advancing my career.
          </p>
        </div>
        <div className="order-1 flex justify-center lg:order-2 lg:justify-start">
          <div className="group relative order-1 rounded-lg border bg-gradient-to-r from-background to-primary/5 lg:order-2">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 py-5 lg:px-8">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] p-3 lg:p-6">
              <Lightbox />
            </div>
          </div>
        </div>
      </div>
      <Particles className="pointer-events-none absolute inset-0" />
    </section>
  );
}

export default AboutSection;
