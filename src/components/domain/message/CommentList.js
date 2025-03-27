import './CommentList.css';
import { useState } from 'react';
import Button from '../../common/Button';
import TextArea from '../../common/TextArea';
import useComments from '../../hooks/useComments';
import Comment from './Comment';
import NoComment from './NoComment';

function CommentList({ productId }) {
  const { comments, loading, refetch } = useComments(productId);
  const [newComment, setNewComment] = useState('');

  const handleAddCommentClick = async () => {
    // const { comment } = await productService.createMessage(
    //   newComment
    // );
    setNewComment('');
    refetch();
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };
  return (
    <div>
      <div className="inquiryContainer">
        <TextArea
          label="문의하기"
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <div className="buttonContainer">
          <Button
            onClick={() => handleAddCommentClick()}
            disabled={!newComment.trim()}
          >
            등록
          </Button>
        </div>
      </div>
      {!comments.length && <NoComment />}
      {!loading &&
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
}

export default CommentList;
