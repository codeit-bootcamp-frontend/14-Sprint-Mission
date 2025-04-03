import { ChangeEvent, FormEvent, useState } from 'react';
import './Search.css';
import SearchIcon from '../../assets/icons/search-icon.svg';

interface SearchProps {
  keyword: string;
  onSubmit: (newKeyword: string) => void;
}

function Search({ keyword, onSubmit }: SearchProps) {
  const [newKeyword, setNewKeyword] = useState(keyword);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewKeyword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(newKeyword);
  };

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <img className="search-icon" src={SearchIcon} alt="search" />
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
