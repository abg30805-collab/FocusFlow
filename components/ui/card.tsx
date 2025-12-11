'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils/helpers';

type CardProps = Omit<HTMLMotionProps<'div'>, 'onDrag' | 'onDragStart' | 'onDragEnd'> & {
  children: ReactNode;
  hover?: boolean;
};

export function Card({ children, className, hover = false, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-[14px] p-6 bg-white shadow-light border border-[rgb(var(--muted))] border-opacity-50',
        hover && 'hover:shadow-medium cursor-pointer transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

