'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { FadeIn, SlideUp } from '@/components/ui/transitions';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Logo } from '@/components/ui/logo';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  FolderTree,
  TrendingUp,
  Map,
  CheckCircle2,
  Star,
  Sparkles,
  BookOpen,
  Users,
  Award,
  ChevronRight,
  Sprout,
  BarChart3,
  Grid3x3,
  LogIn,
  PlusCircle,
} from 'lucide-react';

// Features data with enhanced content for creative presentation
const features = [
  {
    icon: Target,
    heading: 'TRACK INTERESTS',
    title: 'Track',
    titleEmphasis: 'Everything',
    description: 'Keep all your learning interests and passions organized in one place. Document every interest with descriptions, progress tracking, and personal notes that make it easy to pick up where you left off.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Organized workspace with notebooks and learning materials',
  },
  {
    icon: FolderTree,
    heading: 'ORGANIZE',
    title: 'Organize by',
    titleEmphasis: 'Categories',
    description: 'Group your interests into meaningful categories that reflect your learning style. See patterns in your journey and focus on related areas when planning your next steps.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Organized folders and classification system',
  },
  {
    icon: TrendingUp,
    heading: 'MONITOR PROGRESS',
    title: 'Monitor Your',
    titleEmphasis: 'Progress',
    description: 'Track your learning with visual progress indicators. Set milestones, update your advancement, and celebrate achievements as you grow.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Charts and analytics showing progress tracking',
  },
  {
    icon: Map,
    heading: 'VISUAL MAPS',
    title: 'Visualize Your',
    titleEmphasis: 'Journey',
    description: 'Visualize your learning journey and discover connections between interests. See how your skills relate and identify opportunities for growth.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Network diagram and mind map visualization',
  },
];

const steps = [
  {
    number: 1,
    title: 'Sign In',
    description: 'Create your account quickly with just your email. Get started in seconds with immediate access to all features.',
    icon: LogIn,
  },
  {
    number: 2,
    title: 'Add Interests',
    description: 'List your topics, skills, and subjects. Organize them by categories and add descriptions to get started.',
    icon: PlusCircle,
  },
  {
    number: 3,
    title: 'Track Progress',
    description: 'Update your progress percentage as you learn. Add notes about milestones and see your journey evolve over time.',
    icon: TrendingUp,
  },
  {
    number: 4,
    title: 'Map Your Journey',
    description: 'Visualize connections between your interests. Discover relationships and identify opportunities for growth.',
    icon: Map,
  },
];

const benefits = [
  {
    icon: Sprout,
    title: 'Personal Growth',
    description: 'Stay motivated and organized as you pursue your learning goals.',
  },
  {
    icon: BarChart3,
    title: 'Skill Tracking',
    description: 'Monitor your skill development and celebrate your achievements.',
  },
  {
    icon: Grid3x3,
    title: 'Better Organization',
    description: 'Keep all your interests and learning resources in one place.',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Developer',
    quote: 'FocusFlow has completely transformed how I track my learning. I can finally see all my interests in one place!',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Designer',
    quote: 'The visual progress tracking keeps me motivated. It\'s like having a personal learning coach.',
    rating: 5,
  },
  {
    name: 'Emily Johnson',
    role: 'Student',
    quote: 'As someone with many interests, this app helps me stay organized and focused on my goals.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Entrepreneur',
    quote: 'The category organization feature is a game-changer. I can now see connections between different areas of learning.',
    rating: 5,
  },
];

// Pastel Color System - Option 6: Hybrid System (Default)
// To switch to other color assignment options, modify the color arrays below:
// 
// Option 1: Feature-Based - Fixed assignment per feature
// Option 2: Rotating - Cycle through colors sequentially
// Option 3: Semantic - Colors based on meaning/function
// Option 4: Section-Based - One color per section
// Option 5: Gradient - Use gradient combinations
// Option 6: Hybrid - Features unique, benefits/steps rotate (CURRENT)
const pastelColors = {
  teal: 'rgb(144, 224, 216)',
  lavender: 'rgb(200, 180, 220)',
  pink: 'rgb(255, 192, 203)',
  blue: 'rgb(173, 216, 230)',
  orange: 'rgb(255, 218, 185)',
};

// Option 6: Hybrid System - Features get unique colors, benefits/steps rotate
const featureColors = [
  pastelColors.lavender,  // Track Interests - Purple (as requested)
  pastelColors.teal,      // Organize by Categories - Teal
  pastelColors.orange,    // Monitor Progress - Orange
  pastelColors.blue,      // Visualize Journey - Blue
];

const benefitColors = [
  pastelColors.pink,      // Personal Growth
  pastelColors.teal,      // Skill Tracking
  pastelColors.orange,    // Better Organization
];

const stepColors = [
  pastelColors.lavender,  // Step 1
  pastelColors.pink,      // Step 2
  pastelColors.blue,      // Step 3
  pastelColors.orange,    // Step 4
];

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated } = useUserStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && isAuthenticated) {
      router.push('/dashboard');
    }
  }, [mounted, isAuthenticated, router]);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      {/* 
        HERO LAYOUT OPTIONS:
        To switch between hero layouts, replace the section content below:
        
        Option 1: Split Layout - Logo/Title Left, Content Right (CURRENT)
        - Two-column grid: logo + title on left, tagline/subtitle/buttons on right
        - Mobile: stacked vertically
        
        Option 2: Split Layout - Logo Left, Title & Content Right
        - Logo on far left, title and content stacked on right
        
        Option 3: Asymmetric Split with Visual Element
        - 60/40 split with card/background on right side
        
        Option 4: Centered with Side Accents
        - Centered content with decorative elements on sides
        
        Option 5: Hero with Background Gradient/Pattern
        - Split or centered with gradient background
        
        Option 6: Card-Based Hero
        - All content in a styled card container
      */}
      <FadeIn>
        <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 py-12 overflow-hidden">
          {/* Option 5: Hero with Background Gradient/Pattern */}
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--pastel-teal))]/20 via-[rgb(var(--pastel-lavender))]/15 to-[rgb(var(--pastel-pink))]/20" />
          
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-6 md:mb-8">
              <Logo size={140} className="md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]" />
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[rgb(var(--foreground))] leading-tight tracking-tight text-center mb-8 md:mb-12">
              FocusFlow
            </h1>

            {/* Tagline */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[rgb(var(--foreground))] leading-relaxed opacity-75 text-center">
                Organize Your Interests.<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Build Your Skills.<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Master Your Time.
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-[rgb(var(--foreground))] mb-10 max-w-2xl mx-auto opacity-70 text-center">
              A personal hub for multi-passionate people who want clarity, structure, and progress.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => router.push('/auth/login')}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={scrollToFeatures}
              >
                Explore Features
              </Button>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Features Section */}
      <section id="features" className="space-y-0">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          const isEven = index % 2 === 1; // Features 1 & 3 (0-indexed: 0, 2) = image left, Features 2 & 4 (1, 3) = image right
          
          return (
            <div key={index} className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-[rgb(var(--background))]' : 'bg-[rgb(var(--muted))]/20'}`}>
              <div className="max-w-7xl mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image - Left for odd indices (0, 2), Right for even indices (1, 3) */}
                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <SlideUp delay={0.2 + index * 0.1}>
                      <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SlideUp>
                  </div>

                  {/* Content - Right for odd indices (0, 2), Left for even indices (1, 3) */}
                  <div className={`flex flex-col justify-center ${isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <SlideUp delay={0.3 + index * 0.1}>
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg text-white" style={{ backgroundColor: featureColors[index] }}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted-foreground))]">
                            {feature.heading}
                          </span>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--foreground))] leading-tight">
                          {feature.title}{' '}
                          <span className="underline decoration-4 underline-offset-4" style={{ textDecorationColor: featureColors[index] }}>
                            {feature.titleEmphasis}
                          </span>
                        </h3>
                        
                        <p className="text-lg md:text-xl text-[rgb(var(--muted-foreground))] leading-relaxed max-w-xl">
                          {feature.description}
                        </p>
                      </div>
                    </SlideUp>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* How It Works Section */}
      {/* 
        DESIGN OPTION: Option 2 - Vertical Timeline Flow
        To switch to other options, replace the implementation below:
        
        Option 1: Icon-Based Cards (like Benefits section)
        - Use Card component with icon + title + description always visible
        - Match the Benefits section styling pattern
        
        Option 2: Vertical Timeline Flow (CURRENT)
        - Vertical flex layout with connecting lines
        - Larger step indicators with vertical flow
        - Better mobile experience
        
        Option 3: Enhanced Horizontal with Visual Flow
        - Keep horizontal layout but add connecting lines/arrows
        - Larger cards with more spacing
        - Add subtle background gradients
        
        Option 4: Alternating Layout (like Features section)
        - Two-column alternating layout
        - Each step gets visual element (icon illustration or gradient)
        - Larger, more prominent presentation
        
        Option 5: Compact Icon Grid with Hover Details
        - Compact grid with icons that expand on hover
        - Space-efficient with interactive reveal
      */}
      <section className="space-y-8">
        <SlideUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--foreground))]">
              How It Works
            </h2>
            <p className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
              Get started in minutes and begin organizing your learning journey
            </p>
          </div>
        </SlideUp>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={step.number} className="relative">
                  <SlideUp delay={index * 0.1}>
                    <div className="flex gap-6 pb-8 md:pb-12">
                      {/* Timeline Indicator */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          className="w-20 h-20 rounded-full text-white flex items-center justify-center shadow-medium z-10 relative"
                          style={{ backgroundColor: stepColors[index] }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-10 h-10" />
                        </motion.div>
                        {/* Connecting Line */}
                        {!isLast && (
                          <div className="w-0.5 h-full bg-[rgb(var(--muted))] border-opacity-30 mt-4 flex-1 min-h-[60px]" />
                        )}
                      </div>
                      
                      {/* Content Card */}
                      <div className="flex-1 pt-2">
                        <Card className="h-full">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ color: stepColors[index], backgroundColor: `${stepColors[index]}20` }}>
                                Step {step.number}
                              </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[rgb(var(--foreground))]">
                              {step.title}
                            </h3>
                            <p className="text-lg text-[rgb(var(--muted-foreground))] leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </SlideUp>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-y-8">
        <SlideUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--foreground))]">
              Why Choose FocusFlow?
            </h2>
            <p className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
              Join thousands of learners who are organizing their interests and achieving their goals
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <SlideUp key={benefit.title} delay={index * 0.1}>
                <Card className="h-full">
                  <h3 className="text-xl font-bold mb-4 text-[rgb(var(--foreground))] flex items-center gap-3">
                    <IconComponent className="w-6 h-6" style={{ color: benefitColors[index] }} />
                    {benefit.title}
                  </h3>
                  <p className="text-[rgb(var(--muted-foreground))] leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </SlideUp>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <SlideUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--foreground))]">
              What Our Users Say
            </h2>
            <p className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
              {'Don\'t'} just take our word for it - hear from our community
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <SlideUp key={testimonial.name} delay={index * 0.1}>
              <Card hover className="h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[rgb(var(--foreground))] mb-4 italic">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgb(var(--primary))] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[rgb(var(--foreground))]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[rgb(var(--muted-foreground))]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </SlideUp>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section>
        <SlideUp>
          <Card className="text-center py-12">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-[rgb(var(--primary))]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--foreground))]">
              Start Your Learning Journey Today
            </h2>
            <p className="text-xl mb-8 text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
              Join thousands of learners who are organizing their interests and achieving their goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => router.push('/auth/login')}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => router.push('/auth/login')}
              >
                Already have an account? Sign in
              </Button>
            </div>
          </Card>
        </SlideUp>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgb(var(--muted))] border-opacity-30 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[rgb(var(--primary))]" />
              <h3 className="text-xl font-bold text-[rgb(var(--foreground))]">
                FocusFlow
              </h3>
            </div>
            <p className="text-[rgb(var(--muted-foreground))] text-sm">
              Organize your interests, track your skills, and map your learning journey.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[rgb(var(--foreground))]">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={scrollToFeatures}
                  className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <button
                  onClick={() => router.push('/about')}
                  className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[rgb(var(--foreground))]">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => router.push('/blog')}
                  className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[rgb(var(--foreground))]">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgb(var(--muted))] pt-6 text-center">
          <p className="text-sm text-[rgb(var(--muted-foreground))]">
            © {new Date().getFullYear()} FocusFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
