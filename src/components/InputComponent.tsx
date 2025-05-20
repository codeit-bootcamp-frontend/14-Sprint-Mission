import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<any>;
}

const InputComponent = ({ id, label, placeholder, type, register }: Props) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="lg:text-[18px] md:text-[18px] text-[14px] text-[#1F2937] font-bold"
      >
        {label}
      </label>
      <input
        type={type}
        {...register(id)}
        id={id}
        placeholder={placeholder}
        className="bg-[#F3F4F6] lg:w-[640px] lg:h-[56px] rounded-xl mt-[16px] mb-[24px] px-[24px] py-[15px] text-[16px]"
      />
    </div>
  );
};

export default InputComponent;
