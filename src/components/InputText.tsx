import React from "react";

type Props = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const InputText = ({ setTitle }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <label className="text-[18px] font-bold" htmlFor="title">
        *제목
      </label>
      <input
        id="title"
        type="text"
        placeholder="제목을 입력해주세요"
        className="lg:w-[1200px] h-[56px] mt-[12px] bg-[#F3F4F6] rounded-xl px-[24px] py-[14px] text-[16px] font-normal"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputText;
