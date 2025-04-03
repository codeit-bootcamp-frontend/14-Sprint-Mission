import ProfileImage from "../common/ProfileImage";
import favoriteIcon from "../../../image/favorite.png";
import favoriteIconHover from "../../../image/ic_favorite_full.png";
import styles from "./ItemOwner.module.css";
import { useState } from "react";

function ItemOwner({ ownerNickname, updatedAt, favoriteCount }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <section className={styles.itemOwner}>
      <ProfileImage className={styles.itemOwnerImage} />
      <div className={styles.itemOwnerInfo}>
        <div className={styles.itemOwnerName}>{ownerNickname}</div>
        <div className={styles.itemDate}>{updatedAt}</div>
      </div>
      <div className={styles.ownerDivider}></div>
      <div
        className={styles.itemFavorites}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={isHovered ? favoriteIconHover : favoriteIcon}
          className={styles.favoriteIcon}
          alt="좋아요 아이콘"
        />
        {isHovered && (
          <img src={favoriteIconHover} className={styles.animatedHeart} />
        )}
        {favoriteCount}
      </div>
    </section>
  );
}

export default ItemOwner;
