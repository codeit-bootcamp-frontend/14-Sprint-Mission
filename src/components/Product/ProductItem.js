import { Link } from 'react-router-dom';
import { useState } from 'react';
import Icon from '../Icon';
import styles from './ProductItem.module.css';

function ProductItem({images ,name , price, favoriteCount}) {
  // const randomNum = Math.floor(Math.random() * 4) + 1;
  // const randomImg = `../img/img_${randomNum}.jpg`;
  const Img = '../img/img_4.jpg';

  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked((prev) => !prev);  // 현재 상태를 반전시킴
  };

  return (
    <li className={styles.listItem}>
      <Link to="ItemsDetail"><div className={styles.imgBox}><img src={images} alt="ProductImg" onError={(e) => e.target.src = Img} /></div></Link>
      <div className={styles.description}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price.toLocaleString()}원</div>
        <div className={styles.like}><Icon iconName={isLiked === false ? 'heartOpen' : 'heartClose' } onClick={handleClick} alt='Like icon'/><span>{favoriteCount}</span></div>
      </div>
    </li>
  );
}

export default ProductItem;
