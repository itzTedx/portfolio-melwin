import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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
    <Card className="group overflow-hidden p-12" key={project.id}>
      <Link href={`projects/${project.slug}`}>
        <CardContent>
          <div className="relative aspect-video">
            <Image
              src={project.image}
              fill
              alt={project.description}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-4 md:gap-3 md:p-6">
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>
              <span className="text-primary"> {project.tag} </span> ✦{"  "}
              {formattedDate}
            </CardDescription>
          </div>
          <article></article>
        </CardContent>
      </Link>
    </Card>
  );
}
