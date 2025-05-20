import "./ProductCard.css";
import HeartIcon from "../../assets/images/common/ic_heart.svg";

function ProductCard({ product, type = "all" }) {
  const imageUrl =
    product.images && product.images.length > 0
      ? product.images[0]
      : "/images/no-image.png";

  return (
    <div className={`product-card ${type}`}>
      <img src={imageUrl} alt={product.name} className="product-image" />

      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price.toLocaleString()}원</p>

        <div className="like-static">
          <img src={HeartIcon} alt="좋아요" className="heart-icon" />
          <span>{product.favoriteCount || 0}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
