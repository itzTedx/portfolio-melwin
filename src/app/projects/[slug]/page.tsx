import getProjectBySlug from "@/actions/get-project";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  return (
    <div className="bg-dot min-h-screen">
      <h1>Project: {project.name}</h1>
      <Image src={project.image} height={500} width={500} alt={project.name} />
    </div>
  );
}
