import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Link2, Mail } from "lucide-react";
import Image from "next/image";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";

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
          <aside>
            <div className="mt-1.5 flex size-12 items-center justify-center rounded-md bg-muted font-bricolage text-2xl font-black text-accent">
              V
            </div>
            <div className="mt-20 hidden flex-col gap-2 sm:flex">
              <div className="group flex h-10 w-10 items-center justify-center rounded-lg bg-muted p-2 transition-colors duration-300 hover:border sm:h-12 sm:w-12">
                <BsTwitterX />
              </div>
              <div className="group flex h-10 w-10 items-center justify-center rounded-lg bg-muted p-2 transition-colors duration-300 hover:border sm:h-12 sm:w-12">
                <BsLinkedin />
              </div>
              <div className="group flex h-10 w-10 items-center justify-center rounded-lg bg-muted p-2 transition-colors duration-300 hover:border sm:h-12 sm:w-12">
                <Link2 />
              </div>
              <div className="group flex h-10 w-10 items-center justify-center rounded-lg bg-muted p-2 transition-colors duration-300 hover:border sm:h-12 sm:w-12">
                <Mail />
              </div>
            </div>
          </aside>
          <article className="">
            <h1 className="mb-4 font-bricolage text-3xl font-semibold leading-none tracking-tight md:text-4xl">
              {project.name}
            </h1>
            <CardDescription>
              <span className="text-primary"> {project.tag} </span> ✦{"  "}
              {formattedDate}
            </CardDescription>
            <div className="mt-16 text-xl">{project.description}</div>
          </article>
        </div>
      </CardContent>
    </Card>
  );
}
