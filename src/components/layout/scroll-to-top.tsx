"use client";

import { motion, useScroll as scrollProgress } from "framer-motion";
import useScroll from "@/hooks/use-scroll";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const onClickBtn = () => window.scroll({ top: 0, behavior: "smooth" });
  const isScrolled = useScroll(150, 0);

  const { scrollYProgress } = scrollProgress();

  return (
    <button
      className={cn(
        "fixed bottom-2 z-[9999999] hidden transition-all duration-500 ease-in-out sm:bottom-4 sm:block",
        isScrolled ? "right-2 sm:right-4" : "-right-24",
      )}
      style={{
        transitionProperty: "right",
      }}
      onClick={onClickBtn}
    >
      <ArrowUp className="absolute left-1/2 top-1/2 -z-10 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 p-3 text-muted-foreground backdrop-blur-md" />

      <svg id="progress" width="100" height="100" className="-rotate-90">
        <circle
          cx="50"
          cy="50"
          r="25"
          pathLength="1"
          className="fill-none stroke-foreground/30 stroke-[4]"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="25"
          pathLength="1"
          strokeLinecap="round"
          className="fill-none stroke-foreground stroke-[3]"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
