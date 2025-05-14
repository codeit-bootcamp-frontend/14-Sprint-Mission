'use client';
import { useState, useEffect } from 'react';
import { Article, getData } from '@/app/boards/page';
import { useSearchParams } from 'next/navigation';

function useArticleList(initialArticles: Article[]) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const orderBy = searchParams.get('orderBy') || 'recent';

  const handleLoadMoreClick = () => {
    if (hasMore) {
      setPageSize(pageSize + 10);
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        if (keyword === '' && orderBy === 'recent' && pageSize === 10) {
          setArticles(initialArticles);
          setHasMore(true);
        } else {
          const data = await getData({
            page: page,
            pageSize: pageSize,
            orderBy: orderBy,
            keyword: keyword,
          });
          const newArticles = data.list;
          setArticles(newArticles);
          setHasMore(page * pageSize + data.list.length < data.totalCount);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [initialArticles, keyword, orderBy, page, pageSize]);

  return {
    articles,
    loading,
    error,
    page,
    pageSize,
    hasMore,
    handleLoadMoreClick,
  };
}

export default useArticleList;
