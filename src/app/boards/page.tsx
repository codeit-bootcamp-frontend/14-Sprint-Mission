"use client";
import Article from "@/components/Article";
import BestArticle from "@/components/BestArticle";
import Search from "@/components/Search";
import useArticle, { Articles } from "@/hooks/useArticle";
import useBestArticle from "@/hooks/useBestArticle";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Boards() {
  const [articleResults, setArticleResults] = useState<Articles[] | null>(null);
  const [basis, setBasis] = useState("최신순");
  const { bestArticles } = useBestArticle();
  const { setPage, loading, keyword, setKeyword } = useArticle({
    setArticleResults,
    basis,
  });

  console.log(articleResults);
  return (
    <div className="flex flex-col justify-center lg:px-[360px]  md:px-[24px] md:pt-[24px] px-[16px] pt-[16px]">
      <div className="flex flex-col items-start lg:mt-[94px] md:mt-[94px] mt-[84px]">
        <span className="text-[20px] font-bold mb-[24px]">베스트 게시글</span>
        <div className="flex flex-row">
          {bestArticles.map((article, index) => (
            <BestArticle key={index} article={article} />
          ))}
        </div>
      </div>

      <div className=" mt-[40px] flex flex-col">
        <div className="flex flex-row justify-between">
          <span className="text-[20px] font-bold mb-[24px]">게시글</span>
          <Link
            href="/addboard"
            className="w-[88px] h-[42px] rounded-lg bg-[#3692FF] text-[#FFFFFF] text-[16px] font-semibold cursor-pointer flex items-center justify-center"
          >
            글쓰기
          </Link>
        </div>

        <Search
          setKeyword={setKeyword}
          keyword={keyword}
          basis={basis}
          setBasis={setBasis}
          setPage={setPage}
        />

        {articleResults?.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>

      {loading ?? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex justify-center mt-[30px]"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
            className="w-[30px] h-[30px] border-[#F3F4F6] border-[3px] rounded-full border-t-transparent"
          />
        </motion.div>
      )}
    </div>
  );
}
