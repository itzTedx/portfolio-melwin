"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Layers1({ className }: { className?: string }) {
  return (
    <Image
      src="/svg/layer1.svg"
      height={100}
      width={100}
      alt=""
      className={className}
    />
  );
}

function Layers2({ className }: { className?: string }) {
  return (
    <Image
      src="/svg/layer2.svg"
      height={100}
      width={100}
      alt=""
      className={className}
    />
  );
}
function Layers3({ className }: { className?: string }) {
  return (
    <Image
      src="/svg/layer3.svg"
      height={100}
      width={100}
      alt=""
      className={className}
    />
  );
}

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const ROTATION_RANGE = 12.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export const VisionOSIcon = () => {
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(useMotionValue(1), springValues);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const div = ref.current;
    const rect = div.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rotatationY = mouseX / width - HALF_ROTATION_RANGE;
    const rotationX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    rotateX.set(rotationX);
    rotateY.set(rotatationY);
  };

  const handleMouseLeave = () => {
    animate(rotateX, 0, {
      duration: 0.3,
    });
    animate(rotateY, 0, {
      duration: 0.3,
    });
  };

  const handleMouseEnter = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      className="group flex h-[300px] w-full items-center justify-center"
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative flex h-36 w-36 items-center justify-center rounded-lg bg-gradient-to-t from-foreground from-0% to-foreground to-100%"
        // tw issue with motion?
        onHoverStart={() => animate(scale, 1.1, { duration: 0.1 })}
        onHoverEnd={() => animate(scale, 1, { duration: 0.1 })}
        onClick={() => animate(scale, 1, { duration: 0.05 })}
        ref={ref}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          transformOrigin: "center",
        }}
      >
        <div
          className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 group-hover:[transform:translateZ(10px)]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Layers1 className="drop-shadow-[2px_0px_2px_rgba(0,0,0,0.4)] transition-[filter] duration-300 group-hover:drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
        </div>
        <div
          className="absolute inset-0 z-20 flex items-center justify-center transition-transform group-hover:[transform:translateZ(20px)]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Layers2 className="drop-shadow-[2px_0px_2px_rgba(0,0,0,0.4)] transition-[filter] duration-300 group-hover:drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
        </div>
        <div
          className="absolute inset-0 z-30 flex items-center justify-center transition-transform group-hover:[transform:translateZ(20px)]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Layers3 className="drop-shadow-[2px_0px_2px_rgba(0,0,0,0.4)] transition-[filter] duration-300 group-hover:drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
        </div>
      </motion.div>
    </div>
  );
};
