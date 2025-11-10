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
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 100%, 70%)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(174, 100%, 60%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(174, 100%, 50%)" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 100%, 60%)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(174, 100%, 70%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(174, 100%, 65%)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(174, 100%, 65%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(174, 100%, 70%)" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* Top section lines */}
        <motion.path
          d="M 50 150 L 200 100 L 350 180 L 500 120 L 650 160"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 50 150 L 200 100 L 350 180 L 500 120 L 650 160",
              "M 50 140 L 200 110 L 350 170 L 500 130 L 650 150",
              "M 50 150 L 200 100 L 350 180 L 500 120 L 650 160",
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M 100 220 L 250 180 L 400 240 L 600 200 L 800 250"
          fill="none"
          stroke="url(#lineGradient2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 100 220 L 250 180 L 400 240 L 600 200 L 800 250",
              "M 100 230 L 250 190 L 400 230 L 600 210 L 800 240",
              "M 100 220 L 250 180 L 400 240 L 600 200 L 800 250",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <motion.path
          d="M 700 100 L 820 140 L 900 90 L 950 130"
          fill="none"
          stroke="url(#lineGradient3)"
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 700 100 L 820 140 L 900 90 L 950 130",
              "M 700 110 L 820 130 L 900 100 L 950 120",
              "M 700 100 L 820 140 L 900 90 L 950 130",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Middle section lines */}
        <motion.path
          d="M 80 380 L 220 340 L 380 400 L 540 360 L 700 420"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="1.7"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 80 380 L 220 340 L 380 400 L 540 360 L 700 420",
              "M 80 390 L 220 350 L 380 390 L 540 370 L 700 410",
              "M 80 380 L 220 340 L 380 400 L 540 360 L 700 420",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        <motion.path
          d="M 200 480 L 350 440 L 500 500 L 650 460 L 850 510"
          fill="none"
          stroke="url(#lineGradient2)"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 200 480 L 350 440 L 500 500 L 650 460 L 850 510",
              "M 200 470 L 350 450 L 500 490 L 650 470 L 850 500",
              "M 200 480 L 350 440 L 500 500 L 650 460 L 850 510",
            ],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.path
          d="M 400 550 L 550 520 L 700 570 L 850 540"
          fill="none"
          stroke="url(#lineGradient3)"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 400 550 L 550 520 L 700 570 L 850 540",
              "M 400 560 L 550 530 L 700 560 L 850 550",
              "M 400 550 L 550 520 L 700 570 L 850 540",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />

        {/* Lower section lines */}
        <motion.path
          d="M 100 650 L 250 620 L 400 680 L 550 640 L 700 690"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 100 650 L 250 620 L 400 680 L 550 640 L 700 690",
              "M 100 660 L 250 630 L 400 670 L 550 650 L 700 680",
              "M 100 650 L 250 620 L 400 680 L 550 640 L 700 690",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        <motion.path
          d="M 300 750 L 450 710 L 600 760 L 750 720 L 900 770"
          fill="none"
          stroke="url(#lineGradient2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 300 750 L 450 710 L 600 760 L 750 720 L 900 770",
              "M 300 740 L 450 720 L 600 750 L 750 730 L 900 760",
              "M 300 750 L 450 710 L 600 760 L 750 720 L 900 770",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />

        <motion.path
          d="M 50 820 L 180 780 L 320 840 L 480 800 L 650 850"
          fill="none"
          stroke="url(#lineGradient3)"
          strokeWidth="1.7"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 50 820 L 180 780 L 320 840 L 480 800 L 650 850",
              "M 50 810 L 180 790 L 320 830 L 480 810 L 650 840",
              "M 50 820 L 180 780 L 320 840 L 480 800 L 650 850",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Right side vertical lines */}
        <motion.path
          d="M 800 200 L 850 320 L 820 450 L 860 580"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 800 200 L 850 320 L 820 450 L 860 580",
              "M 810 200 L 840 320 L 830 450 L 850 580",
              "M 800 200 L 850 320 L 820 450 L 860 580",
            ],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
        />

        <motion.path
          d="M 920 150 L 880 280 L 910 400 L 890 530"
          fill="none"
          stroke="url(#lineGradient2)"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={{
            d: [
              "M 920 150 L 880 280 L 910 400 L 890 530",
              "M 930 150 L 890 280 L 900 400 L 900 530",
              "M 920 150 L 880 280 L 910 400 L 890 530",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />

        {/* Scroll-reactive accent dots */}
        <motion.circle cx="250" cy="200" r="2.5" fill="hsl(174, 100%, 70%)" opacity="0.5" style={{ y: scrollY }} />
        <motion.circle cx="600" cy="350" r="2" fill="hsl(174, 100%, 60%)" opacity="0.4" style={{ y: scrollY }} />
        <motion.circle cx="450" cy="600" r="2.5" fill="hsl(174, 100%, 65%)" opacity="0.45" style={{ y: scrollY }} />
        <motion.circle cx="800" cy="450" r="2" fill="hsl(174, 100%, 70%)" opacity="0.35" style={{ y: scrollY }} />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
