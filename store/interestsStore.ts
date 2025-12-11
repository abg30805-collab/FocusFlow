import { create } from 'zustand';
import { Interest } from '@/lib/types/interest';
import {
  mockGetInterests,
  mockCreateInterest,
  mockUpdateInterest,
  mockDeleteInterest,
} from '@/lib/api/mock/interests';

interface InterestsStore {
  interests: Interest[];
  isLoading: boolean;
  fetchInterests: () => Promise<void>;
  addInterest: (interest: Omit<Interest, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateInterest: (id: string, updates: Partial<Interest>) => Promise<void>;
  deleteInterest: (id: string) => Promise<void>;
}

export const useInterestsStore = create<InterestsStore>((set) => ({
  interests: [],
  isLoading: false,
  fetchInterests: async () => {
    set({ isLoading: true });
    try {
      const interests = await mockGetInterests();
      set({ interests, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.error('Failed to fetch interests:', error);
    }
  },
  addInterest: async (interest) => {
    set({ isLoading: true });
    try {
      const newInterest = await mockCreateInterest(interest);
      set((state) => ({
        interests: [...state.interests, newInterest],
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false });
      console.error('Failed to add interest:', error);
    }
  },
  updateInterest: async (id, updates) => {
    set({ isLoading: true });
    try {
      const updated = await mockUpdateInterest(id, updates);
      if (updated) {
        set((state) => ({
          interests: state.interests.map((i) => (i.id === id ? updated : i)),
          isLoading: false,
        }));
      }
    } catch (error) {
      set({ isLoading: false });
      console.error('Failed to update interest:', error);
    }
  },
  deleteInterest: async (id) => {
    set({ isLoading: true });
    try {
      const success = await mockDeleteInterest(id);
      if (success) {
        set((state) => ({
          interests: state.interests.filter((i) => i.id !== id),
          isLoading: false,
        }));
      }
    } catch (error) {
      set({ isLoading: false });
      console.error('Failed to delete interest:', error);
    }
  },
}));

