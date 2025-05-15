import React from 'react';
import styles from './ProductSearchBox.module.css'; // 필요하다면 별도 스타일 분리 가능
import Icon from '../ui/Icon';

type ProductSearchBoxProps = {
  onSearch: (keyword: string) => void;
};

export default function ProductSearchBox({ onSearch }: ProductSearchBoxProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch((e.target as HTMLInputElement).value);
    }
  };

  return (
    <form className='mobile:w-full'>
      <div className='relative mobile:w-full'>
        <Icon iconName="search" alt="search box" className="absolute left-[16px] top-[10px] w-[24px]" />
        <input
          name="keyword"
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          onKeyDown={handleKeyDown}
          className="
            border-0 leading-[26px]
            h-[42px] w-[325px] bg-gray-100
            pl-[44px] pr-6 py-[9px] text-[16px] rounded-[12px]
            focus:bg-gray-200 hover:bg-gray-200 active:bg-gray-200
            focus:outline-0 hover:outline-0 active:outline-0 mobile:w-full
          "
        />
      </div>
    </form>
  );
}
