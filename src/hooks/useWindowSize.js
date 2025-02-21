import { useEffect, useState } from "react";
import debounce from "../utils/debounce";

const validate = ({ width, desktop, tablet }) => {
  if (width >= desktop) {
    return "desktop";
  }

  if (width >= tablet) {
    return "tablet";
  }

  return "mobile";
};

const useWindowSize = ({ desktop = 1200, tablet = 768 }) => {
  const [windowSize, setWindowSize] = useState(() => {
    return validate({
      width: window.innerWidth,
      desktop,
      tablet,
    });
  });

  useEffect(() => {
    const handler = debounce((e) => {
      const nextWidth = e.target.innerWidth;

      const currentWindowSize = validate({
        width: nextWidth,
        desktop,
        tablet,
      });

      setWindowSize(currentWindowSize);
    }, 20);

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [desktop, tablet]);

  return windowSize;
};

export default useWindowSize;
