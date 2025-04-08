import Card from "@/pages/items/Card";
import useArticles from "@/hooks/useArticles";
import styled from "styled-components";
import { useEffect, useState } from "react";
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

function BestProducts() {
  const [quantity, setQuantity] = useState(4);
  const { articles, isLoading } = useArticles(1, quantity, "favorite");
  const { winSize } = useWinSize();

  useEffect(() => {
    if (winSize === "mobile") {
      setQuantity(1);
    } else if (winSize === "tablet") {
      setQuantity(2);
    } else {
      setQuantity(4);
    }
  }, [winSize]);

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
