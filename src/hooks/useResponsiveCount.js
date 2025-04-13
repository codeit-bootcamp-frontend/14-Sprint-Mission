import { useState, useLayoutEffect } from "react";

const useResponsiveCount = ({ pc = 4, tablet = 2, mobile = 1 }) => {
  const [count, setCount] = useState(pc);

  useLayoutEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= BREAKPOINTS.pc) {
        setCount(pc);
      } else if (width >= BREAKPOINTS.tablet) {
        setCount(tablet);
      } else {
        setCount(mobile);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, [pc, tablet, mobile]);

  return count;
};

export default useResponsiveCount;

// breakpoints.js
export const BREAKPOINTS = {
  pc: 1200,
  tablet: 768,
};
