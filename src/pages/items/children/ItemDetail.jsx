import { Navigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../../apis/products";
import HeaderNav from "../../../components/HeaderNav";
import { useUser } from "../../../contexts/UserContext";
import useAsync from "../../../hooks/useAsync";
import ImageEmpty from "../../../assets/images/items/img_default.svg";
import IconMore from "../../../assets/images/items/ic_kebab.svg";
import { formatDate, formatPrice } from "../../../utils/products";
import "./itemdetail.scss";

export default function ItemDetail() {
  const user = useUser();
  const { productId } = useParams();
  const {
    loading,
    error,
    value: detail = {},
  } = useAsync(() => getProductDetail(productId), [productId]);

  return !user ? (
    <Navigate to="/login" state={`/items/${productId}`} />
  ) : (
    <>
      <title>판다마켓 - 상품 상세</title>
      <HeaderNav />
      <main className="display-grid justify-left gap-40" id="item-detail">
        <article id="item-detail-area" className="display-flex justify-stretch align-upper gap-24">
          <div className="img-wrapper">
            <img src={detail.images ? detail.images[0] : ImageEmpty} alt="상품 이미지 미리보기" />
          </div>
          <div className="display-grid justify-stretch gap-64" id="item-detail-right">
            <div className="display-grid justify-stretch gap-24" id="item-detail-header">
              <div className="display-flex justify-sides align-upper">
                <h1 className="text-2xl">{detail.name}</h1>
                <button className="icon-wrapper">
                  <img src={IconMore} alt="더보기 버튼 이미지" />
                </button>
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
                    <span key={`tag-${idx}`} id="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>
            <div>
              {detail.ownerNickname}
              {formatDate(detail.createdAt)}
            </div>
          </div>
        </article>
        <section id="comments-area"></section>
      </main>
    </>
  );
}
