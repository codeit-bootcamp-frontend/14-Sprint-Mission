import React from "react";
import styled from "styled-components";

const CommentItemContainer = styled.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const CommentText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  flex-grow: 1;
`;

const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 12px;
  color: #999;
`;

const CommentAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: 600;
  flex-shrink: 0;
  margin-right: 8px;
`;

const CommentAuthor = styled.span`
  font-weight: 500;
  margin-right: 8px;
`;

const CommentDate = styled.span`
  color: #999;
`;

const CommentKebabMenu = styled.div`
  position: relative;
  cursor: pointer;
`;

const KebabIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const KebabMenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #e5e8ec;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 100px;
`;

const KebabMenuItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 8px 12px;
  background: none;
  border: none;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

function CommentItem({ comment, onToggleMenu }) {
  return (
    <CommentItemContainer>
      <CommentHeader>
        <CommentText>{comment.content}</CommentText>
        <CommentKebabMenu>
          <KebabIcon onClick={() => onToggleMenu(comment.id)}>⋮</KebabIcon>
          {comment.showMenu && (
            <KebabMenuDropdown>
              <KebabMenuItem>수정하기</KebabMenuItem>
              <KebabMenuItem>삭제하기</KebabMenuItem>
            </KebabMenuDropdown>
          )}
        </CommentKebabMenu>
      </CommentHeader>
      <CommentFooter>
        <CommentAvatar>{comment.avatar}</CommentAvatar>
        <CommentAuthor>{comment.author}</CommentAuthor>
        <CommentDate>{comment.timeAgo}</CommentDate>
      </CommentFooter>
    </CommentItemContainer>
  );
}

export default CommentItem;
