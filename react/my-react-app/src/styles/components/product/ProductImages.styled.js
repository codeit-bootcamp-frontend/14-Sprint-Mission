import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 343px;
  height: 343px;
  margin: 0 auto;

  /* 태블릿 화면 */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 340px;
    height: 340px;
  }

  /* 데스크톱 화면 */
  @media (min-width: 1024px) {
    width: 486px;
    height: 486px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  overflow-x: auto;
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${(props) => (props.$active ? 1 : 0.6)};
  border: ${(props) => (props.$active ? "2px solid #4a80f0" : "none")};
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;
