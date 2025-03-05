import './Search.css';

function Search({ keyword, onSubmit }) {
  return (
    <form>
      <input
        className="search-bar"
        name="search"
        type="text"
        placeholder="검색할 상품을 입력해주세요"
      />
    </form>
  );
}

export default Search;
