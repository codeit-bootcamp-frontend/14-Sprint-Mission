import { useState, useEffect, useCallback } from "react";
import { getProductsDetail } from "../api/index";
import { useParams } from "react-router-dom";

const useProductsDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getProductsDetail(id);
      setData(response);
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
    data
  };
};

export default useProductsDetail;
