import { getProjects } from "@/actions/get-project";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectsCard from "./_components/projects-card";
import AnimatedBorderTrail from "@/components/ui/animated-trail-border";
import TopGradient from "@/components/layout/top-gradient";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="bg-dot mx-auto max-w-3xl space-y-9 px-4 transition-[max-width] duration-300 md:py-6">
      <TopGradient />

      {projects.map((project) => (
        <AnimatedBorderTrail
          key={project.title}
          duration="10s"
          trailSize="sm"
          className="h-full w-full"
          trailColor="#8b5cf6"
        >
          <ProjectsCard project={project} />
        </AnimatedBorderTrail>
      ))}

      <div className="grid grid-cols-2 gap-6 pb-24 pt-9">
        <Button size="lg" variant="outline" className="rounded-md py-9">
          <ChevronLeft /> Previous
        </Button>
        <Button size="lg" variant="outline" className="rounded-md py-9">
          Next <ChevronRight />
        </Button>
      </div>
    </section>
  );
}
