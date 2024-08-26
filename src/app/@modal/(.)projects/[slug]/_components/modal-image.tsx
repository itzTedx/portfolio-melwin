"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Projects } from "@/types";

export default function ModalImage({ content }: { content: Projects }) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Image
        src={content.image}
        alt={content.name}
        fill
        className={cn("z-50 overflow-hidden rounded-md object-cover")}
      />
      <Image
        src={content.image}
        alt={content.name}
        fill
        className="object-cover opacity-35 blur-3xl"
        quality={1}
      />
    </div>
  );
}
