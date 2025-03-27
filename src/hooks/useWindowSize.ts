import { useEffect, useState } from "react";

import debounce from "@/utils/debounce";

type DeviceType = "desktop" | "tablet" | "mobile";

type ValidateParams = {
  width: number;
  desktop: number;
  tablet: number;
};

type WindowSizeOptions = {
  desktop?: number;
  tablet?: number;
};

const validate = ({ width, desktop, tablet }: ValidateParams) => {
  if (width >= desktop) {
    return "desktop";
  }

  if (width >= tablet) {
    return "tablet";
  }

  return "mobile";
};

const useWindowSize = ({
  desktop = 1200,
  tablet = 768,
}: WindowSizeOptions = {}): DeviceType => {
  const [windowSize, setWindowSize] = useState<DeviceType>(() => {
    return validate({
      width: window.innerWidth,
      desktop,
      tablet,
    });
  });

  useEffect(() => {
    const handler = debounce((e: UIEvent) => {
      const target = e.target as Window;
      const nextWidth = target.innerWidth;

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
