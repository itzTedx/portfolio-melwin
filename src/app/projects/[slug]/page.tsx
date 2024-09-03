import { getProjectBySlug, getProjects } from "@/actions/get-project";
import TopGradient from "@/components/layout/top-gradient";
import AnimatedBorderTrail from "@/components/ui/animated-trail-border";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/utils/siteConfig";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Graph } from "schema-dts";
import Project from "../_components/project";

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map((project) => ({ slug: project.slug }));

  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const project = await getProjectBySlug(params.slug);

  if (!project) return { title: "Projects of Melwin" };

  const description = project.metadata.summary!.slice(0, 160) + "...";

  return {
    title: project?.metadata.title + "- Melwin Af",
    description,
    openGraph: {
      type: "article",
      images: {
        url: project.metadata.image!,
        alt: description,
      },
      url: `/projects/${slug}`,
      title: project?.metadata.title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: project?.metadata.title + "- Melwin Af",
      description,
      images: {
        url: project.metadata.image!,
        alt: description,
      },

      site: "@itzTedx_",
      creator: "@itzTedx_",
    },
    alternates: { canonical: `/projects/${slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) notFound();

  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Projects",
            item: `${process.env.BASE_URL}/projects`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: project.metadata.title,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: project.metadata.title,
        image: `${process.env.BASE_URL}${project.metadata.image}`,
        description: project.metadata.summary,
        editor: siteConfig.shortName,
        genre: project.metadata.tag,
        url: `${process.env.BASE_URL}/projects/${params.slug}`,
        publisher: siteConfig.shortName,
        dateCreated: project.metadata.publishedAt,
        dateModified: project.metadata.publishedAt,
        datePublished: project.metadata.publishedAt,
      },
    ],
  };

  return (
    <article className="bg-dot mx-auto max-w-screen-lg space-y-9 px-4 pb-24 transition-[max-width] duration-300 sm:px-12">
      <TopGradient />
      <Button
        asChild
        variant="outline"
        className="rounded-full font-bricolage font-medium tracking-tight text-muted-foreground"
      >
        <Link href="/projects" aria-label="Back to projects page">
          <ArrowLeft className="mr-2 size-4" /> Back to Projects
        </Link>
      </Button>
      <AnimatedBorderTrail duration="10s" trailSize="sm" trailColor="#8b5cf6">
        <Project project={project} />
      </AnimatedBorderTrail>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
