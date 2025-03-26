import { ChangeEvent, KeyboardEvent } from "react";

interface nameChangeProps<T> {
  e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;
  setState: React.Dispatch<React.SetStateAction<T>>;
}

export const onNameChange = <T>({ e, setState }: nameChangeProps<T>) => {
  setState(e.target.value as T);
};

export const onProductIntroChange = <T>({
  e,
  setState,
}: nameChangeProps<T>) => {
  setState(e.target.value as T);
};

export const onPriceChange = <T extends string | number>({
  e,
  setState,
}: nameChangeProps<T>) => {
  const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
  if (onlyNumber === "") {
    e.target.value = "";
    setState(0 as T);
    return;
  }
  setState(Number(onlyNumber) as T);
};

interface tagChange {
  e: KeyboardEvent<HTMLInputElement>;
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

export const onTagChange = ({ e, setState }: tagChange) => {
  const target = e.target as HTMLInputElement;
  const value = target.value;
  if (e.key === "Enter" && value.trim() !== "") {
    setState((prev) => [...prev, value]);
    target.value = "";
    e.preventDefault();
  }
};
