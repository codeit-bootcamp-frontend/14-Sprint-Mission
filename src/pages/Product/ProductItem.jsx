import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './ProductItem.module.css';
import defaultImg from 'assets/img/img_default_2x.png';
import Icon from 'components/ui/Icon';
import Button from 'components/ui/Button';
import clsx from 'clsx';

function ProductItem({id, images ,name , price, favoriteCount}) {
  // const randomNum = Math.floor(Math.random() * 4) + 1;
  // const randomImg = `../img/img_1.jpg`;

  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked((prev) => !prev);  // 현재 상태를 반전시킴
  };

  return (
    <li className={styles.listItem}>
      <Link to={`ItemsDetail/${id}`}>
        <div className={clsx(styles.imgBox,'border border-[var(--Cool_Gray_200)]')}>
          <img src={images}  alt="ProductImg" onError={(e) => e.target.src = defaultImg} />
        </div>
      </Link>
      <div className={styles.description}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price.toLocaleString()}원</div>
        
        <Button variant="btn-heart_S" onClick={handleClick} ><Icon iconName={isLiked === false ? 'heartOpen' : 'heartClose' }  alt='Like icon'/><span>{favoriteCount}</span></Button>
      </div>
    </li>
  );
}

export default ProductItem;
