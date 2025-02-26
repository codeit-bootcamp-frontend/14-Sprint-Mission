import "./FileInput.css";
import { IoIosAdd } from "react-icons/io";

function FileInput({}) {
  return (
    <div className="file-input-container">
      <label htmlFor="image">상품 이미지</label>
      <input id="image" type="file"></input>
    </div>
  );
}

export default FileInput;
