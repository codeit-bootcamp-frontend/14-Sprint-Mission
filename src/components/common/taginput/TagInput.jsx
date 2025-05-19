import InputBox from "../../common/inputbox/InputBox";
import { useState } from "react";
import x from "../../../asset/icon/x.svg";

import "./tagInput.css";

export default function TagInput({ tags, setTags }) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();

      const newTag = input.trim();

      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInput("");
    }
  };

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div className="tag-wrapper">
      <InputBox
        title="태그"
        placeholder="태그를 입력해주세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="tag-list">
        {tags.map((tag) => (
          <div key={tag} className="tag-item">
            <span>#{tag}</span>
            <img src={x} alt="태그 삭제" onClick={() => handleDelete(tag)} />
          </div>
        ))}
      </div>
    </div>
  );
}
