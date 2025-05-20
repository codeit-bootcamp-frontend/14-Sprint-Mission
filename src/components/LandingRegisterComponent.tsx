import React from 'react'

type Props = {}

const LandingRegisterComponent = (props: Props) => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-[276px] md:mt-[52px] mt-[40px]">
      <img
        src="/images/Img_home_03.png"
        alt="HotItem"
        className="lg:w-[579px] lg:h-[444px] md:w-[696px] md:h-[524px] w-[343px] h-[259px]"
      />
      <div className="flex flex-col items-center justify-center lg:w-[409px] lg:h-[444px] lg:bg-[#FCFCFC] lg:rounded-xl">
        <div className="flex flex-col lg:w-[298px] lg:self-auto md:self-start md:w-[696px] w-[343px] lg:mt-0 mt-[24px]">
          <span className="lg:text-[18px] text-[#3692FF] font-extrabold">
            Register
          </span>
          <span className="lg:text-[40px] md:text-[32px] text-[24px] text-[#374151] font-bold lg:mt-[12px] md:mt-[16px] mt-[8px]">
            판매를 원하는 상품을 등록하세요
          </span>
          <span className="lg:text-[24px] md:text-[18px] text-[16px] lg:mt-[24px] md:mt-[24px] lg:w-[274px] md:w-[206px] w-[183px] text-[#374151] font-medium">
            어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요
          </span>
        </div>
      </div>
    </div>
  );
}

export default LandingRegisterComponent;