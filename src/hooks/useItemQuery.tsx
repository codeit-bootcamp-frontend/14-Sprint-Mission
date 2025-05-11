import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { ProductQuery, useItemList } from "./useItems";


export const useItemService = (
  defaultQuery :ProductQuery,
  searchParams: URLSearchParams
) => {
  const parsedQuery = useParsedItemQuery(defaultQuery, searchParams);
  const queryResult = useItemList(parsedQuery);
  return {
    ...queryResult,
  };
};

export const useParsedItemQuery = (
  defaultQuery :ProductQuery,
  searchParams: URLSearchParams
) => {
  if (!searchParams) return defaultQuery;
  const parsedQuery = useMemo(() => {
    const obj: Record<string, any> = {};

    for (const [key, value] of searchParams.entries()) {
      // console.log("searchParams", `${key} = ${value}`);
      if (value === "true") obj[key] = true;
      else if (value === "false") obj[key] = false;
      else if (!isNaN(Number(value))) obj[key] = Number(value);
      else obj[key] = value;
    }

    return {
      ...defaultQuery,
      ...obj,
    };
  }, [searchParams.toString()]); // URLSearchParams는 얕은 비교가 안 되므로 .toString()을 기준으로 해야 변경을 감지?

  return parsedQuery;
};

export const useSetItemQuery = () => {
  const router = useRouter();

  const setQueryToURL = (query: Record<string, any>) => {
    const queryString = toQueryString(query);

    if (router) {
      router.push(`${queryString}`, { scroll: false });
    }
  };

  return setQueryToURL;
};

export const toQueryString = (params: Record<string, any>): string => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (Array.isArray(value)) {
        value.forEach((v) => query.append(key, String(v)));
      } else {
        query.append(key, String(value));
      }
    }
  });
  return `?${query.toString()}`;
};