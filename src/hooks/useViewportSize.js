import { useEffect, useState } from "react";

export default function useViewPortSize() {
  const getViewportType = (size) => (size < 768 ? "mobile" : size < 1200 ? "tablet" : "desktop");
  const [viewportSize, setViewportSize] = useState(getViewportType(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setViewportSize(getViewportType(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { viewportSize };
}
