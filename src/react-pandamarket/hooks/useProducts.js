import { useEffect, useState } from "react";
import { getProduct } from "../api/api";

export const useProducts = ({ page, orderBy, placeHolderCount, value }) => {
  const [product, setProduct] = useState([]);
  const [paginationNum, setPaginationNum] = useState([]);

  useEffect(() => {
    // 모든 상품
    const fetchProducts = async () => {
      const response = await getProduct(page, placeHolderCount, orderBy, value);
      setProduct(response.list);
      const totalPages = Math.ceil(response.totalCount / placeHolderCount);
      setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
    };

    fetchProducts();
  }, [paginationNum, orderBy, placeHolderCount, value]);

  return {
    product,
    paginationNum,
  };
};
