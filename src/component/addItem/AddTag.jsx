import { useEffect, useState } from "react";
import styled from "styled-components";

const TagSpan = styled.span`
  background-color: var(--gray100);
  border-radius: 26px;
  height: 36px;
  font-size: 16px;
  padding: 6px 12px 6px 16px;
  margin: 0 12px 10px 0;
  display:inline-flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  

  img {
  width 22px;
  height:24px;
  
}
  
`;

function AddTag({ tagArr, setTagArr }) {
  const handleTagDelete = (deleteTag) => {
    setTagArr(tagArr.filter((tag) => tag !== deleteTag));
  };

  return (
    <div>
      {tagArr.map((tag) => {
        return (
          <TagSpan key={tag}>
            #{tag}
            <img
              data-tag={tag}
              alt="tag-delete"
              src="/image/tag_delete.png"
              onClick={(e) => handleTagDelete(e.target.dataset.tag)}
            />
          </TagSpan>
        );
      })}
    </div>
  );
}

export default AddTag;

export const renderTags = (tagArr) =>
  tagArr.map((tag) => <TagSpan key={tag}>#{tag}</TagSpan>);
