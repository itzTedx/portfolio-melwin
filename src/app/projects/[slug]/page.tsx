import { getProjectBySlug } from "@/actions/get-project";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Project from "../_components/project";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AnimatedBorderTrail from "@/components/ui/animated-trail-border";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  return (
    <section className="bg-dot mx-auto max-w-screen-lg space-y-9 px-4 pb-24 transition-[max-width] duration-300 sm:px-12">
      <span className="absolute inset-0 -z-50 bg-[radial-gradient(200px_100px_at_50%_0%,#bfdbfe_20%,#131e3100)] dark:bg-[radial-gradient(200px_100px_at_50%_0%,#131f33_20%,#e0f2fe00)] md:bg-[radial-gradient(500px_200px_at_50%_0%,#bfdbfe_20%,#e0f2fe00)] dark:md:bg-[radial-gradient(500px_200px_at_50%_0%,#131f33_20%,#131e3100)]" />
      <Button
        asChild
        variant="outline"
        className="rounded-full font-bricolage font-medium tracking-tight text-muted-foreground"
      >
        <Link href="/projects">
          <ArrowLeft className="mr-2 size-4" /> Back to Projects
        </Link>
      </Button>
      <AnimatedBorderTrail duration="10s" trailSize="sm" trailColor="#8b5cf6">
        <Project project={project} key={project.id} />
      </AnimatedBorderTrail>
    </section>
  );
}
