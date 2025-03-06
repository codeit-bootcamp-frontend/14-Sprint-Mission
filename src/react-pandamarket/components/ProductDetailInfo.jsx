import React from "react";
import styles from "../styles/productDetailItem.module.scss";
import tagStyles from "../styles/tag.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const ShowTag = ({ tags = [] }) => {
  return (
    <div className={tagStyles["tag-body"]}>
      {tags.map((tag, index) => (
        <div key={index} className={tagStyles["tag-body__tag"]}>
          <span># {tag}</span>
        </div>
      ))}
    </div>
  );
};

const ProductDetailInfo = ({ productDetail }) => {
  console.log(productDetail);
  const date = new Date(productDetail.createdAt)
    .toLocaleDateString("ko-KR")
    .replace(/-/g, ".");

  return (
    <div className={styles["wrapper"]}>
      <img src={productDetail.images} alt="상품 이미지" />

      <div className={styles["infoWrapper"]}>
        <div className={styles["title"]}>
          <span>{productDetail.name}</span>
          <BsThreeDotsVertical />
        </div>
        <span className={styles["price"]}>{productDetail.price}원</span>

        <div className={styles["divider"]}></div>

        <div className={styles["infoDetail"]}>
          <span>상품 소개</span>
          <p>{productDetail.description}</p>
          <span style={{ marginTop: "24px" }}>상품 태그</span>
          <ShowTag tags={productDetail.tags} />
        </div>

        <div className={styles["profile"]}>
          <div className={styles["profile-background"]}>
            <img src="/profile.png" alt="프로필" />
          </div>
          <div className={styles["name-date"]}>
            <span>{productDetail.ownerNickname}</span>
            <span>{date}</span>
          </div>
          <div className={styles["heart-container"]}>
            <CiHeart className={styles["heart"]} />
            <span>{productDetail.favoriteCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
