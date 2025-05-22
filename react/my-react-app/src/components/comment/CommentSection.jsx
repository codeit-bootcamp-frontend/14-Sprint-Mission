import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

const CommentsContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin-bottom: 16px;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  padding: 0;
  border-radius: 8px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 104px;
  border-radius: 8px;
  border: 1px solid #e5e8ec;
  background-color: #f4f6fa;
  padding: 16px;
  font-size: 14px;
  resize: none;
  box-sizing: border-box;
  color: #333333;
  font-family: inherit;

  &:focus {
    border-color: #007aff;
    outline: none;
  }

  &::placeholder {
    color: #666;
    opacity: 1;
  }
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a6268;
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MessageParagraph = styled.p`
  text-align: center;
  color: #8b95a1;
  padding: 20px;
  font-size: 14px;
`;

// 디폴트 문구 정의
const DEFAULT_COMMENT =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

function CommentSection({
  comments,
  newComment,
  loadingComments,
  commentError,
  onCommentChange,
  onCommentSubmit,
  onCommentFocus,
  onCommentBlur,
  onToggleMenu
}) {
  return (
    <CommentsContainer>
      <SectionTitle>문의하기</SectionTitle>
      <CommentForm onSubmit={onCommentSubmit}>
        <CommentInput
          placeholder={DEFAULT_COMMENT}
          value={newComment}
          onChange={onCommentChange}
          onFocus={onCommentFocus}
          onBlur={onCommentBlur}
        />
        <SubmitButton type="submit">등록</SubmitButton>
      </CommentForm>

      <CommentList>
        {loadingComments ? (
          <MessageParagraph>댓글을 불러오는 중...</MessageParagraph>
        ) : commentError ? (
          <MessageParagraph>
            댓글을 불러오는데 오류가 발생했습니다.
          </MessageParagraph>
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
