import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const useScrollDirection = (options = {}) => {
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(0);
  const isInView = useInView(ref, { once: false, margin: "-50px", ...options });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, isInView, scrollDirection };
};
