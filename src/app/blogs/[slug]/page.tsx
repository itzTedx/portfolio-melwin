import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPostBySlug, getPosts } from "@/actions/get-posts";
import MDXContent from "@/components/mdx-content";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import TopGradient from "@/components/layout/top-gradient";
import { Card, CardContent } from "@/components/ui/card";
import ShareIcons from "@/app/projects/_components/share-icons";

export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));

  return slugs;
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const { metadata, content } = post;
  const { title, image, author, publishedAt, summary } = metadata;

  const pathname = `${process.env.BASE_URL}/blogs/${slug}`;

  return (
    <section className="py-12 md:py-6">
      <TopGradient />
      <div className="container max-w-screen-lg">
        <Button
          asChild
          variant="outline"
          className="mb-8 rounded-full font-bricolage font-medium tracking-tight text-muted-foreground"
        >
          <Link href="/blogs">
            <ArrowLeft className="mr-2 size-4" /> Back to Blogs
          </Link>
        </Button>
        <Card className="group overflow-hidden">
          <CardContent>
            {image && (
              <div className="relative aspect-video">
                <Image src={image} fill alt={title!} className="object-cover" />
              </div>
            )}

            <div className="flex gap-4 p-4 md:gap-14 md:p-12">
              <aside className="max-sm:hidden">
                {author && (
                  <div className="relative mt-1 flex size-10 items-center justify-center rounded-md bg-muted sm:size-12">
                    <Image
                      height={36}
                      width={36}
                      alt={"Melwin's avatar"}
                      src="/png/avatar.webp"
                    />
                  </div>
                )}
                <div className="hidden sm:flex">
                  <ShareIcons pathname={pathname} />
                </div>
              </aside>
              <article>
                <header>
                  <h1 className="mb-4 font-bricolage text-3xl font-semibold leading-none tracking-tight md:text-4xl">
                    {title}
                  </h1>
                  <div className="flex items-center gap-4">
                    {author && (
                      <div className="relative flex size-12 shrink-0 items-center justify-center rounded-md bg-muted p-1 transition-colors duration-300 group-hover:bg-transparent sm:hidden">
                        <Image
                          height={36}
                          width={36}
                          alt={"Melwin's avatar"}
                          src="/png/avatar.webp"
                        />
                      </div>
                    )}
                    <div className="flex gap-1.5 max-sm:flex-col">
                      <span className="text-primary"> {author} </span>

                      <div className="max-sm:hidden">✦</div>
                      <span> {formatDate(publishedAt ?? "")}</span>
                    </div>
                  </div>
                </header>

                <main className="prose mt-9 space-y-4 text-pretty font-bricolage text-foreground/80 dark:prose-invert sm:mt-12 md:text-xl md:leading-8">
                  <MDXContent source={content} />
                </main>

                <div className="sm:hidden">
                  <ShareIcons pathname={pathname} />
                </div>
              </article>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
