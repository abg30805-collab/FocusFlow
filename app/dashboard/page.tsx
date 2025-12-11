'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { useInterestsStore } from '@/store/interestsStore';
import { InterestList } from '@/components/interest/InterestList';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FadeIn, SlideUp } from '@/components/ui/transitions';
import { Plus, Lightbulb, Target, BookOpen } from 'lucide-react';
import { Interest } from '@/lib/types/interest';
import Image from 'next/image';

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useUserStore();
  const { interests, fetchInterests, isLoading } = useInterestsStore();
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchInterests();
  }, [fetchInterests]);

  const handleInterestClick = (interest: Interest) => {
    // Placeholder for future modal/detail view
    console.log('Interest clicked:', interest);
  };

  const handleAddInterest = () => {
    // Placeholder for future add interest modal
    setShowAddModal(true);
    console.log('Add interest clicked');
    // Close modal after a moment (placeholder)
    setTimeout(() => setShowAddModal(false), 100);
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <Card className="bg-white text-[rgb(var(--foreground))] border border-[rgb(var(--primary))]/15 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-[rgb(var(--foreground))]">
              Welcome back, {user?.name ?? 'Learner'}!
            </h1>
          </div>
          <p className="text-[rgb(var(--muted-foreground))]">
            Continue your learning journey and track your progress
          </p>
        </Card>
      </FadeIn>

      {/* Getting Started / Tips Section */}
      {interests.length === 0 && !isLoading && (
        <SlideUp delay={0.1}>
          <Card className="bg-gradient-to-r from-[rgb(var(--primary))]/10 to-[rgb(var(--secondary))]/10 border-[rgb(var(--primary))]/20">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[rgb(var(--foreground))]">
                  Getting Started with FocusFlow
                </h3>
                <p className="text-[rgb(var(--muted-foreground))] leading-relaxed mb-4">
                  Welcome to your learning dashboard! Start by adding your first interest. You can organize them into categories, track your progress, and visualize your learning journey. Use the {'"Add Interest"'} button to begin documenting the skills and topics you want to explore.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <div className="flex items-start gap-2 text-sm">
                    <Target className="w-4 h-4 text-[rgb(var(--primary))] mt-0.5 flex-shrink-0" />
                    <span className="text-[rgb(var(--muted-foreground))]">
                      Add interests and set learning goals
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-[rgb(var(--primary))] mt-0.5 flex-shrink-0" />
                    <span className="text-[rgb(var(--muted-foreground))]">
                      Track progress as you learn and grow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </SlideUp>
      )}

      {/* Tips for Users with Interests */}
      {interests.length > 0 && (
        <SlideUp delay={0.1}>
          <Card className="overflow-hidden p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="relative w-full h-32 md:h-full md:min-h-[150px]">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&q=80"
                  alt="Learning progress and skill tracking visualization"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2 p-6 flex items-center">
                <div className="flex items-start gap-4 w-full">
                  <Lightbulb className="w-5 h-5 text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-[rgb(var(--foreground))]">
                      Quick Tip
                    </h3>
                    <p className="text-sm text-[rgb(var(--muted-foreground))] leading-relaxed">
                      Regularly update your progress percentages to maintain motivation and see how far {'you\'ve'} come. The visual progress indicators help you stay focused on your learning goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </SlideUp>
      )}

      <SlideUp delay={0.15}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">
            Your Interests
          </h2>
          <Button
            onClick={handleAddInterest}
            icon={<Plus className="w-4 h-4" />}
          >
            Add Interest
          </Button>
        </div>
      </SlideUp>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-[rgb(var(--muted-foreground))]">Loading interests...</p>
        </div>
      ) : (
        <SlideUp delay={0.2}>
          <InterestList
            interests={interests}
            onInterestClick={handleInterestClick}
          />
        </SlideUp>
      )}
    </div>
  );
}

