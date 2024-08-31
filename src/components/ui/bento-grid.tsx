"use client";

import { useEffect, useRef, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import MagicButton from "../magic-button";

import { cn } from "@/lib/utils";
import animationData from "@/data/confetti.json";
import Image from "next/image";
import Skills from "@/app/_components/skills";
import Hobbies from "@/app/_components/hobbies";
import TechStack from "@/app/_components/tech-stack";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Photoshop", "Illustrator", "Figma", "Indesign"];
  const rightLists = ["Premiere Pro", "After Effects", "Davinci", "NEXTjs"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "melwinafs@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl border bg-muted/30 shadow-input backdrop-blur-sm transition duration-200 hover:shadow-xl dark:shadow-none",
        className,
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} relative h-full`}>
        <div className="absolute h-full w-full">
          {img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                id === 5 && "transition-transform group-hover/bento:scale-150",
                "object-cover object-center duration-700 ease-out",
              )}
            />
          )}
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${id === 5 && "z-50 w-full opacity-30"} `}
        >
          {spareImg && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={spareImg}
              alt={spareImg}
              className={cn(
                "h-full w-full object-cover object-center",
                id === 5 && "transition-opacity group-hover/bento:opacity-0",
                "duration-500 ease-in-out",
              )}
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-300 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            (id === 5 || id === 1) && "min-h-64",
            (id === 2 || id === 6) && "group-hover/bento:translate-x-0",
          )}
        >
          <div
            className={`pointer-events-none z-20 max-w-96 font-bricolage text-lg font-bold lg:text-3xl`}
          >
            {id === 6 || id === 4 ? null : (
              <span className="text-amber-500">✦ </span>
            )}
            {title}
          </div>
          {description && (
            <div className="pointer-events-none z-20 mt-2 text-sm font-light text-muted-foreground lg:text-base">
              {description}
            </div>
          )}

          {/* Hobbies section */}
          {id === 2 && <Hobbies />}
          {id === 3 && (
            <div className="absolute left-0 z-10 h-full w-full bg-gradient-to-r from-muted/30 via-muted/0 to-transparent" />
          )}
          {/* Tech stack  */}
          {id === 3 && <TechStack left={leftLists} right={rightLists} />}
          {id === 6 && (
            <div className="relative mx-auto mt-5">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}

              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="text-md h-12 pt-1"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
