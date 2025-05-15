'use client';
import React, { useEffect, useState } from 'react';
import LoadingBox from '../ui/LoadingBox';
import { ProductQuery, useItemList } from '@/hooks/useItems';
import { ProdListAll } from './ProdListAll';
import { BEST_VISIBLE_ITEMS } from '@/constants/product.constants';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export function BestItems() {
  
  const breakpoint = useBreakpoint();
  const INITIAL_QUERY: ProductQuery = {
    page: 1,
    pageSize: BEST_VISIBLE_ITEMS.length[breakpoint],
    orderBy: 'favorite',
    keyword: '',
  };
 const [query, setQuery] = useState(INITIAL_QUERY);

  // 페이지 반응형 달라질때마다 pageSize 수정
  useEffect(() => {
    setQuery((prev: typeof INITIAL_QUERY) => ({
      ...prev,
      pageSize: BEST_VISIBLE_ITEMS.length[breakpoint],
    }));
  }, [breakpoint]);


  const { data , isLoading} = useItemList(query);

  return (
    <>
      {isLoading ? (
        <LoadingBox className="h-[378px]"/>
      ) : (
        data && (
        <ProdListAll
          itemsData = {data}
          pageColumn={query.pageSize}
        />
        )
      )}
    </>
  );
}

