import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AboutMe from "./_components/about-me";
import Education from "./_components/education";
import { Timeline } from "./_components/timeline";
import { VisionOSIcon } from "./_components/logo-interaction";

export default function About() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 font-normal text-muted-foreground md:text-lg">
            Updating...
          </p>
          <p className="text-lg">
            Link for my {``}
            <Link
              href="https://www.linkedin.com/in/melwin-af/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "px-0 py-0 text-lg font-bold",
              )}
            >
              Portfolio
            </Link>
          </p>
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-muted-foreground md:text-lg">
            In early 2012, my creative journey began as a curious learner,
            experimenting with playful photo manipulations that laid the
            foundation for my artistic evolution.
          </p>
          <p className="mb-8 text-xs font-normal text-muted-foreground md:text-sm">
            Driven by curiosity, I dove into creating these artworks during a
            time when people were just beginning to share their edited photos on
            Facebook.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <Image
              src="/image/about/lava-text.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
            <Image
              src="/image/about/art-wall.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
            <Image
              src="/image/about/city-bike.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
            <Image
              src="/image/about/new-year-2015.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "April 24, 1999",
      content: (
        <div>
          <p className="mb-4 font-normal text-muted-foreground">
            A designer with a passion for creativity was <strong>born</strong>,
            destined to bring ideas to life through art and innovation.
          </p>
        </div>
      ),
    },
  ];
  // #6d98e3
  return (
    <div className="bg-dot">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-24 -z-10 md:-top-36"
      />
      <div className="mx-auto max-w-6xl space-y-24">
        <AboutMe />
        {/* <VisionOSIcon /> */}
        <Education />
      </div>
      <div className="h-fit w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
