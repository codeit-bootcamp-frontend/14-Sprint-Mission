import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="px-[200px] py-[15px] flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <Image
            width={40}
            height={40}
            src="/logo.svg"
            alt="logo"
            className="mr-[8.6px]"
          />

          <p className="text-[25.36px] text-[#3692FF] font-bold mr-[47px]">
            판다마켓
          </p>
          <p className="text-[18px] font-bold mr-[30px]">자유게시판</p>
          <p className="text-[18px] font-bold mr-[30px]">중고마켓</p>
        </div>

        <div className=" relative w-[40px] h-[40px] rounded-full bg-gray-400">
          <Image fill src="/profile.svg" alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Header;
