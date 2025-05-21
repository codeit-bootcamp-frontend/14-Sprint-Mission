import Image from "next/image";

import heartIcon from "@/public/icons/ic_heart.png";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="w-[343px] md:w-[696px] lg:w-[1200px] h-[136px] border-b border-b-[#E5E7EB]">
      <div className="flex justify-between">
        <div>{article.title}</div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt={article.title}
            className="w-[72px] h-[72px]"
          />
        </div>
      </div>
      <div className="flex justify-between mt-[16px]">
        <div className="flex gap-[8px]">
          <div className="text-[#4B5563] text-[14px] font-[400]">
            {article.writer.nickname}
          </div>
          <div className="text-[#9CA3AF] text-[14px] font-[400]">
            {new Date(article.createdAt).toLocaleDateString("ko-KR")}
          </div>
        </div>
        <div className="flex justify-center items-center gap-[4px]">
          <div className="w-[16px] h-[16px]">
            <Image src={heartIcon} alt="heartIcon" />
          </div>
          <div className="text-[#6B7280] text-[14px] font-[400]">
            {article.likeCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

type Article = {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
};

type ArticleCardProps = {
  article: Article;
  onClick: () => void;
};
