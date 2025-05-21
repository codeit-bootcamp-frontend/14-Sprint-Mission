import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export type OptionType = {
  value: string;
  label: string;
};

interface SelectValueContextType {
  isOpen: boolean;
  option: OptionType;
}

const SelectValueContext = createContext<SelectValueContextType | null>(null);

interface SelectActionContextType {
  changeOpen: (openState: boolean) => void;
  changeOption: (value: OptionType) => void;
}

const SelectActionContext = createContext<SelectActionContextType | null>(null);

interface SelectProviderProps {
  children: ReactNode;
  initialOption: OptionType;
}

export const SelectProvider = ({
  children,
  initialOption,
}: SelectProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(initialOption);

  const memoizedSelectValue = useMemo(
    () => ({ isOpen, option }),
    [isOpen, option]
  );

  const memoizedSelectAction = useMemo(
    () => ({
      changeOpen: (openState: boolean) => {
        setIsOpen(openState);
      },
      changeOption: (option: { value: string; label: string }) => {
        setOption(option);
      },
    }),
    []
  );

  return (
    <SelectValueContext.Provider value={memoizedSelectValue}>
      <SelectActionContext.Provider value={memoizedSelectAction}>
        {children}
      </SelectActionContext.Provider>
    </SelectValueContext.Provider>
  );
};

export const useSelectValueContext = () => {
  const context = useContext(SelectValueContext);

  if (!context) {
    throw new Error("SelectValueContext should be used in Select.");
  }

  return context;
};

export const useSelectActionContext = () => {
  const context = useContext(SelectActionContext);

  if (!context) {
    throw new Error("SelectActionContext should be used in Select.");
  }

  return context;
};
