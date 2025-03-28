import './NoComment.css';
import NoCommentImg from '../../../assets/noComment.png';

function NoComment() {
  return (
    <div className="noCommentContainer">
      <img
        className="noCommentImg"
        src={NoCommentImg}
        alt="noComment"
        width={196}
        height={196}
      />
      <span>아직 문의가 없어요</span>
    </div>
  );
}

export default NoComment;
