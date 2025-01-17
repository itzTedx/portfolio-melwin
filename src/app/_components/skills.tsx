import Image from "next/image";
import Marquee from "react-fast-marquee";

import { skillsData } from "@/utils/";
import { skillsImage } from "@/utils/skill-icons";

import HeadingCard from "@/components/heading-card";
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";

function Skills() {
  return (
    <section
      id="skills"
      className="relative z-50 my-12 border-t px-8 lg:my-24 lg:px-0"
    >
      <div className="absolute -top-5 left-[42%] h-[50px] w-[100px] translate-x-1/2 rounded-full bg-violet-300 opacity-20 blur-3xl filter sm:top-6 sm:h-[100px]"></div>

      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      <HeadingCard heading="Skills" />

      <ul className="relative my-12 w-full">
        <div className="pointer-events-none absolute left-0 top-0 z-50 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-50 h-full w-32 bg-gradient-to-l from-background to-transparent" />
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
            <Tilt
              key={id}
              rotationFactor={12}
              isRevese
              className="group relative m-3 rounded-lg border hover:border-violet-500 sm:m-5"
            >
              <Spotlight
                className="z-10 from-white/10 via-white/5 to-white/5 blur-2xl"
                size={248}
                springOptions={{
                  stiffness: 26.7,
                  damping: 4.1,
                  mass: 0.2,
                }}
              />
              <li className="flex size-36 h-fit min-w-fit cursor-pointer flex-col items-center justify-center rounded-md transition-all duration-500 hover:scale-[1.15]">
                <div className="h-full w-full rounded-md bg-muted/50 shadow-none shadow-gray-50 transition-all duration-500">
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
                        title={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto"
                      />
                    </div>
                    <p className="text-sm text-foreground">{skill}</p>
                  </div>
                </div>
              </li>
            </Tilt>
          ))}
        </Marquee>
      </ul>
    </section>
  );
}

export default Skills;
