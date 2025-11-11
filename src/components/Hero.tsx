import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background gradient that follows mouse */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15) 0%, transparent 50%)`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center min-h-screen py-20">
          {/* Content - Center */}
          <div className="space-y-8 max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-primary text-sm font-semibold tracking-wider uppercase"
              >
                — Introduction
              </motion.p>
              
              {/* Name appears first with bold entrance */}
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none"
              >
                Shahaan<br/>Bharucha<span className="text-primary">.</span>
              </motion.h1>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-20 h-1 bg-gradient-accent mx-auto"
              />
            </div>

            {/* Rest appears after name with staggered entrance */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                B.Tech AI Student & Python Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto">
                I'm an AI student at MPSTME, passionate about building new technologies,
                training machine learning models, and developing mobile apps.
              </p>
            </motion.div>

            {/* Social Links with staggered reveal */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex gap-4 pt-4 justify-center"
            >
              {[
                { href: "https://github.com/Shahaanb", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/shahaan-bharucha-2330762b4", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:shahaanhb@gmail.com", icon: Mail, label: "Email" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.2 + index * 0.15,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:text-primary hover:scale-110 transition-all flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
