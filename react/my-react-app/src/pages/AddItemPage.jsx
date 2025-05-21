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
  const handleTextChange = (e, field) => {
    let value = e.target.value;
    
    if (field === "price") {
      // 숫자가 아닌 문자가 입력되었는지 확인
      if (/[^0-9]/.test(value)) {
        setPriceError("숫자만 입력해주세요.");
        // 숫자가 아닌 문자 제거
        value = value.replace(/[^0-9]/g, "");
      } else {
        setPriceError("");
      }
    }
    
    setFormData({ ...formData, [field]: value });
  };
  
  // 판매가격 입력창 키 입력 이벤트 핸들러
  const handlePriceKeyDown = (e) => {
    // 숫자 키, 백스페이스, 딜리트, 탭, 방향키만 허용
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    
    if (!allowedKeys.includes(e.key)) {
      e.preventDefault();
      setPriceError("숫자만 입력해주세요.");
    } else {
      // 숫자나 허용된 키를 입력하면 에러 메시지 삭제
      setPriceError("");
    }
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
          <RegisterButton type="submit" disabled={!isFormValid}>
            등록
          </RegisterButton>
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
            placeholder="상품명을 입력해주세요"
            value={formData.title}
            onChange={(e) => handleTextChange(e, "title")}
            maxLength={40}
          />
        </FormSection>

        <FormSection>
          <TextArea
            label="상품 소개"
            placeholder="상품 소개를 입력해주세요"
            value={formData.desc}
            onChange={(e) => handleTextChange(e, "desc")}
            maxLength={500}
          />
        </FormSection>

        <FormSection>
          <NumberInput
            label="판매가격"
            placeholder="판매 가격을 입력해주세요"
            value={formData.price}
            onChange={(e) => handleTextChange(e, "price")}
            onKeyDown={handlePriceKeyDown}
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
