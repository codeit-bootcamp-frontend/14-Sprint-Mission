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
    <div className=" flex flex-col h-[169px] w-[384px] bg-[#F9FAFB] mr-[24px] rounded-lg px-[24px] pb-[9px]">
      <div className="flex items-center justify-center bg-[#3692FF] w-[102px] h-[30px] rounded-b-xl">
        <Image width={16} height={16} src="/medal.svg" alt="medal" />
        <p className="text-[#FFFFFF] font-semibold text-[16px]">Best</p>
      </div>

      <div className="flex flex-row justify-between items-center mt-[16px] mb-[26px]">
        <p className="text-[#1F2937] text-[20px] font-semibold">
          {article.title}
        </p>
        <Image width={72} height={72} alt="thumbnail" src={article.image} />
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <p className="text-[#4B5563] text-[14px] font-normal mr-[8px]">
            {article.writer.nickname}
          </p>
          <IoMdHeartEmpty size={16} color="#6B7280" />
          <p className="text-[#6B7280] text-[14px] font-normal ml-[4px]">
            {article.likeCount}
          </p>
        </div>

        <div>
          <p className="text-[#6B7280] text-[14px] font-normal">
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestArticle;
