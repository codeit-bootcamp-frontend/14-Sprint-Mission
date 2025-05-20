import Link from "next/link";
import React from "react";

type Props = {};

const LandingExploreSection = (props: Props) => {
  return (
    <div className="flex justify-center lg:h-[540px] md:h-[771px] h-[540px] bg-[#CFE5FF]">
      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div className="flex flex-col md:items-center lg:w-[357px] md:w-[530px] w-[240px] lg:mt-[240px] md:mt-[84px] mt-[48px]">
          <span className="lg:text-[40px] lg:w-[298px] md:text-[40px] text-[32px] md:text-left text-center text-[#374151] font-bold">
            일상의 모든 물건을 거래해 보세요
          </span>
          <Link
            href=""
            className="flex flex-row mt-[32px] items-center justify-center lg:w-[357px] lg:h-[56px] md:w-[357px] md:h-[56px] w-[240px] h-[48px] rounded-[40px] bg-[#3692FF] lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#F9FAFB]"
          >
            구경하러 가기
          </Link>
        </div>

        <img
          src="/images/Img_home_top.png"
          alt="landingPageExploreSectionImage"
          className="lg:w-[746px] lg:h-[340px] mt-auto"
        />
      </div>
    </div>
  );
};

export default LandingExploreSection;
