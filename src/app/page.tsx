import AboutSection from './_components/about'
import ContactSection from './_components/contact'
import Education from './_components/education'
import Experience from './_components/experience'
import HeroSection from './_components/hero-section'
import Projects from './_components/projects'
import Skills from './_components/skills'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  )
}
