import React, { useState } from "react";
import "./OrderSelect.scss";

// function OrderSelect({ value, handleOrder }) {
//   return (
//     <div className="select-box">
//       <select name="order" id="order" onChange={handleOrder} value={value}>
//         <option value="recent">최신순</option>
//         <option value="favorite">좋아요순</option>
//       </select>
//     </div>
//   );
// }

function OrderSelect({ value, handleOrder }) {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "favorite" },
  ];

  const handleSelect = (optionValue) => {
    handleOrder(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === value)?.label;

  return (
    <div className="custom-select">
      <button
        type="button"
        className="select-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption}
      </button>

      {isOpen && (
        <ul className="select-options">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={opt.value === value ? "selected" : ""}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderSelect;
