import { addToFavorites, getProductDetail, removeFromFavorites } from "../../../../apis/products";
import ImageProfile from "../../../../assets/images/common/profile.svg";
import IconFavoriteEmpty from "../../../../assets/images/items/ic_heart.svg";
import IconFavorite from "../../../../assets/images/items/ic_heart_active.svg";
import IconMore from "../../../../assets/images/items/ic_kebab.svg";
import ImageEmpty from "../../../../assets/images/items/img_default.svg";
import { useUser } from "../../../../contexts/UserContext";
import useAsync from "../../../../hooks/useAsync";
import { formatDate, formatPrice } from "../../../../utils/products";

export default function ItemDetailPost({ productId, onTagClick }) {
  const user = useUser();
  const { value: detail = {}, setValue: setDetail } = useAsync(
    () => getProductDetail(productId),
    [productId]
  );

  async function handleFavoriteClick() {
    const res = detail.isFavorite
      ? await removeFromFavorites(productId)
      : await addToFavorites(productId);
    if (res) setDetail({ ...detail, ...res });
  }

  return (
    <article id="item-detail-area" className="display-flex justify-stretch align-upper gap-24">
      <div className="img-wrapper">
        <img src={detail.images ? detail.images[0] : ImageEmpty} alt="상품 이미지 미리보기" />
      </div>
      <div className="display-grid justify-stretch gap-64" id="item-detail-right">
        <div className="display-grid justify-stretch gap-24" id="item-detail-header">
          <div className="display-flex justify-sides align-upper">
            <h1 className="text-2xl">{detail.name}</h1>
            {user?.nickname === detail?.ownerNickname && (
              <button className="icon-wrapper">
                <img src={IconMore} alt="더보기 버튼 이미지" />
              </button>
            )}
          </div>
          <h2 className="heading">{formatPrice(detail.price)}원</h2>
          <hr />
          <section
            className="display-grid justify-left gap-16 text-secondary-600"
            id="item-detail-desc"
          >
            <div className="text-lg text-semibold">상품 소개</div>
            <div>
              {detail.description?.split("\n").map((line, idx) => (
                <p key={`line-${idx}`}>{line}</p>
              ))}
            </div>
          </section>
          <section
            className="display-grid justify-left gap-16 text-secondary-600"
            id="item-detail-tags"
          >
            <div className="text-lg text-semibold">상품 태그</div>
            <div className="display-flex justify-left gap-8" id="tag-list">
              {detail.tags?.map((tag, idx) => (
                <span key={`tag-${idx}`} id="tag" onClick={() => onTagClick(tag)}>
                  #{tag}
                </span>
              ))}
            </div>
          </section>
        </div>
        <div className="display-flex justify-stretch gap-24" id="item-detail-owner">
          <div className="display-flex justify-left gap-16">
            <div className="img-wrapper radius-circle">
              <img src={ImageProfile} alt="프로필 사진 미리보기" />
            </div>
            <div className="display-grid justify-left gap-2">
              <div className="text-secondary-600">{detail.ownerNickname}</div>
              <div className="text-secondary-400">{formatDate(detail.createdAt)}</div>
            </div>
          </div>
          <hr />
          <button
            className="icon-wrapper display-flex gap-4 text-secondary-500"
            id="btn-like"
            onClick={handleFavoriteClick}
          >
            <img
              src={detail.isFavorite ? IconFavorite : IconFavoriteEmpty}
              alt="좋아요 수 표시 이미지"
            />
            <span className="text-lg text-medium">{detail.favoriteCount}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
