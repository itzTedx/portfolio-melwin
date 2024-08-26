"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { skillsImage } from "@/utils/skill-icons";

export const AnimatedTooltip = ({ tools }: { tools: string[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {tools.map((tool, idx) => (
        <div
          className="group relative -mr-4"
          key={tool}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -left-1/2 -top-10 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-white px-4 py-2 text-xs shadow-xl dark:bg-black"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[30%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-6 z-30 h-px w-[50%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

                <div className="text-xs text-foreground">{tool}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="relative ml-1 flex size-10 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-full border bg-primary-foreground/50 backdrop-blur-md transition-colors hover:bg-muted active:scale-[0.98]">
            <Image
              onMouseMove={handleMouseMove}
              height={40}
              width={40}
              src={skillsImage(tool)}
              alt={tool}
              className="size-6"
            />
          </div>
        </div>
      ))}
    </>
  );
};
