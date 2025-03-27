import clsx from "clsx";

import { Profile } from "@/components/index";

import { ReactComponent as KebabIcon } from "@/assets/icons/ic_kebab.svg";
import { ReactComponent as HeartIcon } from "@/assets/icons/ic_heart.svg";

import styles from "./ItemInfo.module.css";

const ItemInfoSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.image, styles.gray)} />
      <div className={styles.info}>
        <div className={styles.info_upper_box}>
          <div className={clsx(styles.name_wrapper, styles.gray)}>
            <span className={styles.name}></span>
            <button type="button">
              <KebabIcon />
            </button>
          </div>
          <p className={styles.price}>0원</p>
          <hr />
          <div className={styles.detail}>
            <p className={styles.subtitle}>상품 소개</p>
            <p className={clsx(styles.description, styles.gray)}></p>
          </div>
        </div>
        <div className={styles.tags_box}>
          <p className={styles.subtitle}>상품 태그</p>
          <ul className={clsx(styles.tags, styles.gray)}></ul>
        </div>
        <div className={styles.info_lower_box}>
          <Profile nickname="nickname" date={new Date()} />
          <div className={styles.favorite}>
            <div className={styles.favorite_box}>
              <HeartIcon className={styles.favorite_icon} /> 00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfoSkeleton;
