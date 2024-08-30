import Link from "next/link";
import {
  FaBehanceSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import { personalData } from "@/utils";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function Social({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-3 text-muted-foreground md:gap-4",
        className,
      )}
    >
      <Link
        href={personalData.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({
            variant: "outline",
            className:
              "flex size-10 items-center justify-center rounded-sm border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50 sm:h-12 sm:w-12",
          }),
        )}
      >
        <FaInstagramSquare className="size-6 rounded-md" />
      </Link>
      <Link
        href={personalData.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({
            variant: "outline",
            className:
              "flex size-10 items-center justify-center rounded-sm border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50 sm:h-12 sm:w-12",
          }),
        )}
      >
        <FaLinkedin className="size-6" />
      </Link>
      <Link
        href={personalData.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({
            variant: "outline",
            className:
              "flex size-10 items-center justify-center rounded-sm border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50 sm:h-12 sm:w-12",
          }),
        )}
      >
        <FaBehanceSquare className="size-6" />
      </Link>
      <Link
        href={personalData.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({
            variant: "outline",
            className:
              "flex size-10 items-center justify-center rounded-sm border-muted bg-muted p-0 transition-colors duration-300 hover:border-muted-foreground/50 sm:h-12 sm:w-12",
          }),
        )}
      >
        <FaYoutube className="size-6" />
      </Link>
    </div>
  );
}
