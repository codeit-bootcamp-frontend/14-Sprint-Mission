import React, { useState } from "react";
import "./TagInput.scss";

function TagInput({ tags, onChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (!tags.includes(newTag)) {
        onChange([...tags, newTag]);
      }
      setInputValue("");
    }
  };

  const removeTag = (indexToRemove) => {
    const updatedTag = tags.filter((_, index) => index !== indexToRemove);
    onChange(updatedTag);
  };

  return (
    <div className="tag-input-container el-txt-input">
      <label className="input-label">태그</label>
      <div className="tag-input-box">
        <input
          type="text"
          placeholder="태그를 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="tag-list">
        {tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            {tag}
            <button
              className="el-btn btn-remove"
              onClick={() => removeTag(index)}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagInput;
