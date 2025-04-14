import { useState, useEffect } from "react";
import { fetchProducts } from "../utils/fetchProducts";

const useProducts = ({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
  keyword = "",
}) => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);

      const data = await fetchProducts({
        orderBy,
        page,
        pageSize,
        keyword,
      });
      setProducts(data.list);
      setTotalCount(data.totalCount);
      setIsLoading(false);
    };

    getProducts();
  }, [orderBy, page, pageSize, keyword]);

  return {
    products,
    totalCount,
    isLoading,
  };
};

export default useProducts;
