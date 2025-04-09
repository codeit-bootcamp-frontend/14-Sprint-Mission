import DefaultImage from "@/assets/images/img_item_default.svg";
import Heart from "@/assets/icons/ico_heart.svg";
import * as S from "./style";

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
    <S.Article width={width} height={height}>
      <S.ImageContainer>
        <S.Figure images={images} />
        <img src={DefaultImage} />
      </S.ImageContainer>
      <section>
        <h2>{name}</h2>
        <h3>{price.toLocaleString()}원</h3>
        <div className="likes">
          <img src={Heart} />
          {favoriteCount.toLocaleString()}
        </div>
      </section>
    </S.Article>
  );
}

export default Card;
