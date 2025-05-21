"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

import {
  SelectProvider,
  useSelectValueContext,
  useSelectActionContext,
} from "./context/SelectContext";
import type { OptionType } from "./context/SelectContext";
import useOutsideClick from "@/hooks/useOutsideClick";

import ArrowDownIcon from "@/assets/icons/ic_arrow_down.svg";
import SortIcon from "@/assets/icons/ic_sort.svg";
import styles from "./Select.module.css";

interface SelectWrapperProps {
  children: ReactNode;
  initialOption: OptionType;
}

const SelectWrapper = ({ children, initialOption }: SelectWrapperProps) => {
  return (
    <SelectProvider initialOption={initialOption}>
      <span className={styles.select_wrapper}>{children}</span>
    </SelectProvider>
  );
};

const SelectTrigger = ({ children }: PropsWithChildren) => {
  const { isOpen } = useSelectValueContext();
  const { changeOpen } = useSelectActionContext();
  const targetRef = useOutsideClick<HTMLButtonElement>(() => changeOpen(false));

  const toggleClickHandler = () => changeOpen(!isOpen);

  return (
    <button
      type="button"
      ref={targetRef}
      className={styles.select_button}
      onClick={toggleClickHandler}
    >
      <span>{children}</span>
      <SortIcon className={styles.sort_icon} />
      <ArrowDownIcon className={styles.arrow_icon} />
    </button>
  );
};

const SelectList = ({ children }: PropsWithChildren) => {
  const { isOpen } = useSelectValueContext();
  return isOpen && <ul className={styles.toggle_list}>{children}</ul>;
};

interface SelectItemProps {
  children: ReactNode;
  option: OptionType;
  queryStringKey: string;
}

const SelectItem = ({ children, queryStringKey, option }: SelectItemProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQueryValue = searchParams.get(queryStringKey);
  const { changeOpen, changeOption } = useSelectActionContext();

  const changeSearchParam = (selectedOption: OptionType) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(queryStringKey, selectedOption.value);

    router.push(`?${newSearchParams}`, { scroll: false });

    changeOption(option);
    changeOpen(false);
  };

  return (
    <li
      role="button"
      aria-label={option.label}
      className={clsx(styles.toggle_list_item, {
        [styles.selected]: currentQueryValue === option.value,
      })}
      onClick={() => changeSearchParam(option)}
    >
      {children}
    </li>
  );
};

SelectWrapper.Trigger = SelectTrigger;
SelectWrapper.List = SelectList;
SelectWrapper.Item = SelectItem;

export default SelectWrapper;
