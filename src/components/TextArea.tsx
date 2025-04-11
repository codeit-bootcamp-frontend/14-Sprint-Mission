import React from "react";

type Props = {};

const TextArea = (props: Props) => {
  return (
    <div>
      <label className="text-[18px] font-bold" htmlFor="content">
        *내용
      </label>
      <textarea
        name="content"
        id="content"
        placeholder="내용을 입력해주세요"
        className="lg:w-[1200px] lg:h-[282px] mt-[12px] bg-[#F3F4F6] rounded-xl px-[24px] py-[16px] text-[16px] font-normal resize-none"
      />
    </div>
  );
};

export default TextArea;
