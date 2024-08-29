import { getProjectBySlug } from "@/actions/get-project";
import { FullScreenModal } from "@/components/full-screen-modal";
import { notFound } from "next/navigation";
import ModalContent from "./_components/modal-content";
import ModalImage from "./_components/modal-image";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  return (
    <FullScreenModal className="grid h-full w-full items-center gap-0 p-0 md:grid-cols-3">
      <div className="relative col-span-2 m-6 aspect-[16/11] md:m-12">
        <ModalImage content={project} />
      </div>

      <ModalContent content={project} />
    </FullScreenModal>
  );
}
