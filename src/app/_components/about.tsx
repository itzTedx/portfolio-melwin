import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/utils";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@/components/particles"));
const Lightbox = dynamic(() => import("@/components/lightbox"));

function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-8 pb-6 md:py-12 lg:px-0 lg:py-16"
    >
      <h5 className="mb-2 font-bricolage text-3xl font-bold text-accent">
        A Glimpse into my World
      </h5>
      <p className="mb-12 font-bricolage text-muted-foreground">
        More about who i am , what i do and what inspires me
      </p>
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
        <Particles className="pointer-events-none absolute inset-0 -z-10" />
      </BentoGrid>
    </section>
  );
}

export default AboutSection;
