// hooks/useItemQuery.ts
import { getProducts } from 'api';
import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';


export const useItemQuery = (INITIAL_QUERY,VISIBLE_ITEMS) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryFromUrl = Object.fromEntries(searchParams.entries());


  // 쿼리가 없을때 기본값설정 페이지 초기값
  const [mergedQuery, setMergedQuery] = useState(() =>
    Object.keys(queryFromUrl).length > 0
      ? { ...INITIAL_QUERY, ...queryFromUrl }
      : { ...INITIAL_QUERY }
  );

  // 페이지에서 쿼리 불러옴
  const updateQuery = useCallback(
      newQueryParams => {
      const updatedParams = new URLSearchParams(searchParams);

      Object.entries(newQueryParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          updatedParams.set(key, String(value));
        } else {
          updatedParams.delete(key);
        }
      });

      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams]
  );


  // 데이터불러옴
  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getProducts(mergedQuery);
      setItems(response.list);
      setTotalCount(response.totalCount);
    } catch (error) {
      console.error('상품 목록 불러오기 실패:', error);
    } finally {
      setLoading(false);
    }
  }, [mergedQuery]);

  
  useEffect(() => {
    const queryFromUrlLength = Object.keys(queryFromUrl).length;

    if (queryFromUrlLength === 0) {
      updateQuery({ page: '1' });
      setMergedQuery(mergedQuery);
    } else {
      setMergedQuery({ ...mergedQuery, ...queryFromUrl });
    } 
  }, [location.search]);


  useEffect(() => {
    fetchItems();
  }, [fetchItems,mergedQuery]);


  return {
    loading,
    items,
    totalCount,
    mergedQuery,
    setMergedQuery,
    updateQuery,
  };
};
