import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import styles from "./addItem.module.scss";
import { IoIosAdd } from "react-icons/io";
import {
  onNameChange,
  onPriceChange,
  onProductIntroChange,
  onTagChange,
} from "./utils/addItemFunctions";
import Tag from "./Tag";

const AddItem = () => {
  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);
  const [manyImage, setManyImage] = useState(false);
  const [image, setImage] = useState([]);
  const [productName, setProductName] = useState("");
  const [productIntro, setProductIntro] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [tag, setTag] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const handleFileChange = (e) => {
    if (image.length >= 1) {
      setManyImage(true);
      return;
    } else {
      const file = e.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
      setImage([...image, fileURL]);
    }
  };

  const removeFile = () => {
    setPreview(null);
    setManyImage(false);
    setImage([]);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  useEffect(() => {
    if (
      productName.trim() !== "" &&
      productIntro.trim() !== "" &&
      productPrice > 0 &&
      tag.length > 0
    ) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [productName, productIntro, productPrice, tag]);

  return (
    <>
      {/* 헤더 */}
      <Header />

      {/* 바디 */}
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles["header__page-name"]}>상품 등록하기</span>
          <button
            className={
              isReady
                ? styles["header__add-button--activate"]
                : styles["header__add-button"]
            }
            disabled={!isReady}
          >
            등록
          </button>
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
            {preview ? (
              <div className={styles["preview-container"]}>
                <img
                  src={preview}
                  alt="미리보기"
                  className={styles["preview-container__preview"]}
                />
                <button
                  onClick={removeFile}
                  className={styles["preview-container__delete"]}
                >
                  x
                </button>
              </div>
            ) : (
              ""
            )}
            <input
              type="file"
              className={styles["product-image__fileWrapper__input"]}
              id="file-upload"
              onChange={handleFileChange}
              ref={fileRef}
              disabled={manyImage}
            />
          </div>
          {manyImage && (
            <span className={styles["product-image__warning"]}>
              *이미지 등록은 최대 1개까지 가능합니다.
            </span>
          )}
        </div>

        {/* 상품명 */}
        <div className={styles["product-name"]}>
          <span className={styles["product-name__span"]}>상품명</span>
          <input
            type="text"
            className={styles["product-name__input"]}
            placeholder="상품명을 입력해주세요"
            onChange={(e) => onNameChange({ e, setProductName })}
          />
        </div>

        {/* 상품 소개 */}
        <div className={styles["product-intro"]}>
          <span className={styles["product-intro__span"]}>상품 소개</span>
          <textarea
            className={styles["product-intro__input"]}
            placeholder="상품 소개를 입력해주세요"
            onChange={(e) => onProductIntroChange({ e, setProductIntro })}
          />
        </div>

        {/* 판매가격 */}
        <div className={styles["product-price"]}>
          <span className={styles["product-price__span"]}>판매가격</span>
          <input
            type="text"
            className={styles["product-price__input"]}
            placeholder="판매 가격을 입력해주세요"
            onChange={(e) => onPriceChange({ e, setProductPrice })}
          />
        </div>

        {/* 태그 */}
        <div className={styles["product-tag"]}>
          <span className={styles["product-tag__span"]}>태그</span>
          <input
            type="text"
            className={styles["product-tag__input"]}
            placeholder="태그를 입력해주세요"
            onKeyDown={(e) => onTagChange({ e, setTag })}
          />
        </div>
        <Tag tags={tag} setTag={setTag} />
      </div>
    </>
  );
};

export default AddItem;
