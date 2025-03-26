import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (targetRef.current && !targetRef.current.contains(e.target)) {
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
