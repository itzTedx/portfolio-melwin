import { getProjectBySlug, getProjects } from "@/actions/get-project";
import { notFound } from "next/navigation";
import ModalContent from "./_components/modal-content";
import ModalImage from "./_components/modal-image";
import { FullScreenModal } from "./_components/full-screen-modal";

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map((project) => ({ slug: project.slug }));

  return slugs;
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
