import React from "react";
import "./TagInput.css";

function TagInput({ tags, tagInput, setTagInput, onAdd, onRemove }) {
  return (
    <div className="formGroup">
      <label className="label">태그</label>
      <input
        type="text"
        placeholder="태그를 입력해주세요"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={onAdd}
        className="input"
      />
      <div className="tagList">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
            <button onClick={() => onRemove(tag)} className="removeTag">
              <img
                src="/images/ic_X.svg"
                alt="태그 삭제"
                className="removeTagIcon"
              />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagInput;
