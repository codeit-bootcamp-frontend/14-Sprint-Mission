"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { getItems } from "@/api/item";
import type { ProductType } from "@/types/product";

import useItemQueryParams from "./useItemQueryParams";
import useItemSearchSync from "./useItemSearchSync";
import useItemPageResponsiveColumns from "./useItemPageResponsiveColumns";

export default function useItemPageState() {
  const { keyword, sortBy, page, searchParams } = useItemQueryParams();
  const [controlledKeyword, setKeyword] = useState(keyword);
  const [itemList, setItemList] = useState<ProductType[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const { pageSize, bestSize } = useItemPageResponsiveColumns();
  const typingKeywordChangeHandler = useItemSearchSync(
    searchParams,
    setKeyword
  );

  const bestItemList = useMemo(
    () =>
      [...itemList]
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, bestSize),
    [itemList, bestSize]
  );

  const fetchItems = useCallback(async () => {
    const { status, result } = await getItems({
      page,
      pageSize,
      sortBy,
      keyword: controlledKeyword,
    });

    if (status === 200) {
      setItemList(result.list);
      setTotalCount(result.totalCount);
    }
  }, [page, pageSize, sortBy, controlledKeyword]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return {
    itemList,
    bestItemList,
    currentPageSize: pageSize,
    currentPageNumber: page,
    totalCount,
    keyword: controlledKeyword,
    typingKeywordChangeHandler,
  };
}
