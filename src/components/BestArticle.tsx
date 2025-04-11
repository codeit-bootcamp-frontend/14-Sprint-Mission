import Image from "next/image";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

type Props = {
  article: {
    id: number;
    title: string;
    content: string;
    image: string;
    likeCount: number;
    createdAt: string;
    updatedAt: string;
    writer: {
      nickname: string;
      id: number;
    };
  };
};

const BestArticle = ({ article }: Props) => {
    const formattedDate = new Date(article.createdAt)
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\.$/, "");

  return (
    <div className=" flex flex-col lg:h-[169px] lg:w-[384px] md:w-[340px] md:h-[198px] w-[343px] h-[198px] bg-[#F9FAFB] lg:mr-[24px] md:mr-[16px] rounded-lg px-[24px] pb-[9px]">
      <div className="flex items-center justify-center bg-[#3692FF] w-[102px] h-[30px] rounded-b-xl">
        <Image width={16} height={16} src="/medal.svg" alt="medal" />
        <span className="text-[#FFFFFF] font-semibold text-[16px]">Best</span>
      </div>

      <div className="flex flex-row justify-between items-center mt-[16px] mb-[26px]">
        <span className="text-[#1F2937] text-[20px] font-semibold md:mr-[40px] mr-[40px] break-words">
          {article.title}
        </span>
        <Image width={72} height={72} alt="thumbnail" src={article.image} />
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <span className="text-[#4B5563] text-[14px] font-normal mr-[8px]">
            {article.writer.nickname}
          </span>
          <IoMdHeartEmpty size={16} color="#6B7280" />
          <span className="text-[#6B7280] text-[14px] font-normal ml-[4px]">
            {article.likeCount}
          </span>
        </div>

        <div>
          <span className="text-[#6B7280] text-[14px] font-normal">
            {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BestArticle;
