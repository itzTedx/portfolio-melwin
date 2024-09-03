import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { ModeToggle } from "@/components/layout/theme-toggle";
import Logo from "./logo";

function Header() {
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
      <div className={cn("-z-40 flex justify-center md:hidden")}>
        <div className="absolute bottom-0 h-px w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent md:h-0" />
      </div>

      <div className="container flex w-full items-center justify-between">
        <div className="flex flex-shrink-0 items-center gap-4">
          <Link
            title="Visit Homepage"
            aria-label="Visit Homepage"
            href="/"
            className="relative h-10 max-sm:size-12 sm:aspect-[16/5]"
          >
            <Logo variant="fullLogo" className="max-sm:hidden" />
            <Logo variant="icon" className="sm:hidden" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden lg:block">
            <Link
              href="tel:+971588102324"
              aria-label="Call me now. Click to open Phone App"
              className="hover:bg-foreground-50 flex shrink-0 scale-100 gap-2 rounded-lg px-2 py-2 transition active:scale-95"
            >
              <div className="relative h-9 w-9">
                <Image fill src="/phone.svg" alt="Call me" title="Call me" />
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
