import { TracingBeam } from "@/components/ui/tracing-beam";
import { graph } from "@/data/graph-schema";
import AboutSection from "./_components/about";
import Experience from "./_components/experience";
import HeroSection from "./_components/hero-section";
import Projects from "./_components/projects";
import Skills from "./_components/skills";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <TracingBeam className="md:px-4">
        <HeroSection />
        <AboutSection />
        <Projects />
        <Experience />
        <Skills />
        {/* <ContactSection /> */}
      </TracingBeam>
    </>
  );
}
