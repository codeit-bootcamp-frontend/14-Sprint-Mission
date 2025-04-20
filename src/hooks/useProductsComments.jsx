
import { useState, useEffect, useCallback } from "react";
import { getProductsComments } from "../api/index";
import { useParams } from "react-router-dom";

const useProductsComments = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [nextCursor, setNextCursor] = useState();
  const [data, setData] = useState([]);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getProductsComments(id);
        setData(response.list);
        setNextCursor(response.nextCursor);
        console.log(response);
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return {
    loading,
    data,
    nextCursor
  };
};

export default useProductsComments;
