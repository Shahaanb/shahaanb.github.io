import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "@/hooks/use-counter";
import { useParallax } from "@/hooks/use-parallax";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    {
      number: 7,
      suffix: "+",
      label: "Major Projects",
      subtitle: "Completed",
    },
    {
      number: 4,
      suffix: "",
      label: "Certifications",
      subtitle: "Earned",
    },
    {
      number: 2027,
      suffix: "",
      label: "Expected Graduation",
      subtitle: "B.Tech AI",
    },
  ];

  const counter1 = useCounter(stats[0].number, 2000);
  const counter2 = useCounter(stats[1].number, 1800);
  const counter3 = useCounter(stats[2].number, 2200);
  const parallaxOffset = useParallax(0.2);

  return (
    <section ref={ref} className="py-20 bg-navy-medium/50 relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[counter1, counter2, counter3].map((counter, index) => (
              <motion.div
                key={index}
                ref={counter.ref}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all text-center group h-full">
                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform">
                      {counter.count}{stats[index].suffix}
                    </h3>
                    <p className="text-foreground font-semibold text-sm">
                      {stats[index].label}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {stats[index].subtitle}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
