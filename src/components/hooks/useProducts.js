import { useEffect, useState } from 'react';
import { getProducts } from '../../api/api';

function useProducts({ sortOrder, currentPage, pageSize, keyword }) {
  const [products, setProducts] = useState([]);
  const [totalProductsCount, setTotalProductsCount] = useState(0);

  useEffect(() => {
    //상품 받아오기
    const handleLoad = async () => {
      try {
        const result = await getProducts({
          page: currentPage,
          pageSize: pageSize,
          keyword: keyword,
          orderBy: sortOrder,
        });
        const { list, totalCount } = result;
        setProducts(list);
        setTotalProductsCount(totalCount);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoad();
  }, [sortOrder, currentPage, pageSize]);
  console.log('products', products);
  return { products, totalProductsCount };
}

export default useProducts;
