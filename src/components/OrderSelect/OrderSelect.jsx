import React from "react";

function OrderSelect({ value, handleOrder }) {
  return (
    <div className="select-box">
      <select name="order" id="order" onChange={handleOrder} value={value}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </div>
  );
}

export default OrderSelect;
