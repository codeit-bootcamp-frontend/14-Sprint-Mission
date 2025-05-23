import styled from "styled-components";

export const CommentsContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin-bottom: 16px;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  padding: 0;
  border-radius: 8px;
`;

export const CommentInput = styled.textarea`
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

export const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  background-color: #6c757d; // 색상 유지 또는 테마 적용 고려
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a6268; // 색상 유지 또는 테마 적용 고려
  }

  &:disabled {
    background-color: #ced4da;
    cursor: not-allowed;
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MessageParagraph = styled.p`
  text-align: center;
  color: #8b95a1;
  padding: 20px;
  font-size: 14px;
`;
