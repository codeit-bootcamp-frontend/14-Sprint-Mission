import AddImage from "@/components/AddImage";
import InputText from "@/components/InputText";
import TextArea from "@/components/TextArea";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col justify-center lg:px-[360px] md:px-[24px] px-[15px] pb-[130px]">
      <div className="flex flex-row items-center justify-between lg:mt-[94px] mt-[86px]">
        <span className="text-[20px] font-bold">게시글 쓰기</span>
        <button className="w-[74px] h-[42px] rounded-lg bg-[#9CA3AF] text-[#F3F4F6] text-[16px] font-semibold">
          등록
        </button>
      </div>

      <div className="mt-[32px]">
        <InputText />
      </div>

      <div className="mt-[24px]">
        <TextArea />
      </div>

      <div className="mt-[24px]">
        <AddImage />
      </div>
    </div>
  );
};

export default Page;
