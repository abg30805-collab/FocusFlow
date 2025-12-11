'use client';

import { FadeIn, SlideUp } from '@/components/ui/transitions';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Calendar, User, Lightbulb, PenTool, FileText, Newspaper, Feather, Sparkles, Megaphone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { blogPosts, getBlogPostColor, getCategoryColor } from '@/lib/data/blogPosts';

export default function BlogPage() {
  const router = useRouter();

  return (
    <div className="space-y-8">
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
          {/* Blog Icon - Easy to swap: Replace Lightbulb with any of these options:
              - Lightbulb (current): Ideas/insights icon
              - PenTool: Writing/editing icon
              - FileText: Document/article icon
              - Newspaper: News/blog icon
              - Feather: Lightweight writing icon
              - Sparkles: Creative/insightful icon
              - Megaphone: Announcements/sharing icon
              - BookOpen: Original book icon */}
          <div className="flex justify-center mb-4">
            <Lightbulb className="w-12 h-12 text-[rgb(var(--foreground))]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[rgb(var(--foreground))] leading-tight tracking-tight">
            FocusFlow Blog
          </h1>
          <p className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
            Tips, insights, and stories about learning, organization, and personal growth
          </p>
        </div>
      </FadeIn>

      {/* Blog Posts Preview */}
      <div className="space-y-6">
        <SlideUp>
          <h2 className="text-2xl font-bold text-[rgb(var(--foreground))] mb-6">
            Featured Articles
          </h2>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => {
            const cardColor = getBlogPostColor(index);
            const categoryColor = getCategoryColor(post.category);
            
            return (
              <SlideUp key={post.id} delay={index * 0.1}>
                <Card 
                  hover 
                  className="h-full flex flex-col cursor-pointer border-2 transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    borderColor: `${cardColor}40`,
                    backgroundColor: index % 2 === 0 ? 'rgb(var(--background))' : `${cardColor}05`
                  }}
                  onClick={() => router.push(`/blog/${post.slug}`)}
                >
                  <div className="relative w-full h-48 mb-4 rounded-t-xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div 
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white shadow-medium"
                      style={{ backgroundColor: categoryColor }}
                    >
                      {post.category}
                    </div>
                  </div>
                  <div className="mb-4 px-1 flex-1">
                    <h3 className="text-xl font-bold mb-3 text-[rgb(var(--foreground))] leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-[rgb(var(--muted-foreground))] mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t" style={{ borderColor: `${cardColor}30` }}>
                    <div className="flex items-center justify-between text-sm text-[rgb(var(--muted-foreground))]">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" style={{ color: cardColor }} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" style={{ color: cardColor }} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span className="font-medium" style={{ color: cardColor }}>
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Card>
              </SlideUp>
            );
          })}
        </div>
      </div>

      {/* Newsletter Signup Placeholder */}
      <SlideUp delay={0.4}>
        <Card className="text-center py-8">
          <h3 className="text-2xl font-bold mb-2 text-[rgb(var(--foreground))]">
            Stay Updated
          </h3>
          <p className="text-[rgb(var(--muted-foreground))] mb-6">
            Get notified when we publish new articles and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-xl border border-[rgb(var(--muted))] bg-[rgb(var(--background))] text-[rgb(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
            />
            <Button>Subscribe</Button>
          </div>
        </Card>
      </SlideUp>
    </div>
  );
}

