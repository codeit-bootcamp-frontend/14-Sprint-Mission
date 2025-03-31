import { useCallback, useEffect, useState } from 'react';
import productService from '../../api/services/products.services';
import { CommentType, UseCommentsProps } from '../../types/types';

function useComments({ productId, limit, cursor }: UseCommentsProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const handleLoad = useCallback(async () => {
    setLoading(true);
    try {
      const res = await productService.getComments({
        productId,
        limit,
        cursor,
      });
      const data = res.list;
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [cursor, limit, productId]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const refetch = useCallback(() => {
    handleLoad();
  }, [handleLoad]);

  return { comments, loading, error, refetch };
}

export default useComments;
