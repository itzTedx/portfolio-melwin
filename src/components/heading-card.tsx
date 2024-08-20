interface HeadingProps {
  heading: string
}

export default function HeadingCard({ heading }: HeadingProps) {
  return (
    <div className="flex justify-center py-5 lg:pt-24 lg:pb-12">
      <div className="flex items-center">
        <span className="w-24 h-[2px] bg-secondary"></span>
        <span className="bg-secondary w-fit text-secondary-foreground p-2 px-5 text-xl rounded-md">
          {heading}
        </span>
        <span className="w-24 h-[2px] bg-secondary" />
      </div>
    </div>
  )
}
