import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/lib/types/user';
import { mockLogin, mockSignup, mockLogout } from '@/lib/api/mock/auth';

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          const user = await mockLogin(email, password);
          if (user) {
            set({ user, isAuthenticated: true, isLoading: false });
          } else {
            set({ isLoading: false });
            throw new Error('Invalid credentials');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },
      signup: async (email: string, password: string, name: string) => {
        set({ isLoading: true });
        try {
          const user = await mockSignup(email, password, name);
          if (user) {
            set({ user, isAuthenticated: true, isLoading: false });
          } else {
            set({ isLoading: false });
            throw new Error('Signup failed');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },
      logout: async () => {
        set({ isLoading: true });
        await mockLogout();
        set({ user: null, isAuthenticated: false, isLoading: false });
      },
    }),
    {
      name: 'user-storage',
    }
  )
);

