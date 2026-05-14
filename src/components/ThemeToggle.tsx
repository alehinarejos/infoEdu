'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder to avoid layout shift
  }

  // Cycle: system -> light -> dark -> system
  const toggleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const getIcon = () => {
    if (theme === 'system') return <Monitor className="h-5 w-5" />;
    if (theme === 'dark') return <Sun className="h-5 w-5" />;
    return <Moon className="h-5 w-5" />;
  };

  const getLabel = () => {
    if (theme === 'system') return "Tema automático (Sistema)";
    if (theme === 'dark') return "Modo oscuro activado";
    return "Modo claro activado";
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full text-gray-500 hover:text-primary-700 hover:bg-primary-50 dark:text-gray-400 dark:hover:text-primary-300 dark:hover:bg-gray-800 border border-transparent hover:border-primary-100 dark:hover:border-gray-700 transition-all duration-300 flex items-center gap-2 group"
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </button>
  );
}
