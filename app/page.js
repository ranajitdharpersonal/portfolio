import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="px-6 md:px-20 py-10 space-y-20">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
