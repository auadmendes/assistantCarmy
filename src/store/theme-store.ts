
import { create } from "zustand";

interface ThemeStore {
  theme: 'light' | 'dark'; // Define theme types
  setTheme: (newTheme: 'light' | 'dark') => void; // Action to change the theme
}

// Initialize store with a default theme
export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'light', // Default value
  setTheme: (newTheme: 'light' | 'dark') => {
    set({ theme: newTheme });
    if (typeof window !== 'undefined') { // Ensure we're on the client
      localStorage.setItem('app-theme', newTheme); // Save theme to localStorage
    }
  },
}));
