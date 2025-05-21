import Image from "next/image";
import React, { useState } from "react";

import searchIcon from "@/public/icons/ic_search.png";

const ArticleSearch = ({
  onSearch,
}: {
  onSearch: (keyword: string) => void;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
    }
  };
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-[288px] md:w-[560px] lg:w-[1054px] h-[42px] rounded-[12px] pt-[9px] pl-[55px] pr-[20px] pb-[9px] bg-[#F3F4F6]"
        />
      </div>
      <div className="w-[24px] h-[24px] relative bottom-[33px] left-[20px]">
        <Image src={searchIcon} alt="searchIcon" />
      </div>
    </div>
  );
};

export default ArticleSearch;
