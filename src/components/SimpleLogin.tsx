import Image from "next/image";
import React from "react";

type Props = {};

const SimpleLogin = (props: Props) => {
  return (
    <div className="flex flex-row justify-between items-center lg:w-[640px] lg:h-[74px] md:w-[640px] md:h-[74px] w-[343px] h-[75px] bg-[#E6F2FF] mt-[24px] px-[23px] py-[16px] rounded-lg">
      <span className="text-[16px] text-[#1F2937] font-medium">
        간편 로그인하기
      </span>

      <div className="flex flex-row items-center gap-[16px]">
        <Image
          width={42}
          height={42}
          alt="google"
          src="/images/google-icon.png"
        />
        <Image
          width={42}
          height={42}
          alt="google"
          src="/images/kakao-icon.png"
        />
      </div>
    </div>
  );
};

export default SimpleLogin;
