import styled from "styled-components";
import DefaultImage from "../../../images/img_item_default.svg";
import Heart from "../../../images/ico_heart.svg";

const Article = styled.article`
  display: inline-flex;
  background: white;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: ${(props) => props.width};
  cursor: pointer;
  padding: 10px;
  border-radius: 24px;
  box-sizing: content-box;
  transition: all 0.05s ease-out;

  &:hover {
    background-color: #f7f7f7;
  }

  h2 {
    color: var(--Secondary-800, #1f2937);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin: 0;
  }

  h3 {
    color: var(--Secondary-800, #1f2937);
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
  }

  .likes {
    color: var(--Secondary-600, #4b5563);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

const Figure = styled.figure`
  width: 100%;
  aspect-ratio: 1/1;

  background: url(${(props) => props.images});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--Cool-Gray-50, #f9fafb);

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

function Card({
  name,
  price,
  favoriteCount,
  isLoading = true,
  images,
  width = "220px",
  height = "318px",
}) {
  return (
    <Article width={width} height={height}>
      <ImageContainer>
        <Figure images={images} />
        <img src={DefaultImage} />
      </ImageContainer>
      <section>
        <h2>{name}</h2>
        <h3>{price.toLocaleString()}원</h3>
        <div className="likes">
          <img src={Heart} />
          {favoriteCount.toLocaleString()}
        </div>
      </section>
    </Article>
  );
}

export default Card;
