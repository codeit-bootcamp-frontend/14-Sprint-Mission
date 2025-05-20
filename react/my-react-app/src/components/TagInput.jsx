import React, { useState, useRef } from "react";
import styled from "styled-components";

const TagInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border: 1px solid #e5e8eb;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: #f4f6fa;
  color: #4e5968;
  border-radius: 16px;
  padding: 4px 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #b0b8c1;
  font-size: 16px;
  margin-left: 4px;
  cursor: pointer;
`;

function TagInput({ tags, onAddTag, onRemoveTag }) {
  const [input, setInput] = useState("");
  const isComposing = useRef(false); // 입력기 조합 중인지 추적

  const addTag = (tagValue) => {
    const trimmedTag = tagValue.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      onAddTag(trimmedTag);
    }
    setInput(""); // 입력창 비우기
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[,]/g, "").trim();
    setInput(value); // 조합 중이든 아니든 입력값 반영
  };

  const handleKeyDown = (e) => {
    if (isComposing.current) return; // 조합 중에는 키 이벤트 무시
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      if (input.trim()) {
        addTag(input);
      }
    }
  };

  const handleBlur = () => {
    if (isComposing.current) return; // 조합 중에는 블러 이벤트 무시
    if (input.trim()) {
      addTag(input);
    }
  };

  const handleCompositionStart = () => {
    isComposing.current = true;
  };

  const handleCompositionEnd = () => {
    isComposing.current = false;
    // 입력값은 handleInputChange에서 이미 처리됨
  };

  return (
    <TagInputContainer>
      <Input
        type="text"
        placeholder="태그를 입력해주세요"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
      />
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag}>
            #{tag}
            <RemoveButton
              type="button"
              aria-label="태그 삭제"
              onClick={() => onRemoveTag(tag)}
            >
              ×
            </RemoveButton>
          </Tag>
        ))}
      </TagsContainer>
    </TagInputContainer>
  );
}

export default TagInput;
