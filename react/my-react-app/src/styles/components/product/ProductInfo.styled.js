import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #dfdfdf;
  width: 100%;
  margin: 16px 0;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin: 0;
  margin-bottom: 8px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin: 0;
`;

export const Price = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #222;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4e5968;
  margin: 0;
  white-space: pre-wrap;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const CreatedAt = styled.span`
  color: #8b95a1;
  font-size: 14px;
  margin-left: auto; /* 오른쪽 정렬 */
`;

export const FavoriteButton = styled.button`
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

export const KebabMenuButton = styled.button`
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

export const MenuDropdown = styled.div`
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

export const MenuItem = styled.button`
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
