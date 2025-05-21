import Image from "next/image";
import { useState } from "react";

import sortIcon from "@/public/icons/ic_sort.png";
import arrowDownIcon from "@/public/icons/ic_arrow_down.png";

const ArticleDropdown = ({
  sortOption,
  handleSortChange,
}: ArticleDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      {/* 모바일 버전 드롭다운 */}
      <>
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="md:hidden cursor-pointer"
        >
          <div className="w-[42px] h-[42px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] px-[9px] py-[9px]">
            <div className="w-[24px] h-[24px]">
              <Image src={sortIcon} alt="sortIcon" />
            </div>
          </div>
        </button>
        {isDropdownOpen && (
          <div className="md:hidden relative mt-[4px] w-[140px] bg-white border border-[#E5E7EB] rounded-[12px] shadow-md z-10 right-[100px]">
            <div
              className="px-[19px] py-[10px] hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleSortChange("recent");
                setIsDropdownOpen(false);
              }}
            >
              최신순
            </div>
            <div
              className="px-[19px] py-[10px] hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleSortChange("like");
                setIsDropdownOpen(false);
              }}
            >
              좋아요순
            </div>
          </div>
        )}
      </>

      {/* 태블릿 이상 버전 드롭다운 */}
      <>
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="hidden md:block cursor-pointer"
        >
          <div className="flex gap-[20px] w-[140px] h-[42px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] pt-[9px] pb-[7px] px-[19px]">
            <div className="h-[26px]">
              {sortOption === "recent" ? "최신순" : "좋아요순"}
            </div>
            <div className="w-[24px] h-[24px]">
              <Image src={arrowDownIcon} alt="arrowDownIcon" />
            </div>
          </div>
        </button>
        {isDropdownOpen && (
          <div className="hidden md:block absolute mt-[4px] w-[140px] bg-white border border-[#E5E7EB] rounded-[12px] shadow-md z-10">
            <div
              className="px-[19px] py-[10px] hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleSortChange("recent");
                setIsDropdownOpen(false);
              }}
            >
              최신순
            </div>
            <div
              className="px-[19px] py-[10px] hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleSortChange("like");
                setIsDropdownOpen(false);
              }}
            >
              좋아요순
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default ArticleDropdown;

type ArticleDropdownProps = {
  sortOption: "recent" | "like";
  handleSortChange: (option: "recent" | "like") => void;
};
