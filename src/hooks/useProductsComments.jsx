
import { useState, useEffect, useCallback } from "react";
import { getProductsComments } from "../api/index";

const useProductsComments = (id) => {
  const [loading, setLoading] = useState(true);
  const [nextCursor, setNextCursor] = useState(0);
  const [data, setData] = useState([]);
  const moreViewLength = 1;

  const fetchItems = useCallback(async () => {
    if(nextCursor === null) return;
    setLoading(true);
    try {
        const response = await getProductsComments(id,moreViewLength,nextCursor);
        if(nextCursor !== 0) {
            setTimeout(() => {
              setData((prev) => {
                const existingIds = new Set(prev.map(item => item.id));
                const newItems = response.list.filter(item => !existingIds.has(item.id));
                return [...prev, ...newItems];
              });
            }, 1000);
        } else {
          setData(response.list);
        }
        setNextCursor(response.nextCursor);
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    } finally {
      setLoading(false);
    }
  }, [nextCursor]);

  useEffect(() => {
    if(nextCursor === null) return;
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 400;
      if (scrollBottom) {
        fetchItems();
        console.log(" nextCursor 업데이트됨:", nextCursor);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nextCursor]);

  useEffect(() => {
    fetchItems();
  }, []);

  return {
    loading,
    data,
    nextCursor
  };
};

export default useProductsComments;
