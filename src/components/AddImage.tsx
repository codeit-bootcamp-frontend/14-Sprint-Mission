"use client";
import { IoIosClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";

type Props = {};

const AddImage = (props: Props) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
    }
  };

  const handleCancel = () => {
    setPreview(null);
    if (preview) {
      URL.revokeObjectURL(preview);
    }
  };

  return (
    <div>
      <span className="text-[18px] font-bold ">이미지</span>
      <div className="flex flex-row  mt-[12px]">
        <label
          htmlFor="addImage"
          className="flex flex-col justify-center items-center mr-[12px] lg:w-[282px] lg:h-[282px] w-[168px] h-[168px] lg:px-[104px] lg:py-[96px] bg-[#F3F4F6] rounded-xl cursor-pointer"
        >
          <GoPlus size={48} color="#9CA3AF" />
          <span className="text-[16px] text-[#9CA3AF] font-normal mt-[12px]">
            이미지 등록
          </span>
        </label>

        {preview && (
          <div className="relative">
            <img
              src={preview}
              alt="preview"
              className="rounded-xl lg:w-[282px] lg:h-[282px] w-[168px] h-[168px]"
            />
            <button
              className="absolute top-[10px] right-[10px] z-50 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#9CA3AF] cursor-pointer"
              onClick={handleCancel}
            >
              <IoIosClose size={24} color="white" />
            </button>
          </div>
        )}

        <input
          type="file"
          name="addImage"
          id="addImage"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default AddImage;
