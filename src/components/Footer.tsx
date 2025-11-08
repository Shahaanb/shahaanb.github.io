import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:shahaanhb@gmail.com", label: "Email" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shahaan-bharucha-2330762b4",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/Shahaanb", label: "GitHub" },
  ];

  return (
    <footer className="py-12 border-t border-border bg-navy-medium/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-8 mb-8">
            <Button
              size="lg"
              className="bg-gradient-accent hover:shadow-glow transition-all group text-base font-semibold"
              asChild
            >
              <a href="https://docs.google.com/document/d/17zSiZT8JDoPKmdeZgkebLTpewW3lGaCx/edit?usp=sharing&ouid=106833664789789142548&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2025 Shahaan Bharucha. All Rights Reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className="p-3 bg-card rounded-lg hover:bg-primary/10 hover:text-primary transition-all border border-border hover:border-primary/50"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
