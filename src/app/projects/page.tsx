import { getProjects } from "@/actions/get-project";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectsCard from "./_components/projects-card";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="bg-dot mx-auto max-w-3xl space-y-9 px-4 transition-[max-width] duration-300 md:py-6">
      <span className="absolute inset-0 -z-50 bg-[radial-gradient(200px_100px_at_50%_0%,#bfdbfe_20%,#131e3100)] dark:bg-[radial-gradient(200px_100px_at_50%_0%,#131f33_20%,#e0f2fe00)] md:bg-[radial-gradient(500px_200px_at_50%_0%,#bfdbfe_20%,#e0f2fe00)] dark:md:bg-[radial-gradient(500px_200px_at_50%_0%,#131f33_20%,#131e3100)]" />

      {[...projects, ...projects].map((project) => (
        <ProjectsCard project={project} key={project.id} />
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
