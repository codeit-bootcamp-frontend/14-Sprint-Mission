import React from "react";
import "./DropdownSelect.css";

const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

function DropdownSelect({ orderBy, setOrderBy }) {
  return (
    <div className="dropdown-select-wrapper">
      <select
        id="sort-select"
        className="dropdown-select"
        value={orderBy}
        onChange={(e) => setOrderBy(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownSelect;
