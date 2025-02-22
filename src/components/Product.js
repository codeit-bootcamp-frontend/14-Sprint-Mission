import "./Product.css";
import { CiHeart } from "react-icons/ci";

function Product({ product }) {
  const { id, images, name, price, favoriteCount } = product;
  const formatPrice = price.toLocaleString("ko-KR");
  return (
    <div className="product">
      <img
        className="product-image"
        src={images[0]}
        alt={`${name}`}
        width={220}
      />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">{`${formatPrice}원`}</p>
        <span className="product-favorite">
          <CiHeart />
          {favoriteCount}
        </span>
      </div>
    </div>
  );
}

export default Product;
