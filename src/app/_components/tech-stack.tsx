"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TechStackProps {
  left: string[];
  right: string[];
}

interface SlideProps {
  items: string[];
  scrollDirection: "top" | "down";
  top: string;
  progress: MotionValue<number>;
}

interface PhraseProps {
  item: string[];
}

export default function TechStack({ left, right }: TechStackProps) {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <div
      className="absolute -right-3 flex w-fit gap-2 lg:-right-2 lg:gap-3"
      ref={container}
    >
      <div className="flex flex-row gap-2 lg:gap-3">
        <Slide
          items={left}
          scrollDirection={"top"}
          top={"-20%"}
          progress={scrollYProgress}
        />
        <Slide
          items={right}
          scrollDirection={"down"}
          top={"0"}
          progress={scrollYProgress}
        />
      </div>
    </div>
  );
}

const Slide = ({ items, scrollDirection, top, progress }: SlideProps) => {
  const direction = scrollDirection == "top" ? -1 : 1;
  const translateY = useTransform(
    progress,
    [0, 1],
    [150 * direction, -150 * direction],
  );
  return (
    <motion.div
      style={{ y: translateY, top: top }}
      className="relative flex flex-col gap-2 whitespace-nowrap"
    >
      <Phrase item={items} />
      <Phrase item={items} />
      <Phrase item={items} />
    </motion.div>
  );
};

const Phrase = ({ item }: PhraseProps) => {
  return item.map((item) => (
    <span
      className="rounded-lg bg-muted px-4 py-2 text-center text-xs opacity-50 lg:text-sm lg:opacity-100"
      key={item}
    >
      {item}
    </span>
  ));
};
