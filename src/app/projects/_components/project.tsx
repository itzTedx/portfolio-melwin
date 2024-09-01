import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn, formatDate } from "@/lib/utils";
import { skillsImage } from "@/utils/skill-icons";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import ShareIcons from "./share-icons";
import type { Project } from "@/types";
import MDXContent from "@/components/mdx-content";

export default function Project({ project }: { project: Project }) {
  const { metadata, content } = project;
  const {
    title,
    image,
    company,
    publishedAt,
    summary,
    slug,
    companyLogo,
    externalLink,
    tag,
    tools,
  } = metadata;

  const pathname = `${process.env.BASE_URL}/projects/${slug}`;

  return (
    <Card className="group overflow-hidden">
      <CardContent>
        <div className="relative aspect-video">
          <Image src={image!} fill alt={summary!} className="object-cover" />
        </div>

        <div className="flex gap-4 p-4 md:gap-14 md:p-12">
          <aside className="max-sm:hidden">
            <div className="relative mt-1 flex size-10 items-center justify-center rounded-md bg-muted sm:size-12">
              <Image
                height={36}
                width={36}
                alt={company + "logo"}
                src={companyLogo!}
              />
            </div>
            <div className="hidden sm:flex">
              <ShareIcons pathname={pathname} />
            </div>
          </aside>
          <article className="">
            <h1 className="mb-4 font-bricolage text-3xl font-semibold leading-none tracking-tight md:text-4xl">
              {title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-muted p-1 sm:hidden">
                <Image
                  height={36}
                  width={36}
                  alt={company + "logo"}
                  src={companyLogo!}
                />
              </div>
              <div className="flex gap-1.5 max-sm:flex-col">
                <span className="text-primary"> {tag} </span>

                <div className="max-sm:hidden">✦</div>
                <span> {formatDate(publishedAt ?? "")}</span>
              </div>
            </div>
            <main className="prose mt-9 space-y-4 text-pretty font-bricolage text-foreground/80 dark:prose-invert sm:mt-12 md:text-xl md:leading-8">
              <MDXContent source={content} />
            </main>
            <div className="mt-9 space-y-4 text-pretty font-bricolage text-foreground/80 sm:mt-12 md:text-xl md:leading-8">
              <h5>Tools used:</h5>
              <ul className="flex flex-wrap gap-3">
                {tools?.map((tool, i) => (
                  <li key={i} className="flex gap-3 rounded-md border p-3 px-6">
                    <Image
                      height={40}
                      width={40}
                      src={skillsImage(tool)}
                      alt={tool}
                      className="size-6 sm:size-8"
                    />
                    {tool}
                  </li>
                ))}
              </ul>
              <div>
                <Link
                  href={externalLink!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "md:text-xl",
                  )}
                >
                  Live Preview{" "}
                  <ExternalLink className="ml-2 size-4 md:size-5" />
                </Link>
              </div>
            </div>

            <div className="sm:hidden">
              <ShareIcons pathname={pathname} />
            </div>
          </article>
        </div>
      </CardContent>
    </Card>
  );
}
