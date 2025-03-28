import { useCallback, useEffect, useState } from 'react';
import productService from '../../api/services/products.services';

function useProduct(id) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = useCallback(async () => {
    setLoading(true);
    try {
      const res = await productService.getProduct(id);
      const data = res.data;
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const refetch = useCallback(() => {
    handleLoad();
  }, [handleLoad]);

  return { product, loading, error, refetch };
}

export default useProduct;
