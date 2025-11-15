import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        // Accelerate progress as it gets closer to 100
        const increment = prev < 50 ? 2 : prev < 80 ? 5 : 10;
        return Math.min(prev + increment, 100);
      });
    }, 50);

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
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-glow" />
          
          {/* Flowing curved lines that move in all directions */}
          {[...Array(15)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;
            const controlX1 = Math.random() * 100;
            const controlY1 = Math.random() * 100;
            const controlX2 = Math.random() * 100;
            const controlY2 = Math.random() * 100;
            
            return (
              <motion.svg
                key={i}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.2 }}
              >
                <motion.path
                  d={`M ${startX}% ${startY}% C ${controlX1}% ${controlY1}%, ${controlX2}% ${controlY2}%, ${endX}% ${endY}%`}
                  stroke={`rgba(92, 225, 230, ${0.4 + Math.random() * 0.4})`}
                  strokeWidth={1 + Math.random() * 2}
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0.5, 0],
                    opacity: [0, 0.8, 0.6, 0],
                    d: [
                      `M ${startX}% ${startY}% C ${controlX1}% ${controlY1}%, ${controlX2}% ${controlY2}%, ${endX}% ${endY}%`,
                      `M ${startX + 10}% ${startY - 10}% C ${controlX1 + 15}% ${controlY1 - 15}%, ${controlX2 - 10}% ${controlY2 + 10}%, ${endX - 5}% ${endY + 5}%`,
                      `M ${startX - 5}% ${startY + 15}% C ${controlX1 - 10}% ${controlY1 + 20}%, ${controlX2 + 5}% ${controlY2 - 5}%, ${endX + 10}% ${endY - 10}%`,
                      `M ${startX}% ${startY}% C ${controlX1}% ${controlY1}%, ${controlX2}% ${controlY2}%, ${endX}% ${endY}%`,
                    ],
                  }}
                  transition={{
                    duration: 12 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8,
                  }}
                />
              </motion.svg>
            );
          })}
          
          {/* Additional wavy flowing lines */}
          {[...Array(10)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            
            return (
              <motion.svg
                key={`wave-${i}`}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.15 }}
              >
                <motion.path
                  d={`M ${startX}% ${startY}% Q ${startX + 20}% ${startY - 15}%, ${startX + 40}% ${startY + 10}% T ${startX + 80}% ${startY - 5}%`}
                  stroke="rgba(92, 225, 230, 0.5)"
                  strokeWidth={1.5}
                  fill="none"
                  strokeLinecap="round"
                  animate={{
                    d: [
                      `M ${startX}% ${startY}% Q ${startX + 20}% ${startY - 15}%, ${startX + 40}% ${startY + 10}% T ${startX + 80}% ${startY - 5}%`,
                      `M ${startX - 10}% ${startY + 10}% Q ${startX + 15}% ${startY + 20}%, ${startX + 35}% ${startY - 10}% T ${startX + 75}% ${startY + 15}%`,
                      `M ${startX + 5}% ${startY - 15}% Q ${startX + 25}% ${startY + 5}%, ${startX + 45}% ${startY + 15}% T ${startX + 85}% ${startY - 20}%`,
                      `M ${startX}% ${startY}% Q ${startX + 20}% ${startY - 15}%, ${startX + 40}% ${startY + 10}% T ${startX + 80}% ${startY - 5}%`,
                    ],
                    opacity: [0, 0.7, 0.5, 0],
                    pathLength: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 15 + i * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 1,
                  }}
                />
              </motion.svg>
            );
          })}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Animated Logo */}
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
              {/* Outer rotating ring */}
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

              {/* Logo */}
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

            {/* Loading text */}
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

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="w-64"
            >
              {/* Progress bar container */}
              <div className="relative h-2 bg-navy-light rounded-full overflow-hidden">
                {/* Animated background shimmer */}
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
                
                {/* Progress fill */}
                <motion.div
                  className="h-full bg-gradient-accent relative"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect */}
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
              
              {/* Progress percentage */}
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

            {/* Loading dots */}
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
