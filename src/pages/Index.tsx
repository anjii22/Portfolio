import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ui/ScrollSection";
//import SplineBackground from "@/components/ui/SplineBackground";
import VideoBackground from "@/components/ui/VideoBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* <SplineBackground /> */}
      <VideoBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <section id="hero-section">
            <ScrollSection>
              <Hero />
            </ScrollSection>
          </section>

          <section id="blurred-section">
            <ScrollSection delay={0.1}>
              <About />
            </ScrollSection>

            <ScrollSection delay={0.15}>
              <Skills />
            </ScrollSection>

            <ScrollSection delay={0.2}>
              <Projects />
            </ScrollSection>

            <ScrollSection delay={0.25}>
              <Contact />
            </ScrollSection>
          </section>
        </main>
        <Footer />
      </div>

      <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px] -z-0" />
    </div>
  );
};

export default Index;
