'use client';
import { Article, getData } from '@/app/boards/page';
import BestArticleItem from '@/components/domain/best-articles/BestArticleItem';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

function BestArticleList() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1199px)',
  });
  const [pageSize, setPageSize] = useState(3);
  const [bestArticles, setBestArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (isDesktop) {
      setPageSize(3);
    } else if (isTablet) {
      setPageSize(2);
    } else {
      setPageSize(1);
    }
  }, [isDesktop, isTablet]);

  useEffect(() => {
    const fetchBestArticles = async () => {
      try {
        const bestData = await getData({
          page: 1,
          pageSize,
          orderBy: 'like',
          keyword: '',
        });
        setBestArticles(bestData.list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBestArticles();
  }, [pageSize]);

  return (
    <div className="flex justify-center gap-6">
      {bestArticles.map((article) => (
        <div
          key={article.id}
          className={`flex-grow max-w-[384px] max-h-[169px] 
        `}
        >
          <BestArticleItem article={article} />
        </div>
      ))}
    </div>
  );
}

export default BestArticleList;
