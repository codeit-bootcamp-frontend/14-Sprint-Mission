import { Link } from "react-router-dom";
import noImage from "../../asset/image/no_image.png";
import heart from "../../asset/icon/heart.png";
import "./itemCard.css";

export default function ItemCard({ cardInfo, cardType }) {
  const { favoriteCount, images, price, name, id } = cardInfo;

  return (
    <Link to={`items/${id}`} className={cardType === "best" ? "best" : "all"}>
      <img
        className={cardType === "best" ? "best-card-img" : "all-card-img"}
        src={images && images.length > 0 ? images[0] : noImage}
        alt={name}
        onError={(e) => {
          e.target.onerror = null; // 무한 루프 방지
          e.target.src = noImage; // 대체 이미지 경로
        }}
      />
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">{price.toLocaleString()}원</p>
        <button
          className="item-favorite"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {/* 추후 이벤트 버블링 처리 필요*/}
          <img className="heart" src={heart} alt="좋아요"></img>
          <span>{favoriteCount}</span>
        </button>
      </div>
    </Link>
  );
}
