'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-full" />; // Premium skeleton to avoid layout shift
  }

  // Toggle strictly between light and dark modes
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full text-gray-500 hover:text-primary-700 hover:bg-primary-50 dark:text-gray-400 dark:hover:text-primary-300 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 hover:border-primary-100 dark:hover:border-gray-700 shadow-sm transition-all duration-300 flex items-center justify-center group"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 group-hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 group-hover:-rotate-12" />
      )}
    </button>
  );
}

