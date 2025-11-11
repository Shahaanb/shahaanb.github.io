import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Smartphone, Code, TrendingUp, Image } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useParallax } from "@/hooks/use-parallax";

const Competencies = () => {
  const competencies = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Designing, training, and evaluating ML models using Scikit-learn, TensorFlow, and Pandas.",
    },
    {
      icon: MessageSquare,
      title: "LLM & RAG Systems",
      description: "Building generative AI applications and chatbots using Python, Langchain, and Streamlit.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Creating Android applications using Java and Android Studio.",
    },
    {
      icon: Code,
      title: "Python Application Development",
      description: "Architecting robust command-line tools and full-stack applications.",
    },
    {
      icon: TrendingUp,
      title: "E-commerce & Digital Marketing",
      description: "Setting up Shopify stores and managing Google Ads campaigns.",
    },
    {
      icon: Image,
      title: "Data Processing & NLP",
      description: "Experience with data pipelines, image processing (OpenCV), and NLP tasks.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const parallaxOffset = useParallax(0.3);

  return (
    <section id="competencies" className="py-32 bg-navy-medium/30 relative overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
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
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              — Competencies
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What I Do,<br/>
              <span className="text-primary">Core Skills.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Expertise across AI, machine learning, app development, and digital solutions to solve real-world problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((competency, index) => {
              const Icon = competency.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                  transition={{ 
                    duration: 0.45, 
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group h-full">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {competency.title}
                    </h3>
                    <p className="text-muted-foreground">{competency.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
