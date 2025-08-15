'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function DarkmodeToggle() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div>
      <Button
        variant="outline"
        onClick={handleTheme}
        className="transition-all"
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
}
