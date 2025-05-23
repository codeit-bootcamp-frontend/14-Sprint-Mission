import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin: 0;
  margin-bottom: 8px;
`;

export const SellerProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;

export const ProfileImage = styled.div`
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

export const SellerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const SellerName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #222;
`;

export const SellerDate = styled.div`
  font-size: 14px;
  color: #8b95a1;
`;

export const FavoriteButton = styled.button`
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

export const FavoriteIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 4px;
  object-fit: contain;
  vertical-align: middle;
`;
