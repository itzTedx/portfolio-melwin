"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { ProjectMetadata } from "@/types";

export default function ModalImage({ content }: { content: ProjectMetadata }) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Image
        src={content.image!}
        alt={content.title!}
        fill
        className={cn("z-50 overflow-hidden rounded-md object-cover")}
      />
      <Image
        src={content.image!}
        alt={content.title!}
        fill
        className="object-cover opacity-35 blur-3xl"
        quality={1}
      />
    </div>
  );
}
