import React from "react";

type Props = {
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  click: boolean;
  setBasis: React.Dispatch<React.SetStateAction<string>>;
};

const DropDownMenu = ({ setClick, click, setBasis }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setClick(!click);
    setBasis(e.currentTarget.innerText);
  };

  return (
    <div className="flex flex-col px-[20px] py-[10px] items-center w-[130px] h-[84px] border border-[#E5E7EB] bg-[#E5E7EB] rounded-xl">
      <div
        className="flex flex-row items-center justify-center w-[130px] h-[42px] mb-[10px] cursor-pointer"
        onClick={handleClick}
      >
        <p className="text-[#1F2937] text-[16px] font-normal">최신순</p>
      </div>

      <div
        className="flex flex-row items-center justify-center w-[130px] h-[42px] cursor-pointer"
        onClick={handleClick}
      >
        <p className="text-[#1F2937] text-[16px] font-normal">좋아요순</p>
      </div>
    </div>
  );
};

export default DropDownMenu;
