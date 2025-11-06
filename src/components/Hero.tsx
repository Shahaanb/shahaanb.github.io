import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Eye } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          {/* Content - Left Side */}
          <div className="space-y-8 animate-slide-up order-2 lg:order-1">
            {/* Logo/Initials */}
            <div className="inline-block">
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow">
                <span className="text-3xl font-bold text-navy-dark">S</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                — Introduction
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none">
                Shahaan<br/>Bharucha<span className="text-primary">.</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-accent" />
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

            <div className="flex flex-wrap gap-4 pt-4">
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
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Shahaanb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                aria-label="GitHub"
              >
                <span className="text-sm">G</span>
              </a>
              <a
                href="https://linkedin.com/in/shahaan-bharucha-2330762b4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <span className="text-sm">in</span>
              </a>
              <a
                href="mailto:shahaanhb@gmail.com"
                className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                aria-label="Email"
              >
                <span className="text-sm">@</span>
              </a>
            </div>
          </div>

          {/* Profile Picture - Right Side */}
          <div className="flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-primary blur-3xl opacity-20 animate-glow-pulse" />
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elevated border-2 border-primary/20 bg-gradient-to-br from-navy-medium to-navy-dark">
                <img
                  src={profilePicture}
                  alt="Shahaan Bharucha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
