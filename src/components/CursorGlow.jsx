import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CursorGlow = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for smooth tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for the trailing effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[100] rounded-full mix-blend-screen"
      style={{
        width: 300,
        height: 300,
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? (isDark ? 0.4 : 0.6) : 0,
        background: `radial-gradient(circle at center, var(--c-accent), transparent 70%)`,
        filter: 'blur(40px)',
        transition: 'opacity 0.5s ease',
      }}
    >
      <div 
        className="absolute inset-0 rounded-full mix-blend-screen"
        style={{
          background: `radial-gradient(circle at center, var(--c-accent2), transparent 50%)`,
          filter: 'blur(20px)',
          opacity: 0.6
        }}
      />
      <div 
        className="absolute inset-0 rounded-full mix-blend-screen"
        style={{
          background: `radial-gradient(circle at center, var(--c-accent3), transparent 30%)`,
          filter: 'blur(10px)',
          opacity: 0.4
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
