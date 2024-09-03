import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

import { educations } from "@/utils";

import GlowCard from "@/components/glow-card";
import HeadingCard from "@/components/heading-card";

import AnimationLottie from "@/components/animation-lottie";
import lottieFile from "../../../../public/lottie/study.json";

function Education() {
  return (
    <section
      className="relative z-50 my-12 overflow-hidden border-t bg-background px-8 lg:my-24 lg:px-0"
      id="education"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        aria-hidden
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      <HeadingCard heading="Educations" />

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-start justify-center">
            <div className="h-3/4 w-3/4">
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
                      <p className="font-bricolage text-xs text-accent sm:text-sm">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div className="text-foreground">
                        <p className="mb-2 font-bricolage text-base font-medium sm:text-xl">
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
    </section>
  );
}

export default Education;
