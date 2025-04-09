"use client";
import Article from "@/components/Article";
import BestArticle from "@/components/BestArticle";
import Search from "@/components/Search";
import useArticle from "@/hooks/useArticle";
import useBestArticle from "@/hooks/useBestArticle";

export default function Boards() {
  const { bestArticles } = useBestArticle();
  const { articles } = useArticle();

  return (
    <div className="flex flex-col justify-center px-[360px] pt-[24px]">
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

        <Search />

        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
