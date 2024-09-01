import { getPosts } from "@/actions/get-posts";
import PostsWithSearch from "./_components/posts-with-search";
import PostsCard from "./_components/posts-card";
import TopGradient from "@/components/layout/top-gradient";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <section className="bg-dot mx-auto max-w-3xl space-y-9 px-4 pb-12 transition-[max-width] duration-300 md:py-6">
      <TopGradient />
      <h1 className="font-bricolage text-3xl font-bold">Recent Blogs</h1>
      {/* <PostsWithSearch posts={posts} /> */}
      {posts.map((post) => (
        <PostsCard post={post} key={post.slug} />
      ))}
    </section>
  );
}
