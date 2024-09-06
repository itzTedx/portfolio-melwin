import { getPosts } from "@/actions/get-posts";
import TopGradient from "@/components/layout/top-gradient";
import { Metadata } from "next";
import PostsCard from "./_components/posts-card";
import { siteConfig } from "@/utils/siteConfig";

export const metadata: Metadata = {
  title: "Blogs - Melwin Af",
  description: "Explore my latest articles and insights on various topics.",
  openGraph: {
    type: "website",
    url: `/blogs`,
    title: "Blogs",
    images: siteConfig.ogImage,
    description: "Explore my latest articles and insights on various topics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs",
    description: "Explore my latest articles and insights on various topics.",
    images: siteConfig.ogImage,
    creator: "@itzTedx_",
  },
  alternates: { canonical: `/blogs` },
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className="bg-dot mx-auto min-h-screen max-w-3xl space-y-9 px-4 pb-12 transition-[max-width] duration-300 md:py-6 md:pb-24">
      <TopGradient />
      <header>
        <h1 className="font-bricolage text-3xl font-bold">Splash of colours</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Explore my latest articles and insights on various topics.
        </p>
      </header>
      {/* <PostsWithSearch posts={posts} /> */}
      {posts.map((post) => (
        <article key={post.slug}>
          <PostsCard post={post} />
        </article>
      ))}
    </main>
  );
}
