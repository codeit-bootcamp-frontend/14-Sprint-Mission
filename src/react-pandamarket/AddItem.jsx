import React from "react";
import Header from "./Header";
import styles from "./addItem.module.scss";
import { IoIosAdd } from "react-icons/io";

const AddItem = () => {
  return (
    <>
      {/* 헤더 */}
      <Header />

      {/* 바디 */}
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles["header__page-name"]}>상품 등록하기</span>
          <button className={styles["header__add-button"]}>등록</button>
        </div>

        {/* 상품 이미지 */}
        <div className={styles["product-image"]}>
          <span className={styles["product-image__span"]}>상품 이미지</span>
          <div className={styles["product-image__fileWrapper"]}>
            <label
              htmlFor="file-upload"
              className={styles["product-image__fileWrapper__label"]}
            >
              <IoIosAdd className={styles["fileWrapper__label__icon"]} />
              이미지 등록
            </label>
            <input
              type="file"
              className={styles["product-image__fileWrapper__input"]}
              id="file-upload"
            />
          </div>
        </div>

        {/* 상품명 */}
        <div className={styles["product-name"]}>
          <span className={styles["product-name__span"]}>상품명</span>
          <input
            type="text"
            className={styles["product-name__input"]}
            placeholder="상품명을 입력해주세요"
          />
        </div>

        {/* 상품 소개 */}
        <div className={styles["product-intro"]}>
          <span className={styles["product-intro__span"]}>상품 소개</span>
          <textarea
            className={styles["product-intro__input"]}
            placeholder="상품 소개를 입력해주세요"
          />
        </div>

        {/* 판매가격 */}
        <div className={styles["product-price"]}>
          <span className={styles["product-price__span"]}>판매가격</span>
          <input
            type="text"
            className={styles["product-price__input"]}
            placeholder="판매 가격을 입력해주세요"
          />
        </div>

        {/* 태그 */}
        <div className={styles["product-tag"]}>
          <span className={styles["product-tag__span"]}>태그</span>
          <input
            type="text"
            className={styles["product-tag__input"]}
            placeholder="태그를 입력해주세요"
          />
        </div>
      </div>
    </>
  );
};

export default AddItem;
