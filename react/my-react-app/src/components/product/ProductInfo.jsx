import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice, formatDate } from "../../utils/format";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #DFDFDF;
  width: 100%;
  margin: 16px 0;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin: 0;
  margin-bottom: 8px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin: 0;
`;

const Price = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #222;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4e5968;
  margin: 0;
  white-space: pre-wrap;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const CreatedAt = styled.span`
  color: #8b95a1;
  font-size: 14px;
  margin-left: auto; /* 오른쪽 정렬 */
`;

const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border: none;
  background: ${(props) => (props.$isFavorite ? "#FFE8EC" : "#F4F6FA")};
  color: ${(props) => (props.$isFavorite ? "#FF597B" : "#4e5968")};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.$isFavorite ? "#FFD5DE" : "#E8EBF2")};
  }
`;

function ProductInfo({
  name,
  price,
  description,
  favoriteCount,
  isFavorite,
  createdAt,
  onFavoriteClick,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  // 케밥 메뉴 아이콘 컴포넌트
  const KebabMenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor" />
      <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="currentColor" />
      <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor" />
    </svg>
  );
  
  const KebabMenuButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #4e5968;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &:hover {
      background: #f4f6fa;
    }
  `;
  
  const MenuDropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 120px;
    z-index: 10;
    overflow: hidden;
  `;
  
  const MenuItem = styled.button`
    width: 100%;
    text-align: left;
    padding: 12px 16px;
    background: none;
    border: none;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: #f5f5f5;
    }
  `;

  return (
    <Container>
      <TitleContainer>
        <Title>{name}</Title>
        <KebabMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <KebabMenuIcon />
          {menuOpen && (
            <MenuDropdown>
              <MenuItem>수정하기</MenuItem>
              <MenuItem>삭제하기</MenuItem>
            </MenuDropdown>
          )}
        </KebabMenuButton>
      </TitleContainer>
      <Price>{formatPrice(price)}원</Price>
      <Divider />
      <SectionTitle>상품 소개</SectionTitle>
      <Description>{description}</Description>
    </Container>
  );
}

export default ProductInfo;
