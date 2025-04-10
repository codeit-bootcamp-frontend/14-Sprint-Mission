import Card from "@/pages/items/Card";
import useArticles from "@/hooks/useArticles";
import styled from "styled-components";
import { useWinSize } from "../../../contexts/winSizeContext";

const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
`;

const TitleBar = styled.div`
  color: var(--Secondary-900, #111827);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;
`;

const getQuantity = (winSize) => {
  if (winSize === "mobile") {
    return 1;
  } else if (winSize === "tablet") {
    return 2;
  } else {
    return 4;
  }
};

function BestProducts() {
  const { winSize } = useWinSize();
  const quantity = getQuantity(winSize);
  const { articles, isLoading } = useArticles(1, quantity, "favorite");

  return (
    <Container>
      <TitleBar>
        <span>베스트 상품</span>
      </TitleBar>

      <div className="flex gap-24">
        {articles.map((e) => (
          <Card
            name={e.name}
            price={e.price}
            favoriteCount={e.favoriteCount}
            isLoading={isLoading}
            images={e.images[0]}
            width={winSize === "desktop" ? "280px" : "340px"}
            height={winSize === "desktop" ? "378px" : "434px"}
            key={e.id}
          />
        ))}
      </div>
    </Container>
  );
}

export default BestProducts;
