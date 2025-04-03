import "./AddItemPage.css";
import AddItemImg from "../../component/addItem/AddItemImg";
import AddItemInput from "../../component/addItem/AddItemInput";
import Header from "../../component/common/Header";
import { useState } from "react";

function AddItemPage() {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  return (
    <>
      <Header />
      <form className="add-item-form">
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
          <AddItemImg />
          <AddItemInput isInputValueEmpty={setButtonEnabled} />
        </div>
      </form>
    </>
  );
}

export default AddItemPage;
