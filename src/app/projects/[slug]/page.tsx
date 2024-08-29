import { getProjectBySlug } from "@/actions/get-project";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Project from "../_components/project";
import { ArrowLeft } from "lucide-react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  return (
    <section className="bg-dot mx-auto max-w-3xl space-y-9 px-4 transition-[max-width] duration-300 md:py-6">
      <span className="absolute inset-0 -z-50 bg-[radial-gradient(200px_100px_at_50%_0%,#bfdbfe_20%,#131e3100)] dark:bg-[radial-gradient(200px_100px_at_50%_0%,#131f33_20%,#e0f2fe00)] md:bg-[radial-gradient(500px_200px_at_50%_0%,#bfdbfe_20%,#e0f2fe00)] dark:md:bg-[radial-gradient(500px_200px_at_50%_0%,#131f33_20%,#131e3100)]" />
      <Button variant="outline" size="lg" className="text-muted-foreground">
        <ArrowLeft /> Back to Projects
      </Button>
      <Project project={project} key={project.id} />
    </section>
  );
}
