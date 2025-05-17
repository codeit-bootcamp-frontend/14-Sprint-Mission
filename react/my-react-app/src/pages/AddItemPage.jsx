import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import ImageUpload from "../components/ImageUpload";
import Button from "../components/ui/Button";
import FormField from "../components/ui/FormField";
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
    if (imgs.length > 1) {
      setError("이미지 등록은 최대 1개까지 가능합니다.");
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

  // 이미지 업로드 영역 너비 계산 - 반응형
  const getImageUploadWidth = () => {
    if (window.innerWidth >= 1280) {
      return 1200;
    } else if (window.innerWidth >= 768) {
      return 696;
    } else {
      return 344;
    }
  };

  return (
    <>
      <Header highlightItemsNav={true} />
      <div
        className="items-page-container"
        style={{
          margin: "0 auto",
          paddingTop: 120,
          marginBottom: 10,
        }}
      >
        <form onSubmit={handleSubmit} autoComplete="off">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>
              상품 등록하기
            </h2>
            <Button
              type="submit"
              disabled={!isFormValid}
              style={{ width: 100, marginLeft: 16 }}
            >
              등록
            </Button>
          </div>

          <div
            style={{
              marginBottom: 24,
              maxWidth: getImageUploadWidth(),
              margin: "0 auto",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 8 }}>상품 이미지</div>
            <ImageUpload
              images={images}
              onImagesChange={handleImagesChange}
              max={1}
            />
            {error && (
              <div style={{ color: "#F74747", fontSize: 14, marginTop: 8 }}>
                {error}
              </div>
            )}
          </div>

          <div style={{ marginBottom: 24 }}>
            <FormField
              type="text"
              label="상품명"
              placeholder="상품명을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={40}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <FormField
              type="textarea"
              label="상품 소개"
              placeholder="상품 소개를 입력해주세요"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              maxLength={500}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <FormField
              type="number"
              label="판매가격"
              placeholder="판매 가격을 입력해주세요"
              value={price}
              onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ""))}
              min={0}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <FormField
              type="tag"
              label="태그"
              value={tags}
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
