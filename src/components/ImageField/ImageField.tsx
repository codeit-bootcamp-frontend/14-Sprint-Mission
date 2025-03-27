import clsx from "clsx";
import { ChangeEvent, FocusEvent, useRef, useState } from "react";

import XIcon from "../../assets/icons/ic_X.svg";
import PlusIcon from "../../assets/icons/ic_plus.svg";
import styles from "./ImageField.module.css";

type ImageFieldProps = {
  id: string;
  name: string;
  label: string;
  errorMessage: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const ImageField = ({
  id,
  name,
  label,
  errorMessage,
  onChange,
  onBlur,
}: ImageFieldProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    if (imageUrl === null) {
      imageRef.current?.click();
    }
  };

  const imageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = imageRef.current?.files?.[0];

    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImageUrl(fileUrl);
    }

    onChange?.(e);
  };

  const removeImageClickHandler = () => {
    setImageUrl(null);
    if (imageRef.current) {
      imageRef.current.value = "";
    }
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
          onBlur={onBlur || undefined}
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
        {imageUrl && (
          <div className={styles.image_box}>
            <img
              className={styles.item_image}
              src={imageUrl}
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
      {imageUrl && errorMessage && (
        <p className={styles.error_message}>{errorMessage}</p>
      )}
    </label>
  );
};

export default ImageField;
