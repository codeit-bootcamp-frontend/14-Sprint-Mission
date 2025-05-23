import React, { useState } from "react";
import styled from "styled-components";
import ImageUpload from "../components/ImageUpload";
import TextInput from "../components/ui/TextInput";
import TextArea from "../components/ui/TextArea";
import NumberInput from "../components/ui/NumberInput";
import TagInput from "../components/TagInput";
import {
  PageContainer,
  FormHeader,
  Title,
  FormSection,
  ImageSection,
  ImageLabel,
  ErrorMessage,
  SubmitButton,
} from "../styles/pages/AddItemPage.styled";

// 직접 버튼 컴포넌트 생성
const RegisterButton = styled.button`
  width: 100px;
  margin-left: 16px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.disabled ? "#B0B8C1" : "#3692FF")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

function AddItemPage() {
  const [formData, setFormData] = useState({
    images: [],
    title: "",
    desc: "",
    price: "",
    tags: [],
  });
  const [error, setError] = useState("");
  const [priceError, setPriceError] = useState("");

  // 폼 유효성 검사 함수
  const validateForm = () => {
    return (
      formData.images.length > 0 &&
      formData.title.trim() !== "" &&
      formData.desc.trim() !== "" &&
      formData.price.trim() !== "" &&
      formData.tags.length > 0
    );
  };

  // 이미지 업로드 핸들러
  const handleImagesChange = (imgs) => {
    if (imgs.length > 1) {
      setError("이미지 등록은 최대 1개까지 가능합니다.");
      return;
    }
    setFormData({ ...formData, images: imgs });
    setError("");
  };

  // 텍스트 입력 핸들러
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === "price") {
      // 숫자가 아닌 문자 제거 (정규식 사용)
      processedValue = value.replace(/[^0-9]/g, "");
      if (/[^0-9]/.test(value) && value !== "") {
        // 공백이 아닐 때만 에러 메시지 표시
        setPriceError("숫자만 입력해주세요.");
      } else {
        setPriceError("");
      }
    }
    setFormData({ ...formData, [name]: processedValue });
  };

  // 태그 추가 핸들러
  const handleAddTag = (tag) => {
    setFormData({
      ...formData,
      tags: [...formData.tags, tag],
    });
  };

  // 태그 제거 핸들러
  const handleRemoveTag = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("상품이 등록되었습니다! (API 연동 전)");
      console.log("Form submitted with data:", formData);
      // TODO: API 연동
    } else {
      alert("모든 필드를 입력해주세요.");
    }
  };

  // 폼 유효성 상태
  const isFormValid = validateForm();

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
            images={formData.images}
            onImagesChange={handleImagesChange}
            max={1}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </ImageSection>

        <FormSection>
          <TextInput
            label="상품명"
            name="title"
            placeholder="상품명을 입력해주세요"
            value={formData.title}
            onChange={handleTextChange}
            maxLength={40}
          />
        </FormSection>

        <FormSection>
          <TextArea
            label="상품 소개"
            name="desc"
            placeholder="상품 소개를 입력해주세요"
            value={formData.desc}
            onChange={handleTextChange}
            maxLength={500}
          />
        </FormSection>

        <FormSection>
          <NumberInput
            label="판매가격"
            name="price"
            placeholder="판매 가격을 입력해주세요"
            value={formData.price}
            onChange={handleTextChange}
            min={0}
            error={priceError}
          />
          {priceError && <ErrorMessage>{priceError}</ErrorMessage>}
        </FormSection>

        <FormSection>
          <div style={{ marginBottom: "8px", fontWeight: "600" }}>태그</div>
          <TagInput
            tags={formData.tags}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
          />
        </FormSection>
      </form>
    </PageContainer>
  );
}

export default AddItemPage;
