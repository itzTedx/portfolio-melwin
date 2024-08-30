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

export type Projects = {
  id: number;
  name: string;
  description: string;
  tools: string[];
  tag: string;
  demo: string;
  image: string;
  slug: string;
  icon: string;
};

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
