'use client';
import React, { useEffect, useState } from 'react';
import LoadingBox from '../ui/LoadingBox';
import { ProductQuery, useItemList } from '@/hooks/useItems';
import { useScreenType } from '@/hooks/useScreenType';
import { ProdListAll } from './ProdListAll';

export function BestItems() {
  
const screenType = useScreenType(); // 0: 모바일, 1: 태블릿, 2: 데스크탑

// 베스트 상품 반응형 width 기준값
const VISIBLE_ITEMS = {
  length: [1, 2, 4],   // 상품 갯수 (mobile, tablet, desktop)
  column: { mobile: 1, tablet: 2, desktop: 4 },   // 열 갯수 (mobile, tablet, desktop)
};
  
// 베스트 상품 쿼리 초기값
const INITIAL_QUERY: ProductQuery = {
  page: 1,
  pageSize: VISIBLE_ITEMS.length[screenType],
  orderBy: 'favorite',
  keyword: '',
};

 const [query, setQuery] = useState(INITIAL_QUERY);

  // 페이지 반응형 달라질때마다 pageSize 수정
  useEffect(() => {
    setQuery((prev: typeof INITIAL_QUERY) => ({
      ...prev,
      pageSize: VISIBLE_ITEMS.length[screenType],
    }));
  }, [screenType]);


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

