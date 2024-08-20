import ProjectCard from '@/components/project-card'
import { projectsData } from '@/utils'

const Projects = () => {
  return (
    <div id="projects" className="relative z-50  py-12 lg:py-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-secondary absolute left-0  w-fit text-foreground px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-secondary"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_20px_0_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_0_rgba(0,0,0,0.2)] transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
