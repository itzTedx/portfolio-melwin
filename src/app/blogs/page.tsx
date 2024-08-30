import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function AboutPage() {
  const content = `
  # This is a markdown heading
  `;
  return (
    <div className="mx-auto min-h-screen max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8 lg:py-16 xl:max-w-6xl">
      Blog
      <MDXRemote source={content} />
    </div>
  );
}
