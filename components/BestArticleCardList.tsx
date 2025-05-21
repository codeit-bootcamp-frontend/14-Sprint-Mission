import useFetchBestArticle from "@/pages/hooks/useFetchBestArticle";
import BestArticleCard from "@/components/BestArticleCard";

const BestArticleCardList = () => {
  const { bestArticle } = useFetchBestArticle();

  return (
    <div>
      <div className="text-[#1F2937] text-[18px] font-[800] md:text-[#111827] md:text-[20px]">
        베스트 게시글
      </div>
      <div className="flex md:gap-[16px] lg:gap-[24px]">
        {bestArticle?.list.map((article) => (
          <BestArticleCard
            key={article.id}
            article={article}
            onClick={() => console.log("상세페이지 들어감")}
          />
        ))}
      </div>
    </div>
  );
};

export default BestArticleCardList;
