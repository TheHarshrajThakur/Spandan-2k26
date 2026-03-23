import { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark] = useState(true);

  // Coordinates of toggle button (for ripple origin)
  const rippleOrigin = useRef({ x: window.innerWidth - 48, y: 72 });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
  }, []);

  const toggle = useCallback(() => {
    // Toggle removed as per user request
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggle, rippleOrigin }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
