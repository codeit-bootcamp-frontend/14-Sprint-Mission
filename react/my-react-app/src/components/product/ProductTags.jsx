import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin: 0;
  margin-bottom: 8px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: #f4f6fa;
  color: #4e5968;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
`;

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
