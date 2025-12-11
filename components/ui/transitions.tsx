'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface TransitionProps {
  children: ReactNode;
  variant?: 'fade' | 'slide' | 'scale';
  delay?: number;
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function FadeIn({ children, delay = 0 }: TransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants.fade}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({ children, delay = 0 }: TransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants.slide}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0 }: TransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants.scale}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
}

