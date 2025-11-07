import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center min-h-screen py-20">
          {/* Content - Center */}
          <div className="space-y-8 animate-slide-up max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                — Introduction
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none">
                Shahaan<br/>Bharucha<span className="text-primary">.</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-accent mx-auto" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                B.Tech AI Student & Python Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                I'm an AI student at MPSTME, passionate about building new technologies,
                training machine learning models, and developing mobile apps.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-accent hover:shadow-glow transition-all group text-base font-semibold"
                onClick={scrollToProjects}
              >
                My story
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 justify-center">
              <a
                href="https://github.com/Shahaanb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/shahaan-bharucha-2330762b4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:shahaanhb@gmail.com"
                className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
