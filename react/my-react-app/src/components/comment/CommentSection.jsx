import React, { useState } from "react";
import CommentItem from "./CommentItem";
import {
  CommentsContainer,
  SectionTitle,
  CommentForm,
  CommentInput,
  SubmitButton,
  CommentList,
  MessageParagraph,
} from "../../styles/components/comment/CommentSection.styled";

// 디폴트 문구 정의
const DEFAULT_COMMENT =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

function CommentSection({
  comments,
  loadingComments,
  commentError,
  onToggleMenu,
  handleCommentSubmit,
  submittingComment,
}) {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || submittingComment) return;
    const success = await handleCommentSubmit(newComment);
    if (success) {
      setNewComment("");
    }
  };

  return (
    <CommentsContainer>
      <SectionTitle>문의하기</SectionTitle>
      <CommentForm onSubmit={handleSubmit}>
        <CommentInput
          placeholder={DEFAULT_COMMENT}
          value={newComment}
          onChange={handleCommentChange}
          disabled={submittingComment}
        />
        <SubmitButton
          type="submit"
          disabled={submittingComment || !newComment.trim()}
        >
          {submittingComment ? "등록 중..." : "등록"}
        </SubmitButton>
      </CommentForm>

      <CommentList>
        {loadingComments ? (
          <MessageParagraph>댓글을 불러오는 중...</MessageParagraph>
        ) : commentError ? (
          <MessageParagraph>{commentError}</MessageParagraph>
        ) : comments.length === 0 ? (
          <MessageParagraph>
            아직 댓글이 없습니다. 처음으로 댓글을 남겨보세요!
          </MessageParagraph>
        ) : (
          comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onToggleMenu={onToggleMenu}
            />
          ))
        )}
      </CommentList>
    </CommentsContainer>
  );
}

export default CommentSection;
