import React, { useState } from "react";
import { formatPrice } from "../../utils/format";
import {
  Container,
  Divider,
  SectionTitle,
  TitleContainer,
  Title,
  Price,
  Description,
  KebabMenuButton,
  MenuDropdown,
  MenuItem,
} from "../../styles/components/product/ProductInfo.styled";

// 케밥 메뉴 아이콘 컴포넌트를 ProductInfo 컴포넌트 외부로 이동
const KebabMenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
      fill="currentColor"
    />
    <path
      d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
      fill="currentColor"
    />
    <path
      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
      fill="currentColor"
    />
  </svg>
);

function ProductInfo({ name, price, description }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
