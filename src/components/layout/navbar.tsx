"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { links } from "@/utils/nav-links";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FloatingNav } from "./floating-navbar";
import { useIsMounted } from "@/hooks/useIsMounted";

const Navbar = () => {
  const pathname = usePathname();
  const isScrolled = useScroll(100, 0);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isMounted = useIsMounted();

  if (!isMounted) return <DesktopNavbar />;

  if (isDesktop)
    return (
      <nav
        className={cn(
          "fixed left-1/2 top-3 z-[999999] hidden -translate-x-1/2 rounded-full px-5 py-3 transition-all duration-500 ease-in-out md:block",
          isScrolled
            ? "border-b bg-background/50 backdrop-blur-md"
            : "bg-transparent backdrop-blur-0",
        )}
        style={{
          transitionProperty: "background-color, backdrop-filter, margin-top",
        }}
      >
        <div
          className={cn(
            "-z-40 flex justify-center transition-opacity duration-500 ease-in-out",
            isScrolled ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="absolute bottom-0 h-px w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
        <ul className="flex w-full flex-row items-center bg-transparent">
          {links.map((link, index) => {
            const isActive = pathname.startsWith(link.link);

            return (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className={"relative flex items-center gap-1.5 px-4"}
                  aria-label={`Visit ${link.name} page`}
                >
                  <span
                    className={cn(
                      isActive && "z-10 text-muted-foreground",
                      "hidden md:block",
                    )}
                  >
                    {link.icon}
                  </span>
                  <span
                    className={cn(
                      isActive && "z-10 text-foreground",
                      "hidden md:block",
                    )}
                  >
                    {link.name}
                  </span>
                  {isActive ? <Span /> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );

  return <FloatingNav navItems={links} />;
};

export default Navbar;

const Span = () => {
  return (
    <motion.span
      layoutId="pill-tab"
      transition={{ type: "spring", duration: 0.5 }}
      className={cn(
        "absolute -bottom-4 left-1/2 z-0 -ml-[2px] size-2 -translate-x-1/2 rounded-full bg-amber-400 bg-gradient-to-br",
      )}
    />
  );
};

const DesktopNavbar = () => {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "fixed left-1/2 top-3 z-[999999] hidden -translate-x-1/2 rounded-full px-5 py-3 transition-all duration-500 ease-in-out md:block",
        "bg-transparent backdrop-blur-0",
      )}
      style={{
        transitionProperty: "background-color, backdrop-filter, margin-top",
      }}
    >
      <div
        className={cn(
          "-z-40 flex justify-center transition-opacity duration-500 ease-in-out",
          "opacity-0",
        )}
      >
        <div className="absolute bottom-0 h-px w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>
      <ul className="flex w-full flex-row items-center bg-transparent">
        {links.map((link, index) => {
          const isActive = pathname.startsWith(link.link);

          return (
            <li key={link.id}>
              <Link
                href={link.link}
                className={"relative flex items-center gap-1.5 px-4"}
              >
                <span
                  className={cn(
                    isActive && "z-10 text-foreground",
                    "hidden sm:block",
                  )}
                >
                  {link.name}
                </span>
                {isActive ? <Span /> : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
