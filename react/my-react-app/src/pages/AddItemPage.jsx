import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import ImageUpload from "../components/ImageUpload";
import TagInput from "../components/TagInput";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import FormGroup from "../components/ui/FormGroup";
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
        }}
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
            <Button
              type="submit"
              disabled={!isFormValid}
              style={{ width: 100, marginLeft: 16 }}
            >
              등록
            </Button>
          </div>

          <FormGroup label="상품 이미지" error={error}>
            <ImageUpload
              images={images}
              onImagesChange={handleImagesChange}
              max={1}
            />
          </FormGroup>

          <FormGroup label="상품명">
            <Input
              placeholder="상품명을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={40}
            />
          </FormGroup>

          <FormGroup label="상품 소개">
            <TextArea
              placeholder="상품 소개를 입력해주세요"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              maxLength={500}
            />
          </FormGroup>

          <FormGroup label="판매가격">
            <Input
              type="number"
              placeholder="판매 가격을 입력해주세요"
              value={price}
              onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ""))}
              min={0}
            />
          </FormGroup>

          <FormGroup label="태그">
            <TagInput
              tags={tags}
              onAddTag={handleAddTag}
              onRemoveTag={handleRemoveTag}
            />
          </FormGroup>
        </form>
      </div>
    </>
  );
}

export default AddItemPage;
