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
import { NeonGradientCard } from './ui/neon-gradient-card'

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
    <div className="relative w-full border rounded-lg from-background bg-gradient-to-r to-primary-foreground">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="relative px-4 py-3 lg:px-8 lg:py-5 flex items-center justify-center">
        <div className="absolute left-4 flex flex-row space-x-1 -translate-y-1/2 lg:space-x-2 top-1/2">
          <div className="w-2 h-2 bg-red-400 rounded-full lg:h-3 lg:w-3" />
          <div className="w-2 h-2 bg-orange-400 rounded-full lg:h-3 lg:w-3" />
          <div className="w-2 h-2 bg-green-200 rounded-full lg:h-3 lg:w-3" />
        </div>
        <NeonGradientCard className="items-center justify-center text-center">
          <span className="pointer-events-none whitespace-pre-wrap text-muted-foreground text-center text-sm dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] px-3 h-full">
            {project.tag}
          </span>
        </NeonGradientCard>
        {/* <p className="ml-3 text-base text-center text-accent lg:text-xl">
          {project.tag}
        </p> */}
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
              <div className="flex flex-row items-end justify-between flex-grow p-4 mr-3 md:p-6">
                <div className="space-y-2">
                  <DialogTitle className="text-xl font-bold tracking-wide dark:text-amber-400 text-amber-500 font-monument">
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
              <DialogContent className="pointer-events-auto relative flex h-auto w-fit flex-col overflow-hidden border bg-background sm:w-[45rem] sm:rounded-sm">
                <DialogImage
                  src={project.image}
                  alt={project.name}
                  className="object-cover aspect-video"
                />
                <div className="p-6">
                  <DialogTitle className="text-2xl font-bold tracking-wide text-amber-500 dark:text-amber-400 font-monument">
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
                      className="inline-flex mt-3 text-zinc-500"
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
