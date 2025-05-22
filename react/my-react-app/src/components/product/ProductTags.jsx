import React from "react";
import {
  Container,
  SectionTitle,
  TagsContainer,
  Tag,
} from "../../styles/components/product/ProductTags.styled";

function ProductTags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <Container>
      <SectionTitle>상품 태그</SectionTitle>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </TagsContainer>
    </Container>
  );
}

export default ProductTags;
