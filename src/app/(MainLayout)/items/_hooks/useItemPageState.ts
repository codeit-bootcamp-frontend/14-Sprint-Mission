"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { getItems } from "@/api/item";
import useWindowSize from "@/hooks/useWindowSize";
import { ProductType } from "@/types/product";
import debounce from "@/utils/debounce";

const columnList: {
  best: Record<string, number>;
  all: Record<string, number>;
} = {
  best: {
    desktop: 4,
    tablet: 2,
    mobile: 1,
  },
  all: {
    desktop: 10,
    tablet: 6,
    mobile: 4,
  },
};

const useItemPageState = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [itemList, setItemList] = useState<ProductType[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const windowSize = useWindowSize({
    desktop: 1200,
    tablet: 768,
  });

  const currentPageSize = columnList.all[windowSize];
  const currentBestItemsAmount = columnList.best[windowSize];

  const currentPageNumber = Number(searchParams.get("page")) || 1;
  const sortBy =
    (searchParams.get("sortBy") as "recent" | "favorite") || "recent";
  const keyword = searchParams.get("keyword") || "";

  const bestItemList =
    itemList
      .sort((a, b) => b.favoriteCount - a.favoriteCount)
      .slice(0, currentBestItemsAmount) ?? [];

  const typingKeywordChangeHandler = debounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const newSearchParams = new URLSearchParams(searchParams);
      if (value === "") {
        newSearchParams.delete("keyword");
      } else {
        newSearchParams.set("keyword", value);
      }
      newSearchParams.set("page", "1");

      router.push(`?${newSearchParams}`);
    },
    300
  );

  const requestItems = useCallback(async () => {
    const { status, result } = await getItems({
      page: currentPageNumber,
      pageSize: currentPageSize,
      sortBy,
      keyword,
    });

    if (status === 200) {
      setItemList(result.list);
      setTotalCount(result.totalCount);
    }
  }, [currentPageNumber, currentPageSize, sortBy, keyword]);

  useEffect(() => {
    requestItems();
  }, [requestItems]);

  return {
    itemList,
    bestItemList,
    currentPageSize,
    currentPageNumber,
    totalCount,
    keyword,
    typingKeywordChangeHandler,
  };
};

export default useItemPageState;
