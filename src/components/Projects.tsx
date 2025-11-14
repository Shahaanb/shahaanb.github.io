import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  problem: string;
  solution: string;
  role: string;
  github?: string;
  demo?: string;
}

const ProjectCard = ({ project, index, onLearnMore }: { project: Project; index: number; onLearnMore: (project: Project) => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow relative overflow-hidden group h-full">
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(92, 225, 230, 0.1) 0%, transparent 50%)",
          }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          animate={{
            x: isHovered ? ["-100%", "100%"] : "-100%",
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(92, 225, 230, 0.2), transparent)",
          }}
        />

        <div className="relative z-10">
          <motion.h3 
            className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
            style={{ transform: "translateZ(20px)" }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-muted-foreground mb-4 line-clamp-2"
            style={{ transform: "translateZ(15px)" }}
          >
            {project.description}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            style={{ transform: "translateZ(10px)" }}
          >
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + techIndex * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </motion.div>

          <motion.div 
            className="flex items-center gap-2"
            style={{ transform: "translateZ(25px)" }}
          >
            <Button
              size="sm"
              variant="outline"
              className="flex-1 group/btn"
              onClick={() => onLearnMore(project)}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Info className="mr-2 h-4 w-4" />
              </motion.div>
              Learn More
            </Button>
            {project.github && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            )}
            {project.demo && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      title: "AI Multilingual RAG Chatbot for Students",
      description: "Intelligent chatbot helping students with multilingual support",
      technologies: ["Python", "Langchain", "RAG", "NLP", "Streamlit"],
      problem: "Students needed accessible AI assistance across multiple languages with contextual understanding.",
      solution: "Built a RAG-based chatbot using Langchain that retrieves relevant information and generates responses in multiple languages.",
      role: "Designed the RAG pipeline, implemented multilingual support, and created the Streamlit interface.",
      github: "https://github.com/Shahaanb/Language-agnostic-chatbot",
    },
    {
      title: "Research Paper Dashboard",
      description: "Interactive dashboard for research paper analysis and visualization",
      technologies: ["Python", "Pandas", "Langchain", "LLMs", "Streamlit"],
      problem: "Researchers needed a tool to visualize and analyze trends across multiple research papers efficiently.",
      solution: "Created an interactive dashboard that parses research papers, extracts key metrics, and visualizes trends.",
      role: "Developed the entire pipeline from data extraction to visualization, including the UI/UX design.",
      github: "https://github.com/Shahaanb/Research-Paper-Dashboard",
    },
    {
      title: "Multi-PDF Q&A System",
      description: "AI system for extracting answers from multiple PDF documents",
      technologies: ["Python", "Langchain", "PyPDF2", "FAISS", "OpenAI API"],
      problem: "Users needed to quickly find specific information across large volumes of PDF documents.",
      solution: "Built a semantic search system that indexes PDF content using FAISS vector store.",
      role: "Architected the document processing pipeline and implemented vector embeddings.",
      github: "https://github.com/Shahaanb/PDF-Chats",
    },
    {
      title: "Student Helper CLI Application",
      description: "CLI tool for student productivity and task management",
      technologies: ["Python"],
      problem: "Students needed a lightweight, offline tool for managing tasks without distractions.",
      solution: "Developed a feature-rich CLI application with task management and note-taking.",
      role: "Designed the application architecture and implemented all core features.",
      github: "https://github.com/Shahaanb/Student-Helper",
    },
    {
      title: "Breast Cancer Classification",
      description: "ML model for accurate breast cancer diagnosis prediction",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      problem: "Needed to build an accurate classification model to assist in early detection.",
      solution: "Trained multiple ML models achieving 97% accuracy using ensemble methods.",
      role: "Performed data preprocessing, feature selection, and model training.",
      github: "https://github.com/Shahaanb/Cancer-Detection",
    },
    {
      title: "Weather Prediction Models",
      description: "Analysis of different ML approaches for weather forecasting",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Matplotlib"],
      problem: "Needed to determine the most effective ML approach for weather prediction.",
      solution: "Compared traditional ML models with deep learning approaches.",
      role: "Collected data, implemented all models, and conducted comparative analysis.",
      github: "https://github.com/Shahaanb/ML-Weather-Model-Comparison",
    },
  ];

  return (
    <section ref={ref} id="projects" className="py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
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
              — Portfolio
            </motion.p>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              All Creative Works,<br/>
              <span className="text-primary">Selected Projects.</span>
            </motion.h2>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-accent mb-6"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ originX: 0 }}
            />
            
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              Craft of progressive code works that stand-out in memorable explorations.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index}
                onLearnMore={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">The Problem</h4>
                  <p className="text-muted-foreground">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">My Solution</h4>
                  <p className="text-muted-foreground">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">My Role</h4>
                  <p className="text-muted-foreground">{selectedProject.role}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedProject.github && (
                    <Button variant="outline" asChild className="flex-1">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button className="flex-1 bg-gradient-accent" asChild>
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
