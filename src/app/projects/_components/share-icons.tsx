"use client";

import { Link2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { MdMail } from "react-icons/md";

export default function ShareIcons({ referer }: { referer: string }) {
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(referer);
      setShowCopiedPopup(true);
      setTimeout(() => {
        setShowCopiedPopup(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="mt-20 hidden flex-col gap-2 text-muted-foreground sm:flex">
      <Link
        href="/"
        className="group flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors duration-300 hover:border sm:h-12 sm:w-12"
      >
        <BsTwitterX className="size-[22px]" />
      </Link>
      <Link
        href="/"
        className="group flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors duration-300 hover:border sm:h-12 sm:w-12"
      >
        <BsLinkedin className="size-[22px]" />
      </Link>

      <Link
        href={referer as string}
        onClick={handleCopyClick}
        scroll={false}
        className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors duration-300 hover:border sm:h-12 sm:w-12"
      >
        <Link2 className="size-[22px]" />
        {showCopiedPopup && (
          <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 rounded-md bg-muted px-4 py-2 text-sm font-medium">
            Copied!
          </div>
        )}
      </Link>
      <Link
        href={`mailto:?body=Hey!%0A%0ACheck%20out%20this%20awesome%20project:%20${referer}`}
        className="group flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors duration-300 hover:border sm:h-12 sm:w-12"
      >
        <MdMail className="size-[22px]" />
      </Link>
    </div>
  );
}
