import React from 'react';
import { useEffect } from 'react';
import BestItems from './Product/BestItems';
import AllItems from './Product/AllItems';
import Container from 'components/layout/Container';
import Title from 'components/ui/Title';
import { useScreenType } from 'hooks/useScreenType';
import { useItemQuery } from 'hooks/useItemQuery';
import useItems from 'hooks/useItems';


function ItemsBox() {

  const screenType = useScreenType(); // 0: 모바일, 1: 태블릿, 2: 데스크탑

  
  const VISIBLE_ITEMS = {
    length: [4, 6, 10],
    column: [2, 3, 5],
  };

  // 베스트 상품 반응형 width 기준값
  const VISIBLE_ITEMS_BEST = {
    length: [1, 2, 4],   // 상품 갯수 (mobile, tablet, desktop)
    column: [1, 2, 4],   // 열 갯수 (mobile, tablet, desktop)
  };

  // 베스트 상품 쿼리 초기값
  const INITIAL_QUERY_BEST = {
    page: 1,
    pageSize: VISIBLE_ITEMS_BEST.length[screenType],
    orderBy: 'favorite',
    keyword: '',
  };

  const INITIAL_QUERY = {
    page: 1,
    pageSize: VISIBLE_ITEMS.length[screenType],
    orderBy: 'recent',
    keyword: '',
  };
  
  const {
    loading,
    items,
    totalCount,
    mergedQuery,
    setMergedQuery,
    updateQuery,
  } = useItemQuery(INITIAL_QUERY,VISIBLE_ITEMS);
 

  const { loading:loadingBest, items:itemsBest, itemQuery, setItemQuery } = useItems(INITIAL_QUERY_BEST,VISIBLE_ITEMS_BEST);

  // 페이지 반응형 달라질때마다 pageSize 수정
  useEffect(() => {
    setItemQuery((prev) => ({
      ...prev,
      pageSize: VISIBLE_ITEMS_BEST.length[screenType],
    }));
    setMergedQuery((prev) => ({
      ...prev,
      pageSize: VISIBLE_ITEMS.length[screenType],
    }));
  }, [screenType]);


  return (
    <>
      <Container>
        <Title titleTag='h1' text='베스트 상품' />
      </Container>
      <BestItems
        items={itemsBest} 
        screenType={screenType} 
        loading={loadingBest}
        VISIBLE_ITEMS_BEST={VISIBLE_ITEMS_BEST}
        /> 
      <AllItems 
        items={items} 
        query={mergedQuery} 
        setMergedQuery={setMergedQuery} 
        totalCount={totalCount} 
        updateQuery={updateQuery} 
        screenType={screenType} 
        loading={loading}
        VISIBLE_ITEMS={VISIBLE_ITEMS}
      /> 
    </>
  );
}

export default ItemsBox;