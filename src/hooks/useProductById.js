import { useEffect, useState } from "react";
import { fetchProductById } from "../utils/fetchProducts";

const useProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return { product, isLoading };
};

export default useProductById;
