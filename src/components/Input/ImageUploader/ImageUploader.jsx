import React, { useRef, useState } from "react";
import "./ImageUploader.scss";
import plusIcon from "../../../images/ic_plus.png";

function ImageUploader({ value, onChange }) {
  const fileInputRef = useRef(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (value) {
      setError("*이미지 등록은 최대 1개까지 가능합니다.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onChange({ file, preview: imageUrl });
      setError("");
    }
  };

  const handleRemove = () => {
    onChange(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={`image-uploader ${error ? "error" : ""}`}>
      <label className="input-label">상품 이미지</label>
      <div className="image-preview-container">
        <div className="upload-box">
          <span>
            <img src={plusIcon} alt="" />
          </span>
          <span>이미지 등록</span>
          <input
            type="file"
            accept="image/"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
        {value && (
          <div className="upload-image">
            <img src={value.preview} alt="미리보기" />
            <button
              type="button"
              className="el-btn btn-remove"
              aria-label="이미지 삭제"
              onClick={handleRemove}
            ></button>
          </div>
        )}
      </div>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default ImageUploader;
