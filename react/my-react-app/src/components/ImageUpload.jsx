import React, { useRef, useState } from "react";
import "./ItemImage.css";

function ImageUpload({ images, onImagesChange, max = 1 }) {
  const fileInputRef = useRef();
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (images.length >= max) {
      setError("*이미지 등록은 최대 1개까지 가능합니다.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      onImagesChange([...images, { file, url: ev.target.result }]);
      setError("");
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleRemove = (idx) => {
    onImagesChange(images.filter((_, i) => i !== idx));
    if (images.length - 1 < max) {
      setError("");
    }
  };

  const handleRegisterClick = () => {
    if (images.length >= max) {
      setError("*이미지 등록은 최대 1개까지 가능합니다.");
      return;
    }
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
        <div
          className="item-image-container all-image"
          style={{
            background: "#F4F6FA",
            cursor: images.length >= max ? "not-allowed" : "pointer",
            flexShrink: 0,
          }}
          onClick={handleRegisterClick}
        >
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#B0B8C1",
              fontSize: 24,
            }}
          >
            <span style={{ fontSize: 40, marginBottom: 8 }}>+</span>
            <span style={{ fontSize: 16 }}>이미지 등록</span>
          </div>
        </div>
        {images.map((img, idx) => (
          <div
            key={idx}
            className="item-image-container all-image"
            style={{ position: "relative", flexShrink: 0 }}
          >
            <img
              src={img.url}
              alt={`상품 이미지 ${idx + 1}`}
              className="item-image"
            />
            <button
              type="button"
              aria-label="이미지 삭제"
              onClick={() => handleRemove(idx)}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "rgba(0,0,0,0.4)",
                border: "none",
                borderRadius: "50%",
                width: 28,
                height: 28,
                color: "#fff",
                fontSize: 18,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      {error && (
        <div style={{ color: "#F74747", fontSize: 14, marginTop: 4 }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
