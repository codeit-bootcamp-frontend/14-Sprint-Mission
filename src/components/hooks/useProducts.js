import { useEffect, useState } from 'react';
import { getProducts } from '../../api/api';
import productService from '../../api/services/products.services';

function useProducts({ sortOrder, currentPage, pageSize, keyword }) {
  const [products, setProducts] = useState([]);
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  // console.log(sortOrder, currentPage, pageSize, keyword);
  useEffect(() => {
    //상품 받아오기
    const handleLoad = async () => {
      try {
        const result = await productService.getProducts({
          page: currentPage,
          pageSize: pageSize,
          keyword: keyword,
          orderBy: sortOrder,
        });
        const data = result.data;
        console.log('data', data);
        const { list, totalCount } = data;
        setProducts(list);
        setTotalProductsCount(totalCount);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoad();
  }, [sortOrder, currentPage, pageSize, keyword]);
  return { products, totalProductsCount };
}

export default useProducts;
