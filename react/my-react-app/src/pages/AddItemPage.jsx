import React, { useState } from "react";
import styled from "styled-components";
import ImageUpload from "../components/ImageUpload";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import TextArea from "../components/ui/TextArea";
import NumberInput from "../components/ui/NumberInput";
import TagInput from "../components/TagInput";

const PageContainer = styled.div`
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 10px;
`;

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

const FormSection = styled(CommonContainer)`
  margin-bottom: 24px;
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

function AddItemPage() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState("");

  const isFormValid =
    title.trim() && desc.trim() && price.trim() && tags.length > 0;

  const handleImagesChange = (imgs) => {
    if (imgs.length > 1) {
      setError("이미지 등록은 최대 1개까지 가능합니다.");
      return;
    }
    setImages(imgs);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("상품이 등록되었습니다! (API 연동 전)");
  };

  return (
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
          <TextInput
            label="상품명"
            placeholder="상품명을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={40}
          />
        </FormSection>

        <FormSection>
          <TextArea
            label="상품 소개"
            placeholder="상품 소개를 입력해주세요"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            maxLength={500}
          />
        </FormSection>

        <FormSection>
          <NumberInput
            label="판매가격"
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={0}
          />
        </FormSection>

        <FormSection>
          <TagInput
            label="태그"
            tags={tags}
            onAddTag={(tag) => setTags([...tags, tag])}
            onRemoveTag={(tag) => setTags(tags.filter((t) => t !== tag))}
          />
        </FormSection>
      </form>
    </PageContainer>
  );
}

export default AddItemPage;
