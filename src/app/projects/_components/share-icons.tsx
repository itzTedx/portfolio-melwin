"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { MdMail } from "react-icons/md";

export default function ShareIcons({ pathname }: { pathname: string }) {
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(pathname);
      setShowCopiedPopup(true);
      setTimeout(() => {
        setShowCopiedPopup(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="mt-9 flex gap-2 text-muted-foreground sm:mt-20 sm:flex-col">
      <Link
        href={`https://twitter.com/intent/tweet?url=${pathname}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share it on twitter"
        className={cn(
          buttonVariants({
            variant: "outline",
            className:
              "flex h-10 w-10 items-center justify-center rounded-lg border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50 sm:h-12 sm:w-12",
          }),
        )}
      >
        <BsTwitterX className="size-[22px]" />
      </Link>
      <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${pathname}`}
        target="_blank"
        aria-label="Share this project on Linkedin"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({
            variant: "outline",
            className:
              "flex h-10 w-10 items-center justify-center rounded-lg border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50 sm:h-12 sm:w-12",
          }),
        )}
      >
        <BsLinkedin className="size-5" />
      </Link>

      <Link
        href={pathname}
        onClick={handleCopyClick}
        aria-label="Copy link"
        scroll={false}
        className={cn(
          buttonVariants({
            variant: "outline",
            className:
              "flex h-10 w-10 items-center justify-center rounded-lg border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50 sm:h-12 sm:w-12",
          }),
        )}
      >
        <Link2 className="size-[22px]" />
        {showCopiedPopup && (
          <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 rounded-md bg-muted px-4 py-2 text-sm font-medium">
            Copied!
          </div>
        )}
      </Link>
      <Link
        aria-label="Send this project to your friends"
        href={`mailto:?body=Hey!%0A%0ACheck%20out%20this%20awesome%20project:%20${pathname}`}
        className={cn(
          buttonVariants({
            variant: "outline",
            className:
              "flex h-10 w-10 items-center justify-center rounded-lg border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50 sm:h-12 sm:w-12",
          }),
        )}
      >
        <MdMail className="size-[22px]" />
      </Link>
    </div>
  );
}
