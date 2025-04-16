import { ChangeEvent, FormEvent, ReactNode, useState } from "react";

import { InputField } from "@/components/index";

import styles from "./CommentForm.module.css";

const WARNING_STATEMENT =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

type CommentFormProps = {
  as?: "input" | "textarea";
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  renderBottom: (paraps: { commentValue: string }) => ReactNode;
  onSubmit: (commentValue: string) => void;
};

const CommentForm = ({
  as = "textarea",
  defaultValue = "",
  placeholder = WARNING_STATEMENT,
  label,
  className = styles.comment_textarea,
  renderBottom,
  onSubmit,
}: CommentFormProps) => {
  const [commentValue, setCommentValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(commentValue);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setCommentValue(e.target.value);

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
