import { useEffect, useState } from 'react';
import productService from '../../api/services/products.services';
import {
  ProductType,
  ProductsResponse,
  UseProductProps,
} from '../../types/types';

function useProducts({
  sortOrder,
  currentPage,
  pageSize,
  keyword,
}: UseProductProps): ProductsResponse {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    //상품 받아오기
    const handleLoad = async () => {
      try {
        const result = await productService.getProducts({
          currentPage: currentPage,
          pageSize: pageSize,
          keyword: keyword,
          sortOrder: sortOrder,
        });
        const data = result.data;
        const { list, totalCount } = data;
        setProducts(list);
        setTotalCount(totalCount);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoad();
  }, [sortOrder, currentPage, pageSize, keyword]);
  return { products, totalCount };
}

export default useProducts;
