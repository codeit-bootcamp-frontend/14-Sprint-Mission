import React, { useState } from "react";

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
    <div>
      <input
        type="text"
        placeholder="태그를 입력해주세요"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        style={{
          width: "100%",
          height: 56,
          padding: "0 16px",
          border: "1px solid #E5E8EB",
          borderRadius: 8,
          fontSize: 16,
          marginBottom: 8,
          boxSizing: "border-box",
        }}
      />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "#F4F6FA",
              color: "#4E5968",
              borderRadius: 16,
              padding: "4px 12px",
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            #{tag}
            <button
              type="button"
              aria-label="태그 삭제"
              onClick={() => onRemoveTag(tag)}
              style={{
                background: "none",
                border: "none",
                color: "#B0B8C1",
                fontSize: 16,
                marginLeft: 4,
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagInput;
