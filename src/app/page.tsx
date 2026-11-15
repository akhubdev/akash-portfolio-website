
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import AkashAIChat from "../components/ai/AkashAIChat";
export default function Home() {
  return (
    <main id="home" className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <AkashAIChat />
    </main>
  );
}
