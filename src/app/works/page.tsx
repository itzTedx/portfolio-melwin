import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div className="grid min-h-[98dvh] place-content-center gap-y-6 px-6">
      <h1 className="font-bricolage text-7xl font-bold">Under Development</h1>
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "shimmer",
          }),
          "mx-auto w-fit bg-primary px-9 py-4",
        )}
      >
        Back to home
      </Link>
    </div>
  );
}
