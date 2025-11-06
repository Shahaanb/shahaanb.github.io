import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Smartphone, Code, TrendingUp, Image } from "lucide-react";

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

  return (
    <section id="competencies" className="py-20 bg-navy-medium/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Core <span className="text-primary">Competencies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-4" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Expertise across AI, development, and digital solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((competency, index) => {
              const Icon = competency.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow group"
                >
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {competency.title}
                  </h3>
                  <p className="text-muted-foreground">{competency.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
