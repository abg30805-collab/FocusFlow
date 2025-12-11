export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: '3-tips-to-avoid-burnout',
    title: '3 Tips to Avoid Burnout',
    excerpt: 'Burnout is something almost everyone encounters at some point. Learn three practical tips to prevent burnout and maintain your passion for learning.',
    author: 'Abel Garza',
    date: 'December 8, 2025',
    readTime: '5 min read',
    category: 'Personal Growth',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop&q=80',
    content: `Burnout is something almost everyone encounters at some point. Its source might be work, family responsibilities, or simply the pressure we place on ourselves, but no matter where it comes from, the experience feels the same. You wake up exhausted despite a full night's sleep, or the activities that once energized you suddenly feel dull and unrewarding. Burnout is a deep trench that none of us want to fall into, yet somehow, we often slip into it before we even notice the warning signs.

Thankfully, there are ways to prevent ever finding yourself in that trench so here are 3 Tips to Avoid Burnout. These will be helpful as you begin, or continue, your journey towards learning new skills and managing all your interests.

Tip #1: Know Your Limits

The excitement of a new fixation can feel almost addicting; I have absolutely been there. When something captures your interest, it is tempting to drop every responsibility and spend ten hours a day trying to master it. But that rush fades quickly when you overload your brain with too much focused effort at once.

Instead, be honest with yourself about what is realistic. How much time can you devote without feeling overwhelmed or guilty about everything else you are neglecting? Often, 15–30 minutes a day is enough to stay engaged, make progress, and build consistency, without turning your passion into a chore. Setting gentle limits helps you maintain your excitement over time and prevents burnout before it starts.

Consistency is better than intensity.

Tip #2: Prioritize Yourself

I call this the "Universal Mental Health" antidote because you will find it in almost every wellness blog and for good reason. Your mind and body are deeply connected, so caring for one naturally supports the other. Your interests should never come before your health; instead, they should benefit from a healthier, more energized version of you.

Simple habits such as consistent sleep, nourishing meals, light daily movement create the foundation for mental clarity and emotional resilience. Like Tip #1, you do not need to overhaul your life overnight. You do not have to run five miles a day or swear off carbs tomorrow. Start with small, intentional adjustments. Over time, those tiny shifts compound, and the benefits begin to show up in every part of your life, including your passions.

Burnout cannot compete with a healthy You.

Tip #3: Recognize the Warning Signs

Burnout shows up differently for everyone, which is why it is important to understand what the early warning signs look like for you. Maybe your mood has been more cynical lately. Maybe you are quicker to anger and slower to listen. These are just a few examples, but the signals are highly personal.

According to Change Mental Health in their article "How to Spot and Avoid Burnout," common physical symptoms can include "frequent headaches, muscle tension, insomnia, and disrupted sleep patterns." These signs often appear before we consciously realize we are overwhelmed.

Take a moment to reflect on a time when you felt stressed or stretched too thin. What was your mood like? How did your body feel? Identifying these patterns helps you recognize burnout earlier, so you can intervene before it takes hold.`,
  },
  {
    id: 2,
    slug: 'science-behind-small-goal-setting',
    title: 'The Science Behind Small Goal Setting',
    excerpt: 'Learn how breaking large goals into smaller, attainable steps leverages your brain\'s reward system to maintain motivation and achieve lasting success.',
    author: 'Abel Garza',
    date: 'December 8, 2025',
    readTime: '5 min read',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop&q=80',
    content: `What is it?

Small goal setting is the practice of taking one large, ambitious objective, like losing fifty pounds, running a marathon, or learning to code a video game, and breaking it into smaller, more attainable steps. These "micro-goals" build on one another, gradually guiding you toward your end goal.

This approach works because it continuously rewards the brain, helping you stay motivated and engaged. Without these checkpoints, many people become discouraged by how overwhelming their original goal feels. It is the same reason most New Year's resolutions fade by February or March: there is no structure in place to highlight the progress being made. The mind craves a sense of accomplishment, and small goal setting feeds that need.

Why it Works

Whenever we experience accomplishment or pleasure, the brain releases dopamine often called the "feel-good" hormone. This happens because of the brain's built-in reward system. According to Deborah Halber, author of Brain Facts, rewards can be anything that "motivates us, causes us to learn, or elicits pleasurable feelings." She also notes that human behavior is largely driven by two forces: necessities—like food, sleep, and avoiding pain and rewards.

Understanding this makes the purpose of small goal setting much clearer. If our brains are constantly seeking rewards, then it is reasonable to structure our habits in a way that provides them. Completing a micro-goal acts as a reward, triggering a release of dopamine. That dopamine boost reinforces behavior and fuels motivation to keep going. It is the same satisfying feeling we get from checking an item off a to-do list; quick, tangible, and gratifying.

This also explains why long-term goals often fall flat. When the finish line is months away, the brain receives no immediate reward, making motivation difficult to sustain. Small goal setting solves this by giving the brain what it needs: frequent, consistent signals of progress. In other words, if we want to stay motivated, we must feed the reward system that drives us.

What to Do Next

Now that you understand the science behind small goal setting, the question becomes: what should you do with this information?

Start by identifying your overarching goal. Make sure it's something realistically attainable with your current resources and something you can commit to over time. Then, break that goal into smaller steps you can achieve weekly, or even daily. Be honest with yourself and your schedule. If you can only dedicate 30 minutes a day or 5 hours a week, that's perfectly okay. Your brain will still experience the same sense of satisfaction when you complete each micro-goal.

Once you've chosen your pace, the most important step is consistency. The reward system in your brain thrives on repeated dopamine hits, so sticking to your schedule matters. But remember: you're human. You'll miss a day or two. Life will interrupt you. Don't let that discourage you. You're always just one small accomplishment away from reactivating your brain's reward system and reigniting your motivation.

You've got this.`,
  },
];

// Helper function to get color for a blog post based on index
export const getBlogPostColor = (index: number): string => {
  const colors = [
    'rgb(var(--pastel-lavender))',  // 200 180 220
    'rgb(var(--pastel-teal))',      // 144 224 216
    'rgb(var(--pastel-pink))',      // 255 192 203
    'rgb(var(--pastel-blue))',      // 173 216 230
    'rgb(var(--pastel-orange))',    // 255 218 185
  ];
  return colors[index % colors.length];
};

// Helper function to get category color
export const getCategoryColor = (category: string): string => {
  const categoryColors: Record<string, string> = {
    'Personal Growth': 'rgb(var(--pastel-lavender))',
    'Productivity': 'rgb(var(--pastel-teal))',
    'Learning': 'rgb(var(--pastel-pink))',
    'Wellness': 'rgb(var(--pastel-blue))',
    'Strategy': 'rgb(var(--pastel-orange))',
  };
  return categoryColors[category] || 'rgb(var(--primary))';
};

