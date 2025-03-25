import { useCallback, useEffect, useState } from 'react';
import productService from '../../api/services/products.services';

function useComments(productId, limit, cursor) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const res = await productService.getComments(productId, limit, cursor);
      const data = res.data.list;
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const refetch = useCallback(() => {
    handleLoad();
  }, []);

  return { comments, loading, error, refetch };
}

export default useComments;
