import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Projects } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProjectsCardProps {
  project: Projects;
}

export default function ProjectsCard({ project }: ProjectsCardProps) {
  const date = new Date();
  const month = date.toLocaleDateString("en-US", {
    month: "long",
  });
  const year = date.getFullYear();

  const formattedDate = `${month}, ${year}`;

  return (
    <Card className="group overflow-hidden" key={project.id}>
      <a href={`projects/${project.slug}`}>
        <CardContent>
          <div className="relative aspect-[16/7]">
            <Image
              src={project.image}
              fill
              alt={project.description}
              className="object-cover"
            />
          </div>
          <div className="flex gap-4 p-4 transition-colors duration-300 group-hover:bg-muted/30 md:gap-8 md:p-8">
            <div className="relative flex size-12 shrink-0 items-center justify-center rounded-md bg-muted p-1 transition-colors duration-300 group-hover:bg-transparent max-sm:hidden md:size-14">
              <Image
                height={36}
                width={36}
                alt={project.image + "logo"}
                src={project.icon}
              />
            </div>
            <div className="">
              <CardTitle>{project.name}</CardTitle>

              <div className="flex gap-4 max-sm:mt-3 sm:gap-1.5">
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-md bg-muted p-1 transition-colors duration-300 group-hover:bg-transparent sm:hidden">
                  <Image
                    height={36}
                    width={36}
                    alt={project.image + "logo"}
                    src={project.icon}
                  />
                </div>
                <div className="flex max-sm:flex-col sm:gap-1.5">
                  <span className="text-primary"> {project.tag} </span>

                  <div className="max-sm:hidden">✦</div>
                  <span className="max-sm:text-xs"> {formattedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
