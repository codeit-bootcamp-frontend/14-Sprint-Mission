import { useEffect, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(
  callback: (e: MouseEvent) => void
) => {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (targetRef.current && !targetRef.current.contains(e.target as Node)) {
        callback(e);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [callback]);

  return targetRef;
};

export default useOutsideClick;
