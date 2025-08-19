import React from 'react';
import { useTheme } from '../contexts/ThemeContex'; 

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 rounded-md px-4 py-2 font-medium 
                 text-slate-700 dark:text-white 
                 hover:bg-slate-300 dark:hover:bg-slate-700 
                 transition-colors"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};
