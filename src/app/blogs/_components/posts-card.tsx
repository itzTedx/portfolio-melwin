import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { PostMetadata } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function PostsCard({ post }: { post: PostMetadata }) {
  return (
    <Card className="group overflow-hidden">
      <Link href={`blogs/${post.slug}`}>
        <CardContent>
          <div className="relative aspect-[16/7]">
            <Image
              src={post.image!}
              fill
              alt={post.summary!}
              className="object-cover"
            />
          </div>
          <div className="flex gap-4 p-4 transition-colors duration-300 group-hover:bg-muted/30 md:gap-8 md:p-8">
            {post.author && (
              <div className="relative flex size-12 shrink-0 items-center justify-center rounded-md bg-muted p-1 transition-colors duration-300 group-hover:bg-transparent max-sm:hidden md:size-14">
                <Image
                  height={36}
                  width={36}
                  alt={"Melwin's avatar"}
                  src="/png/avatar.webp"
                />
              </div>
            )}
            <div className="">
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
                    <span className="max-sm:text-xs">
                      {formatDate(post.publishedAt)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
