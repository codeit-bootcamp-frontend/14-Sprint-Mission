import "./SearchInput.css";

function SearchInput({ search, setSearch, onSearch }) {
  return (
    <div className="search-wrapper">
      <img src="/images/ic_search.svg" alt="검색" className="search-icon" />
      <input
        className="search"
        placeholder="검색할 상품을 입력해주세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(search);
          }
        }}
      />
    </div>
  );
}

export default SearchInput;
