"use client";

import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";

const PostPage = () => {
  const href = "/projects/digitaldesk-web-ui";

  function handleClick() {
    redirect(href);
  }
  return (
    <div className="min-h-screen">
      <Link
        onClick={handleClick}
        href={href}
        className="m-9 bg-muted px-4 py-2"
      >
        Hello Test
      </Link>
    </div>
  );
};

export default PostPage;
