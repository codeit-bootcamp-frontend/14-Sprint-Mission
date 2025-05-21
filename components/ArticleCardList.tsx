import { useState, useRef, useCallback } from "react";

import ArticleSearch from "./ArticleSearch";
import ArticleDropdown from "./ArticleDropdown";
import ArticleCard from "./ArticleCard";

import useInfiniteArticles from "@/pages/hooks/useInfiniteArticles";

const ArticleCardList = () => {
  const [sortOption, setSortOption] = useState<"recent" | "like">("recent");
  const [searchKeyword, setSearchKeyword] = useState("");

  const observer = useRef<IntersectionObserver | null>(null);

  const { articles, setPage, hasMore } = useInfiniteArticles({
    sortOption: sortOption,
    keyword: searchKeyword,
    pageSize: 10,
  });

  const lastArticleRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!hasMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  const handleSortChange = (option: "recent" | "like") => {
    setSortOption(option);
  };

  return (
    <div className="mb-[300px]">
      <div className="flex justify-between mt-[24px] lg:mt-[40px]">
        <div className="text-[#1F2937] text-[18px] md:text-[20px] font-[800] my-[8px]">
          게시글
        </div>
        <div className="flex justify-center items-center w-[88px] h-[42px] bg-[#3692FF] text-[#FFFFFF] text-[16px] font-[600] rounded-[8px]">
          글쓰기
        </div>
      </div>
      <div className="flex gap-[13px] mt-[16px]">
        <ArticleSearch onSearch={(keyword) => setSearchKeyword(keyword)} />
        <ArticleDropdown
          sortOption={sortOption}
          handleSortChange={handleSortChange}
        />
      </div>
      <div className="flex flex-col gap-[24px]">
        {articles.map((article, index) => {
          const isLast = index === articles.length - 1;
          return (
            <div ref={isLast ? lastArticleRef : null} key={article.id}>
              <ArticleCard article={article} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleCardList;

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

type Articles = {
  list: Article[];
};
