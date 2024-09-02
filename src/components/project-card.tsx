import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ProjectMetadata } from "@/types";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

function ProjectCard({ project }: { project: ProjectMetadata }) {
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

        <p className="ml-3 text-center font-bricolage text-base text-accent lg:text-xl">
          {project.tag}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] px-4 py-4 lg:px-8 lg:py-8">
        <Link
          href={`/projects/${project.slug}`}
          title={project.title}
          scroll={false}
          className="flex flex-col overflow-hidden rounded-sm border"
        >
          <div className="relative aspect-[16/11]">
            <Image
              src={project.image!}
              alt={project.title!}
              title={project.title!}
              fill
              quality={50}
              className={cn("z-50 overflow-hidden object-cover")}
            />
            <Image
              src={project.image!}
              alt={project.title!}
              aria-hidden
              fill
              className="object-cover opacity-35 blur-3xl"
              quality={1}
            />
            <div className="absolute bottom-0 z-50 flex w-full flex-grow flex-row items-end justify-between p-4 md:p-6">
              <h3 className="rounded-md px-2.5 py-1.5 font-bricolage text-sm font-bold tracking-wide text-amber-500 backdrop-blur-md sm:px-4 sm:py-3 sm:text-xl">
                {project.company}
              </h3>

              {project.tools && (
                <div className="mr-3 flex">
                  <AnimatedTooltip tools={project.tools} />
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
