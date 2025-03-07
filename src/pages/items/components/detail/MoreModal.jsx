export default function MoreModal({ onUpdate, onDelete, ...props }) {
  return (
    <ul className="display-grid surface-secondary-0 radius-8" id="feature-box" {...props}>
      <li onClick={onUpdate}>수정하기</li>
      <li onClick={onDelete}>삭제하기</li>
    </ul>
  );
}
