import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { useEffect } from "react";

const AnimatedBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();

  // Smooth spring physics for mouse tracking
  const springConfig = { damping: 25, stiffness: 50 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x * 30); // Multiply by 30 for subtle movement
      mouseY.set(y * 30);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for the lines */}
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 100%, 70%)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(174, 100%, 60%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(174, 100%, 50%)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 100%, 60%)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(174, 100%, 70%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(174, 100%, 65%)" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Line 1 - Flows from top-left to bottom-right */}
        <motion.path
          d="M 100 200 Q 300 300, 500 250 T 900 400"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
          }}
          animate={{
            d: [
              "M 100 200 Q 300 300, 500 250 T 900 400",
              "M 100 180 Q 320 280, 480 270 T 900 420",
              "M 100 200 Q 300 300, 500 250 T 900 400",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Line 2 - Flows from middle */}
        <motion.path
          d="M 200 500 Q 400 450, 600 500 T 900 550"
          fill="none"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
          }}
          animate={{
            d: [
              "M 200 500 Q 400 450, 600 500 T 900 550",
              "M 200 520 Q 420 470, 580 490 T 900 530",
              "M 200 500 Q 400 450, 600 500 T 900 550",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Line 3 - Subtle bottom line */}
        <motion.path
          d="M 100 750 Q 350 700, 550 750 T 900 700"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
          }}
          animate={{
            d: [
              "M 100 750 Q 350 700, 550 750 T 900 700",
              "M 100 730 Q 370 720, 530 740 T 900 720",
              "M 100 750 Q 350 700, 550 750 T 900 700",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Scroll-reactive dots */}
        <motion.circle
          cx="300"
          cy="300"
          r="3"
          fill="hsl(174, 100%, 70%)"
          opacity="0.4"
          style={{
            y: scrollY,
          }}
        />
        <motion.circle
          cx="700"
          cy="500"
          r="2"
          fill="hsl(174, 100%, 60%)"
          opacity="0.3"
          style={{
            y: scrollY,
          }}
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
