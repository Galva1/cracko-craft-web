'use client';

import React, { createContext, useState } from 'react';

type ThemeContextType = {
  theme: 'day' | 'night';
  toggleTheme: () => void;
};


// Valor padrão só para tipagem inicial
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'day',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'day' | 'night'>(
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'night'
    : 'day'
);


  const toggleTheme = () => {
    setTheme(prev => (prev === 'day' ? 'night' : 'day'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
