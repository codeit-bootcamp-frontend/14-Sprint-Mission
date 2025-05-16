import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import ImageUpload from "../components/ImageUpload";
import TagInput from "../components/TagInput";
import "./ItemsPage.css";

function AddItemPage() {
  const [images, setImages] = useState([]); // 여러 이미지
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState("");

  // 모든 필수 입력값이 채워졌는지
  const isFormValid = useMemo(() => {
    return title.trim() && desc.trim() && price.trim() && tags.length > 0;
  }, [title, desc, price, tags]);

  // 이미지 업로드
  const handleImagesChange = (imgs) => {
    if (imgs.length > 3) {
      setError("이미지 등록은 최대 3개까지 가능합니다.");
      return;
    }
    setImages(imgs);
    setError("");
  };

  // 태그 추가/삭제
  const handleAddTag = (tag) => {
    if (tags.length >= 5) return; // 태그 최대 5개 제한(옵션)
    setTags([...tags, tag]);
  };
  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // 등록 버튼 클릭
  const handleSubmit = (e) => {
    e.preventDefault();
    // API 연동 없이 동작만 구현
    alert("상품이 등록되었습니다! (API 연동 전)");
  };

  return (
    <>
      <Header highlightItemsNav={true} />
      <div
        className="items-page-container"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          paddingTop: 120,
          marginBottom: 10,
        }} // 헤더에 가리지 않게 충분한 패딩, 하단 마진 10px
      >
        <form onSubmit={handleSubmit} autoComplete="off">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>
              상품 등록하기
            </h2>
            <button
              type="submit"
              disabled={!isFormValid}
              style={{
                width: 100,
                height: 40,
                borderRadius: 8,
                background: isFormValid ? "#3692FF" : "#B0B8C1",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                border: "none",
                cursor: isFormValid ? "pointer" : "not-allowed",
                marginLeft: 16,
              }}
            >
              등록
            </button>
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, marginBottom: 12 }}>상품 이미지</div>
            <ImageUpload
              images={images}
              onImagesChange={handleImagesChange}
              max={3}
            />
            {error && (
              <div style={{ color: "#E54848", fontSize: 14, marginTop: 8 }}>
                *{error}
              </div>
            )}
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>상품명</div>
            <input
              type="text"
              placeholder="상품명을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: "100%",
                height: 40,
                borderRadius: 8,
                border: "none",
                background: "#F4F6FA",
                padding: "0 16px",
                fontSize: 16,
              }}
              maxLength={40}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>상품 소개</div>
            <textarea
              placeholder="상품 소개를 입력해주세요"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              style={{
                width: "100%",
                minHeight: 120,
                borderRadius: 8,
                border: "none",
                background: "#F4F6FA",
                padding: "12px 16px",
                fontSize: 16,
                resize: "vertical",
              }}
              maxLength={500}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>판매가격</div>
            <input
              type="number"
              placeholder="판매 가격을 입력해주세요"
              value={price}
              onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ""))}
              style={{
                width: "100%",
                height: 40,
                borderRadius: 8,
                border: "none",
                background: "#F4F6FA",
                padding: "0 16px",
                fontSize: 16,
              }}
              min={0}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>태그</div>
            <TagInput
              tags={tags}
              onAddTag={handleAddTag}
              onRemoveTag={handleRemoveTag}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddItemPage;
