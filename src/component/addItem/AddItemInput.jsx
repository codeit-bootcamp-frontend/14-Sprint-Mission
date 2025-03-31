import "./AddItemInput.css";
import { useEffect, useState } from "react";
import AddTag from "./AddTag";

function useInput(inputValue) {
  const [value, setValue] = useState(inputValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
}

function AddItemInput({ isInputValueEmpty }) {
  const titleInput = useInput("");
  const detailInput = useInput("");
  const [price, setPrice] = useState("");
  const tagInput = useInput("");
  const [tag, setTag] = useState([]);

  const handleTagBlur = () => {
    tag.forEach((value) => {
      if (tagInput.value === value) {
        setTag((prevTag) => prevTag.filter((tag) => tag !== value));
      }
    });
    setTag((prevTag) => [...prevTag, tagInput.value]);

    tagInput.onChange({ target: { value: "" } });
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleTagBlur();
    }
  };

  const handlePriceChange = (event) => {
    const inputPrice = event.target.value.replace(/[^0-9]/g, "");
    const newPrice = Number(inputPrice).toLocaleString("ko-KR");
    setPrice(newPrice);
  };

  useEffect(() => {
    if (
      titleInput.value !== "" &&
      detailInput.value !== "" &&
      price !== "" &&
      tag.length > 0
    ) {
      isInputValueEmpty(true);
    } else {
      isInputValueEmpty(false);
    }
  }, [titleInput.value, detailInput.value, price, tag]);

  return (
    <>
      <div className="add-item-input-div">
        <label htmlFor="add-item-title">상품명</label>
      </div>
      <input
        className="add-item-input"
        id="add-item-title"
        name="item-title"
        type="text"
        value={titleInput.value}
        onChange={titleInput.onChange}
        placeholder="상품명을 입력해주세요"
      />
      <div className="add-item-input-div">
        <label htmlFor="add-item-detail">상품 소개</label>
      </div>
      <textarea
        className="add-item-textarea"
        id="add-item-detail"
        name="item-detail"
        value={detailInput.value}
        onChange={detailInput.onChange}
        placeholder="상품 소개를 입력해주세요"
      />
      <div className="add-item-input-div">
        <label htmlFor="add-item-price">판매가격</label>
      </div>
      <input
        className="add-item-input"
        id="add-item-price"
        name="item-price"
        type="text"
        value={price}
        onChange={handlePriceChange}
        placeholder="판매 가격을 입력해주세요"
      />
      <div className="add-item-input-div">
        <label htmlFor="add-item-tag">태그</label>
      </div>
      <input
        className="add-item-input add-item-tag"
        id="add-item-tag"
        name="item-tag"
        type="text"
        value={tagInput.value}
        onChange={tagInput.onChange}
        onBlur={handleTagBlur}
        onKeyDown={handleEnterKey}
        onFocus={(e) => {
          e.target.value = "";
        }}
        placeholder="태그를 입력해주세요"
      />
      {tag.length > 0 && <AddTag tagArr={tag} setTagArr={setTag} />}
    </>
  );
}

export default AddItemInput;
