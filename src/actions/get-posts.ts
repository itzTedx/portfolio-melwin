import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { Post } from "@/types";

const root = path.join(process.cwd(), "src", "content", "posts");

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(root, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);

    return { metadata: { ...data, slug }, content };
  } catch (error) {
    return null;
  }
}
