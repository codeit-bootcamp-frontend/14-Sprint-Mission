'use client';
import { Article, getData } from '@/app/boards/page';
import ArticleItem from './ArticleItem';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function ArticleList({ initialArticles }: { initialArticles: Article[] }) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [loading, setLoading] = useState<boolean>(false); // 초기 로딩 상태
  const [loadingMore, setLoadingMore] = useState<boolean>(false); // 추가 로딩 상태
  const [error, setError] = useState<Error | null>(null);
  const [pageSize, setPageSize] = useState<number>(10);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const orderBy = searchParams.get('orderBy') || 'recent';

  const handleLoadMoreClick = () => {
    if (hasMore) {
      setPageSize((prevPageSize) => prevPageSize + 10);
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      if (pageSize === 10) {
        setLoading(true); // 첫 페이지 로딩 시에만 로딩 상태를 true로 설정
      } else {
        setLoadingMore(true); // 추가 로딩 시 로딩 상태를 true로 설정
      }
      setError(null);
      try {
        console.log('orderby', orderBy);
        if (keyword === '' && orderBy === 'recent') {
          // 검색어가 없을 경우 데이터를 다시 불러오지 않고 기존 상품 데이터를 사용
          setArticles(initialArticles);
        } else {
          const data = await getData({
            page: 1,
            pageSize: pageSize,
            orderBy: orderBy,
            keyword: keyword,
          });
          const newArticles = await data.list;
          setArticles(newArticles);
          setHasMore(pageSize + data.list.length < data.totalCount);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchArticles();
  }, [initialArticles, keyword, orderBy, pageSize]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-[24px]">
      {articles.map((article) => (
        <div key={article.id} className="flex w-full h-[138px] mt-[24px] ">
          <ArticleItem article={article} />
        </div>
      ))}

      <div className="w-full text-center">
        <button
          disabled={!hasMore || loadingMore}
          onClick={handleLoadMoreClick}
          className="my-[50px] px-[80px] py-[12px] rounded-[16px] bg-blue text-white disabled:bg-gray-400"
        >
          더 보기
        </button>
      </div>
    </div>
  );
}

export default ArticleList;
