import ProdListAll from './ProdListAll';
import useItems from '../../hooks/useItems';
import { useEffect } from 'react';
import LoadingBox from '../../components/LoadingBox';

function BestItems({ screenType }) {

  // 베스트 상품 반응형 width 기준값
  const visibleItems = {
    length: [1, 2, 4],   // 상품 갯수 (mobile, tablet, desktop)
    column: [1, 2, 4],   // 열 갯수 (mobile, tablet, desktop)
  };
  // 베스트 상품 쿼리 초기값
  const INITIAL_QUERY_BEST = {
    page: 1,
    pageSize: visibleItems.length[screenType],
    orderBy: 'favorite',
    keyword: '',
  };

  const { loading, items, itemQuery , totalCount, setItemQuery } = useItems(INITIAL_QUERY_BEST);

  // resize시 pageSize 업데이트 (반응형)
  useEffect(() => {
    setItemQuery(prev => ({...prev , pageSize:visibleItems.length[screenType]}));
  }, [screenType, setItemQuery]); 

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : (
        <ProdListAll
          itemsData={items}
          pageColumn={visibleItems.column[screenType]}
        />
      )}
    </>
  );
}

export default BestItems;
