import clsx from "clsx";
import { Children, useRef } from "react";

import {
  DropdownProvider,
  useDropdownValue,
  useDropdownAction,
} from "./context/DropdownContext";
import useOutsideClick from "../../hooks/useOutsideClick";

import styles from "./Dropdown.module.css";

const DropdownProviderWrapper = ({ renderButton, children }) => {
  return (
    <DropdownProvider>
      <DropdownRoot renderButton={renderButton}>{children}</DropdownRoot>
    </DropdownProvider>
  );
};

const DropdownRoot = ({ children, renderButton, className }) => {
  const { setIsOpen } = useDropdownAction();
  const buttunRef = useRef(null);
  useOutsideClick(buttunRef, () => setIsOpen(false));

  return (
    <div
      ref={buttunRef}
      role="button"
      className={clsx([styles.dropdown_button, className])}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {renderButton}
      {children}
    </div>
  );
};

const Body = ({ children }) => {
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
