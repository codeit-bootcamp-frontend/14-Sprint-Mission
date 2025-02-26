import { useState } from "react";
import IconArrowDown from "../../../assets/images/items/ic_arrow_down.svg";
import IconSort from "../../../assets/images/items/ic_sort.svg";

const SELECT_OPTIONS = { recent: "최신순", favorite: "좋아요순" };

export default function OrderSelector({ order = "recent", setOrder, isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(value) {
    setOrder(value);
    setIsOpen(false);
  }

  function SelectOptions() {
    return (
      <div className="element-wrapper surface-secondary-0">
        {Object.keys(SELECT_OPTIONS).map((key) => (
          <div
            key={key}
            onClick={() => handleChange(key)}
            className="dropdown element text-secondary-900"
          >
            {SELECT_OPTIONS[key]}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div id="order-selector">
      {isMobile ? (
        <div className="display-flex justify-left">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={IconSort} alt="상품 정렬 방법 보기" />
          </button>
        </div>
      ) : (
        <div
          className="dropdown display-flex justify-sides surface-secondary-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-secondary-900">{SELECT_OPTIONS[order]}</p>
          <img src={IconArrowDown} className={isOpen ? "rotated" : ""} alt="드롭다운 화살표" />
        </div>
      )}
      {isOpen && <SelectOptions />}
    </div>
  );
}
