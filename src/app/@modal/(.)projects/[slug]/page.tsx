import { getProjectBySlug, getProjects } from "@/actions/get-project";
import { FullScreenModal } from "@/components/full-screen-modal";
import { notFound } from "next/navigation";
import ModalContent from "./_components/modal-content";
import ModalImage from "./_components/modal-image";
import { Metadata } from "next";

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

  const description = project.metadata.summary!.slice(0, 140) + "...";

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

  return (
    <FullScreenModal className="grid h-full w-full items-center gap-0 p-0 md:grid-cols-3">
      <div className="relative col-span-2 m-6 aspect-[16/11] md:m-12">
        <ModalImage content={project.metadata} />
      </div>

      <ModalContent content={project} />
    </FullScreenModal>
  );
}
