import { Interest } from '@/lib/types/interest';

// Mock interests database
let mockInterests: Interest[] = [
  {
    id: '1',
    title: 'Web Development',
    category: 'Technology',
    icon: '💻',
    progress: 75,
    description: 'Learning modern web frameworks and best practices',
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Photography',
    category: 'Creative',
    icon: '📸',
    progress: 45,
    description: 'Exploring composition and lighting techniques',
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Spanish Language',
    category: 'Language',
    icon: '🇪🇸',
    progress: 30,
    description: 'Building vocabulary and conversational skills',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function mockGetInterests(): Promise<Interest[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return [...mockInterests];
}

export async function mockCreateInterest(interest: Omit<Interest, 'id' | 'createdAt' | 'updatedAt'>): Promise<Interest> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  const newInterest: Interest = {
    ...interest,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  mockInterests.push(newInterest);
  return newInterest;
}

export async function mockUpdateInterest(id: string, updates: Partial<Interest>): Promise<Interest | null> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  const index = mockInterests.findIndex((i) => i.id === id);
  if (index === -1) return null;
  
  mockInterests[index] = {
    ...mockInterests[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  
  return mockInterests[index];
}

export async function mockDeleteInterest(id: string): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  const index = mockInterests.findIndex((i) => i.id === id);
  if (index === -1) return false;
  
  mockInterests.splice(index, 1);
  return true;
}

