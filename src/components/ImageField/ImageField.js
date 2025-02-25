import clsx from "clsx";
import { useRef, useState } from "react";

import XIcon from "../../assets/icons/ic_X.svg";
import PlusIcon from "../../assets/icons/ic_plus.svg";
import styles from "./ImageField.module.css";

const ImageField = ({ id, name, label, errorMessage }) => {
  const [imageFile, setImageFile] = useState(null);
  const imageRef = useRef(null);

  const clickHandler = () => {
    if (imageFile === null) {
      imageRef.current.click();
    }
  };

  const imageChangeHandler = () => {
    const file = imageRef.current.files[0];
    console.log(file);

    if (file) {
      const fileUrl = URL.createObjectURL(file);

      setImageFile(fileUrl);
    }
  };

  const removeImageClickHandler = () => {
    setImageFile(null);
  };

  return (
    <label htmlFor={id}>
      <span className={styles.field_label}>{label}</span>
      <div className={styles.image_container}>
        <input
          type="file"
          ref={imageRef}
          name={name}
          onChange={imageChangeHandler}
          hidden
        />
        <button
          type="button"
          className={clsx([styles.image_box, styles.add_box])}
          onClick={clickHandler}
        >
          <img src={PlusIcon} alt="플러스 아이콘" />
          <span>이미지 등록</span>
        </button>
        {imageFile && (
          <div className={styles.image_box}>
            <img
              className={styles.item_image}
              src={imageFile}
              alt="상품 이미지"
            />
            <button
              className={styles.delete_button}
              onClick={removeImageClickHandler}
            >
              <img src={XIcon} alt="엑스 아이콘" />
            </button>
          </div>
        )}
      </div>
      {errorMessage && <p className={styles.error_message}>*{errorMessage}</p>}
    </label>
  );
};

export default ImageField;
