import React from "react";
import { formatDate } from "../../utils/format";
import {
  Container,
  SectionTitle,
  SellerProfile,
  ProfileImage,
  SellerInfoContainer,
  SellerName,
  SellerDate,
  FavoriteButton,
  FavoriteIcon,
} from "../../styles/components/product/SellerInfo.styled";

function SellerInfo({
  nickname,
  image,
  createdAt,
  favoriteCount,
  isFavorite,
  onFavoriteClick,
}) {
  // 프로필 이미지가 없을 경우 이니셜을 표시
  const initial = nickname ? nickname[0].toUpperCase() : "?";

  return (
    <Container>
      <SectionTitle>판매자 정보</SectionTitle>
      <SellerProfile>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ProfileImage $image={image}>{!image && initial}</ProfileImage>
          <SellerInfoContainer>
            <SellerName>{nickname}</SellerName>
            <SellerDate>
              {createdAt ? formatDate(createdAt) : "2024.01.02"}
            </SellerDate>
          </SellerInfoContainer>
        </div>
        <FavoriteButton onClick={onFavoriteClick} $isFavorite={isFavorite}>
          <FavoriteIcon src="/images/icons/Icon.png" alt="Favorite" />
          {favoriteCount || 123}
        </FavoriteButton>
      </SellerProfile>
    </Container>
  );
}

export default SellerInfo;
