import { projectsData } from '@/utils'

import ProjectCard from '@/components/project-card'
import ProjectsTitle from '@/components/projects-title'

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24 ">
      <div className="sticky -top-48 md:-top-36">
        <ProjectsTitle />
      </div>

      <div className="px-6 pt-24 lg:px-0">
        <div className="flex flex-col gap-4">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky w-full max-w-2xl mx-auto sticky-card"
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
