import React from "react";
import styled from "styled-components";

// 정확한 크기를 지정하기 위해 box-sizing: content-box 설정
const ImageContainer = styled.div`
  box-sizing: content-box !important;
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #e5e8ec;
  margin: 0;
  padding: 0;

  /* 모바일 기본 설정 - 정확히 168px */
  width: 168px !important;
  height: 168px !important;
  min-width: 168px !important;
  min-height: 168px !important;
  max-width: 168px !important;
  max-height: 168px !important;

  /* 태블릿 설정 - 정확히 221px */
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 221px !important;
    height: 221px !important;
    min-width: 221px !important;
    min-height: 221px !important;
    max-width: 221px !important;
    max-height: 221px !important;
  }

  /* 데스크톱 설정 - 정확히 221px */
  @media (min-width: 1280px) {
    width: 221px !important;
    height: 221px !important;
    min-width: 221px !important;
    min-height: 221px !important;
    max-width: 221px !important;
    max-height: 221px !important;
  }

  /* 베스트 이미지 설정 */
  &.best-image {
    width: 343px !important;
    height: 343px !important;
    min-width: 343px !important;
    min-height: 343px !important;
    max-width: 343px !important;
    max-height: 343px !important;

    @media (min-width: 768px) and (max-width: 1279px) {
      width: 343px !important;
      height: 343px !important;
      min-width: 343px !important;
      min-height: 343px !important;
      max-width: 343px !important;
      max-height: 343px !important;
    }

    @media (min-width: 1280px) {
      width: 282px !important;
      height: 282px !important;
      min-width: 282px !important;
      min-height: 282px !important;
      max-width: 282px !important;
      max-height: 282px !important;
    }
  }

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

// 이미지가 컨테이너를 완전히 채우도록 설정
const Image = styled.img`
  display: block;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  object-position: center;
  margin: 0;
  padding: 0;
`;

function ItemImage({ src, alt, type = "all" }) {
  // type: 'best' 또는 'all'
  return (
    <ImageContainer className={`${type}-image`}>
      <Image src={src} alt={alt} />
    </ImageContainer>
  );
}

export default ItemImage;
