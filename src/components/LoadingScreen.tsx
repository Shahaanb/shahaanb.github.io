import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minLoadTime = 3000;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          
          const elapsed = Date.now() - startTime;
          const remaining = Math.max(0, minLoadTime - elapsed);
          
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }, remaining);
          
          return 100;
        }
        const increment = prev < 70 ? 2 : prev < 90 ? 3 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-gradient-glow" />
          
          {/* Test: Simple visible line to debug */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="rgba(92, 225, 230, 0.8)" strokeWidth="3" />
            <line x1="90%" y1="10%" x2="10%" y2="90%" stroke="rgba(92, 225, 230, 0.8)" strokeWidth="3" />
          </svg>
          
          {[...Array(25)].map((_, i) => {
            const angle = (i / 25) * 360;
            const centerX = 50;
            const centerY = 50;
            
            const endX = centerX + Math.cos(angle * Math.PI / 180) * 40;
            const endY = centerY + Math.sin(angle * Math.PI / 180) * 40;
            
            const control1X = centerX + Math.cos((angle + 30) * Math.PI / 180) * 20;
            const control1Y = centerY + Math.sin((angle + 30) * Math.PI / 180) * 20;
            const control2X = centerX + Math.cos((angle - 30) * Math.PI / 180) * 30;
            const control2Y = centerY + Math.sin((angle - 30) * Math.PI / 180) * 30;
            
            return (
              <svg
                key={i}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
              >
                <motion.path
                  d={`M ${centerX}% ${centerY}% C ${control1X}% ${control1Y}%, ${control2X}% ${control2Y}%, ${endX}% ${endY}%`}
                  stroke="rgba(92, 225, 230, 0.6)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  animate={{
                    d: [
                      `M ${centerX}% ${centerY}% C ${control1X}% ${control1Y}%, ${control2X}% ${control2Y}%, ${endX}% ${endY}%`,
                      `M ${centerX}% ${centerY}% C ${control1X + 10}% ${control1Y - 10}%, ${control2X - 10}% ${control2Y + 10}%, ${endX + 5}% ${endY - 5}%`,
                      `M ${centerX}% ${centerY}% C ${control1X - 10}% ${control1Y + 10}%, ${control2X + 10}% ${control2Y - 10}%, ${endX - 5}% ${endY + 5}%`,
                      `M ${centerX}% ${centerY}% C ${control1X}% ${control1Y}%, ${control2X}% ${control2Y}%, ${endX}% ${endY}%`,
                    ],
                  }}
                  transition={{
                    duration: 8 + (i % 5) * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i % 8) * 0.2,
                  }}
                />
              </svg>
            );
          })}
          
          {[...Array(15)].map((_, i) => {
            const angle = (i / 15) * 360 + 180;
            const centerX = 50;
            const centerY = 50;
            
            const radius1 = 25 + (i % 3) * 10;
            const radius2 = 40 + (i % 4) * 8;
            
            const x1 = centerX + Math.cos(angle * Math.PI / 180) * radius1;
            const y1 = centerY + Math.sin(angle * Math.PI / 180) * radius1;
            const x2 = centerX + Math.cos((angle + 90) * Math.PI / 180) * radius2;
            const y2 = centerY + Math.sin((angle + 90) * Math.PI / 180) * radius2;
            
            return (
              <motion.svg
                key={`swirl-${i}`}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <motion.path
                  d={`M ${centerX}% ${centerY}% Q ${x1}% ${y1}%, ${x2}% ${y2}%`}
                  stroke={`rgba(92, 225, 230, 0.25)`}
                  strokeWidth={1.5}
                  fill="none"
                  strokeLinecap="round"
                  animate={{
                    d: [
                      `M ${centerX}% ${centerY}% Q ${x1}% ${y1}%, ${x2}% ${y2}%`,
                      `M ${centerX}% ${centerY}% Q ${x1 + 15}% ${y1 - 12}%, ${x2 - 10}% ${y2 + 15}%`,
                      `M ${centerX}% ${centerY}% Q ${x1 - 12}% ${y1 + 15}%, ${x2 + 12}% ${y2 - 10}%`,
                      `M ${centerX}% ${centerY}% Q ${x1}% ${y1}%, ${x2}% ${y2}%`,
                    ],
                  }}
                  transition={{
                    duration: 10 + (i % 4) * 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i % 6) * 0.3,
                  }}
                />
              </motion.svg>
            );
          })}

          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 1,
              }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, rgba(92, 225, 230, 0.5) 50%, transparent 100%)",
                  padding: "4px",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full bg-background rounded-full" />
              </motion.div>

              <motion.div
                className="relative w-24 h-24 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(92, 225, 230, 0.3)",
                    "0 0 60px rgba(92, 225, 230, 0.6)",
                    "0 0 40px rgba(92, 225, 230, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  className="text-4xl font-bold text-navy-dark"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  S
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <motion.h2
                className="text-2xl font-bold text-foreground mb-2"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Loading Portfolio
              </motion.h2>
              
              <p className="text-muted-foreground text-sm">
                Preparing your experience...
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="w-64"
            >
              <div className="relative h-2 bg-navy-light rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(92, 225, 230, 0.1), transparent)",
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <motion.div
                  className="h-full bg-gradient-accent relative"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute right-0 top-0 bottom-0 w-8 blur-lg"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(92, 225, 230, 0.8))",
                    }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </div>
              
              <motion.p
                className="text-center text-primary text-sm font-semibold mt-3"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                {progress}%
              </motion.p>
            </motion.div>

            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
