import { useEffect, useState } from "react";
import { getProduct } from "../api/api";

export const useProducts = ({
  page,
  orderBy,
  placeHolderCount,
  best,
  value,
}) => {
  const [bestProduct, setbestProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [paginationNum, setPaginationNum] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    // 베스트 상품
    const fetchBestProducts = async () => {
      const response = await getProduct(page, placeHolderCount, orderBy);
      setbestProduct(response.list);
      const totalPages = Math.ceil(response.totalCount / placeHolderCount);
      setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
    };

    // 모든 상품
    const fetchAllProducts = async () => {
      const response = await getProduct(page, placeHolderCount, orderBy, value);
      setAllProduct(response.list);
      const totalPages = Math.ceil(response.totalCount / placeHolderCount);
      setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
      if (value) {
        setSearchProduct(response.list);
      }
    };

    best ? fetchBestProducts() : fetchAllProducts();
  }, [paginationNum, orderBy, placeHolderCount, best, value]);

  return {
    bestProduct,
    allProduct,
    searchProduct,
    paginationNum,
    setPaginationNum,
    setAllProduct,
  };
};
