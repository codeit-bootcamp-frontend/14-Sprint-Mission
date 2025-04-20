import React, { useState } from 'react';
import styles from './ProductDescription.module.css';
import UserInfo from 'components/ui/UserInfo';
import { formatDate } from 'utils/date';
import Icon from 'components/ui/Icon';
import Button from 'components/ui/Button';
import clsx from 'clsx';

function ProductDescription({detailData}) {
  
  const {
    createdAt,
    description,
    favoriteCount,
    // isFavorite,
    name,
    ownerNickname,
    price,
    tags
  } = detailData;

  // '2025-04-08T01:00:06+09:00'  '2025-04-07T01:00:06+09:00'
  const createdAtString = formatDate(createdAt);
  // console.log(createdAtString);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite((prev) => !prev);  // 현재 상태를 반전시킴
  };
  
  return (
    <div className={styles.description}>
      <div className='mobile:mb-10'>
        <div className={clsx(styles.title,'tablet:gap-2')}>
          <h2 className='desktop:text-xl tablet:text-xl mobile:text-base '>{name}</h2>
          <h3 className='desktop:text-4xl tablet:text-3xl mobile:text-2xl'>{price?.toLocaleString()}원</h3>
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