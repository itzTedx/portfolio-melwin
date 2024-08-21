import AnimationLottie from '@/components/animation-lottie'
import DesignerAnimation from '@/components/desinger-animation'
import { buttonVariants } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { cn } from '@/lib/utils'
import { personalData } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FaBehanceSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { MdDownload } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import designer from '../../../public/lottie/designer.json'
import Social from '@/components/social-icons'

function HeroSection() {
  const designations = [
    'Graphic Designer',
    'Visual Creator',
    'UI/UX Designer',
    'Web Developer',
  ]
  return (
    <section className="relative flex flex-col items-center justify-between my-4 lg:my-12 ">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-24 lg:-top-36 -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gapy-3 md:gap-y-8 ">
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-xl text-center md:text-left w-full md:leading-10 text-foreground md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            <span className="text-3xl md:text-[2.6rem]">Hi, I{`'`}m </span>
            <span className="text-fuchsia-400 font-bold text-3xl md:text-[2.6rem]">
              {personalData.name} <span className="animate-wave">🖐️</span>
            </span>

            {/* <span className="font-light text-sm text-muted-foreground sr">
              an energetic
            </span> */}
            <span className="text-3xl md:text-[2.6rem]">
              <br />
              <FlipWords words={designations} />
            </span>
          </h1>
          <p className="leading-7 md:leading-8 text-balance mt-2 font-light text-muted-foreground text-center md:text-left mb-6 md:mb-9">
            In a digital world where the focus often lies on an efficient
            designs, I want to add an extra layer of joy. I believe that is what
            leaves a lasting impression.
          </p>

          <Social />

          <div className="flex items-center gap-3 mt-6 md:mt-9">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="bg-background"
            >
              <Link
                href="#contact"
                className="flex items-center gap-1 hover:gap-3 uppercase text-sm transition-all text-foreground duration-200 ease-out px-4 py-2 rounded-[inherit] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-foreground"
              >
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </Link>
            </HoverBorderGradient>

            <Link
              className={cn(
                buttonVariants({ variant: 'shimmer' }),
                'items-center gap-1 hover:gap-3 uppercase text-sm transition-all text-foreground bg-primary ease-out'
              )}
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative rounded-lg ">
          <div className="size-80 md:size-full mx-auto ">
            {/* <DesignerAnimation /> */}
            <AnimationLottie animationPath={designer} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
