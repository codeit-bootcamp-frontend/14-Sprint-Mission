"use client";

import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import DropDownMenu from "./DropDownMenu";
import useSearch from "@/hooks/useSearch";
import { Articles } from "@/hooks/useArticle";

type Props = {
  page: number;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setArticleResults: React.Dispatch<React.SetStateAction<Articles[] | null>>;
  basis: string;
  setBasis: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ page, keyword, setKeyword, setArticleResults, basis, setBasis }: Props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    useSearch({ basis, keyword, page, setArticleResults });
  };

  return (
    <div className="flex relative flex-row items-center mt-[24px] justify-between">
      <form className="relative" onSubmit={handleSubmit}>
        <input
          type="text"
          className="lg:w-[1054px] lg:h-[42px] md:w-[560px] md:h-[42px] w-[288px] h-[42px] rounded-xl bg-[#F3F4F6] text-[16px] text-[#9CA3AF] font-normal pr-[16px] pl-[44px]"
          placeholder="검색할 상품을 입력해주세요"
          value={keyword}
          onChange={handleChange}
        />
        <CiSearch
          size={24}
          className="absolute left-[16px] top-[8px]"
          color="#9CA3AF"
        />
      </form>

      <div
        className="flex flex-row px-[20px] py-[10px] justify-between items-center w-[130px] h-[42px] border border-[#E5E7EB] bg-[#E5E7EB] rounded-xl cursor-pointer"
        onClick={handleClick}
      >
        <p className="text-[#1F2937] text-[16px] font-normal">{basis}</p>
        <IoMdArrowDropdown size={24} color="#1F2937" />
      </div>

      <div className="absolute top-[62px] right-0">
        {click && (
          <DropDownMenu setClick={setClick} click={click} setBasis={setBasis} />
        )}
      </div>
    </div>
  );
};

export default Search;
