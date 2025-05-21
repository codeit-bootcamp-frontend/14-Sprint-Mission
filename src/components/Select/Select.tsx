"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Children, ReactElement, useState } from "react";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useOutsideClick<HTMLButtonElement>(() => setIsOpen(false));

  const currentSortOption =
    (searchParams.get("sortBy") as "recent" | "favorite") ?? "recent";

  const toggleClickHandler = () => setIsOpen((prev) => !prev);

  const changeSearchParam = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sortBy", value);

    router.push(`?${newSearchParams}`, { scroll: false });
  };

  return (
    <button
      type="button"
      ref={targetRef}
      className={styles.select_button}
      onClick={toggleClickHandler}
    >
      <span>{sortList[currentSortOption]}</span>
      <SortIcon className={styles.sort_icon} />
      <ArrowDownIcon className={styles.arrow_icon} />
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
