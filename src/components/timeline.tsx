interface TimelineItemProps {
  title: string
  company: string
  duration: string
  description: string
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className={`-my-6`}>
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 md:pl-32 py-5 group">
          {/* Purple label */}

          {/* Time + Title */}
          <div className="flex flex-col md:flex-row items-start group-last:before:hidden before:absolute before:left-2 md:before:left-0 before:h-full before:px-px before:bg-slate-300 md:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 md:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full md:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="md:absolute -left-9 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-[7.5rem] h-7 mb-3 md:mb-0 text-primary bg-violet-100 rounded-full font-bricolage">
              {item.duration}
            </time>
            <h5 className="text-xl font-bold text-foreground">
              {item.company}
            </h5>
          </div>
          <p className="mb-1 text-primary">{item.title}</p>
          {/* Description */}
          <div className="text-muted-foreground/80 lg:text-balance">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  )
}
