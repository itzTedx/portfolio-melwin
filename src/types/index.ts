export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
  };
};

// export type Projects = {
//   id: number;
//   name: string;
//   description: string;
//   tools: string[];
//   tag: string;
//   demo: string;
//   image: string;
//   slug: string;
//   icon: string;
// };

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
};

export type Project = {
  metadata: ProjectMetadata;
  content: string;
};

export type ProjectMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  tag?: string;
  company?: string;
  companyLogo?: string;
  tools?: string[];
  externalLink?: string;
  publishedAt?: string;
  isFeatured?: boolean;
  slug: string;
};
