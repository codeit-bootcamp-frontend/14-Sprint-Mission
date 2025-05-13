import React from "react";

type Props = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const InputText = ({ setTitle }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label
        className="lg:text-[18px] md:text-[18px] text-[14px] font-bold"
        htmlFor="title"
      >
        *제목
      </label>
      <input
        id="title"
        type="text"
        placeholder="제목을 입력해주세요"
        className="w-full h-[56px] mt-[12px] bg-[#F3F4F6] rounded-xl px-[24px] py-[14px] text-[16px] font-normal"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputText;
