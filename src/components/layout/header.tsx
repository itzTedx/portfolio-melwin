import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import Logo from "./logo";
import { ModeToggle } from "@/components/layout/theme-toggle";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function Header() {
  const getStatusMessageAndColor = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();

    if (day === 0) {
      return { message: "Enjoying Leave", status: "leave" }; // Purple for Sunday
    } else if ((hour >= 9 && hour < 18) || (hour === 18 && minute === 0)) {
      return { message: "Currently in Office", status: "working" }; // Yellow for working
    } else {
      return { message: "Free Now", status: "chilling" }; // Green for chilling
    }
  };

  const { message, status } = getStatusMessageAndColor();

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
        <div className="flex flex-shrink-0 items-center justify-center gap-4">
          <Link
            title="Visit Homepage"
            aria-label="Visit Homepage"
            href="/"
            className="relative h-10 max-sm:size-12 sm:aspect-[16/5]"
          >
            <Logo variant="fullLogo" className="max-sm:hidden" />
            <Logo variant="icon" className="sm:hidden" />
          </Link>
          <HoverCard openDelay={100}>
            <HoverCardTrigger asChild>
              <span
                className={cn(
                  "relative size-2.5 rounded-full",
                  status === "leave" && "bg-purple-500",
                  status === "working" && "bg-yellow-500",
                  status === "chilling" && "bg-green-500",
                )}
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-inherit" />
              </span>
            </HoverCardTrigger>
            <HoverCardContent
              align="center"
              side="right"
              className={cn(
                "font-bricolage text-sm font-bold",
                status === "leave" &&
                  "border-purple-600 bg-purple-950/30 text-purple-100",
                status === "working" &&
                  "border-yellow-600 bg-yellow-950/30 text-yellow-100",
                status === "chilling" &&
                  "border-green-600 bg-green-950/30 text-green-100",
              )}
            >
              <span
                className={cn(
                  "inline-flex animate-text-gradient bg-gradient-to-r from-purple-200 via-purple-200 to-purple-50 bg-[200%_auto] bg-clip-text text-transparent",
                  status === "leave" &&
                    "from-purple-200 via-purple-200 to-purple-50",
                  status === "working" &&
                    "from-yellow-200 via-yellow-200 to-yellow-50",
                  status === "chilling" &&
                    "from-green-200 via-green-200 to-green-50",
                )}
              >
                {message}
              </span>
            </HoverCardContent>
          </HoverCard>
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
