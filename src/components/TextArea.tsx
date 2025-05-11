import React from "react";

type Props = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

const TextArea = ({ setContent }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label
        className="lg:text-[18px] md:text-[18px] text-[14px] font-bold"
        htmlFor="content"
      >
        *내용
      </label>
      <textarea
        name="content"
        id="content"
        placeholder="내용을 입력해주세요"
        className="w-full lg:h-[282px] md:h-[282px]  h-[200px] mt-[12px] bg-[#F3F4F6] rounded-xl px-[24px] py-[16px] text-[16px] font-normal resize-none"
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
