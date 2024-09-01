import { projectsData } from "@/utils";

import ProjectCard from "@/components/project-card";
import ProjectsTitle from "@/components/projects-title";
import { getProjects } from "@/actions/get-project";

const Projects = async () => {
  const projects = await getProjects();
  return (
    <section id="projects" className="bg-dot relative z-50 my-12 lg:my-24">
      <div className="sticky -top-48 md:-top-36">
        <ProjectsTitle />
      </div>

      <div className="px-6 pt-24 lg:px-0">
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card sticky mx-auto w-full max-w-3xl"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_20px_0_rgba(0,0,0,0.05)] transition-all duration-500 dark:shadow-[0_0_30px_0_rgba(0,0,0,0.2)]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
