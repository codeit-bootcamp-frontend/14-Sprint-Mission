import React from "react";

function SearchInput({ placeholder, value, onChange }) {
  return (
    <div className="input-box el-txt-input search">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;
