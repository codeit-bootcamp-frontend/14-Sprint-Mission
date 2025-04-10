import { useState, useEffect } from "react";
import { fetchProducts } from "../utils/fetchProducts";

const useProducts = ({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
  keyword = "",
}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const data = await fetchProducts({
          orderBy,
          page,
          pageSize,
          keyword,
        });
        setProducts(data.list);
      } catch (error) {
        console.error("상품 로딩 실패:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [orderBy, page, pageSize, keyword]);

  return { products, isLoading, hasError };
};

export default useProducts;
