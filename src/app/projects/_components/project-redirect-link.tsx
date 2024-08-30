"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function RedirectLink({
  children,
  slug,
}: {
  children: React.ReactNode;
  slug: string;
}) {
  const router = useRouter();

  function handleClick() {
    router.push(`projects/${slug}`);
  }
  return (
    <Link href={`projects/${slug}`} onClick={handleClick}>
      {children}
    </Link>
  );
}
