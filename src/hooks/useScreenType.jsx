import { useState, useEffect, useCallback, useRef } from 'react';

const screenTypeValue = {
  mobile: 767,
  tablet: 1199,
};

const getScreenType = (winWidth) =>
  winWidth < screenTypeValue.mobile
    ? 0
    : winWidth < screenTypeValue.tablet
    ? 1
    : 2;
    
export const useScreenType = () => {
  const [screenType, setScreenType] = useState(() =>
    typeof window !== 'undefined' ? getScreenType(window.innerWidth) : 2
  );

  const resizeTimeout = useRef(null);

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
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, [handleResize]);

  return screenType;
};
