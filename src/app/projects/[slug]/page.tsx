import { getProjectBySlug, getProjects } from "@/actions/get-project";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Project from "../_components/project";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AnimatedBorderTrail from "@/components/ui/animated-trail-border";
import TopGradient from "@/components/layout/top-gradient";
import type { Metadata, ResolvingMetadata } from "next";

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

  return {
    title: project?.metadata.title,
    description: project?.metadata.summary,
    openGraph: {
      images: project?.metadata.image,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) notFound();

  return (
    <section className="bg-dot mx-auto max-w-screen-lg space-y-9 px-4 pb-24 transition-[max-width] duration-300 sm:px-12">
      <TopGradient />
      <Button
        asChild
        variant="outline"
        className="rounded-full font-bricolage font-medium tracking-tight text-muted-foreground"
      >
        <Link href="/projects">
          <ArrowLeft className="mr-2 size-4" /> Back to Projects
        </Link>
      </Button>
      <AnimatedBorderTrail duration="10s" trailSize="sm" trailColor="#8b5cf6">
        <Project project={project} />
      </AnimatedBorderTrail>
    </section>
  );
}
