'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CyclingTextProps = {
  sentences: string[];
  className?: string;
};

export function CyclingText({ sentences, className }: CyclingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 2500); // Change sentence every 2.5 seconds

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div className={`relative h-12 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full text-center text-lg md:text-xl font-semibold"
        >
          {sentences[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
