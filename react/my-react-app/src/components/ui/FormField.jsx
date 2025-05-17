import React from "react";
import "./FormField.css";
import Input from "./Input";
import TextArea from "./TextArea";
import TagInput from "../TagInput";

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
          <TextArea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={props.maxLength}
            className="form-field-textarea"
          />
        );
      case "tag":
        return (
          <div className="form-field-tag-input">
            <TagInput
              tags={value}
              onAddTag={props.onAddTag}
              onRemoveTag={props.onRemoveTag}
            />
          </div>
        );
      case "number":
      case "text":
      default:
        return (
          <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={props.maxLength}
            min={props.min}
            className="form-field-input"
          />
        );
    }
  };

  return (
    <div className="form-field-container">
      {label && <label className="form-field-label">{label}</label>}
      {renderFieldContent()}
      {error && <div className="form-field-error">{error}</div>}
    </div>
  );
}

export default FormField;
