import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  placeholder: string;
  isClear: boolean;
}

const ButtonComponent = ({ placeholder, isClear }: Props) => {
  return (
    <button className="lg:w-[640px] h-[56px] md:w-[640px] w-[343px] bg-[#9CA3AF] rounded-[40px] text-[20px] text-[#F3F4F6] font-semibold">
      {placeholder}
    </button>
  );
};

export default ButtonComponent;
