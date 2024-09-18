import { getPosts } from "@/actions/get-posts";
import { getProjects } from "@/actions/get-project";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.BASE_URL || "";

  const projects = await getProjects();
  const posts = await getPosts();

  const projectsEntries: MetadataRoute.Sitemap = projects.map(
    ({ slug, publishedAt, image }) => ({
      url: `${baseURL}/projects/${slug}`,
      lastModified: publishedAt,
      priority: 0.9,
    }),
  );
  const postsEntries: MetadataRoute.Sitemap = posts.map(
    ({ slug, publishedAt, image }) => ({
      url: `${baseURL}/blogs/${slug}`,
      lastModified: publishedAt,
      priority: 0.8,
    }),
  );

  return [
    {
      url: baseURL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseURL}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseURL}/blogs`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/projects`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/contact`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...projectsEntries,
    ...postsEntries,
  ];
}
