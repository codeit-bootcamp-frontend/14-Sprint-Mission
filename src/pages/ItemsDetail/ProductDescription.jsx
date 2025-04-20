import React, { useState } from 'react';
import styles from './ProductDescription.module.css';
import UserInfo from 'components/ui/UserInfo';
import { formatDate } from 'utils/date';
import Icon from 'components/ui/Icon';
import Button from 'components/ui/Button';

function ProductDescription({detailData}) {
  
  const {
    id,
    createdAt,
    description,
    favoriteCount,
    // isFavorite,
    name,
    ownerNickname,
    price,
    tags
  } = detailData;

  console.log(detailData);
  // '2025-04-08T01:00:06+09:00'  '2025-04-07T01:00:06+09:00'
  const createdAtString = formatDate(createdAt);
  // console.log(createdAtString);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite((prev) => !prev);  // 현재 상태를 반전시킴
  };
  
  return (
    <div className={styles.description}>
      <div>
        <div className={styles.title}>
          <h2>{name}</h2>
          <h3>{price?.toLocaleString()}원</h3>
        </div>
        <ul>
          <li>
            <h4>상품 소개</h4>
            <p>{description}</p>
          </li>
          {tags?.length > 0 && (
            <li>
              <h4>상품 태그</h4>
              <div>
                {tags.map((tag, index) => (
                  <p key={index}>{tag}</p> 
                ))}
              </div>
            </li> 
          )}
        </ul>
      </div>
      <div className={styles.UserInfo}>
        <UserInfo ownerNickname={ownerNickname} createdAtString={createdAtString}/>
        <div className={styles.likeBtnBox}>
          <Button variant="btn-heart_L" onClick={handleClick} ><Icon iconName={isFavorite === false ? 'heartOpen' : 'heartClose' }  alt='Like icon'/><span>{favoriteCount}</span></Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;