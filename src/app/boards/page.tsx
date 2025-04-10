"use client";
import Article from "@/components/Article";
import BestArticle from "@/components/BestArticle";
import Search from "@/components/Search";
import useArticle, { Articles } from "@/hooks/useArticle";
import useBestArticle from "@/hooks/useBestArticle";
import { useState } from "react";

export default function Boards() {
  const [articleResults, setArticleResults] = useState<Articles[] | null>(null);
  const [basis, setBasis] = useState("최신순");
  const { bestArticles } = useBestArticle();
  const { page, keyword, setKeyword } = useArticle({
    setArticleResults,
    basis,
  });

  return (
    <div className="flex flex-col justify-center lg:px-[360px] lg:pt-[24px] md:px-[24px] md:pt-[24px] px-[16px] pt-[16px]">
      <div className="flex flex-col items-start">
        <p className="text-[20px] font-bold mb-[24px]">베스트 게시글</p>
        <div className="flex flex-row">
          {bestArticles.map((article, index) => (
            <BestArticle key={index} article={article} />
          ))}
        </div>
      </div>

      <div className=" mt-[40px] flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="text-[20px] font-bold mb-[24px]">게시글</p>
          <button className="w-[88px] h-[42px] rounded-lg bg-[#3692FF] text-[#FFFFFF] text-[16px] font-semibold cursor-pointer">
            글쓰기
          </button>
        </div>

        <Search
          setKeyword={setKeyword}
          keyword={keyword}
          page={page}
          setArticleResults={setArticleResults}
          basis={basis}
          setBasis={setBasis}
        />

        {articleResults?.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
