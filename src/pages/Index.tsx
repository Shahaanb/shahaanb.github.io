import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CallToAction from "@/components/CallToAction";
import Competencies from "@/components/Competencies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <CallToAction />
        <Competencies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
