import { getItem } from "@/api/item";
import { ProductType } from "@/types/product";
import { numberFormatter } from "@/utils/formatter";
import useFetchData from "@/hooks/useFetchData";
import { Profile } from "@/components/index";
import ItemInfoSkeleton from "./ItemInfoSkeleton";

import { ReactComponent as HeartIcon } from "@/assets/icons/ic_heart.svg";
import { ReactComponent as KebabIcon } from "@/assets/icons/ic_kebab.svg";

import styles from "./ItemInfo.module.css";

type ItemInfoProps = { productId?: string };

const ItemInfo = ({ productId }: ItemInfoProps) => {
  const { data: itemInfo } = useFetchData<ProductType>(getItem, productId);

  if (!itemInfo) {
    return <ItemInfoSkeleton />;
  }

  const {
    // id,
    // isFavorite,
    // ownerId,
    name,
    price,
    description,
    images,
    tags,
    ownerNickname,
    favoriteCount,
    createdAt,
    updatedAt,
  } = itemInfo;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={images[0]} alt={name} />
      </div>
      <div className={styles.info}>
        <div className={styles.info_upper_box}>
          <div className={styles.name_wrapper}>
            <p className={styles.name}>{name}</p>
            <button type="button">
              <KebabIcon />
            </button>
          </div>
          <p className={styles.price}>{numberFormatter(price)}원</p>
          <hr />
          <div className={styles.detail}>
            <p className={styles.subtitle}>상품 소개</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <div className={styles.tags_box}>
          <p className={styles.subtitle}>상품 태그</p>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className={styles.info_lower_box}>
          <Profile nickname={ownerNickname} date={updatedAt ?? createdAt} />
          <div className={styles.favorite}>
            <div className={styles.favorite_box}>
              <HeartIcon className={styles.favorite_icon} />
              {favoriteCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
