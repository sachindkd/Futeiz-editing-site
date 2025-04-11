import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Track hover state over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('hover-trigger');
      
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: 'rgba(16, 185, 129, 0)', 
      border: '2px solid rgb(16, 185, 129)',
      transition: {
        type: 'spring',
        mass: 0.3,
        stiffness: 800,
        damping: 25,
      }
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      border: '2px solid rgb(16, 185, 129)',
      transition: {
        type: 'spring',
        mass: 0.3,
        stiffness: 800,
        damping: 25,
      }
    }
  };

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && 
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full z-50 pointer-events-none"
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
    />
  );
}
