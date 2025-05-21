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



const SellerProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;

const ProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${(props) =>
    props.$image ? `url(${props.$image}) center/cover` : "#F4F6FA"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b95a1;
  font-size: 20px;
  border: 1px solid #e8ebf2;
`;

const SellerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const SellerName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #222;
`;

const SellerDate = styled.div`
  font-size: 14px;
  color: #8b95a1;
`;

const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border: 1px solid #e5e8ec;
  background: transparent;
  color: ${(props) => (props.$isFavorite ? "#FF597B" : "#4e5968")};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #f9f9f9;
  }
`;

const FavoriteIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 4px;
  object-fit: contain;
  vertical-align: middle;
`;



function SellerInfo({ nickname, image, createdAt, favoriteCount, isFavorite, onFavoriteClick }) {
  // 프로필 이미지가 없을 경우 이니셜을 표시
  const initial = nickname ? nickname[0].toUpperCase() : "?";
  
  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <Container>
      <SectionTitle>판매자 정보</SectionTitle>
      <SellerProfile>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ProfileImage $image={image}>{!image && initial}</ProfileImage>
          <SellerInfoContainer>
            <SellerName>{nickname}</SellerName>
            <SellerDate>{createdAt ? formatDate(createdAt) : '2024.01.02'}</SellerDate>
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
