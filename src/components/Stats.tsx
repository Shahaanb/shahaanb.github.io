import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const stats = [
    {
      number: "7+",
      label: "Major Projects",
      subtitle: "Completed",
    },
    {
      number: "4",
      label: "Certifications",
      subtitle: "Earned",
    },
    {
      number: "2027",
      label: "Expected Graduation",
      subtitle: "B.Tech AI",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-navy-medium/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all text-center group h-full">
                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform">
                      {stat.number}
                    </h3>
                    <p className="text-foreground font-semibold text-sm">
                      {stat.label}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {stat.subtitle}
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
