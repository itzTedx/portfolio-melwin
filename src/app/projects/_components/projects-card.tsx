import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { ProjectMetadata } from "@/types";
import Image from "next/image";

export default function ProjectsCard({
  project,
}: {
  project: ProjectMetadata;
}) {
  return (
    <Card className="group overflow-hidden">
      <a
        href={`projects/${project.slug}`}
        aria-label={`Open Project About ${project.title}`}
      >
        <CardContent>
          <div className="relative aspect-[16/7]">
            <Image
              src={project.image!}
              fill
              alt={project.summary!}
              className="object-cover"
            />
            {project.tools && (
              <div className="absolute bottom-4 right-4 mr-3 flex">
                <AnimatedTooltip tools={project.tools} />
              </div>
            )}
          </div>
          <div className="flex gap-4 p-4 transition-colors duration-300 group-hover:bg-muted/30 md:gap-8 md:p-8">
            <div className="relative flex size-12 shrink-0 items-center justify-center rounded-md bg-muted p-1 transition-colors duration-300 group-hover:bg-transparent max-sm:hidden md:size-14">
              <Image
                height={36}
                width={36}
                alt={project.company + "'s logo"}
                src={project.companyLogo!}
                className="transition duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="">
              <CardTitle>{project.title}</CardTitle>

              <div className="flex gap-4 max-sm:mt-3 sm:gap-1.5">
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-md bg-muted p-1 transition-colors duration-300 group-hover:bg-transparent sm:hidden">
                  <Image
                    height={36}
                    width={36}
                    alt={project.title + "logo"}
                    src={project.companyLogo!}
                  />
                </div>
                <div className="flex max-sm:flex-col sm:gap-1.5">
                  <span className="text-primary"> {project.tag} </span>

                  <div className="max-sm:hidden">✦</div>
                  <span className="max-sm:text-xs">
                    {formatDate(project.publishedAt ?? "")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
