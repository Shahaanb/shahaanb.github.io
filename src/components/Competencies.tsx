import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Smartphone, Code, TrendingUp, Image } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Competencies = () => {
  const competencies = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Designing, training, and evaluating ML models using Scikit-learn, TensorFlow, and Pandas.",
      color: "#8B5CF6",
    },
    {
      icon: MessageSquare,
      title: "LLM & RAG Systems",
      description: "Building generative AI applications and chatbots using Python, Langchain, and Streamlit.",
      color: "#3B82F6",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Creating Android applications using Java and Android Studio.",
      color: "#10B981",
    },
    {
      icon: Code,
      title: "Python Application Development",
      description: "Architecting robust command-line tools and full-stack applications.",
      color: "#F59E0B",
    },
    {
      icon: TrendingUp,
      title: "E-commerce & Digital Marketing",
      description: "Setting up Shopify stores and managing Google Ads campaigns.",
      color: "#EF4444",
    },
    {
      icon: Image,
      title: "Data Processing & NLP",
      description: "Experience with data pipelines, image processing (OpenCV), and NLP tasks.",
      color: "#EC4899",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <section id="competencies" className="py-32 bg-navy-medium/30 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
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
              — Competencies
            </motion.p>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              What I Do,<br/>
              <span className="text-primary">Core Skills.</span>
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              Expertise across AI, machine learning, app development, and digital solutions to solve real-world problems.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {competencies.map((competency, index) => {
              const Icon = competency.icon;
              return (
                <CompetencyCard 
                  key={index}
                  competency={competency}
                  index={index}
                  Icon={Icon}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CompetencyCard = ({ competency, index, Icon }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group h-full relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{
            background: isHovered
              ? [
                  `radial-gradient(circle at 0% 0%, ${competency.color}15 0%, transparent 50%)`,
                  `radial-gradient(circle at 100% 100%, ${competency.color}15 0%, transparent 50%)`,
                  `radial-gradient(circle at 0% 100%, ${competency.color}15 0%, transparent 50%)`,
                  `radial-gradient(circle at 100% 0%, ${competency.color}15 0%, transparent 50%)`,
                ]
              : `radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%)`,
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative z-10">
          <motion.div 
            className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:bg-primary/20 transition-colors"
            animate={isHovered ? {
              scale: [1, 1.1, 1],
            } : {}}
            transition={{ duration: 0.5 }}
          >
            <Icon 
              className="h-8 w-8 text-primary" 
              style={{ filter: isHovered ? `drop-shadow(0 0 8px ${competency.color})` : 'none' }}
            />
          </motion.div>
          
          <motion.h3 
            className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
            animate={isHovered ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            {competency.title}
          </motion.h3>
          
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {competency.description}
          </motion.p>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at top right, ${competency.color}20 0%, transparent 70%)`,
          }}
          animate={isHovered ? {
            scale: [1, 1.5, 1],
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </Card>
    </motion.div>
  );
};

export default Competencies;
