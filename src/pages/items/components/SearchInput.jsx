import { useState } from "react";
import IconSearch from "../../../assets/images/items/ic_search.svg";
import IconClose from "../../../assets/images/items/ic_X.svg";

export default function SearchInput({ keyword = "", onSearch }) {
  const [value, setValue] = useState(keyword);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value);
  }

  function handleClear() {
    setValue("");
    onSearch();
  }

  return (
    <form
      id="search-input"
      onSubmit={handleSubmit}
      className="display-flex justify-sides gap-4 radius-12"
    >
      <img src={IconSearch} alt="상품 검색 아이콘" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="검색할 상품을 입력해주세요"
      />
      {value.length > 0 && (
        <button type="reset" onClick={handleClear}>
          <img src={IconClose} alt="상품 검색어 제거 아이콘" />
        </button>
      )}
    </form>
  );
}
