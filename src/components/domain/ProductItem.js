import './ProductItem.css';
import profileImg from '../../assets/user.png';
import { formatDate } from '../../utils/date';
import Likes from '../common/Likes';
import Tag from '../common/Tag';
import OptionsIcon from '../../assets/icons/options.svg';

function ProductItem({ item }) {
  if (!item) {
    return <div>Loading...</div>;
  }

  const {
    createdAt,
    description,
    favoriteCount,
    id,
    images = [],
    isFavorite,
    name,
    ownerId,
    ownerNickname,
    price,
    tags = [],
    updatedAt,
  } = item;

  const formatPrice = price?.toLocaleString('ko-KR');
  const createDate = formatDate(createdAt);

  return (
    <div className="productContainer">
      <img className="productImg" src={images[0]} alt={`${name}`} />
      <div className="infoContainer">
        <div className="titleBox">
          <h1 className="productTitle">{name}</h1>
          <span>{formatPrice}원</span>
          <img
            className="optionsIcon"
            src={OptionsIcon}
            alt="options"
            onClick={() => console.log('option click')}
          />
        </div>
        <div className="descriptionBox">
          <h2>상품소개</h2>
          <p>{description}</p>
          <h2>상품 태그</h2>
          <div className="productTagContainer">
            {tags.map((tag, i) => (
              <Tag key={i} name={tag} closeFalse />
            ))}
          </div>
        </div>
        <div className="ownerBox">
          <img className="profileImg" src={profileImg} alt="profile" />
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
