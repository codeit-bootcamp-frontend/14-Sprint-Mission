"use client";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<any>;
  error?: string;
}

const InputComponent = ({
  id,
  label,
  placeholder,
  type,
  register,
  error,
}: Props) => {
  const [hide, setHide] = useState(true);

  return (
    <div className="flex flex-col relative">
      <label
        htmlFor={id}
        className="lg:text-[18px] md:text-[18px] text-[14px] text-[#1F2937] font-bold"
      >
        {label}
      </label>
      <input
        type={type === "password" ? (hide ? "password" : "text") : type}
        {...register(id)}
        id={id}
        placeholder={placeholder}
        className={`bg-[#F3F4F6] lg:w-[640px] lg:h-[56px] rounded-xl mt-[16px] px-[24px] ${
          type === "password" ? "pr-[60px]" : ""
        } py-[15px] text-[16px] ${
          error ? "border-[1px] border-[#F74747]" : ""
        }`}
      />
      {type == "password" &&
        (hide ? (
          <FaRegEyeSlash
            className="absolute top-[55px] right-[24px] cursor-pointer"
            size={24}
            onClick={() => setHide(!hide)}
          />
        ) : (
          <FaRegEye
            size={24}
            className="absolute top-[55px] right-[24px] cursor-pointer"
            onClick={() => setHide(!hide)}
          />
        ))}

      <span className="text-[14px] text-[#F74747] font-semibold mt-[8px] ml-[16px] mb-[24px]">
        {error}
      </span>
    </div>
  );
};

export default InputComponent;
