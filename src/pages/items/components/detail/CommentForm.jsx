import { useState } from "react";
import InputField from "../../../../components/InputField";

export default function CommentForm({ onSubmit }) {
  const INITAIL_COMMENT_VALUE = { content: "" };
  const [comment, setComment] = useState(INITAIL_COMMENT_VALUE);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(comment);
    setComment(INITAIL_COMMENT_VALUE);
  }
  return (
    <form className="display-grid justify-stretch gap-16" onSubmit={handleSubmit} id="comment-form">
      <InputField
        labelText="문의하기"
        type="textarea"
        name="content"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        value={comment.content}
        onChange={(name, value) => setComment({ [name]: value })}
      />
      <div className="display-flex justify-right" id="comment-btn-area">
        <button type="submit" className="small-40" disabled={!comment.content}>
          등록
        </button>
      </div>
    </form>
  );
}
