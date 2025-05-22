import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
`;

function ItemImage({ src, alt = "상품 이미지", className }) {
  return (
    <ImageContainer className={className}>
      {src ? (
        <Image src={src} alt={alt} />
      ) : (
        <Placeholder>이미지 없음</Placeholder>
      )}
    </ImageContainer>
  );
}

export default ItemImage;
