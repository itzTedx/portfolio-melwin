import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { skillsImage } from "@/utils/skill-icons";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import ShareIcons from "./share-icons";

interface ProjectsCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    tools: string[];
    tag: string;
    demo: string;
    image: string;
    slug: string;
  };
}

export default function Project({ project }: ProjectsCardProps) {
  const date = new Date();
  const month = date.toLocaleDateString("en-US", {
    month: "long",
  });
  const year = date.getFullYear();

  const formattedDate = `${month}, ${year}`;

  const pathname = `${process.env.BASE_URL}/projects/${project.slug}`;

  return (
    <Card className="group overflow-hidden" key={project.id}>
      <CardContent>
        <div className="relative aspect-video">
          <Image
            src={project.image}
            fill
            alt={project.description}
            className="object-cover"
          />
        </div>

        <div className="flex gap-4 p-4 md:gap-14 md:p-12">
          <aside className="max-sm:hidden">
            <div className="mt-1 flex size-10 items-center justify-center rounded-md bg-muted font-bricolage text-2xl font-black text-accent sm:size-12">
              V
            </div>
            <div className="hidden sm:flex">
              <ShareIcons pathname={pathname} />
            </div>
          </aside>
          <article className="">
            <h1 className="mb-4 font-bricolage text-3xl font-semibold leading-none tracking-tight md:text-4xl">
              {project.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-muted p-1 font-monument text-3xl font-black sm:hidden">
                V
              </div>
              <div className="flex gap-1.5 max-sm:flex-col">
                <span className="text-primary"> {project.tag} </span>

                <div className="max-sm:hidden">✦</div>
                <span> {formattedDate}</span>
              </div>
            </div>
            <div className="mt-9 space-y-4 text-pretty font-bricolage text-foreground/80 sm:mt-12 md:text-xl md:leading-8">
              <p>{project.description}</p>
              <h5>Tools used:</h5>
              <ul className="flex gap-3">
                {project.tools.map((tool, i) => (
                  <li key={i} className="flex gap-3 rounded-md border p-3 px-6">
                    <Image
                      height={40}
                      width={40}
                      src={skillsImage(tool)}
                      alt={tool}
                      className="size-6 sm:size-8"
                    />
                    {tool}
                  </li>
                ))}
              </ul>
              <div>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "md:text-xl",
                  )}
                >
                  Live Preview{" "}
                  <ExternalLink className="ml-2 size-4 md:size-5" />
                </Link>
              </div>
            </div>

            <div className="sm:hidden">
              <ShareIcons pathname={pathname} />
            </div>
          </article>
        </div>
      </CardContent>
    </Card>
  );
}
