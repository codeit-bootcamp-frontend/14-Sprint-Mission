import React, { useState } from "react";
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

  // 태그 추가 함수
  const addTag = () => {
    const tagValue = input.trim();

    // 빈 문자열이 아니고, 이미 없는 태그만 추가
    if (tagValue && !tags.includes(tagValue)) {
      onAddTag(tagValue);
    }

    // 입력창 비우기
    setInput("");
  };

  const handleInputChange = (e) => {
    // 현재 입력 값에 쉼표가 없으면 그대로 업데이트
    if (!e.target.value.includes(",")) {
      setInput(e.target.value);
      return;
    }

    // 쉼표가 있는 경우, 쉼표 이전 값을 태그로 추가
    const beforeComma = e.target.value.split(",")[0].trim();
    if (beforeComma && !tags.includes(beforeComma)) {
      onAddTag(beforeComma);
    }

    // 쉼표 이후 값을 입력창에 남겨둠
    const afterComma = e.target.value.split(",").slice(1).join(",");
    setInput(afterComma);
  };

  const handleKeyDown = (e) => {
    // Enter 키 또는 쉼표 키 처리
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

      if (input.trim()) {
        addTag();
      }
    }
  };

  const handleBlur = () => {
    if (input.trim()) {
      addTag();
    }
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
