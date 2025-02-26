import "./Tag.css";
import { IoIosCloseCircle } from "react-icons/io";

function Tag({ name, onClick }) {
  return (
    <div className="tag-box">
      <span className="tag-name">#{name}</span>
      <button className="remove-tag-button" onClick={onClick}>
        <IoIosCloseCircle size={20} />
      </button>
    </div>
  );
}

export default Tag;
