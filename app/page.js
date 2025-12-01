import Navbar from "@/components/Navbar";
import AnimatedHero from "@/components/AnimatedHero";
import ProjectCarousel from "@/components/ProjectCarousel";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <>
      <Navbar />
      <main>
        <AnimatedHero />
        <ProjectCarousel />
        <Timeline />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
