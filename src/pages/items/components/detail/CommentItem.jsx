import { useState } from "react";
import ImageProfile from "../../../../assets/images/common/profile.svg";
import IconMore from "../../../../assets/images/items/ic_kebab.svg";
import InputField from "../../../../components/InputField";
import { useUser } from "../../../../contexts/UserContext";
import { formatTimeBefore } from "../../../../utils/products";

export default function CommentItem({
  id,
  writer = {},
  updatedAt,
  content = "",
  onUpdate,
  onDelete,
}) {
  const user = useUser();
  const [openFg, setOpenFg] = useState(false);
  const [editFg, setEditFg] = useState(false);
  const [newComment, setNewComment] = useState({ content });

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(newComment);
    setEditFg(false);
  }

  function CommentItemRow() {
    return (
      <div className="display-flex justify-sides align-upper">
        <div className="text-md">
          {content?.split("\n").map((line, idx) => (
            <p key={`comment-${id}-${idx}`}>{line}</p>
          ))}
        </div>
        {user?.nickname === writer.nickname && (
          <button className="icon-wrapper" id="btn-more-comment">
            <img src={IconMore} alt="더보기 버튼 이미지" />
          </button>
        )}
      </div>
    );
  }
  function CommentItemForm() {
    return (
      <form
        className="display-grid justify-stretch gap-16"
        onSubmit={handleSubmit}
        id="comment-form"
      >
        <InputField
          type="textarea"
          name="content"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={newComment.content}
          onChange={(name, value) => setNewComment({ [name]: value })}
        />
      </form>
    );
  }

  return (
    <article className="display-grid justify-stretch gap-24" id="comment-item">
      {editFg ? <CommentItemForm /> : <CommentItemRow />}
      <div className="display-flex justify-sides gap-16">
        <div className="display-flex justify-left gap-16">
          <div className="img-wrapper radius-circle" id="profile-img">
            <img src={ImageProfile} alt="프로필 사진 미리보기" />
          </div>
          <div className="display-grid justify-left">
            <div className="display-grid justify-left gap-2 text-sm">
              <div className="text-secondary-600">{writer.nickname}</div>
              <div className="text-secondary-400">{formatTimeBefore(updatedAt)}</div>
            </div>
          </div>
        </div>
        {editFg && (
          <div className="display-flex justify-right gap-4" id="comment-btn-area">
            <button
              type="button"
              className="small-40"
              id="btn-comment-update"
              onClick={() => setEditFg(false)}
            >
              취소
            </button>
            <button
              type="submit"
              className="small-40"
              disabled={newComment.content === content}
              onClick={handleSubmit}
            >
              수정 완료
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
