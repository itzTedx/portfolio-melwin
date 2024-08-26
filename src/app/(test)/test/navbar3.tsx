"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useRef, useState } from "react";

const tabs = ["Home", "Search", "About", "FAQ"];
import { links } from "@/utils/nav-links";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useHover } from "@/hooks/useHover";
import Link from "next/link";

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const isScrolled = useScroll(100, 0);

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  console.log("isHover", isHover);

  return (
    <nav
      className={cn(
        "fixed left-1/2 top-2 z-[999999] hidden -translate-x-1/2 rounded-full px-4 py-3 md:block lg:top-3",
        isScrolled
          ? "mt-0 border-b bg-background/50 backdrop-blur-md"
          : "mt-1 bg-transparent backdrop-blur-0",
      )}
      style={{
        transitionProperty: "background-color, backdrop-filter, margin-top",
      }}
    >
      <div
        className={cn(
          "duration- 500 -z-40 flex justify-center transition-opacity ease-in-out",
          isScrolled ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute bottom-0 h-px w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>
      <ul className="flex" ref={hoverRef}>
        {links.map((link) => (
          <Chip
            link={link}
            selected={selected === link.name}
            setSelected={setSelected}
            key={link.id}
            isHover={isHover}
          />
        ))}
      </ul>
    </nav>
  );
};

const Chip = ({
  link,
  selected,
  setSelected,
  isHover,
}: {
  link: {
    id: number;
    name: string;
    link: string;
  };
  isHover: boolean;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  const pathname = usePathname();
  const active = link.link === pathname;
  console.log(pathname);

  return (
    <li className="relative px-3">
      <Link
        href={link.link}
        onClick={() => setSelected(link.link)}
        onMouseEnter={() => setSelected(link.link)}
        className={`${
          selected ? "text-foreground" : "text-foreground/80"
        } rounded-md text-sm transition-colors`}
      >
        <span className="relative z-10">{link.name}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute -bottom-4 left-1/2 z-0 size-2 -translate-x-1/2 rounded-full bg-amber-400"
          />
        )}
      </Link>
    </li>
  );
};

export default ChipTabs;
