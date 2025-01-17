"use client";

import React, { MutableRefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn, getRandomPercentage, getRandomRotation } from "@/lib/utils";
import { Gravity, MatterBody } from "@/components/ui/gravity";

const hobbies = [
  { title: "Drawing", emoji: "✏️", left: "", top: "" },
  { title: "Photography", emoji: "📷", left: "60%", top: "50%" },
  { title: "Gaming", emoji: "🎮", left: "", top: "" },
  { title: "Music", emoji: "🎵", left: "", top: "" },
  { title: "Travel", emoji: "🏕️", left: "", top: "" },
  { title: "Fitness", emoji: "🏋️", left: "", top: "" },
  { title: "Technologies", emoji: "📱", left: "", top: "" },
];

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  title: string;
  emoji: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

export default function Hobbies() {
  const containerRef = useRef(null);
  return (
    <div className="absolute inset-0 -z-10" ref={containerRef}>
      <Gravity gravity={{ x: 0, y: 1 }} className="h-full w-full">
        {hobbies.map((hobby) => (
          <MatterBody
            key={hobby.title}
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x={`${Math.floor(Math.random() * 10) * 10}%`}
            y={`${Math.floor(Math.random() * 10) * 10}%`}
          >
            <div className="cursor-move rounded-md bg-muted/90 px-6 py-2 font-bricolage font-medium text-foreground">
              <span className="">{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </div>
          </MatterBody>
        ))}
      </Gravity>

      {/* {hobbies.map((hobby) => (
        <Card
          key={hobby.title}
          containerRef={containerRef}
          title={hobby.title}
          emoji={hobby.emoji}
          rotate={getRandomRotation()}
          top={getRandomPercentage()}
          left={getRandomPercentage()}
          className="cursor-move rounded-md bg-muted/90 px-6 py-2 font-bricolage font-medium text-foreground"
        />
      ))} */}
    </div>
  );
}

const Card = ({
  containerRef,
  title,
  emoji,
  top,
  left,
  rotate,
  className,
}: Props) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index"),
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={cn(
        "drag-elements absolute inline-flex items-center gap-1.5",
        className,
      )}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    >
      <span className="">{title}</span>
      <span>{emoji}</span>
    </motion.div>
  );
};
