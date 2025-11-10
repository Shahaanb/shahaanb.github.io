import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
      link: null
    },
    {
      name: "CS50P (CS50 for Python) - Harvard University (2022)",
      link: null
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

  return (
    <section ref={ref} id="about" className="py-32 bg-navy-dark/50 relative overflow-hidden">
      {/* Subtle parallax background */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 0.03, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 pointer-events-none"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              — About
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Building Intelligence,<br/>
              <span className="text-primary">One Solution at a Time.</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am currently a student at MPSTME, Mumbai and I am studying AI. I am constantly
                chasing new solutions to whatever problems I see in day to day life and I am a big
                fan of learning about new and upcoming technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am proficient in multiple coding languages and have extensive experience training
                ML and DL models. I'm also proficient in Java for Android Studios and building apps,
                with knowledge in image processing such as OpenCV.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="grid gap-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105">
                    <h4 className="text-xl font-semibold text-primary mb-2">{edu.school}</h4>
                    <p className="text-foreground font-medium">{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.year}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Practical Experience</h3>
            </div>
            <div className="grid gap-4">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105">
                    <h4 className="text-xl font-semibold text-primary mb-2">{exp.title}</h4>
                    <p className="text-foreground font-medium mb-1">{exp.company}</p>
                    <p className="text-muted-foreground mb-2">{exp.period}</p>
                    {exp.description && (
                      <p className="text-muted-foreground">{exp.description}</p>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.07 }}
                  className="h-full"
                >
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="h-full block">
                      <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all cursor-pointer hover:scale-105 transition-transform h-full">
                        <p className="text-muted-foreground">{cert.name}</p>
                      </Card>
                    </a>
                  ) : (
                    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 transition-transform h-full">
                      <p className="text-muted-foreground">{cert.name}</p>
                    </Card>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
