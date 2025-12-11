'use client';

import { Interest } from '@/lib/types/interest';
import { InterestCard } from './InterestCard';
import { EmptyInterestState } from './EmptyInterestState';

interface InterestListProps {
  interests: Interest[];
  onInterestClick?: (interest: Interest) => void;
}

export function InterestList({ interests, onInterestClick }: InterestListProps) {
  if (interests.length === 0) {
    return <EmptyInterestState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {interests.map((interest) => (
        <InterestCard
          key={interest.id}
          interest={interest}
          onClick={() => onInterestClick?.(interest)}
        />
      ))}
    </div>
  );
}

