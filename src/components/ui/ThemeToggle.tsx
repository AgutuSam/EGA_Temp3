import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
export function ThemeToggle() {
  const {
    theme,
    setTheme
  } = useTheme();
  return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-2 rounded-full bg-secondary/20 text-foreground hover:bg-secondary/30 transition-colors" aria-label="Toggle theme">
      {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>;
}