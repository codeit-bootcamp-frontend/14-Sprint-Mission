import { useState, useContext, createContext, useCallback } from "react";
import arrowDown from "@assets/images/ic_arrow_down.svg";
import styles from "./drop-down.module.css";

export type OrderBy = "favorite" | "recent";

interface DropDownContextType {
  orderBy: "favorite" | "recent";
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
  handleChangeOrderBy: (order: OrderBy) => void;
}

interface DropDownContainerProps {
  orderBy: OrderBy;
  handleChangeOrderBy: (order: OrderBy) => void;
  children: React.ReactNode;
}

const DropDownContext = createContext<DropDownContextType | undefined>(
  undefined
);

const useDropDownContext = () => {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error("DropDown에 감싸져 있어야 합니다.");
  }
  return context;
};

function DropDownContainer({
  orderBy = "recent",
  handleChangeOrderBy,
  children,
}: DropDownContainerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick: () => void = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <DropDownContext.Provider
      value={{ orderBy, isOpen, handleClick, handleChangeOrderBy, setIsOpen }}
    >
      <div className={styles.container}>{children}</div>
    </DropDownContext.Provider>
  );
}

function DropDownButton() {
  const { orderBy, handleClick } = useDropDownContext();

  return (
    <button className={styles.button} onClick={handleClick}>
      {orderBy === "recent" ? "최신순" : "좋아요순"}
      <img src={arrowDown} />
    </button>
  );
}

interface DropDownListProps {
  children: React.ReactNode;
}

function DropDownList({ children }: DropDownListProps) {
  const { isOpen } = useDropDownContext();

  if (!isOpen) return null;
  return <ul className={styles.list}>{children}</ul>;
}

interface DropDownOptionProps {
  option: OrderBy;
}

const dict = { favorite: "좋아요순", recent: "최신순" };

function DropDownOption({ option }: DropDownOptionProps) {
  const { handleChangeOrderBy, setIsOpen } = useDropDownContext();

  const handleClick = () => {
    handleChangeOrderBy(option);
    setIsOpen((prev) => !prev);
  };

  return (
    <li onClick={handleClick} className={styles.option}>
      {dict[option]}
    </li>
  );
}

interface DropDownProps {
  /** 현재 정렬 기준 값 */
  orderBy: OrderBy;
  /** 정렬 기준 변경 콜백 */
  handleChangeOrderBy: (order: OrderBy) => void;
}

/** DropDown 컴포넌트를 한 번에 사용하기 위한 래퍼 */
export default function DropDown({
  orderBy,
  handleChangeOrderBy,
}: DropDownProps) {
  return (
    <DropDownContainer
      orderBy={orderBy}
      handleChangeOrderBy={handleChangeOrderBy}
    >
      <DropDownButton />
      <DropDownList>
        <DropDownOption option="favorite" />
        <DropDownOption option="recent" />
      </DropDownList>
    </DropDownContainer>
  );
}
