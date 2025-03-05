import { deleteComment, updateComment } from "../../../../apis/comment";
import { createProductComment, getProductComments } from "../../../../apis/products";
import IconBack from "../../../../assets/images/items/ic_back.svg";
import ImageCommentEmpty from "../../../../assets/images/items/img_inquiry_empty.svg";
import useAsync from "../../../../hooks/useAsync";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

export default function ItemDetailComments({ productId, onBackClick }) {
  const { value: commentDetails, setValue: setCommentDetails } = useAsync(
    () => getProductComments(productId),
    [productId]
  );

  async function handleCreateComment(comment) {
    const res = await createProductComment(productId, comment);
    if (res) setCommentDetails((prev) => ({ ...prev, list: [res, ...prev.list] }));
  }

  async function handleUpdateComment(id, comment, idx) {
    const res = await updateComment(id, comment);
    if (res)
      setCommentDetails((prev) => ({
        ...prev,
        list: [...prev.list.slice(0, idx), res, ...prev.list.slice(idx + 1)],
      }));
  }
  async function handleDeleteComment(id, idx) {
    const res = await deleteComment(id);
    if (res)
      setCommentDetails((prev) => ({
        ...prev,
        list: [...prev.list.slice(0, idx), ...prev.list.slice(idx + 1)],
      }));
  }
  return (
    <section className="display-grid justify-stretch gap-24" id="comments-area">
      <CommentForm onSubmit={handleCreateComment} />
      {commentDetails?.list?.length > 0 ? (
        <div className="display-grid justify-stretch gap-24">
          {commentDetails.list.map((comment, idx) => (
            <CommentItem
              key={comment.id}
              {...comment}
              onUpdate={(value) => handleUpdateComment(comment.id, value, idx)}
              onDelete={() => handleDeleteComment(comment.id, idx)}
            />
          ))}
        </div>
      ) : (
        <div className="display-flex direction-column gap-8 text-secondary-400" id="comments-empty">
          <img src={ImageCommentEmpty} alt="아직 문의가 없어요" />
          아직 문의가 없어요
        </div>
      )}
      <div className="display-flex justify-center">
        <button className="display-flex gap-8" id="btn-back" onClick={onBackClick}>
          <div>목록으로 돌아가기</div>
          <img src={IconBack} alt="목록으로 돌아가기 버튼 아이콘" />
        </button>
      </div>
    </section>
  );
}
