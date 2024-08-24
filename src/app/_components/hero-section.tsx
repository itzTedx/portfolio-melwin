import Image from 'next/image'
import Link from 'next/link'

import Social from '@/components/social-icons'
import { buttonVariants } from '@/components/ui/button'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import HeroTextAnimation from './hero-text-animation'

import ContactForm from '@/components/contact-form'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'
import { personalData } from '@/utils'
import ContactButton from './hero-contact-button'

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center my-4 md:my-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-24 md:-top-36 -z-10"
      />

      <div className="flex flex-col items-center justify-center py-6 pb-20 text-center md:py-10">
        <h1 className="text-2xl w-full text-foreground md:font-extrabold sm:text-4xl md:text-5xl md:leading-[4rem] font-monument py-3 sm:py-4 leading-10">
          <span className="">Hi, I{`'`}m </span>
          <span className="tracking-wider text-fuchsia-400">
            {personalData.name} <span className="-ml-2 animate-wave">🖐️</span>
          </span>

          <br />
          <HeroTextAnimation />
        </h1>
        <p className="font-light leading-7 md:leading-8 text-balance text-muted-foreground w-[30ch] sm:w-[50ch]">
          In a digital world where the focus often lies on an efficient designs,
          I want to add an extra layer of joy. I believe that is what leaves a
          lasting impression.
        </p>

        <Social className="my-9 md:my-12" />

        <div className="flex items-center justify-center w-full gap-3">
          <ContactButton />

          <Link
            className={cn(
              buttonVariants({ variant: 'shimmer' }),
              'font-bold items-center gap-1 hover:gap-3 text-sm md:text-lg transition-all text-violet-200 bg-primary ease-out md:px-6 py-2.5 font-bricolage'
            )}
            role="button"
            target="_blank"
            href={personalData.resume}
          >
            <span>Get Resume</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
