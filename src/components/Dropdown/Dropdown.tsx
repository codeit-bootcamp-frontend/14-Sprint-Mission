import clsx from "clsx";
import { Children, PropsWithChildren, ReactNode } from "react";

import {
  DropdownProvider,
  useDropdownValue,
  useDropdownAction,
} from "./context/DropdownContext";
import useOutsideClick from "@/hooks/useOutsideClick";

import styles from "./Dropdown.module.css";

type DropdownProviderWrapperProps = {
  renderButton: ReactNode;
  children: ReactNode;
};

const DropdownProviderWrapper = ({
  renderButton,
  children,
}: DropdownProviderWrapperProps) => {
  return (
    <DropdownProvider>
      <DropdownRoot renderButton={renderButton}>{children}</DropdownRoot>
    </DropdownProvider>
  );
};

type DropdownRootProps = {
  children: ReactNode;
  renderButton: ReactNode;
  className?: string;
};

const DropdownRoot = ({
  children,
  renderButton,
  className,
}: DropdownRootProps) => {
  const { closeDropdown, toggleDropdown } = useDropdownAction();
  const buttunRef = useOutsideClick<HTMLDivElement>(() => closeDropdown());

  return (
    <div
      ref={buttunRef}
      role="button"
      className={clsx([styles.dropdown_button, className])}
      onClick={() => toggleDropdown()}
    >
      {renderButton}
      {children}
    </div>
  );
};

const Body = ({ children }: PropsWithChildren) => {
  const { isOpen } = useDropdownValue();

  return (
    <ul className={clsx(styles.list_window, { [styles.hidden]: !isOpen })}>
      {Children.map(children, (node) => (
        <li className={styles.list_item}>{node}</li>
      ))}
    </ul>
  );
};

const Dropdown = Object.assign(DropdownProviderWrapper, { Body });

export default Dropdown;
