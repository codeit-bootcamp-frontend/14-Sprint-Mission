import { useState } from "react";
import InputField from "../../../components/InputField";
import IconCancel from "../../../assets/images/common/ic_X.svg";

export default function TagField({ tagList = [], setTagList }) {
  const [tag, setTag] = useState("");
  function onEnterTag(e) {
    if (e.key === "Enter") {
      setTagList([...tagList, tag]);
      setTag("");
    }
  }
  function onDeleteTag(idx) {
    setTagList([...tagList.slice(0, idx), ...tagList.slice(idx + 1)]);
  }
  return (
    <InputField
      labelText="태그"
      name="tag"
      placeholder="태그를 입력해주세요"
      value={tag}
      onChange={(_, v) => setTag(v)}
      onKeyDown={onEnterTag}
    >
      <div className="display-flex justify-left gap-12" id="tag-list">
        {tagList.map((el, idx) => (
          <div key={el} id="tag" className="display-flex gap-8 surface-secondary-200 radius-9999">
            <span>#{el}</span>
            <button className="icon-wrapper" onClick={() => onDeleteTag(idx)}>
              <img src={IconCancel} alt="태그 지우기 버튼" />
            </button>
          </div>
        ))}
      </div>
    </InputField>
  );
}
