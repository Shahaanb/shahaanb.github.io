import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background gradient with particles */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-glow" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="flex items-center justify-center min-h-screen py-20">
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
              
              {/* Name with letter-by-letter animation */}
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none"
                >
                  {"Shahaan".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <br/>
                  {"Bharucha".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.85 + index * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="text-primary inline-block"
                  >
                    .
                  </motion.span>
                </motion.h1>
              </div>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="w-20 h-1 bg-gradient-accent mx-auto origin-left"
              />
            </div>

            {/* Subtitle with staggered entrance */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                B.Tech AI Student & Python Developer
              </h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                I'm an AI student at MPSTME, passionate about building new technologies,
                training machine learning models, and developing mobile apps.
              </motion.p>
            </motion.div>

            {/* Social Links with enhanced hover effects */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="flex gap-4 pt-4 justify-center"
            >
              {[
                { href: "https://github.com/Shahaanb", icon: Github, label: "GitHub", color: "#333" },
                { href: "https://linkedin.com/in/shahaan-bharucha-2330762b4", icon: Linkedin, label: "LinkedIn", color: "#0077b5" },
                { href: "mailto:shahaanhb@gmail.com", icon: Mail, label: "Email", color: "#ea4335" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 2.1 + index * 0.1,
                      type: "spring",
                      stiffness: 200 
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: `0 0 20px ${social.color}40`
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-lg border border-border hover:border-primary hover:text-primary transition-all flex items-center justify-center group relative"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Scroll indicator */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 2.5 },
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }
              }}
              onClick={scrollToNext}
              className="mt-16 mx-auto flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              aria-label="Scroll to next section"
            >
              <span className="text-sm">Scroll Down</span>
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
