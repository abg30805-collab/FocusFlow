'use client';

import { Interest } from '@/lib/types/interest';
import { motion } from 'framer-motion';
import { getInterestIconConfig } from '@/lib/utils/interestIcons';
import { cn } from '@/lib/utils/helpers';

interface InterestCardProps {
  interest: Interest;
  onClick?: () => void;
}

export function InterestCard({ interest, onClick }: InterestCardProps) {
  const { icon: IconComponent, pastelBg, iconBg } = getInterestIconConfig(
    interest.category,
    interest.title
  );
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={cn(
        'rounded-xl p-4 flex items-center gap-3 transition-all duration-200',
        'shadow-sm border border-opacity-30',
        onClick && 'cursor-pointer hover:shadow-md hover:scale-[1.02]'
      )}
      style={{
        backgroundColor: pastelBg,
        borderColor: iconBg,
      }}
    >
      {/* Circular icon badge */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        <IconComponent className="w-5 h-5 text-white" />
      </div>
      
      {/* Interest title */}
      <h3 className="font-semibold text-base text-[rgb(var(--foreground))] flex-1">
        {interest.title}
      </h3>
    </motion.div>
  );
}

