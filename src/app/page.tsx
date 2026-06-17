import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoleFit from "@/components/RoleFit";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import CVDownloads from "@/components/CVDownloads";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <RoleFit />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <CVDownloads />
      <Contact />
      <Footer />
    </main>
  );
}
