"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { ModeToggle } from "@/components/layout/theme-toggle";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <header
      className={cn(
        "w-full py-3 transition-all duration-700 ease-in-out",
        "relative border-b bg-background/50 backdrop-blur-md md:border-none md:bg-transparent",
      )}
      style={{
        transitionProperty:
          "background-color, backdrop-filter, padding-top, padding-bottom, top",
      }}
    >
      {isMobile && (
        <div
          className={cn(
            "-z-40 flex justify-center transition-opacity duration-500 ease-in-out",
          )}
        >
          <div className="absolute bottom-0 h-px w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      )}

      <div className="container flex w-full items-center justify-between">
        <div className="flex flex-shrink-0 items-center gap-4">
          <Link
            href="/"
            className="-mx-4 px-4 py-2 font-bricolage text-3xl font-extrabold text-foreground"
          >
            Melwin af
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden lg:block">
            <Link
              href="tel:+971588102324"
              className="hover:bg-foreground-50 flex shrink-0 scale-100 gap-2 rounded-lg px-2 py-2 transition active:scale-95"
            >
              <div className="relative h-9 w-9">
                <Image fill src="/phone.svg" alt="" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] lg:text-[10px]">Call me now</span>
                <span className="text-primary-800 text-sm font-bold lg:text-base">
                  058 810 2324
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
