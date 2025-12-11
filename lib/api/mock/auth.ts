import { User } from '@/lib/types/user';

// Mock users database
const mockUsers: User[] = [
  {
    id: '1',
    email: 'demo@focusflow.com',
    name: 'Demo User',
    createdAt: new Date().toISOString(),
  },
];

export async function mockLogin(email: string, password: string): Promise<User | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  // For demo purposes, accept any email/password combination
  // In a real app, you'd validate against a database
  const user = mockUsers.find((u) => u.email === email) || mockUsers[0];
  
  if (user) {
    return user;
  }
  
  return null;
}

export async function mockSignup(email: string, password: string, name: string): Promise<User | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const newUser: User = {
    id: Date.now().toString(),
    email,
    name,
    createdAt: new Date().toISOString(),
  };
  
  mockUsers.push(newUser);
  return newUser;
}

export async function mockLogout(): Promise<void> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));
}

