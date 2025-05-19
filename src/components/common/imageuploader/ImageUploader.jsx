import { useRef, useState } from "react";
import "./imageUploader.css";
import plus from "../../../asset/icon/plus.svg";
import x from "../../../asset/icon/x.svg";

export default function ImageUploader({ image, setImage }) {
  const inputRef = useRef(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleImageClick = (e) => {
    if (image) {
      e.preventDefault(); // 이미지 등록 막기
      setShowWarning(true);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = () => {
    setImage(null);
    setShowWarning(false);
    inputRef.current.value = "";
  };

  return (
    <div className="image-wrapper">
      <span className="image-title">상품 이미지</span>

      <div className="image-boxes">
        <label className="upload-label" onClick={handleImageClick}>
          <img src={plus} alt="추가 아이콘" />
          <p>이미지 등록</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={inputRef}
            hidden
          />
        </label>

        {image && (
          <div className="preview-box">
            <img src={image} alt="미리보기" />
            <button className="delete-button" onClick={handleDelete}>
              <img src={x} alt="삭제 아이콘" />
            </button>
          </div>
        )}
      </div>

      {showWarning && (
        <p className="warning-message">
          *이미지 등록은 최대 1개까지 가능합니다.
        </p>
      )}
    </div>
  );
}
