import { Card } from "@/components/ui/card";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const AnimatedNumber = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number from value (e.g., "7+" becomes 7)
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  return (
    <motion.span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: "7+",
      label: "Major Projects",
      subtitle: "Completed",
      color: "#8B5CF6",
    },
    {
      number: "4",
      label: "Certifications",
      subtitle: "Earned",
      color: "#3B82F6",
    },
    {
      number: "2027",
      label: "Expected Graduation",
      subtitle: "B.Tech AI",
      color: "#10B981",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-navy-medium/50 relative overflow-hidden">
      {/* Animated background particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Wave animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all text-center group h-full relative overflow-hidden">
                  {/* Radial gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)`,
                    }}
                  />

                  {/* Rotating ring */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, ${stat.color}40 50%, transparent 100%)`,
                    }}
                  />

                  <div className="relative z-10 space-y-2">
                    <motion.h3 
                      className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform"
                      whileHover={{ 
                        textShadow: `0 0 20px ${stat.color}`,
                      }}
                    >
                      {stat.number.includes('+') || stat.number.length <= 2 ? (
                        <AnimatedNumber value={stat.number} suffix={stat.number.replace(/\d/g, '')} />
                      ) : (
                        <AnimatedNumber value={stat.number} />
                      )}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-foreground font-semibold text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.3 + index * 0.15 }}
                    >
                      {stat.label}
                    </motion.p>
                    
                    <motion.p 
                      className="text-muted-foreground text-xs"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.4 + index * 0.15 }}
                    >
                      {stat.subtitle}
                    </motion.p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: stat.color }}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
