'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

type AnimatedSectionProps = {
  children: React.ReactNode;
  id: string;
};

export function AnimatedSection({ children, id }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
