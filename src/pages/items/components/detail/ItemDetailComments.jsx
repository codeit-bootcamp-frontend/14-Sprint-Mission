import IconBack from "../../../../assets/images/items/ic_back.svg";
import ImageCommentEmpty from "../../../../assets/images/items/img_inquiry_empty.svg";
import InputField from "../../../../components/InputField";

export default function ItemDetailComments({ productId, onBackClick }) {
  return (
    <section className="display-grid justify-stretch gap-24" id="comments-area">
      <form
        className="display-grid justify-stretch gap-16"
        onSubmit={(e) => e.preventDefault()}
        id="comment-form"
      >
        <div className="display-grid justify-stretch gap-10" id="comment-upper-area">
          <h3>문의하기</h3>
          <InputField
            type="textarea"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
        </div>
        <div className="display-flex justify-right" id="comment-btn-area">
          <button type="submit" className="small-40">
            등록
          </button>
        </div>
      </form>
      <article className="display-grid gap-48">
        <div className="display-flex direction-column gap-8 text-secondary-400" id="comments-empty">
          <img src={ImageCommentEmpty} alt="아직 문의가 없어요" />
          아직 문의가 없어요
        </div>
        <button className="display-flex gap-8" id="btn-back" onClick={onBackClick}>
          <div>목록으로 돌아가기</div>
          <img src={IconBack} alt="목록으로 돌아가기 버튼 아이콘" />
        </button>
      </article>
    </section>
  );
}
