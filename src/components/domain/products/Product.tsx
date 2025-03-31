import './Product.css';
import { CiHeart } from 'react-icons/ci';
import defaultImage from '../../../assets/images/panda1.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductItemProps } from '../../../types/types';

function Product({ product }: ProductItemProps) {
  const initialImage =
    product?.images && product?.images.length > 0
      ? product?.images[0]
      : defaultImage;
  const [imageSrc, setImageSrc] = useState<string>(initialImage);

  if (!product) {
    return <div>상품 로딩중...</div>; // or a loading state
  }

  const { id, images, name, price, favoriteCount } = product;

  const formatPrice: string = price.toLocaleString('ko-KR');

  // 이미지 에러시 기본 이미지 사용
  const handleImageError = () => {
    setImageSrc(defaultImage);
  };

  return (
    <Link to={`/items/${id}`}>
      <div className="product">
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
    </Link>
  );
}

export default Product;
