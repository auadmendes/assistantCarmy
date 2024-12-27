"use client"; // Mark this component as client-side

import { useEffect } from "react";
import { useThemeStore } from "@/store/theme-store";

export default function ClientOnlyComponent() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const storedTheme = localStorage.getItem('app-theme') as 'light' | 'dark';
    const defaultTheme = storedTheme || 'light'; // Default to 'light' if no stored theme
    setTheme(defaultTheme);

    // Apply the theme class to the <html> tag
    document.documentElement.className = defaultTheme;
  }, [setTheme]);

  return null; // No need to render anything
}
