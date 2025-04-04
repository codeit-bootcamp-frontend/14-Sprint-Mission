import Card from "@/pages/items/Card";
import useArticles from "./useArticles";
import "../../../styles/global.scss";

function BestProducts() {
  const { articles, isLoading } = useArticles(1, 4, "favorite");

  return (
    <>
      <span>베스트 상품</span>
      <div className="flex">
        {articles.map((e) => (
          <Card
            name={e.name}
            price={e.price}
            favoriteCount={e.favoriteCount}
            isLoading={isLoading}
            images={e.images[0]}
          />
        ))}
      </div>
    </>
  );
}

export default BestProducts;
