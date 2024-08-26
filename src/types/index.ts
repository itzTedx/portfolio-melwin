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
};
