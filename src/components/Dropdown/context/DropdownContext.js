import { createContext, useContext, useState } from "react";

const DropdownValueContext = createContext(null);
const DropdownActionContext = createContext(null);

export const DropdownProvider = ({ initialOpenState = false, children }) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  return (
    <DropdownValueContext.Provider value={{ isOpen }}>
      <DropdownActionContext.Provider value={{ setIsOpen }}>
        {children}
      </DropdownActionContext.Provider>
    </DropdownValueContext.Provider>
  );
};

export const useDropdownValue = () => {
  const context = useContext(DropdownValueContext);

  if (!context) {
    throw new Error("useDropdownValue should be used within DropdownProvider");
  }

  return context;
};

export const useDropdownAction = () => {
  const context = useContext(DropdownActionContext);

  if (!context) {
    throw new Error("useDropdownAction should be used within DropdownProvider");
  }

  return context;
};
