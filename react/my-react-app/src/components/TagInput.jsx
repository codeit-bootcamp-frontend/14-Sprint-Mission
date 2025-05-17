import React, { useState } from "react";

function TagInput({ tags, onAddTag, onRemoveTag }) {
  const [input, setInput] = useState("");

  // 입력값에서 구분자(쉼표, 공백 등)로 여러 태그를 분리해 추가
  const tryAddTags = (raw) => {
    const parts = raw.split(/[ ,]+/);
    // 마지막 조각은 아직 입력 중인 값이므로 input에 남김
    const completed = parts.slice(0, -1);
    const remain = parts[parts.length - 1] || "";
    completed.forEach((t) => {
      const tag = t.trim();
      // 빈 문자열이 아니고, 이미 없는 태그만 추가
      if (tag.length > 0 && !tags.includes(tag)) {
        onAddTag(tag);
      }
    });
    setInput(remain);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // 구분자가 입력된 경우에만 태그로 추가
    if (/[ ,]+$/.test(value)) {
      tryAddTags(value);
    } else {
      setInput(value);
    }
  };

  const handleInputKeyDown = (e) => {
    if (["Enter", ",", " "].includes(e.key)) {
      e.preventDefault();
      tryAddTags(input + e.key); // keyDown 시점엔 아직 입력값에 구분자가 없음
    }
  };

  const handleInputBlur = () => {
    // 포커스 아웃 시 남은 값도 태그로 추가
    if (input.trim()) {
      tryAddTags(input + ",");
    } else {
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="태그를 입력해주세요"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onBlur={handleInputBlur}
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
        {tags.map((tag, idx) => (
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
