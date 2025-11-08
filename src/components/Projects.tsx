import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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
      solution: "Built a RAG-based chatbot using Langchain that retrieves relevant information and generates responses in multiple languages. Implemented document indexing and semantic search for accurate answers.",
      role: "Designed the RAG pipeline, implemented multilingual support, and created the Streamlit interface for seamless interaction.",
      github: "https://github.com/Shahaanb/Language-agnostic-chatbot",
    },
    {
      title: "Research Paper Dashboard",
      description: "Interactive dashboard for research paper analysis and visualization",
      technologies: ["Python", "Pandas", "Langchain", "LLMs", "Streamlit"],
      problem: "Researchers needed a tool to visualize and analyze trends across multiple research papers efficiently.",
      solution: "Created an interactive dashboard that parses research papers, extracts key metrics, and visualizes trends using Plotly. Includes filtering, searching, and export capabilities.",
      role: "Developed the entire pipeline from data extraction to visualization, including the UI/UX design.",
      github: "https://github.com/Shahaanb/Research-Paper-Dashboard",
    },
    {
      title: "Multi-PDF Question & Answering System",
      description: "AI system for extracting answers from multiple PDF documents",
      technologies: ["Python", "Langchain", "PyPDF2", "FAISS", "OpenAI API"],
      problem: "Users needed to quickly find specific information across large volumes of PDF documents.",
      solution: "Built a semantic search system that indexes PDF content using FAISS vector store and answers questions using LLM-powered retrieval. Handles multiple PDFs simultaneously.",
      role: "Architected the document processing pipeline, implemented vector embeddings, and integrated LLM for answer generation.",
      github: "https://github.com/Shahaanb/PDF-Chats",
    },
    {
      title: "Student Helper Command-Line Application",
      description: "CLI tool for student productivity and task management",
      technologies: ["Python"],
      problem: "Students needed a lightweight, offline tool for managing tasks, notes, and schedules without distractions.",
      solution: "Developed a feature-rich CLI application with task management, note-taking, and calendar integration. Uses SQLite for local storage and Rich library for beautiful terminal UI.",
      role: "Designed the application architecture, implemented all core features, and created an intuitive command interface.",
      github: "https://github.com/Shahaanb/Student-Helper",
    },
    {
      title: "Breast Cancer Diagnosis Classification",
      description: "ML model for accurate breast cancer diagnosis prediction",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      problem: "Needed to build an accurate classification model to assist in early breast cancer detection.",
      solution: "Trained multiple ML models (SVM, Random Forest, Neural Networks) on the Wisconsin Breast Cancer dataset. Achieved 97% accuracy using ensemble methods and feature engineering.",
      role: "Performed data preprocessing, feature selection, model training, and hyperparameter tuning. Created visualization for model performance.",
      github: "https://github.com/Shahaanb/Cancer-Detection",
    },
    {
      title: "Comparative Analysis of Weather Prediction Models",
      description: "Analysis of different ML approaches for weather forecasting",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Matplotlib"],
      problem: "Needed to determine the most effective ML approach for accurate weather prediction.",
      solution: "Compared traditional ML models (ARIMA, Random Forest) with deep learning approaches (LSTM, GRU). Evaluated performance across different weather parameters and time horizons.",
      role: "Collected and preprocessed weather data, implemented all models, conducted comparative analysis, and documented findings.",
      github: "https://github.com/Shahaanb/ML-Weather-Model-Comparison",
    },
    {
      title: "Punctuation Corrector Tool (NLP)",
      description: "NLP tool for automatic punctuation correction in text",
      technologies: ["Python", "NLP", "Transformers", "BERT", "Seq2Seq"],
      problem: "Users needed an automated way to add proper punctuation to raw text data.",
      solution: "Built an NLP model using BERT-based architecture that predicts punctuation placement in unpunctuated text. Handles multiple punctuation types with high accuracy.",
      role: "Fine-tuned pre-trained BERT model on punctuation dataset, implemented prediction pipeline, and created a simple API interface.",
      github: "https://github.com/Shahaanb/Punctuation-Corrector",
    },
  ];

  return (
    <section ref={ref} id="projects" className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              — Portfolio
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              All Creative Works,<br/>
              <span className="text-primary">Selected Projects.</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl">
              Craft of progressive code works that stand-out in memorable explorations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow hover:scale-105 transition-transform group cursor-pointer h-full">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Info className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                  {project.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
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
