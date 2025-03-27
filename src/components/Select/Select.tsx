import { Children, ReactElement, useState } from "react";
import { useSearchParams } from "react-router-dom";

import useOutsideClick from "@/hooks/useOutsideClick";

import ArrowDownIcon from "@/assets/icons/ic_arrow_down.svg";
import SortIcon from "@/assets/icons/ic_sort.svg";
import styles from "./Select.module.css";

interface CustomReactNode extends ReactElement {
  props: {
    "data-sort-value": string;
  };
}

type SelectProps = {
  children?: CustomReactNode | CustomReactNode[];
};

const Select = ({ children }: SelectProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useOutsideClick<HTMLButtonElement>(() => setIsOpen(false));

  const currentSortOption =
    (searchParams.get("sortBy") as "recent" | "favorite") ?? "recent";

  const toggleClickHandler = () => setIsOpen((prev) => !prev);

  const changeSearchParam = (value: string) => {
    setSearchParams((prev) => {
      const newSearchParams = new URLSearchParams(prev);
      newSearchParams.set("sortBy", value);

      return newSearchParams;
    });
  };

  return (
    <button
      type="button"
      ref={targetRef}
      className={styles.select_button}
      onClick={toggleClickHandler}
    >
      <span>{sortList[currentSortOption]}</span>
      <img className={styles.sort_icon} src={SortIcon} alt="정렬 아이콘" />
      <img
        className={styles.arrow_icon}
        src={ArrowDownIcon}
        alt="아래 방향 삼각 화살표"
      />
      {isOpen && (
        <ul className={styles.toggle_list}>
          {Children.map(children, (child) => {
            if (!child) {
              return null;
            }

            const sortValue = child.props["data-sort-value"];
            return (
              <li
                className={styles.toggle_list_item}
                onClick={() => changeSearchParam(sortValue)}
              >
                {child}
              </li>
            );
          })}
        </ul>
      )}
    </button>
  );
};

const sortList = {
  recent: "최신순",
  favorite: "좋아요순",
} as const;

export default Select;
