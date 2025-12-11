import {
  Camera,
  Dumbbell,
  Music,
  Code,
  BookOpen,
  Languages,
  Palette,
  Gamepad2,
  Film,
  UtensilsCrossed,
  Heart,
  Brain,
  Briefcase,
  GraduationCap,
  Lightbulb,
  LucideIcon,
} from 'lucide-react';

export interface InterestIconConfig {
  icon: LucideIcon;
  pastelBg: string; // CSS variable or RGB value for light pastel background
  iconBg: string; // CSS variable or RGB value for darker icon badge
}

// Map of category keywords to icon and color configurations
const categoryIconMap: Record<string, InterestIconConfig> = {
  // Photography
  photography: {
    icon: Camera,
    pastelBg: 'rgb(144, 224, 216)', // pastel-teal
    iconBg: 'rgb(72, 187, 180)', // darker teal
  },
  // Fitness
  fitness: {
    icon: Dumbbell,
    pastelBg: 'rgb(200, 180, 220)', // pastel-lavender
    iconBg: 'rgb(160, 140, 200)', // darker lavender
  },
  // Music/Guitar
  music: {
    icon: Music,
    pastelBg: 'rgb(255, 218, 185)', // pastel-peach/orange
    iconBg: 'rgb(255, 180, 140)', // darker peach
  },
  guitar: {
    icon: Music,
    pastelBg: 'rgb(255, 218, 185)', // pastel-peach/orange
    iconBg: 'rgb(255, 180, 140)', // darker peach
  },
  // Coding/Technology
  coding: {
    icon: Code,
    pastelBg: 'rgb(173, 216, 230)', // pastel-blue
    iconBg: 'rgb(100, 180, 200)', // darker blue
  },
  technology: {
    icon: Code,
    pastelBg: 'rgb(173, 216, 230)', // pastel-blue
    iconBg: 'rgb(100, 180, 200)', // darker blue
  },
  // Language
  language: {
    icon: Languages,
    pastelBg: 'rgb(255, 192, 203)', // pastel-pink
    iconBg: 'rgb(255, 150, 170)', // darker pink
  },
  // Creative/Art
  creative: {
    icon: Palette,
    pastelBg: 'rgb(200, 180, 220)', // pastel-lavender
    iconBg: 'rgb(160, 140, 200)', // darker lavender
  },
  art: {
    icon: Palette,
    pastelBg: 'rgb(255, 192, 203)', // pastel-pink
    iconBg: 'rgb(255, 150, 170)', // darker pink
  },
  // Gaming
  gaming: {
    icon: Gamepad2,
    pastelBg: 'rgb(144, 224, 216)', // pastel-teal
    iconBg: 'rgb(72, 187, 180)', // darker teal
  },
  // Film/Video
  film: {
    icon: Film,
    pastelBg: 'rgb(173, 216, 230)', // pastel-blue
    iconBg: 'rgb(100, 180, 200)', // darker blue
  },
  video: {
    icon: Film,
    pastelBg: 'rgb(173, 216, 230)', // pastel-blue
    iconBg: 'rgb(100, 180, 200)', // darker blue
  },
  // Cooking/Food
  cooking: {
    icon: UtensilsCrossed,
    pastelBg: 'rgb(255, 218, 185)', // pastel-peach
    iconBg: 'rgb(255, 180, 140)', // darker peach
  },
  food: {
    icon: UtensilsCrossed,
    pastelBg: 'rgb(255, 218, 185)', // pastel-peach
    iconBg: 'rgb(255, 180, 140)', // darker peach
  },
  // Health/Wellness
  health: {
    icon: Heart,
    pastelBg: 'rgb(255, 192, 203)', // pastel-pink
    iconBg: 'rgb(255, 150, 170)', // darker pink
  },
  wellness: {
    icon: Heart,
    pastelBg: 'rgb(255, 192, 203)', // pastel-pink
    iconBg: 'rgb(255, 150, 170)', // darker pink
  },
  // Learning/Education
  learning: {
    icon: BookOpen,
    pastelBg: 'rgb(144, 224, 216)', // pastel-teal
    iconBg: 'rgb(72, 187, 180)', // darker teal
  },
  education: {
    icon: GraduationCap,
    pastelBg: 'rgb(173, 216, 230)', // pastel-blue
    iconBg: 'rgb(100, 180, 200)', // darker blue
  },
  // Career/Business
  career: {
    icon: Briefcase,
    pastelBg: 'rgb(200, 180, 220)', // pastel-lavender
    iconBg: 'rgb(160, 140, 200)', // darker lavender
  },
  business: {
    icon: Briefcase,
    pastelBg: 'rgb(200, 180, 220)', // pastel-lavender
    iconBg: 'rgb(160, 140, 200)', // darker lavender
  },
  // Mental Health/Mindfulness
  mental: {
    icon: Brain,
    pastelBg: 'rgb(200, 180, 220)', // pastel-lavender
    iconBg: 'rgb(160, 140, 200)', // darker lavender
  },
  mindfulness: {
    icon: Brain,
    pastelBg: 'rgb(200, 180, 220)', // pastel-lavender
    iconBg: 'rgb(160, 140, 200)', // darker lavender
  },
};

// Default configuration for unmatched categories
const defaultConfig: InterestIconConfig = {
  icon: Lightbulb,
  pastelBg: 'rgb(200, 180, 220)', // pastel-lavender (neutral default)
  iconBg: 'rgb(160, 140, 200)', // darker lavender
};

/**
 * Get icon and color configuration for an interest based on its category or title
 * @param category - The interest category
 * @param title - The interest title (used as fallback)
 * @returns Icon and color configuration
 */
export function getInterestIconConfig(
  category?: string,
  title?: string
): InterestIconConfig {
  // First try to match by category (case-insensitive)
  if (category) {
    const categoryKey = category.toLowerCase().trim();
    if (categoryIconMap[categoryKey]) {
      return categoryIconMap[categoryKey];
    }
  }

  // Then try to match by title keywords (case-insensitive)
  if (title) {
    const titleLower = title.toLowerCase();
    for (const [key, config] of Object.entries(categoryIconMap)) {
      if (titleLower.includes(key)) {
        return config;
      }
    }
  }

  // Return default if no match found
  return defaultConfig;
}


