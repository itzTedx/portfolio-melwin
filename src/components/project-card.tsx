import * as React from 'react'

interface ProjectCardProps {
  project: {
    id: number
    name: string
    description: string
    tools: string[]
    demo: string
    image: string
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="from-background relative rounded-lg border bg-gradient-to-r to-primary-foreground w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-accent text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] px-4 lg:px-8 py-4 lg:py-8">
        Project {project.id}
      </div>
    </div>
  )
}

export default ProjectCard
