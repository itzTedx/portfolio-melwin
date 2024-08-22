import AnimatedBorderTrail from '@/components/ui/animated-trail-border'

interface HeadingProps {
  heading: string
}

export default function HeadingCard({ heading }: HeadingProps) {
  return (
    <div className="flex items-center justify-center py-5 lg:pt-24 lg:pb-12 ">
      <span className="w-24 h-[2px] bg-secondary" />
      <AnimatedBorderTrail
        trailSize="md"
        trailColor="#8b5cf6"
        contentClassName="bg-secondary w-fit text-secondary-foreground p-2 px-5 text-xl rounded-md font-monument font-light tracking-wide"
      >
        {heading}
      </AnimatedBorderTrail>
      <span className="w-24 h-[2px] bg-secondary" />
    </div>
  )
}
