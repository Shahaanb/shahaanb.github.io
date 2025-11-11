import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 bg-navy-medium/30 relative overflow-hidden">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.05 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-radial from-primary/30 to-transparent pointer-events-none"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-muted-foreground text-lg mb-4">Ready to collaborate?</p>
          <a 
            href="#contact"
            className="text-primary text-3xl md:text-4xl font-bold hover:underline inline-flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's connect
            <ArrowDown className="rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
