import { useState, useEffect, useCallback } from "react";
import { getProducts } from "../api/index";

const useItems = (initialQuery,VISIBLE_ITEMS) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [itemQuery, setItemQuery] = useState(initialQuery);

  
  // 데이터불러옴
  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getProducts(itemQuery);
      setItems(response.list);
    } catch (error) {
      console.error('상품 목록 불러오기 실패:', error);
    } finally {
      setLoading(false);
    }
  }, [itemQuery]);

  
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return {
    loading,
    items,
    itemQuery,
    setItemQuery
  };
};

export default useItems;
