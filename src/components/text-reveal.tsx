"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  description: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  description,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative z-0 h-[150vh] pt-9", className)}
    >
      <div
        className={
          "sticky top-0 mx-auto flex h-[35%] max-w-5xl flex-col px-[1rem] pt-36"
        }
      >
        <span className="mx-1 bg-background px-6 pb-3 text-lg font-light text-muted lg:mx-2.5">
          hello there!
        </span>
        <p
          ref={targetRef}
          className={
            "flex flex-wrap bg-background px-6 text-2xl font-bold text-foreground/20 md:text-3xl lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
        <p
          className={
            "flex flex-wrap bg-background px-6 pt-8 text-xl font-normal text-muted lg:mx-2.5"
          }
        >
          {description}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-foreground"}>
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
