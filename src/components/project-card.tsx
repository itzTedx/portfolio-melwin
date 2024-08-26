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
} from "@/components/ui/animated-dialog";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { cn, extractSiteName } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    tools: string[];
    demo: string;
    image: string;
    tag: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative w-full rounded-lg border bg-gradient-to-r from-background to-primary-foreground">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="relative flex items-center justify-center px-4 py-3 lg:px-8 lg:py-5">
        <div className="absolute left-4 top-1/2 flex -translate-y-1/2 flex-row space-x-1 lg:space-x-2">
          <div className="h-2 w-2 rounded-full bg-red-400 lg:h-3 lg:w-3" />
          <div className="h-2 w-2 rounded-full bg-orange-400 lg:h-3 lg:w-3" />
          <div className="h-2 w-2 rounded-full bg-green-200 lg:h-3 lg:w-3" />
        </div>
        {/* <NeonGradientCard className="items-center justify-center text-center">
          <span className="pointer-events-none whitespace-pre-wrap text-muted-foreground text-center text-sm dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] px-3 h-full">
            {project.tag}
          </span>
        </NeonGradientCard> */}
        <p className="ml-3 text-center font-bricolage text-base text-accent lg:text-xl">
          {project.tag}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] px-4 py-4 lg:px-8 lg:py-8">
        <div className="relative aspect-video">
          <Dialog
            transition={{
              type: "spring",
              bounce: 0.05,
              duration: 0.25,
            }}
          >
            <DialogTrigger className="flex flex-col overflow-hidden rounded-sm border">
              <DialogImage
                src={project.image}
                alt={project.name}
                className="aspect-[16/8]"
              />
              <div className="mr-3 flex flex-grow flex-row items-end justify-between p-4 md:p-6">
                <div className="space-y-2">
                  <DialogTitle className="font-monument text-xl font-bold tracking-wide text-amber-500 dark:text-amber-400">
                    {project.name}
                  </DialogTitle>
                  <DialogSubtitle className="line-clamp-2 text-muted-foreground">
                    {project.description}
                  </DialogSubtitle>
                </div>

                <AnimatedTooltip tools={project.tools} />
              </div>
            </DialogTrigger>
            <DialogContainer>
              <DialogContent className="pointer-events-auto relative grid h-full w-full sm:rounded-sm lg:grid-cols-3">
                <DialogImage
                  src={project.image}
                  alt={project.name}
                  className="col-span-2 mx-9 my-auto aspect-video object-cover shadow-xl"
                />
                <div className="ju relative flex h-full flex-col justify-between border-l bg-background p-6 pt-9 md:p-9">
                  <div className="absolute inset-x-1/2 top-0 flex w-3/4 -translate-x-1/2 -translate-y-[1px] justify-center lg:inset-x-auto lg:inset-y-1/2 lg:left-0 lg:h-1/2 lg:w-auto lg:-translate-x-[1px] lg:-translate-y-1/2">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent lg:h-full lg:w-[1px] lg:bg-gradient-to-b" />
                  </div>
                  <div className="">
                    <DialogTitle className="font-monument text-2xl font-bold tracking-wide text-amber-500 dark:text-amber-400">
                      {project.name}
                    </DialogTitle>
                    <DialogSubtitle className="text-muted-foreground/80">
                      {project.tag}
                    </DialogSubtitle>
                    <DialogDescription
                      variants={{
                        initial: { opacity: 0, scale: 0.8, y: 100 },
                        animate: { opacity: 1, scale: 1, y: 0 },
                        exit: { opacity: 0, scale: 0.8, y: 100 },
                      }}
                    >
                      <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </DialogDescription>
                  </div>
                  <Link
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "group relative flex flex-col items-start rounded-full border-0 px-6 py-4 outline outline-input hover:bg-muted/20 hover:outline-4",
                    )}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More about this project
                    <ExternalLink className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted transition-colors group-hover:text-muted-foreground" />
                  </Link>
                </div>
                <DialogClose />
              </DialogContent>
              {/* <DialogContent className="pointer-events-auto relative flex h-auto w-fit flex-col overflow-hidden border bg-background sm:w-[45rem] sm:rounded-sm">
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
                    <p className="mt-3 text-muted-foreground text-pretty leading-relaxed">
                      {project.description}
                    </p>

                    <Link
                      className="inline-flex mt-3 text-zinc-500"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      More about this project
                    </Link>
                  </DialogDescription>
                </div>
                <DialogClose className="" />
              </DialogContent> */}
            </DialogContainer>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
