import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const About = () => {
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
      title: "E-commerce Specialist",
      company: "Family Business",
      period: "Ongoing",
      description: "Managed Shopify store setup",
    },
    {
      title: "Digital Marketing",
      company: "Family Business",
      period: "Ongoing",
      description: "Managing Google Ads campaigns",
    },
  ];

  const certifications = [
    "Introduction to Programming using Java - GeeksforGeeks (2025)",
    "CS50P (CS50 for Python) - Harvard University (2022)",
    "Programming for Everybody (Python) - University of Michigan (2021)",
    "Introduction to Machine Learning - University of London (2021)",
  ];

  return (
    <section id="about" className="py-20 bg-navy-medium/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary blur-2xl opacity-10" />
                <img
                  src={profilePicture}
                  alt="Shahaan Bharucha"
                  className="relative w-full rounded-2xl shadow-card border border-primary/20"
                />
              </div>
            </div>

            <div className="space-y-6">
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
          </div>

          {/* Education */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="grid gap-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                  <h4 className="text-xl font-semibold text-primary mb-2">{edu.school}</h4>
                  <p className="text-foreground font-medium">{edu.degree}</p>
                  <p className="text-muted-foreground">{edu.year}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Practical Experience</h3>
            </div>
            <div className="grid gap-4">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                  <h4 className="text-xl font-semibold text-primary mb-2">{exp.title}</h4>
                  <p className="text-foreground font-medium mb-1">{exp.company}</p>
                  <p className="text-muted-foreground mb-2">{exp.period}</p>
                  {exp.description && (
                    <p className="text-muted-foreground">{exp.description}</p>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                  <p className="text-muted-foreground">{cert}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
