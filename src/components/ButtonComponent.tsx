import React from "react";

interface Props {
  placeholder: string;
  isClear: boolean;
  isSubmitting: boolean;
}

const ButtonComponent = ({ placeholder, isClear, isSubmitting }: Props) => {
  return (
    <button
      type="submit"
      disabled={!isClear}
      className={`lg:w-[640px] h-[56px] md:w-[640px] w-[343px] ${
        isClear ? "bg-[#3692FF]" : "bg-[#9CA3AF]"
      } rounded-[40px] text-[20px] text-[#F3F4F6] font-semibold cursor-pointer`}
    >
      {isSubmitting ? `${placeholder} 중...` : placeholder}
    </button>
  );
};

export default ButtonComponent;
