import AnimatedBorderTrail from "@/components/ui/animated-trail-border";

interface HeadingProps {
  heading: string;
}

export default function HeadingCard({ heading }: HeadingProps) {
  return (
    <h5 className="flex items-center justify-center py-5 lg:pb-12 lg:pt-24">
      <span className="h-[2px] w-[4.5rem] bg-secondary sm:w-24" />
      <AnimatedBorderTrail
        trailSize="md"
        trailColor="#8b5cf6"
        contentClassName="bg-secondary w-fit text-secondary-foreground p-2 px-3 sm:px-5 sm:text-xl text-base rounded-md font-monument font-light sm:tracking-wide"
      >
        {heading}
      </AnimatedBorderTrail>
      <span className="h-[2px] w-[4.5rem] bg-secondary sm:w-24" />
    </h5>
  );
}
