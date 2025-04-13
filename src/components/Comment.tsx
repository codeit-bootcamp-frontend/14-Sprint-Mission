import useComment from "@/hooks/useComment";
import Image from "next/image";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  comment: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    writer: {
      image: string;
      nickname: string;
      id: number;
    };
  };
};

const Comment = ({ comment }: Props) => {
  const formattedDateForComment = comment?.createdAt
    ? new Date(comment.createdAt)
        .toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\.$/, "")
    : "";

  return (
    <div className="w-full flex flex-col h-[100px] bg-[#E5E7EB] px-[10px] py-[10px] rounded-lg mt-[40px]">
      <div className="flex flex-row items-center justify-between">
        <span className="text-[14px] font-normal text-[#1F2937]">
          {comment.content}
        </span>
        <BsThreeDotsVertical />
      </div>

      <div className="mt-[24px] flex flex-row items-center">
        <div className=" relative w-[32px] h-[32px] rounded-full bg-gray-400">
          <Image fill src="/profile.svg" alt="profile" />
        </div>
        <div className="ml-[8px] flex flex-col">
          <span className="text-[#4B5563] text-[12px] font-normal">
            {comment.writer.nickname}
          </span>
          <span className="text-[#9CA3AF] text-[12px] font-normal">
            {formattedDateForComment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
