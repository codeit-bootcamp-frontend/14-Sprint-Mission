"use client";
import AddImage from "@/components/AddImage";
import InputText from "@/components/InputText";
import TextArea from "@/components/TextArea";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [disable, setDisable] = useState(true);
  const [buttonColor, setButtonColor] = useState("#9CA3AF");

  useEffect(() => {
    if (title && content !== "") {
      setButtonColor("#3692FF");
      setDisable(false);
    } else {
      setButtonColor("#9CA3AF");
      setDisable(true);
    }
  }, [title, content]);

  return (
    <div className="flex flex-col justify-center lg:px-[360px] md:px-[24px] px-[15px] pb-[130px]">
      <div className="flex flex-row items-center justify-between lg:mt-[94px] mt-[86px]">
        <span className="text-[20px] font-bold">게시글 쓰기</span>
        <button
          className={`w-[74px] h-[42px] rounded-lg bg-[${buttonColor}] text-[#F3F4F6] text-[16px] font-semibold`}
          disabled={disable}
        >
          등록
        </button>
      </div>

      <div className="mt-[32px]">
        <InputText setTitle={setTitle} />
      </div>

      <div className="mt-[24px]">
        <TextArea setContent={setContent} />
      </div>

      <div className="mt-[24px]">
        <AddImage />
      </div>
    </div>
  );
};

export default Page;
