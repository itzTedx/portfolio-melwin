import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogImage,
  DialogSubtitle,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/animated-dialog'
import Link from 'next/link'
import { AnimatedTooltip } from './ui/animated-tooltip'

interface ProjectCardProps {
  project: {
    id: number
    name: string
    description: string
    tools: string[]
    demo: string
    image: string
    tag: string
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="from-background relative rounded-lg border bg-gradient-to-r to-primary-foreground w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-accent text-base lg:text-xl">
          {project.tag}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] px-4 lg:px-8 py-4 lg:py-8">
        <div className="relative aspect-video">
          <Dialog
            transition={{
              type: 'spring',
              bounce: 0.05,
              duration: 0.25,
            }}
          >
            <DialogTrigger className="flex flex-col border rounded-sm">
              <DialogImage
                src={project.image}
                alt={project.name}
                className="aspect-[16/8]"
              />
              <div className="flex flex-grow flex-row items-end justify-between p-4 md:p-6 mr-3">
                <div className="space-y-2">
                  <DialogTitle className="dark:text-amber-400 text-amber-500 font-bold text-xl">
                    {project.name}
                  </DialogTitle>
                  <DialogSubtitle className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </DialogSubtitle>
                </div>

                <AnimatedTooltip tools={project.tools} />
              </div>
            </DialogTrigger>
            <DialogContainer>
              <DialogContent className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border bg-background sm:w-[45rem] sm:rounded-sm">
                <DialogImage
                  src={project.image}
                  alt={project.name}
                  className="aspect-video object-cover"
                />
                <div className="p-6">
                  <DialogTitle className="text-amber-500 font-bold text-2xl">
                    {project.name}
                  </DialogTitle>

                  <DialogSubtitle className="text-muted-foreground/80">
                    {project.tag}
                  </DialogSubtitle>
                  <DialogDescription
                    disableLayoutAnimation
                    variants={{
                      initial: { opacity: 0, scale: 0.8, y: 100 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.8, y: 100 },
                    }}
                  >
                    <p className="mt-3 text-muted-foreground text-pretty">
                      {project.description}
                    </p>

                    <Link
                      className="mt-3 inline-flex text-zinc-500"
                      href="https://www.are.na/block/12759029"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      More about this project
                    </Link>
                  </DialogDescription>
                </div>
                <DialogClose className="" />
              </DialogContent>
            </DialogContainer>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
