interface TimelineItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className={`-my-6`}>
      {items.map((item, index) => (
        <div key={index} className="group relative py-5 pl-8 md:pl-32">
          {/* Purple label */}

          {/* Time + Title */}
          <div className="flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-primary group-last:before:hidden md:flex-row md:before:left-0 md:before:ml-[6.5rem] md:after:left-0 md:after:ml-[6.5rem]">
            <time className="-left-9 mb-3 inline-flex h-7 w-[7.5rem] translate-y-0.5 items-center justify-center rounded-full bg-violet-100 font-bricolage text-xs font-semibold text-primary md:absolute md:mb-0">
              {item.duration}
            </time>
            <h4 className="text-xl font-bold text-foreground">
              {item.company}
            </h4>
          </div>
          <p className="mb-1 text-primary">{item.title}</p>
          {/* Description */}
          <div className="text-muted-foreground/80 lg:text-balance">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}
