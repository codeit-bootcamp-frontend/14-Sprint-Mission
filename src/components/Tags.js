import "./Tags.css";
import Tag from "./Tag";
import { useState } from "react";

function Tags({ tags, onChange }) {
  const [newTag, setNewTag] = useState("");

  const handleInputChange = (e) => {
    setNewTag(e.target.value);
  };

  // 엔터 누를시 새로운 태그 추가
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTag.trim() !== "") {
      e.preventDefault();
      onChange("tags", [...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  // 태그 제거
  const handleRemoveTag = (tagToRemove) => {
    onChange(
      "tags",
      tags.filter((t) => t !== tagToRemove)
    );
  };

  return (
    <div className="tags">
      <label htmlFor="tags">태그</label>
      <input
        id="tags"
        type="text"
        value={newTag}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="태그를 입력해주세요"
      />
      <div className="tag-container">
        {tags?.map((tag, i) => (
          <Tag key={i} name={tag} onClick={() => handleRemoveTag(tag)} />
        ))}
      </div>
    </div>
  );
}

export default Tags;
