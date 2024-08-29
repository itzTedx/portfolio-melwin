"use client";

import Link from "next/link";
import { useState } from "react";

const PostPage = () => {
  return (
    <div>
      <Link href={`/projects/${"hello"}`}>Hello Test</Link>
    </div>
  );
};

export default PostPage;
