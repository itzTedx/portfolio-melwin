"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { skillsImage } from "@/utils/skill-icons";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ModalContent({ content }: { content: Project }) {
  const { metadata } = content;
  const router = useRouter();
  return (
    <div
      className="relative flex h-full flex-col justify-between border-l bg-background p-6 pt-9 lg:p-9"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute inset-x-1/2 top-0 flex w-3/4 -translate-x-1/2 -translate-y-[1px] justify-center lg:inset-x-auto lg:inset-y-1/2 lg:left-0 lg:h-1/2 lg:w-auto lg:-translate-x-[1px] lg:-translate-y-1/2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent lg:h-full lg:w-[1px] lg:bg-gradient-to-b" />
      </div>
      <div>
        <DialogTitle className="font-bricolage text-xl font-bold text-amber-500 dark:text-amber-400 md:text-2xl lg:text-3xl">
          {metadata.title}
        </DialogTitle>
        <p className="mt-2 text-muted-foreground/80">{metadata.tag}</p>
        <DialogDescription className="mt-3 text-balance text-base leading-relaxed text-muted-foreground lg:text-lg">
          {metadata.summary}
        </DialogDescription>

        <h6 className="my-3">Tools Used:</h6>
        {/* Illustrator Color: bg-[#380001] */}
        <ul className="flex flex-wrap gap-2">
          {metadata.tools?.map((tool, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-md border bg-muted/0 p-3 hover:bg-muted/30"
            >
              <Image
                height={40}
                width={40}
                src={skillsImage(tool)}
                alt={tool}
                title={tool}
                className="size-6"
              />
              <span className="max-sm:hidden">{tool}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant="outline"
        onClick={() => router.push(`/projects/${metadata.slug}`)}
      >
        Read More
      </Button>

      {metadata.externalLink && (
        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "group relative flex flex-col items-start rounded-full border-0 px-6 py-4 outline outline-input hover:bg-muted/20 hover:outline-4",
          )}
          href={metadata.externalLink}
          aria-label={"More about this project"}
          target="_blank"
          rel="noopener noreferrer"
        >
          More about this project
          <ExternalLink className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted transition-colors group-hover:text-muted-foreground" />
        </Link>
      )}
    </div>
  );
}
