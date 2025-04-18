import React, { useEffect, useState } from "react";

const presetBreakpoints = {
  mobile: 767,
  tablet: 1199,
  desktop: 1200,
};

function useResponsiveCount(breakpoints, defaultCount) {
  const resolveBreakpoints = () => {
    return Object.entries(breakpoints)
      .map(([label, count]) => {
        const maxWidth = presetBreakpoints[label];
        return [maxWidth, count];
      })
      .sort((a, b) => a[0] - b[0]);
  };

  const getCount = () => {
    const width = window.innerWidth;
    const sorted = resolveBreakpoints();

    for (const [bp, count] of sorted) {
      if (width <= bp) return count;
    }

    return defaultCount;
  };

  const [visibleCount, setVisibleCount] = useState(getCount);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getCount());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return visibleCount;
}

export default useResponsiveCount;
