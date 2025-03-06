import { useState, useEffect, useCallback } from "react";
import { addGetData } from '../api/index';

const useItems = ( query ) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [itemQuery, setItemQuery] = useState(query);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
    const { list, totalCount } = await addGetData(itemQuery);
    setItems(list);
    setTotalCount(totalCount);
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    } finally {
      setLoading(false);
    }
  }, [itemQuery]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return { loading, items, itemQuery, totalCount, setItemQuery };
};

export default useItems;