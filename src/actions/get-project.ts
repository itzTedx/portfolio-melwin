import { projectsData } from "@/utils";

export function getProjectBySlug(slug: string) {
  const project = projectsData.find((project) => project.slug === slug);

  return project;
}

export function getProjects() {
  const project = projectsData;

  return project;
}
