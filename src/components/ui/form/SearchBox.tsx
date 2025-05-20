import React from 'react';
import Icon from '../Icon';
import clsx from 'clsx';

type ProductSearchBoxProps = {
  onSearch: (keyword: string) => void;
  className?: string;
};

export default function SearchBox({ onSearch , className}: ProductSearchBoxProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch((e.target as HTMLInputElement).value);
    }
  };

  return (
    <form className={clsx('w-[325px] mobile:w-full',className)}>
      <div className='relative mobile:w-full'>
        <Icon iconName="search" alt="search box" className="absolute left-[16px] top-[10px] w-[24px]" />
        <input
          name="keyword"
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          onKeyDown={handleKeyDown}
          className="
            border-0 leading-[26px]
            h-[42px] bg-gray-100
            pl-[44px] pr-6 py-[9px] text-[16px] rounded-[12px]
            focus:bg-gray-200 hover:bg-gray-200 active:bg-gray-200
            focus:outline-0 hover:outline-0 active:outline-0 w-full
          "
        />
      </div>
    </form>
  );
}
