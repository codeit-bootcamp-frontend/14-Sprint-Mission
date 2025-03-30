import "./AddItemPage.css";
import AddItemImg from "../../component/addItem/AddItemImg";
import AddItemInput from "../../component/addItem/AddItemInput";
import { useState } from "react";

function AddItemPage() {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  return (
    <div className="add-item-container">
      <div className="add-item-header">
        <div className="add-item-header-title">상품 등록하기</div>
        <button
          className="add-item-header-btn"
          type="submit"
          disabled={!buttonEnabled}
        >
          등록
        </button>
      </div>
      <form className="add-item-form">
        <AddItemImg />
        <AddItemInput isInputValueEmpty={setButtonEnabled} />
      </form>
    </div>
  );
}

export default AddItemPage;
