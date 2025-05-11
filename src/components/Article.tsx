import { Articles } from "@/types/article";
import Image from "next/image";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

interface Article {
  article: Articles;
}

const Article = ({ article }: Article) => {
  const formattedDate = new Date(article.createdAt)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\.$/, "");

  return (
    <div className="flex flex-col mt-[24px] p-[10px] bg-[#FCFCFC] lg:w-[1200px] lg:h-[138px] md:w-[696px] md:h-[138px] w-[435px] h-[136px] rounded-xl">
      <div className="flex flex-row justify-between">
        <span className="text-[20px] text-[#1F2937] font-semibold">
          {article.title}
        </span>
        {article.image && (
          <Image width={72} height={72} alt="image" src={article.image} />
        )}
      </div>

      <div className="mt-[16px] flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className=" relative w-[24px] h-[24px] mr-[8px] rounded-full bg-gray-400">
            <Image fill src="/profile.svg" alt="profile" />
          </div>

          <span className="text-[14px] text-[#4B5563] font-normal mr-[8px]">
            {article.writer.nickname}
          </span>

          <span className="text-[14px] font-normal text-[#9CA3AF]">
            {formattedDate}
          </span>
        </div>

        <div className="flex flex-row">
          <IoMdHeartEmpty size={24} color="#6B7280" />
          <span className="text-[16px] text-[#6B7280] font-normal ml-[8px]">
            {article.likeCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Article;
