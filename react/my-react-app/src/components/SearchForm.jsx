import React from "react";
import styled from "styled-components";

const SearchFormContainer = styled.form`
  width: 100%; /* Use full width on mobile */
  max-width: 300px; /* Reduced max-width */
  flex-shrink: 1;

  @media (min-width: 768px) {
    width: 242px;
  }

  @media (min-width: 1280px) {
    width: 300px;
  }

  @media (max-width: 767px) {
    flex-grow: 1; /* Take up available space */
    flex-shrink: 1;
    width: 100%; /* Full width on mobile */
    margin-top: 10px;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 42px; /* 모든 화면에서 동일한 높이 */
  border-radius: 8px;
  border: 1px solid #e5e8ec;
  background-color: #f4f6fa;
  padding: 0 16px 0 40px; /* 패딩 변경: 왼쪽에 아이콘 공간 확보 */
  font-size: 14px;
  color: #4e5968;

  &:focus {
    outline: none;
    border-color: #3692ff;
  }
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 12px; /* 왼쪽으로 위치 변경 */
  width: 20px;
  height: 20px;
  pointer-events: none; /* 아이콘 클릭이 input 클릭을 방해하지 않도록 */
  color: #b0b8c1;
`;

function SearchForm({ value, onChange, onSubmit }) {
  return (
    <SearchFormContainer onSubmit={onSubmit}>
      <SearchInputWrapper>
        <SearchIcon
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            fill="#B0B8C1"
          />
        </SearchIcon>
        <SearchInput
          type="text"
          name="searchInput"
          placeholder="검색할 상품을 입력해주세요"
          value={value}
          onChange={onChange}
        />
      </SearchInputWrapper>
    </SearchFormContainer>
  );
}

export default SearchForm;
