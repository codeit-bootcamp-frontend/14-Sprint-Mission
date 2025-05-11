'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

const screenTypeValue = {
  mobile: 767,
  tablet: 1199,
};

const getScreenType = (winWidth: number) =>
  winWidth < screenTypeValue.mobile
    ? 0
    : winWidth < screenTypeValue.tablet
    ? 1
    : 2;
    
export const useScreenType = () => {

  const winWidth = useWindowWidth();


  const [screenType, setScreenType] = useState(() =>
    typeof window !== 'undefined' ? getScreenType(winWidth) : 2
  );

  const resizeTimeout = useRef<number | null>(null);

  const handleResize = useCallback(() => {
    if (resizeTimeout.current) {
      clearTimeout(resizeTimeout.current);
    }

    resizeTimeout.current = window.setTimeout(() => {
      const width = window.innerWidth;
      const screenCount = getScreenType(width);
      setScreenType(screenCount);
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, [handleResize]);

  return screenType;
};

export const useWindowWidth = () => {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};