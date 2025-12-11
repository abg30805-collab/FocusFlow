'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils/helpers';

type ButtonProps = Omit<HTMLMotionProps<'button'>, 'onDrag' | 'onDragStart' | 'onDragEnd'> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  children: ReactNode;
};

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-[14px] font-medium transition-all duration-200 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-[rgb(var(--primary))] text-white hover:opacity-90 shadow-light hover:shadow-medium',
    secondary: 'bg-white text-[rgb(var(--foreground))] border border-[rgb(var(--foreground))] border-opacity-20 hover:bg-[rgb(var(--muted))] shadow-light',
    ghost: 'bg-transparent text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}

