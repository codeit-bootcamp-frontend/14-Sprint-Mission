import { createContext, ReactNode, useContext, useState } from "react";

interface DropdownValueType {
  isOpen: boolean;
}

interface DropdownActionType {
  toggleDropdown: () => void;
  openDropdown: () => void;
  closeDropdown: () => void;
}

const DropdownValueContext = createContext<DropdownValueType | null>(null);
const DropdownActionContext = createContext<DropdownActionType | null>(null);

interface DropdownProviderProps {
  initialOpenState?: boolean;
  children: ReactNode;
}

const DropdownProvider = ({
  initialOpenState = false,
  children,
}: DropdownProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpenState);

  const actions: DropdownActionType = {
    toggleDropdown: () => setIsOpen((prev) => !prev),
    openDropdown: () => setIsOpen(true),
    closeDropdown: () => setIsOpen(false),
  };

  return (
    <DropdownValueContext.Provider value={{ isOpen }}>
      <DropdownActionContext.Provider value={actions}>
        {children}
      </DropdownActionContext.Provider>
    </DropdownValueContext.Provider>
  );
};

const useDropdownValue = (): DropdownValueType => {
  const context = useContext(DropdownValueContext);

  if (context === null) {
    throw new Error("useDropdownValue must be used within a DropdownProvider");
  }

  return context;
};

const useDropdownAction = (): DropdownActionType => {
  const context = useContext(DropdownActionContext);

  if (context === null) {
    throw new Error("useDropdownAction must be used within a DropdownProvider");
  }

  return context;
};

export { DropdownProvider, useDropdownValue, useDropdownAction };
