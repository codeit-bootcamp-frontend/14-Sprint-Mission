import heartIcon from "../../assets/heart-Icon.png";
import { Link } from "react-router-dom";

const ProductCard = ({ product, cardType = "best" }) => {
  return (
    <Link to={`/product/${product.id}`} key={product.id}>
      <img
        src={
          product.images?.[0]
            ? product.images[0].replace(
                "https://placehold.co/300x300?text=No+Image"
              )
            : "https://placehold.co/300x300?text=No+Image"
        }
        alt={product.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/300x300?text=No+Image";
        }}
        className={`object-cover rounded-2xl ${
          cardType === "best"
            ? "w-[343px] h-[343px] pc:w-[282px] pc:h-[282px]"
            : "w-[168px] h-[168px] tablet:w-[221px] tablet:h-[221px]"
        }`}
      />
      <div className="flex flex-col gap-[6px]">
        <div className="mt-2 font-semibold">{product.name}</div>
        <div className="text-gray-800">{product.price.toLocaleString()}원</div>
        <div className="flex items-center gap-[6px] mt-1">
          <img src={heartIcon} alt="heart-icon" className="w-[16px] h-[13px]" />
          <div className="text-[#4B5563]">{product.favoriteCount}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
