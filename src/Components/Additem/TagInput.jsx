import { useState } from "react";

const TagInput = ({ tags, setTags }) => {
  const [tagInput, setTagInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = tagInput.trim();
      if (trimmed && !tags.includes(trimmed)) {
        setTags([...tags, trimmed]);
      }
      setTagInput("");
    }
  };
  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };
  return (
    <>
      <label htmlFor="tags" className="font-[700] text-[18px] text-[#1F2937]">
        태그
      </label>
      <input
        type="text"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="태그를 입력해주세요"
        className="input-primary"
      />

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2 mb-[60px]"
          >
            <span className="text-[#1F2937]">#{tag}</span>
            <button
              type="button"
              onClick={() => removeTag(i)}
              className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-400 text-white"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TagInput;
