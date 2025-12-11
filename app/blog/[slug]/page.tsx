'use client';

import { useRouter, useParams } from 'next/navigation';
import { FadeIn, SlideUp } from '@/components/ui/transitions';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Image from 'next/image';
import { blogPosts, getBlogPostColor, getCategoryColor } from '@/lib/data/blogPosts';

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-[rgb(var(--muted-foreground))] mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button onClick={() => router.push('/blog')}>
            Back to Blog
          </Button>
        </Card>
      </div>
    );
  }

  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const categoryColor = getCategoryColor(post.category);
  const accentColor = getBlogPostColor(postIndex);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Button */}
      <FadeIn>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/blog')}
          icon={<ArrowLeft className="w-4 h-4" />}
        >
          Back to Blog
        </Button>
      </FadeIn>

      {/* Article Header */}
      <SlideUp>
        <article>
          <div className="mb-6">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white mb-4 shadow-medium"
              style={{ backgroundColor: categoryColor }}
            >
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[rgb(var(--foreground))] leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-[rgb(var(--muted-foreground))] mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" style={{ color: accentColor }} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: accentColor }} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: accentColor }} />
                <span className="font-medium" style={{ color: accentColor }}>
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <Card 
            className="prose prose-lg max-w-none p-8 border-2"
            style={{ 
              borderColor: `${accentColor}30`,
              backgroundColor: `${accentColor}05`
            }}
          >
            <div className="text-[rgb(var(--foreground))] leading-relaxed">
              {post.content.split('\n\n').map((paragraph, index) => {
                const trimmedParagraph = paragraph.trim();
                
                // Check if paragraph starts with a heading-like pattern
                const headingPatterns = [
                  /^Tip #\d+: .+/,
                  /^What is it\?$/,
                  /^Why it Works$/,
                  /^What to Do Next$/,
                ];
                const isHeading = headingPatterns.some(pattern => pattern.test(trimmedParagraph));
                
                if (isHeading) {
                  return (
                    <h2 
                      key={index} 
                      className="text-2xl md:text-3xl font-bold mb-4 mt-8 first:mt-0"
                      style={{ color: accentColor }}
                    >
                      {trimmedParagraph}
                    </h2>
                  );
                }
                
                // Check for emphasis phrases (bold-like content) - standalone sentences
                const emphasisPatterns = [
                  /^Consistency is better than intensity\.$/,
                  /^Burnout cannot compete with a healthy You\.$/,
                ];
                const hasEmphasis = emphasisPatterns.some(pattern => pattern.test(trimmedParagraph));
                
                if (hasEmphasis) {
                  return (
                    <p key={index} className="mb-4 text-lg leading-relaxed font-semibold italic text-center" style={{ color: accentColor }}>
                      {trimmedParagraph}
                    </p>
                  );
                }
                
                return (
                  <p key={index} className="mb-4 text-lg leading-relaxed">
                    {trimmedParagraph}
                  </p>
                );
              })}
            </div>
          </Card>
        </article>
      </SlideUp>

      {/* Navigation */}
      <SlideUp delay={0.2}>
        <Card 
          className="text-center py-8 border-2"
          style={{ 
            borderColor: `${accentColor}30`,
            backgroundColor: `${accentColor}05`
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-[rgb(var(--foreground))]">
            Enjoyed this article?
          </h3>
          <p className="text-[rgb(var(--muted-foreground))] mb-6">
            Check out more articles on our blog
          </p>
          <Button 
            onClick={() => router.push('/blog')}
            style={{ backgroundColor: accentColor }}
            className="hover:opacity-90"
          >
            View All Posts
          </Button>
        </Card>
      </SlideUp>
    </div>
  );
}
