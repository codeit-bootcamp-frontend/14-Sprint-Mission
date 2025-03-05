import { useState } from 'react';
import './Search.css';

function Search({ keyword, onSubmit }) {
  const [newKeyword, setNewKeyword] = useState(keyword);

  const handleChange = (e) => {
    setNewKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newKeyword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-bar"
        name="keyword"
        type="text"
        value={newKeyword}
        onChange={handleChange}
        placeholder="검색할 상품을 입력해주세요"
      />
    </form>
  );
}

export default Search;
