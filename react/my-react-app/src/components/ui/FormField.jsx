import React from "react";
import styled from "styled-components";
import Input from "./Input";
import TextArea from "./TextArea";
import TagInput from "../TagInput";

const FormFieldWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ErrorText = styled.div`
  color: #f74747;
  font-size: 14px;
  margin-top: 8px;
`;

// styled-components 정의
const FormFieldContainer = styled.div`
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

const StyledInput = styled(Input)`
  width: 100%;
  height: 56px !important; /* 고정 높이 */
  border-radius: 8px;
  border: 1px solid #e5e8ec;
  background-color: #f4f6fa;
  padding: 0 16px;
  font-size: 16px;
  box-sizing: border-box;
`;

const StyledTextArea = styled(TextArea)`
  width: 100%;
  height: 282px !important; /* 고정 높이 */
  border-radius: 8px;
  border: 1px solid #e5e8ec;
  background-color: #f4f6fa;
  padding: 16px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
`;

const TagInputContainer = styled.div`
  width: 100%;
  min-height: 56px;
  box-sizing: border-box;

  input {
    height: 56px !important;
    box-sizing: border-box;
  }
`;

/**
 * 공통 폼 필드 컴포넌트
 * @param {string} type - 필드 타입 ('text', 'textarea', 'number', 'tag', 'custom')
 * @param {string} label - 필드 레이블
 * @param {string} placeholder - 플레이스홀더 텍스트
 * @param {any} value - 필드 값
 * @param {function} onChange - 값 변경시 호출 함수
 * @param {string} error - 에러 메시지
 * @param {function} renderField - custom 타입일 때 사용할 렌더 함수
 * @param {object} props - 추가 속성
 */
function FormField({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  error,
  renderField,
  ...props
}) {
  const renderFieldContent = () => {
    if (type === "custom" && renderField) {
      return renderField();
    }

    switch (type) {
      case "textarea":
        return (
          <StyledTextArea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={props.maxLength}
          />
        );
      case "tag":
        return (
          <TagInputContainer>
            <TagInput
              tags={value}
              onAddTag={props.onAddTag}
              onRemoveTag={props.onRemoveTag}
            />
          </TagInputContainer>
        );
      case "number":
      case "text":
      default:
        return (
          <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={props.maxLength}
            min={props.min}
          />
        );
    }
  };

  return (
    <FormFieldWrapper>
      {label && <Label>{label}</Label>}
      {renderFieldContent()}
      {error && <ErrorText>{error}</ErrorText>}
    </FormFieldWrapper>
  );
}

export default FormField;
