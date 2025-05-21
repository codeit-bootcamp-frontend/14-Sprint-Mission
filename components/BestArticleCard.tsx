import Image from "next/image";

import bestBedge from "@/public/images/best-bedge.png";
import heartIcon from "@/public/icons/ic_heart.png";

const BestArticleCard = ({ article, onClick }: ArticleCardProps) => {
  return (
    <div
      className="flex flex-col mt-[30px] w-[343px] lg:w-[384px] h-[198px] bg-[#F9FAFB] rounded-[8px]"
      onClick={onClick}
    >
      <div className="w-[102px] h-[30px] ml-[24px]">
        <Image src={bestBedge} alt="bestBedge" />
      </div>
      <div className="flex flex-col w-[295px] h-[136px] mx-auto mt-[16px]">
        <div className="flex justify-between">
          <div className="text-[#1F2937] text-[18px] lg:text-[20px] w-[180px] lg:w-[256px] break-keep">
            {article.title}
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt={article.title}
              className="w-[72px] h-[72px]"
            />
          </div>
        </div>
        <div className="flex justify-between mt-[40px]">
          <div className="flex gap-[8px]">
            <div className="text-[#4B5563] text-[14px] font-[400]">
              {article.writer.nickname}
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
          <div className="text-[#9CA3AF] text-[14px] font-[400]">
            {new Date(article.createdAt).toLocaleDateString("ko-KR")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestArticleCard;

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
