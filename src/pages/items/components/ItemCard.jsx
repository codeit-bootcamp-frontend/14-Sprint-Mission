import { Link } from "react-router-dom";
import IconFavorite from "../../../assets/images/items/ic_heart.svg";
import { formatPrice } from "../../../utils/products";
import ImageEmpty from "../../../assets/images/items/img_default.svg";
import { useEffect, useState } from "react";

export default function ItemCard({ id, images = [], name, price = 0, favoriteCount = 0 }) {
  const [thumbnail, setThumbnail] = useState(ImageEmpty);

  useEffect(() => {
    images?.length > 0 && setThumbnail(images[0]);
  }, [images]);

  return (
    <article className="display-grid justify-stretch gap-16" id="item-card">
      <Link to={`./${id}`}>
        <div className="img-wrapper radius-16">
          <img src={thumbnail} onError={() => setThumbnail(ImageEmpty)} alt="상품 미리보기" />
        </div>
      </Link>
      <div className="display-grid justify-left gap-6">
        <Link to={`./${id}`} className="text-md text-medium">
          {name}
        </Link>
        <div className="text-lg text-lg text-bold">{formatPrice(price)}원</div>
        <div className="flex display-flex justify-left gap-4">
          <img src={IconFavorite} alt="상품 좋아요 수 표시" />
          <p className="text-xs text-medium text-secondary">{favoriteCount}</p>
        </div>
      </div>
    </article>
  );
}
