'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/helpers';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-[rgb(var(--foreground))]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl',
            'bg-[rgb(var(--background))]',
            'border-2 border-transparent',
            'focus:border-[rgb(var(--primary))]',
            'focus:outline-none',
            'transition-all duration-200',
            'neumorphic-inset',
            'text-[rgb(var(--foreground))]',
            'placeholder:text-[rgb(var(--muted-foreground))]',
            error && 'border-red-300',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

