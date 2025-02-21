import IconFavorite from "../../../assets/images/items/ic_heart.svg";

export default function ItemCard({ images = [], name, price = 0, favoriteCount }) {
  return (
    <article className="grid gap-16">
      <div className="img-wrapper radius-16">
        {images.length > 0 && <img src={images[0]} alt="상품 미리보기" />}
      </div>
      <div className="grid gap-6">
        <p className="text-md text-medium">{name}</p>
        <p className="text-lg text-lg">{new Intl.NumberFormat("ko-KR").format(price)}원</p>
        <div className="flex flex-left gap-4">
          <img src={IconFavorite} alt="상품 좋아요 수 표시" />
          <p className="text-xs text-medium">{favoriteCount}</p>
        </div>
      </div>
    </article>
  );
}
