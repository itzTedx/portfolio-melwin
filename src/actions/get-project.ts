import { projectsData } from "@/utils";

export default function getProjectBySlug(slug: string) {
  const project = projectsData.find((project) => project.slug === slug);

  return project;
}
