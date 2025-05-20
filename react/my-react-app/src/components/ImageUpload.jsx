import React, { useRef, useState } from "react";
import styled from "styled-components";

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ImagesRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  border: 1px solid #e5e8ec;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${(props) =>
    props.isUploadButton &&
    `
    background: #F4F6FA;
    cursor: ${props.disabled ? "not-allowed" : "pointer"};
  `}
  ${(props) =>
    props.isBestImage &&
    `
    width: 343px;
    height: 343px;
  `}
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    width: 221px;
    height: 221px;

    ${(props) =>
      props.isBestImage &&
      `
      width: 343px;
      height: 343px;
    `}
  }

  @media (min-width: 1280px) {
    width: 282px;
    height: 282px;

    ${(props) =>
      props.isBestImage &&
      `
      width: 282px;
      height: 282px;
    `}
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #b0b8c1;
  font-size: 24px;
`;

const PlusIcon = styled.span`
  font-size: 40px;
  margin-bottom: 8px;
`;

const UploadText = styled.span`
  font-size: 16px;
`;

const ErrorMessage = styled.div`
  color: #f74747;
  font-size: 14px;
  margin-top: 4px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HiddenInput = styled.input`
  display: none;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ImageUpload({ images, onImagesChange, max = 1 }) {
  const fileInputRef = useRef();
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (images.length >= max) {
      setError(`*이미지 등록은 최대 ${max}개까지 가능합니다.`);
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
      setError(`*이미지 등록은 최대 ${max}개까지 가능합니다.`);
      return;
    }
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <UploadContainer>
      <ImagesRow>
        <ImageContainer
          isUploadButton
          disabled={images.length >= max}
          onClick={handleRegisterClick}
        >
          <HiddenInput
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <ImagePlaceholder>
            <PlusIcon>+</PlusIcon>
            <UploadText>이미지 등록</UploadText>
          </ImagePlaceholder>
        </ImageContainer>

        {images.map((img, idx) => (
          <ImageContainer key={idx}>
            <Image src={img.url} alt={`상품 이미지 ${idx + 1}`} />
            <RemoveButton
              type="button"
              aria-label="이미지 삭제"
              onClick={() => handleRemove(idx)}
            >
              ×
            </RemoveButton>
          </ImageContainer>
        ))}
      </ImagesRow>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </UploadContainer>
  );
}

export default ImageUpload;
