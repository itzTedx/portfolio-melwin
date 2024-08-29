import React from "react";
import SwipeableStackCards from "./swipeable-stack-card";
import TextRevealByWord from "@/components/text-reveal";

export default function AboutMe() {
  return (
    <section className="relative z-10 flex min-h-[10rem] flex-col items-end justify-center font-bricolage">
      <TextRevealByWord
        text={`I'm Melwin, a Graphic Designer with a passion for creativity, crafting visuals that connect, inspire, and tell stories.`}
        description="I began my career as a freelancer, focusing on Graphic Design, Video Editing, and Illustration. This journey allowed me to explore diverse projects, sharpen my skills, and adapt to different creative challenges. These experiences have made me a more versatile designer, enhancing my ability to bring fresh and unique ideas to every project."
      />

      <div className="-mt-48">
        <SwipeableStackCards />
      </div>
    </section>
  );
}
