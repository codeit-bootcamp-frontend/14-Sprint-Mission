import IconFavorite from "../../../assets/images/items/ic_heart.svg";

export default function ItemCard({ images = [], name, price = 0, favoriteCount }) {
  return (
    <article className="display-grid justify-stretch gap-16" id="item-card">
      <div className="img-wrapper radius-16">
        {images.length > 0 && <img src={images[0]} alt="상품 미리보기" />}
      </div>
      <div className="display-grid justify-left gap-6">
        <p className="text-md text-medium">{name}</p>
        <p className="text-lg text-lg text-bold">
          {new Intl.NumberFormat("ko-KR").format(price)}원
        </p>
        <div className="flex display-flex justify-left gap-4">
          <img src={IconFavorite} alt="상품 좋아요 수 표시" />
          <p className="text-xs text-medium text-tertiary">{favoriteCount}</p>
        </div>
      </div>
    </article>
  );
}
