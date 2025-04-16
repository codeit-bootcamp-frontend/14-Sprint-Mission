import { Article } from '@/app/boards/page';
import formatDate from '@/lib/formatDate';
import Image from 'next/image';
import badgeImg from '@/public/assets/images/badge.png';
import heartIcon from '@/public/assets/icons/heart-icon.svg';
import Link from 'next/link';

function BestArticleItem({ article }: { article: Article }) {
  if (!article) return <div>Loading...</div>;

  const formattedDate = formatDate(article.createdAt);

  return (
    <Link
      href={`/board/${article.id}`}
      className="relative flex flex-col gap-18 px-[24px] pt-[46px] pb-[16px] bg-gray-50 rounded-[8px]"
    >
      <Image
        className="absolute top-0"
        src={badgeImg}
        alt="badge"
        width={100}
        height={30}
      />
      <div className="flex justify-between">
        <h2 className="font-[600] text-[20px] ">{article.title}</h2>
        <div className="relative flex items-center justify-center w-[72px] h-[72px] border border-gray-200 rounded-[6px]">
          <Image
            className="rounded-[6px]"
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 72px)"
          />
        </div>
      </div>
      <div className="flex justify-between font-[400] text-[14px] ">
        <div className="flex items-center gap-[8px] text-gray-600">
          <span>{article.writer.nickname}</span>
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
        <span className="text-gray-400">{formattedDate}</span>
      </div>
    </Link>
  );
}

export default BestArticleItem;
