import Image from "next/image";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

interface Articles {
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
}

const Article = ({ article }: Articles) => {
  const formattedDate = new Date(article.createdAt)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\.$/, "");

  return (
    <div className="flex flex-col mt-[24px] p-[10px] bg-[#E5E7EB] w-[1200px] h-[138px] rounded-xl">
      <div className="flex flex-row justify-between">
        <p className="text-[20px] text-[#1F2937] font-semibold">
          {article.title}
        </p>
        <Image width={72} height={72} alt="image" src={article.image} />
      </div>

      <div className="mt-[16px] flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className=" relative w-[24px] h-[24px] mr-[8px] rounded-full bg-gray-400">
            <Image fill src="/profile.svg" alt="profile" />
          </div>

          <p className="text-[14px text-[#4B5563] font-normal mr-[8px]">
            {article.writer.nickname}
          </p>

          <p className="text-[14px] font-normal text-[#9CA3AF]">
            {formattedDate}
          </p>
        </div>

        <div className="flex flex-row">
          <IoMdHeartEmpty size={24} color="#6B7280" />
          <p className="text-[16px] text-[#6B7280] font-normal ml-[8px]">
            {article.likeCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
