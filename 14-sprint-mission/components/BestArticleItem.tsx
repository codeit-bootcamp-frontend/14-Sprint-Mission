import { Article } from '@/app/boards/page';
import formatDate from '@/lib/formatDate';
import Image from 'next/image';

interface BestArticleItemProps {
  article: Article;
}

function BestArticleItem({ article }: BestArticleItemProps) {
  if (!article) return <div>Loading...</div>;

  const formattedDate = formatDate(article.createdAt);
  console.log(formattedDate);

  return (
    <div className="flex flex-col w-[384px] h-[169px] px-[24px] pt-[46px] bg-gray-50 ">
      <div className="flex">
        <h2>{article.content}</h2>
        <div>
          <Image
            src={article.image}
            alt={article.title}
            width={48}
            height={48}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <span>{article.writer.nickname}</span>
          <span>{article.likeCount}</span>
        </div>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}

export default BestArticleItem;
