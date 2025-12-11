'use client';

import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export function EmptyInterestState() {
  return (
    <Card className="text-center py-12">
      <Sparkles className="w-16 h-16 mx-auto mb-4 text-[rgb(var(--muted-foreground))]" />
      <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--foreground))]">
        No interests yet
      </h3>
      <p className="text-[rgb(var(--muted-foreground))] mb-6">
        Start tracking your learning journey by adding your first interest!
      </p>
    </Card>
  );
}

