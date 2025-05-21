import BestArticleCardList from "@/components/BestArticleCardList";
import ArticleCardList from "@/components/ArticleCardList";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col w-[343px] md:w-[696px] lg:w-[1200px] mx-auto mt-[16px] md:mt-[24px]">
          <BestArticleCardList />
          <ArticleCardList />
        </div>
      </div>
    </div>
  );
}
