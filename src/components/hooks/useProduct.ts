import { useCallback, useEffect, useState } from 'react';
import productService from '../../api/services/products.services';
import { Product } from '../../types/types';

function useProduct(id: string) {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const handleLoad = useCallback(async () => {
    setLoading(true);
    try {
      const res = await productService.getProduct(id);
      const data = res.data;
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
      setError(error as Error);
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
