import { useEffect, useState } from 'react';
import { getProducts } from '../../api/api';

function useProducts({ sortOrder, currentPage, pageSize, keyword }) {
  const [products, setProducts] = useState([]);
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  console.log(sortOrder, currentPage, pageSize, keyword);
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
    console.log(products);
  }, [sortOrder, currentPage, pageSize, keyword]);
  return { products, totalProductsCount };
}

export default useProducts;
