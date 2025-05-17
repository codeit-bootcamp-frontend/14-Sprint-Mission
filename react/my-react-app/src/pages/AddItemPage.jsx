import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ImageUpload from "../components/ImageUpload";
import Button from "../components/ui/Button";
import FormField from "../components/ui/FormField";

const PageContainer = styled.div`
  margin: 0 auto;
  padding-top: 120px;
  margin-bottom: 10px;
`;

// FormFieldContainer 스타일과 동일한 스타일 적용
const CommonContainer = styled.div`
  width: 100%;
  max-width: 344px; /* 모바일 기본 너비 */
  margin: 0 auto;
  box-sizing: border-box;

  /* 태블릿 화면 */
  @media (min-width: 768px) {
    max-width: 696px;
  }

  /* 데스크톱 화면 */
  @media (min-width: 1280px) {
    max-width: 1200px;
  }
`;

const FormHeader = styled(CommonContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const SubmitButton = styled(Button)`
  width: 100px;
  margin-left: 16px;
`;

const ImageSection = styled(CommonContainer)`
  margin-bottom: 30px;
`;

const ImageLabel = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
`;

const ErrorMessage = styled.div`
  color: #f74747;
  font-size: 14px;
  margin-top: 8px;
`;

const FormSection = styled.div`
  margin-bottom: 24px;
`;

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
      <PageContainer>
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormHeader>
            <Title>상품 등록하기</Title>
            <SubmitButton type="submit" disabled={!isFormValid}>
              등록
            </SubmitButton>
          </FormHeader>

          <ImageSection>
            <ImageLabel>상품 이미지</ImageLabel>
            <ImageUpload
              images={images}
              onImagesChange={handleImagesChange}
              max={1}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </ImageSection>

          <FormSection>
            <FormField
              type="text"
              label="상품명"
              placeholder="상품명을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={40}
            />
          </FormSection>

          <FormSection>
            <FormField
              type="textarea"
              label="상품 소개"
              placeholder="상품 소개를 입력해주세요"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              maxLength={500}
            />
          </FormSection>

          <FormSection>
            <FormField
              type="number"
              label="판매가격"
              placeholder="판매 가격을 입력해주세요"
              value={price}
              onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ""))}
              min={0}
            />
          </FormSection>

          <FormSection>
            <FormField
              type="tag"
              label="태그"
              value={tags}
              onAddTag={handleAddTag}
              onRemoveTag={handleRemoveTag}
            />
          </FormSection>
        </form>
      </PageContainer>
    </>
  );
}

export default AddItemPage;
