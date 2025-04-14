"use client";

import { useState, useEffect, useCallback } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const updatePosition = useCallback(() => {
    setScrollPosition(window.scrollY);
    setIsScrolling(true);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (!isScrolling) {
        updatePosition();
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updatePosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isScrolling, updatePosition]);

  return scrollPosition;
};
