'use client';

import { FadeIn, SlideUp } from '@/components/ui/transitions';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

/**
 * LAYOUT STYLE CONFIGURATION
 * 
 * Current Style: ALTERNATING
 * - Section 1 (What is FocusFlow?): Left-aligned on desktop, centered on mobile
 * - Section 2 (About the Creator): Right-aligned on desktop, centered on mobile
 * 
 * Alternative Styles (for easy switching):
 * 
 * 1. CENTERED (default):
 *    - Both sections: className="max-w-3xl mx-auto" on Card
 *    - Headings: className="text-center"
 * 
 * 2. SPLIT LAYOUT:
 *    - Container: className="grid grid-cols-1 md:grid-cols-2 gap-8"
 *    - Both sections side-by-side on desktop
 * 
 * 3. FULL-WIDTH CARDS:
 *    - Card: className="w-full p-10 md:p-12"
 *    - Remove max-width constraints
 * 
 * 4. MINIMALIST SPACIOUS:
 *    - Card: className="max-w-4xl mx-auto p-12"
 *    - Text: className="text-xl leading-relaxed"
 *    - More whitespace between sections
 * 
 * 5. STACKED PROMINENT:
 *    - Headings: className="text-4xl md:text-5xl"
 *    - Card: className="max-w-4xl mx-auto p-10"
 * 
 * 6. MAGAZINE STYLE:
 *    - First paragraph: className="text-2xl md:text-3xl leading-relaxed font-medium"
 *    - Rest: className="text-lg leading-relaxed"
 *    - Card: className="max-w-4xl mx-auto p-10"
 */

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Header */}
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push('/')}
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12 text-[rgb(var(--foreground))]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[rgb(var(--foreground))] leading-tight tracking-tight">
            About FocusFlow
          </h1>
          <p className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
            Learn more about our mission, values, and the mind behind FocusFlow
          </p>
        </div>
      </FadeIn>

      {/* What is FocusFlow? Section */}
      <section className="space-y-6">
        <SlideUp>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--foreground))] text-left underline decoration-[rgb(var(--pastel-blue))] decoration-2 underline-offset-8">
              What is FocusFlow?
            </h2>
          </div>
        </SlideUp>

        <SlideUp delay={0.1}>
          <div className="max-w-5xl mx-auto p-8">
            <div className="space-y-4 text-[rgb(var(--foreground))]">
              <p className="text-lg leading-relaxed">
                FocusFlow is designed for ambitious, multi-passionate individuals who want to manage all of their interests without feeling overwhelmed. With the help of AI, you can generate structured, personalized learning pathways that track your progress and guide you toward mastering new skills. Each pathway can be customized to fit your schedule, time constraints, and goals FocusFlow adapts to your calendar, not the other way around.
              </p>
              <p className="text-lg leading-relaxed">
                As you grow, your pathways grow with you. They update dynamically based on your progress, ensuring {'you\'re'} always moving with clarity and purpose. You can organize your interests using broad categories like exercise, mental health, creativity, career, and more, keeping your learning journey streamlined and intentional.
              </p>
              <p className="text-lg leading-relaxed">
                To help you stay balanced, FocusFlow lets you schedule which pathways you want to prioritize at any given time. Whether your focus shifts daily or seasonally, FocusFlow shifts with you.
              </p>
              <p className="text-lg leading-relaxed">
                Start your learning journey today and turn every interest into meaningful progress.
              </p>
            </div>
          </div>
        </SlideUp>
      </section>

      {/* About the Creator Section */}
      <section className="space-y-6">
        <SlideUp>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--foreground))] text-left underline decoration-[rgb(var(--pastel-peach))] decoration-2 underline-offset-8">
              About the Creator
            </h2>
          </div>
        </SlideUp>

        <SlideUp delay={0.1}>
          <div className="max-w-5xl mx-auto p-8">
            <div className="space-y-4 text-[rgb(var(--foreground))]">
              <p className="text-lg leading-relaxed">
                FocusFlow was created by Abel Garza, a Civil Engineering student at Northwest Vista College and just like many of its users proudly multi-passionate individual. His interests span music, fitness, filming live performances, video games, and countless other curiosities that continue to evolve.
              </p>
              <p className="text-lg leading-relaxed">
                Abel realized he had more passions than he knew how to manage, and he often struggled to balance them all. The motivation was there, and the ideas were flowing, but knowing where to start and how to progress felt overwhelming. These challenges became the direct inspiration for FocusFlow.
              </p>
              <p className="text-lg leading-relaxed">
                What began as a personal solution has grown into a tool designed to help others overcome the same obstacles. {'Abel\'s'} goal is to make learning less daunting and more accessible, giving everyone the chance to pursue the skills {'they\'ve'} always wanted but never knew how to begin.
              </p>
            </div>
          </div>
        </SlideUp>
      </section>
    </div>
  );
}
