import { Article } from '@/app/boards/page';
import formatDate from '@/lib/formatDate';
import Image from 'next/image';
import heartIcon from '@/public/assets/icons/heart-icon.svg';
import userIcon from '@/public/assets/icons/user-icon.svg';

function ArticleItem({ article }: { article: Article }) {
  if (!article) return <div>Loading...</div>;

  const formattedDate = formatDate(article.createdAt);

  return (
    <div className="flex flex-col w-full border-b gap-[16px] pb-[24px]">
      <div className="flex flex-1">
        <h2 className="flex-1 font-[600] text-[20px]">{article.content}</h2>
        {article.image && (
          <div className="relative flex items-center justify-center w-[72px] h-[72px] border border-gray-200 rounded-[6px]">
            <Image
              className="rounded-[6px]"
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 72px)"
            />
          </div>
        )}
      </div>
      <div className="flex justify-between font-[400] text-[14px] ">
        <div className="flex items-center gap-[8px] text-gray-600">
          <Image src={userIcon} alt="user" width={24} height={24} />
          <span>{article.writer.nickname}</span>
          <span className="text-gray-400">{formattedDate}</span>
        </div>
        <div className="flex items-center gap-[4px]">
          <Image
            className="w-[13px] h-[13px]"
            src={heartIcon}
            alt="heart"
            width={13}
            height={13}
          />
          <span>{article.likeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;
