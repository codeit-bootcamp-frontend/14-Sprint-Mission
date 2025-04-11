"use client";
import React from "react";
import { GoPlus } from "react-icons/go";

type Props = {};

const AddImage = (props: Props) => {
  return (
    <div>
      <span className="text-[18px] font-bold ">이미지</span>
      <label
        htmlFor="addImage"
        className="flex flex-col justify-center items-center mt-[12px] lg:w-[282px] lg:h-[282px] w-[168px] h-[168px] lg:px-[104px] lg:py-[96px] bg-[#F3F4F6] rounded-xl cursor-pointer"
      >
        <GoPlus size={48} color="#9CA3AF" />
        <span className="text-[16px] text-[#9CA3AF] font-normal mt-[12px]">이미지 등록</span>
      </label>
      <input type="file" name="addImage" id="addImage" className="hidden" />
    </div>
  );
};

export default AddImage;
