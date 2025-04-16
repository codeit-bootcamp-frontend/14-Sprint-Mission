'use client';
import ArticleItem from '../board/[id]/ArticleItem';
import useArticleList from '@/hooks/useArticleList';
import { Article } from '@/app/boards/page';

function ArticleList({ initialArticles }: { initialArticles: Article[] }) {
  const { articles, loading, error, hasMore, handleLoadMoreClick } =
    useArticleList(initialArticles);

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
          disabled={!hasMore || loading}
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
