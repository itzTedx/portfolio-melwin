import Image from "next/image";
import Link from "next/link";

import Social from "@/components/social-icons";
import HeroTextAnimation from "./hero-text-animation";

import { cn } from "@/lib/utils";
import { personalData } from "@/utils";
import ResumeButton from "./get-resume-btn";

function HeroSection() {
  return (
    <section className="relative my-4 flex flex-col items-center justify-center md:my-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-24 -z-10 md:-top-36"
        aria-hidden
        quality={50}
        priority
      />

      <div className="flex flex-col items-center justify-center py-6 pb-20 text-center md:py-10">
        <h1 className="w-full py-3 font-monument text-2xl leading-10 text-foreground sm:py-4 sm:text-4xl md:text-5xl md:font-extrabold md:leading-[4rem]">
          <span className="">Hi, I{`'`}m </span>
          <span className="tracking-wider text-fuchsia-400">
            {personalData.name} <span className="animate-wave -ml-2">🖐️</span>
          </span>

          <br />
          <HeroTextAnimation />
        </h1>
        <p className="w-[30ch] text-balance font-light leading-7 text-muted-foreground sm:w-[50ch] md:leading-8">
          In a digital world where the focus often lies on an efficient designs,
          I want to add an extra layer of joy. I believe that is what leaves a
          lasting impression.
        </p>

        <Social className="my-9 md:my-12" />

        <div className="flex w-full items-center justify-center gap-3 font-bricolage font-semibold sm:text-lg">
          <ResumeButton href={personalData.resume} />
          {/* <ContactButton /> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
