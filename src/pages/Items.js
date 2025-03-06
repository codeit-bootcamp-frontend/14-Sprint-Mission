import styles from './ItemsBox.module.css';
import { addGetData } from '../api/index';
import { useState, useEffect, useCallback } from 'react';
import ProdListAll from '../components/Product/ProdListAll';
import BestItems from '../components/Product/BestItems';

function Items( ) {

   const screenTypeValue = { 
    mobile: 767,
    tablet : 1199
  };

  const getScreenType = ( WinWidth ) => 
    ( WinWidth < screenTypeValue.mobile) 
    ? 'mobile' : ( WinWidth < screenTypeValue.tablet) 
    ? 'tablet' : 'desktop';
  const [screenType, setScreenType] = useState(getScreenType(window.innerWidth));

  
  const visibleItemsCountBest = ( WinWidth ) => 
    ( WinWidth < screenTypeValue.mobile) 
  ? visibleItemsBest.length[0] : 
  ( WinWidth < screenTypeValue.tablet) 
  ? visibleItemsBest.length[1] : visibleItemsBest.length[2];

  //베스트 상품 반응형 width 기준값
  const visibleItemsBest = {
    length : [1,2,4],
    column : [1,2,4],
  };

  //베스트 상품 쿼리 초기값
  const INITIAL_QUERY_BEST = { 
    page: 1, 
    pageSize: visibleItemsCountBest(window.innerWidth), 
    orderBy: 'favorite', 
    keyword: '' 
  };

  return (
    <>
     <BestItems itemsQuery={INITIAL_QUERY_BEST} pageColumn={visibleItemsBest.column} screenType={screenType}/> 
    </>
  );
}

export default Items;