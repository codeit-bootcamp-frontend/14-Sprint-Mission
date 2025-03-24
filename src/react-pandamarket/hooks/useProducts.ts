import { useEffect, useState } from "react";
import { getProduct, ProductItem } from "../api/getProduct";

interface Props {
  page: number;
  orderBy: string;
  placeHolderCount: number;
  value: string;
}

export const useProducts = ({
  page,
  orderBy,
  placeHolderCount,
  value,
}: Props) => {
  const [product, setProduct] = useState<ProductItem[]>([]);
  const [paginationNum, setPaginationNum] = useState<number[]>([]);

  useEffect(() => {
    // 모든 상품
    const fetchProducts = async () => {
      const response = await getProduct({
        page,
        pageSize: placeHolderCount,
        orderBy,
        keyword: value,
      });
      setProduct(response?.list || []);
      const totalPages = Math.ceil(
        response?.totalCount || 0 / placeHolderCount
      );
      setPaginationNum(Array.from({ length: totalPages }, (_, i) => i + 1));
    };

    fetchProducts();
  }, [paginationNum, orderBy, placeHolderCount, value]);

  return {
    product,
    paginationNum,
  };
};
