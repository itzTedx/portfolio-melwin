import { getPostBySlug } from "@/actions/get-posts";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { calculateReadingTime, formatDate } from "@/lib/utils";
import { PostMetadata } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function PostsCard({ post }: { post: PostMetadata }) {
  const postContent = await getPostBySlug(post.slug);

  if (!postContent) return null;

  const readingTime = calculateReadingTime(postContent?.content);

  return (
    <Card className="group overflow-hidden">
      <Link href={`blogs/${post.slug}`} aria-label={`Read about ${post.title}`}>
        <CardContent>
          <figure className="relative aspect-[16/7]">
            <Image
              src={post.image!}
              fill
              alt={post.summary!}
              className="object-cover"
            />
            <figcaption className="sr-only" aria-hidden>
              {post.title}
            </figcaption>
          </figure>
          <header className="flex gap-4 p-4 transition-colors duration-300 group-hover:bg-muted/30 md:gap-8 md:p-8">
            {post.author && (
              <div className="relative mt-1 flex size-12 shrink-0 items-center justify-center rounded-md bg-muted p-2 transition-colors duration-300 group-hover:bg-transparent max-sm:hidden md:size-14">
                <Image
                  height={36}
                  width={36}
                  alt={"Melwin's avatar"}
                  src="/png/avatar.webp"
                  className="origin-bottom transition duration-500 ease-in-out hover:scale-105 group-hover:rotate-6"
                />
              </div>
            )}
            <div className="relative w-full space-y-2">
              <CardTitle>{post.title}</CardTitle>
              <div className="flex gap-4 max-sm:mt-3 sm:gap-1.5">
                {post.author && (
                  <div className="relative flex size-12 shrink-0 items-center justify-center rounded-md bg-muted p-1 transition-colors duration-300 group-hover:bg-transparent sm:hidden">
                    <Image
                      height={36}
                      width={36}
                      alt={"Melwin's avatar"}
                      src="/png/avatar.webp"
                    />
                  </div>
                )}
                <div className="flex max-sm:flex-col sm:gap-1.5">
                  <span className="text-primary"> {post.author} </span>
                  {post.publishedAt && post.author && (
                    <div className="max-sm:hidden">✦</div>
                  )}
                  {post.publishedAt && (
                    <time className="text-muted-foreground max-sm:text-xs">
                      {formatDate(post.publishedAt)}
                    </time>
                  )}
                </div>
              </div>
              <div className="absolute bottom-3 right-4 rounded-full border px-5 py-2 text-xs capitalize">
                {readingTime}
              </div>
            </div>
          </header>
        </CardContent>
      </Link>
    </Card>
  );
}
