import { useState, useEffect } from "react";

function usePageSize() {
  const [pageSize, setPageSize] = useState(() => {
    const width = window.innerWidth;
    if (width < 768) return 4;
    if (width < 1200) return 6;
    return 10;
  });

  useEffect(() => {
    const handleResize = () => {
      setPageSize(() => {
        const width = window.innerWidth;
        if (width < 768) return 4;
        if (width < 1200) return 6;
        return 10;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return pageSize;
}

export default usePageSize;
