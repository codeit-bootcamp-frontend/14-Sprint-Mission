import React from "react";

type Props = {};

const LandingSearchComponent = (props: Props) => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-[276px] md:mt-[52px] mt-[40px]">
      <div className="lg:flex flex-col items-center justify-center hidden lg:w-[409px] lg:h-[444px] lg:bg-[#FCFCFC] lg:rounded-xl">
        <div className="flex flex-col items-end lg:w-[293px] lg:self-auto md:self-start md:w-[696px] w-[343px] lg:mt-0 mt-[24px]">
          <span className="lg:text-[18px] text-[#3692FF] font-extrabold">
            Search
          </span>
          <span className="text-right lg:text-[40px] md:text-[32px] text-[24px] text-[#374151] font-bold lg:mt-[12px] md:mt-[16px] mt-[8px]">
            구매를 원하는 상품을 검색하세요
          </span>
          <span className="text-right lg:text-[24px] md:text-[18px] text-[16px] lg:mt-[24px] md:mt-[24px] lg:w-[274px] md:w-[206px] w-[183px] text-[#374151] font-medium">
            구매하고 싶은 물품은 검색해서 쉽게 찾아보세요
          </span>
        </div>
      </div>
      <img
        src="/images/Img_home_02.png"
        alt="HotItem"
        className="lg:w-[579px] lg:h-[444px] md:w-[696px] md:h-[524px] w-[343px] h-[259px]"
      />
      <div className="flex flex-col items-center justify-center lg:hidden lg:w-[409px] lg:h-[444px] lg:bg-[#FCFCFC] lg:rounded-xl">
        <div className="flex flex-col items-end lg:w-[293px] lg:self-auto md:self-start md:w-[696px] w-[343px] lg:mt-0 mt-[24px]">
          <span className="lg:text-[18px] text-[#3692FF] font-extrabold">
            Search
          </span>
          <span className="text-right lg:text-[40px] md:text-[32px] text-[24px] text-[#374151] font-bold lg:mt-[12px] md:mt-[16px] mt-[8px]">
            구매를 원하는 상품을 검색하세요
          </span>
          <span className="text-right lg:text-[24px] md:text-[18px] text-[16px] lg:mt-[24px] md:mt-[24px] lg:w-[274px] md:w-[206px] w-[183px] text-[#374151] font-medium">
            구매하고 싶은 물품은 검색해서 쉽게 찾아보세요
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingSearchComponent;
