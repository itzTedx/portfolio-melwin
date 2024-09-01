"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PostMetadata } from "@/types";
import { X } from "lucide-react";
import PostsCard from "./posts-card";
import { useState } from "react";

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState("");
  const filtered = posts.filter((post) =>
    post.title?.toLowerCase().includes(query.toLowerCase()),
  );

  const isFiltered = query.length > 0;
  function resetFilter() {
    setQuery("");
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="mb-12">Posts</h1>
        <div className="mb-12 flex items-center gap-3">
          <Input
            type="text"
            placeholder="Search posts..."
            className=""
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isFiltered && (
            <Button
              size="sm"
              variant="secondary"
              onClick={resetFilter}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <X className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      {/* <PostsCard posts={filtered} /> */}
    </>
  );
}
