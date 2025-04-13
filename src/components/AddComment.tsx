"use client";
import React, { useEffect, useState } from "react";

type Props = {};

const AddComment = (props: Props) => {
  const [comment, setComment] = useState("");
  const [disable, setDisable] = useState(true);
  const [addButtonColor, setAddButtonColor] = useState("#9CA3AF");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    if (comment === "") {
      setDisable(true);
      setAddButtonColor("#9CA3AF");
    } else {
      setDisable(false);
      setAddButtonColor("#3692FF");
    }
  }, [comment]);

  return (
    <div className="flex flex-col">
      <label className="text-[16px] font-semibold mt-[32px]" id="comment">
        댓글달기
      </label>
      <textarea
        name="comment"
        id="comment"
        placeholder="댓글을 입력해주세요."
        className="w-full lg:h-[104px] mt-[9px] px-[24px] py-[16px] text-[16px] font-normal bg-[#F3F4F6] rounded-xl resize-none"
        onChange={handleChange}
      ></textarea>
      <div className=" flex flex-row justify-end">
        <button
          className={`w-[74px] h-[42px] bg-[${addButtonColor}] rounded-lg mt-[16px] text-[#F3F4F6] text-[16px] font-semibold cursor-pointer`}
          disabled={disable}
        >
          등록
        </button>
      </div>
    </div>
  );
};
export default AddComment;
