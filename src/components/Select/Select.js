import { Children, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ArrowDownIcon from "../../assets/icons/ic_arrow_down.svg";
import SortIcon from "../../assets/icons/ic_sort.svg";

import styles from "./Select.module.css";

const sortList = {
  recent: "최신순",
  favorite: "좋아요순",
};

const Select = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useRef(null);

  const currentSortOption = searchParams.get("sortBy") ?? "recent";

  const toggleClickHandler = () => setIsOpen((prev) => !prev);

  const changeSearchParam = (value) => {
    setSearchParams((prev) => {
      const newSearchParams = new URLSearchParams(prev);
      newSearchParams.set("sortBy", value);

      return newSearchParams;
    });
  };

  useEffect(() => {
    if (!targetRef) return;

    const handler = (e) => {
      if (!targetRef.current.contains(e.target)) setIsOpen(false);
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [targetRef]);

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

export default Select;
