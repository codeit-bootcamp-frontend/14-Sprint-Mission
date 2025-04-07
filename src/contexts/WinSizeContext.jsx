import { createContext, useContext, useEffect, useState } from "react";

const WinSizeContext = createContext();

function WinSizeProvider({ children }) {
  const [winSize, setWinSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        console.log("mobile");
        setWinSize("mobile");
      } else if (window.innerWidth <= 1200) {
        console.log("tablet");
        setWinSize("tablet");
      } else {
        setWinSize("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value = { winSize };

  return (
    <WinSizeContext.Provider value={value}>{children}</WinSizeContext.Provider>
  );
}

const useWinSize = () => {
  const context = useContext(WinSizeContext);
  return context;
};

export { WinSizeProvider, useWinSize, WinSizeContext };
