import { ReactNode } from "react";

export const makeParagraph = (textArray: string[]) => {
  const paragraphNodeArray: ReactNode[] = [];

  return textArray.reduce((acc, text, index) => {
    if (index !== 0) acc.push(<br key={index} />);
    acc.push(text);
    return acc;
  }, paragraphNodeArray);
};

export const makeQueryString = (query: Record<string, number | string>) =>
  Object.entries(query)
    .map(([key, value]) => (value ? `${key}=${value}` : ""))
    .join("&");
