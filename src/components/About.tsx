import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const education = [
    {
      school: "SVKM's NMIMS MPSTME",
      degree: "Bachelor of Technology (B.Tech), Artificial Intelligence",
      year: "Expected 2027",
    },
    {
      school: "Podar International School",
      degree: "Cambridge A-Levels & IGCSE",
      year: "2020-2022",
    },
  ];

  const experience = [
    {
      title: "Community Service Volunteer",
      company: "Little Angel School",
      period: "Jun-Jul 2024",
    },
    {
      title: "E-Commerce",
      company: "Crystal By Gaia",
      period: "Ongoing",
      description: "Managed Shopify store setup",
    },
    {
      title: "Digital Marketing",
      company: "Horseland Hotel",
      period: "Ongoing",
      description: "Managing Google Ads campaigns",
    },
  ];

  const certifications = [
    {
      name: "Introduction to Programming using Java - GeeksforGeeks (2025)",
      link: "https://media.geeksforgeeks.org/courses/certificates/e2614eff4f5fbae6e0e568e00fe7bea4.pdf"
    },
    {
      name: "CS50P (CS50 for Python) - Harvard University (2022)",
      link: "https://cs50.harvard.edu/certificates/86dba8ef-e13a-4d85-92ba-5a4776df1691"
    },
    {
      name: "Programming for Everybody (Python) - University of Michigan (2021)",
      link: "https://www.coursera.org/account/accomplishments/verify/XB6YQX94DCH3"
    },
    {
      name: "Introduction to Machine Learning - University of London (2021)",
      link: "https://coursera.org/verify/SYXSBLMWS72U"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-navy-dark/50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(92, 225, 230, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(92, 225, 230, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          backgroundPosition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <motion.p 
              className="text-primary text-sm font-semibold tracking-wider uppercase mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            >
              — About
            </motion.p>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              Building Intelligence,<br/>
              <span className="text-primary">One Solution at a Time.</span>
            </motion.h2>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-accent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ originX: 0 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                "I am currently a student at MPSTME, Mumbai and I am studying AI. I am constantly chasing new solutions to whatever problems I see in day to day life and I am a big fan of learning about new and upcoming technologies.",
                "I am proficient in multiple coding languages and have extensive experience training ML and DL models. I'm also proficient in Java for Android Studios and building apps, with knowledge in image processing such as OpenCV."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12"
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <GraduationCap className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold">Education</h3>
            </motion.div>
            
            <motion.div className="grid gap-4" variants={containerVariants}>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all relative overflow-hidden group">
                    {/* Hover gradient effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(92, 225, 230, 0.05), transparent)",
                      }}
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    <div className="relative z-10">
                      <h4 className="text-xl font-semibold text-primary mb-2">{edu.school}</h4>
                      <p className="text-foreground font-medium">{edu.degree}</p>
                      <p className="text-muted-foreground">{edu.year}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12"
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Briefcase className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold">Practical Experience</h3>
            </motion.div>
            
            <motion.div className="grid gap-4" variants={containerVariants}>
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(92, 225, 230, 0.05), transparent)",
                      }}
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    <div className="relative z-10">
                      <h4 className="text-xl font-semibold text-primary mb-2">{exp.title}</h4>
                      <p className="text-foreground font-medium mb-1">{exp.company}</p>
                      <p className="text-muted-foreground mb-2">{exp.period}</p>
                      {exp.description && (
                        <p className="text-muted-foreground">{exp.description}</p>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Award className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold">Certifications</h3>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="h-full block">
                      <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all cursor-pointer h-full relative overflow-hidden group">
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1.5, opacity: 0.1 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            background: "radial-gradient(circle, rgba(92, 225, 230, 0.5) 0%, transparent 70%)",
                          }}
                        />
                        <p className="text-muted-foreground relative z-10">{cert.name}</p>
                      </Card>
                    </a>
                  ) : (
                    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all h-full relative overflow-hidden group">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          background: "radial-gradient(circle, rgba(92, 225, 230, 0.5) 0%, transparent 70%)",
                        }}
                      />
                      <p className="text-muted-foreground relative z-10">{cert.name}</p>
                    </Card>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
