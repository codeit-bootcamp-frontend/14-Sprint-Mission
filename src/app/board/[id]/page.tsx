"use client";
import AddComment from "@/components/AddComment";
import Comment from "@/components/Comment";
import useArticleDetails from "@/hooks/useArticleDetails";
import useComment from "@/hooks/useComment";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { TbArrowBack } from "react-icons/tb";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import Loading from "@/components/Loading";

const Page = () => {
  const { id } = useParams();
  const { articleDetails } = useArticleDetails(id as string);
  const { comments, nextCursor, setComment, setNextCursor } = useComment({
    id: id as string,
  });
  const { loading } = useScroll({
    nextCursor,
    setComment,
    setNextCursor,
    id: id as string,
  });

  const formattedDate = articleDetails?.createdAt
    ? new Date(articleDetails.createdAt)
        .toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\.$/, "")
    : "";

  return (
    <div className="flex flex-col lg:px-[360px] md:px-[24px] px-[16px] ">
      <div className="flex flex-row justify-between items-center mt-[95px]">
        <span className="text-[20px] font-bold">{articleDetails?.title}</span>
        <BsThreeDotsVertical size={24} color="#9CA3AF" />
      </div>

      <div className="flex flex-row items-center mt-[16px]">
        <div className=" relative w-[40px] h-[40px] rounded-full bg-gray-400">
          <Image fill src="/profile.svg" alt="profile" />
        </div>
        <span className="text-[14px] font-medium ml-[16px]">
          {articleDetails?.writer.nickname}
        </span>
        <span className="text-[14px] text-[#9CA3AF] font-normal ml-[8px]">
          {formattedDate}
        </span>

        <div className="w-[1px] h-[40px] bg-[#D1D5DB] mx-[32px]" />

        <div className="flex flex-row items-center justify-center w-[87px] h-[40px] rounded-4xl border-[1px] border-[#E5E7EB]">
          <GoHeart size={32} color="#6B7280" />
          <span className="text-[16px] font-medium ml-[4px]">
            {articleDetails?.likeCount}
          </span>
        </div>
      </div>

      <div className="border-[0.5px] border-[#E5E7EB] mt-[16px] mb-[24px]"></div>

      <span className="text-[18px] font-normal">{articleDetails?.content}</span>

      <AddComment />

      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center mt-[40px]">
          <Image width={140} height={140} alt="Empty" src="/empty_Icon.svg" />
          <span className="text-[16px] text-[#9CA3AF] font-normal mt-[16px]">
            아직 댓글이 없어요, 지금 댓글을 달아보세요!
          </span>
        </div>
      )}

      {loading && <Loading />}

      <div className="mt-[64px] mb-[95px] flex flex-row justify-center">
        <Link
          href="/boards"
          className="flex flex-row items-center justify-center bg-[#3692FF] w-[240px] h-[48px] rounded-[40px] text-[#F3F4F6] text-[18px] font-semibold"
        >
          목록으로 돌아가기
          <TbArrowBack className="ml-[8px]" size={24} color="#FFFFFF" />
        </Link>
      </div>
    </div>
  );
};

export default Page;
