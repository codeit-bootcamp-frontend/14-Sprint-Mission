import { useState } from "react";

import InputField from "../InputField/InputField";

import styles from "./CommentForm.module.css";

const WARNING_STATEMENT =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

const CommentForm = ({
  as = "textarea",
  renderBottom,
  defaultValue = "",
  placeholder = WARNING_STATEMENT,
  label,
  className = styles.comment_textarea,
  onSubmit,
}) => {
  const [commentValue, setCommentValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(commentValue);
  };

  const handleChange = (e) => setCommentValue(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        as={as}
        label={label}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={className}
        onChange={handleChange}
      />
      <div className={styles.submit_button_wrapper}>
        {renderBottom({ commentValue })}
      </div>
    </form>
  );
};

export default CommentForm;
