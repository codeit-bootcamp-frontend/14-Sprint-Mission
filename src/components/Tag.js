import "./Tag.css";
import { IoIosCloseCircle } from "react-icons/io";

function Tag({ name, onClick }) {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className="tag-box">
      <span className="tag-name">#{name}</span>
      <button className="remove-tag-button" onClick={handleClick}>
        <IoIosCloseCircle size={20} />
      </button>
    </div>
  );
}

export default Tag;
