import './Search.css';

function Search({ keyword, onSubmit, onChange }) {
  return (
    <form>
      <input
        className="search-bar"
        name="keyword"
        type="text"
        onChange={onChange}
        placeholder="검색할 상품을 입력해주세요"
      />
    </form>
  );
}

export default Search;
