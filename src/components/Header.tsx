import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="fixed right-0 left-0 z-50 bg-[var(--background)]  lg:px-[200px] lg:py-[15px] md:px-[24px] md:py-[10px] px-[16px] py-[10px]  flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <Link href="/boards">
            <Image
              width={40}
              height={40}
              src="/logo.svg"
              alt="logo"
              className="mr-[8.6px]"
            />
          </Link>

          <Link href="/boards">
            <span className="lg:text-[25.36px] text-[#3692FF] text-[20px] mr-[8px] md:mr-[40px] font-bold lg:mr-[47px]">
              판다마켓
            </span>
          </Link>
          <span className="text-[18px] font-bold lg:mr-[30px] md:mr-[30px] mr-[8px]">
            자유게시판
          </span>
          <span className="text-[18px] font-bold lg:mr-[30px] md:mr-[30px] mr-[8px]">
            중고마켓
          </span>
        </div>

        <div className=" relative w-[40px] h-[40px] rounded-full bg-gray-400">
          <Image fill src="/profile.svg" alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Header;
