import "./Tags.css";
import Tag from "./Tag";
import { useEffect, useState } from "react";

function Tags({ tags, onChange }) {
  const [productTags, setProductTags] = useState(tags);
  const [newTag, setNewTag] = useState("");

  const handleInputChange = (e) => {
    setNewTag(e.target.value);
  };

  // 엔터키 누를시 태그 추가
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTag.trim() !== "") {
      setProductTags((prevTags) => [...prevTags, newTag.trim()]);
      setNewTag("");
    }
  };

  console.log(productTags);

  // 태그 제거
  const handleRemoveTag = (tag) => {
    setProductTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  useEffect(() => {
    onChange(productTags);
  }, [productTags]);

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
        {productTags.map((tag, i) => (
          <Tag key={i} name={tag} onClick={() => handleRemoveTag(tag)} />
        ))}
      </div>
    </div>
  );
}

export default Tags;
