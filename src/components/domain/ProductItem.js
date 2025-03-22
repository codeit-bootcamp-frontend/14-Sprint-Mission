import './ProductItem.css';
import profileImg from '../../assets/user.png';
import { formatDate } from '../../utils/date';
import Likes from '../common/Likes';

function ProductItem({ item }) {
  if (!item) {
    return <div>Loading or No Product Data</div>;
  }

  const {
    createdAt,
    description,
    favoriteCount,
    id,
    images,
    isFavorite,
    name,
    ownerId,
    ownerNickname,
    price,
    tags,
    updatedAt,
  } = item;
  const formatPrice = price.toLocaleString('ko-KR');
  const createDate = formatDate(createdAt);

  return (
    <div className="productContainer">
      <img src={images[0]} alt={`${name}`} />
      <div className="infoContainer">
        <div className="titleBox">
          <h1 className="title">{name}</h1>
          <span>{formatPrice}원</span>
        </div>
        <div className="descriptionBox">
          <h2>상품소개</h2>
          <p>{description}</p>
          <h2>상품 태그</h2>
          {tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
        <div className="ownerBox">
          <img src={profileImg} alt="profile" />
          <div className="ownerInfoBox">
            <p>{ownerNickname}</p>
            <span>{createDate}</span>
          </div>
          <Likes count={favoriteCount} />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
