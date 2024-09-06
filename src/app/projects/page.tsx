import { getProjects } from "@/actions/get-project";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectsCard from "./_components/projects-card";
import AnimatedBorderTrail from "@/components/ui/animated-trail-border";
import TopGradient from "@/components/layout/top-gradient";
import { Metadata } from "next";
import { siteConfig } from "@/utils/siteConfig";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const metadata: Metadata = {
  title: "Projects i worked on",
  description: "Some of my works",
  openGraph: {
    images: siteConfig.ogImage,
    type: "website",
    url: `/projects`,
    title: "Projects i worked on",
    description: "Some of my works",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects i worked on",
    description: "Some of my works",
    images: siteConfig.ogImage,
    creator: "@itzTedx_",
  },
  alternates: { canonical: `/projects` },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="bg-dot mx-auto max-w-3xl space-y-9 px-4 transition-[max-width] duration-300 md:py-6 md:pb-36">
      <TopGradient />
      <header>
        <h1 className="font-bricolage text-3xl font-bold">
          Projects I&apos;ve worked on
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Explore my latest works for various clients.
        </p>
      </header>

      {projects.map((project) => (
        <AnimatedBorderTrail
          key={project.title}
          duration="10s"
          trailSize="sm"
          className="h-full w-full"
          trailColor="#8b5cf6"
        >
          <ProjectsCard project={project} />
        </AnimatedBorderTrail>
      ))}

      <Pagination className="pointer-events-none">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}
