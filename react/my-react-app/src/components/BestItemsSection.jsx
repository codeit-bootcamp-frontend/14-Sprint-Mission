import React from "react";
import ItemCard from "./ItemCard";
import {
  SectionContainer,
  SectionTitle,
  BestItemsGrid,
  MessageParagraph,
} from "../pages/ItemsPage.styled";

function BestItemsSection({ items, loading }) {
  return (
    <SectionContainer>
      <SectionTitle>베스트 상품</SectionTitle>
      {loading ? (
        <MessageParagraph>베스트 상품 로딩 중...</MessageParagraph>
      ) : (
        <BestItemsGrid>
          {items.map((item) => (
            <ItemCard key={item.id} item={item} imageType="best" />
          ))}
        </BestItemsGrid>
      )}
    </SectionContainer>
  );
}

export default BestItemsSection;
