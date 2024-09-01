import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { Project, ProjectMetadata } from "@/types";

const root = path.join(process.cwd(), "src", "content", "projects");

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(root, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);

    return { metadata: { ...data, slug }, content };
  } catch (error) {
    return null;
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(root);

  const posts = files
    .map((file) => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export function getPostMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(root, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return { ...data, slug };
}
