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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Shahaan Bharucha
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
                B.Tech AI Student & Python Developer
              </h2>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm an AI student at MPSTME, passionate about building new technologies,
              training machine learning models, and developing mobile apps.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-accent hover:shadow-glow transition-all group"
                onClick={scrollToProjects}
              >
                <Eye className="mr-2 h-5 w-5" />
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-3xl opacity-20 animate-glow-pulse" />
              <img
                src={profilePicture}
                alt="Shahaan Bharucha"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover shadow-elevated border-2 border-primary/20"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
