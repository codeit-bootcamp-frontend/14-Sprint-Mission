import './Product.css';
import { CiHeart } from 'react-icons/ci';
import defaultImage from '../../assets/panda1.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
  const navigate = useNavigate();
  const { id, images, name, price, favoriteCount } = product;
  const formatPrice = price.toLocaleString('ko-KR');
  const [imageSrc, setImageSrc] = useState(images[0]);

  // 이미지 에러시 기본 이미지 사용
  const handleImageError = () => {
    setImageSrc(defaultImage);
  };

  const handleClick = () => {
    navigate(`/items/${id}`);
  };

  return (
    <div className="product" onClick={() => handleClick()}>
      <img
        className="product-image"
        src={imageSrc}
        alt={`${name}`}
        width={220}
        onError={handleImageError}
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
