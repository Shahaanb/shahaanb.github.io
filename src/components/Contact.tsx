import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_kgnbmuj',
        'template_w3uguxu',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'Na1REN7y52xtRPwDz'
      );
      
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shahaanhb@gmail.com",
      href: "mailto:shahaanhb@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9820120292",
      href: "tel:+919820120292",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shahaan-bharucha",
      href: "https://linkedin.com/in/shahaan-bharucha-2330762b4",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Shahaanb",
      href: "https://github.com/Shahaanb",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-navy-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              — Contact
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Estimate your project?<br/>
              <span className="text-primary">Let me know here.</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-accent hover:shadow-glow transition-all">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary/50 transition-all group"
                  >
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {info.label}
                        </h4>
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
