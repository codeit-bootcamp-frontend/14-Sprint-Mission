import React from "react";

type Props = {};

const LandingBottomComponent = (props: Props) => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center lg:h-[540px] md:h-[927px] h-[540px] bg-[#CFE5FF] lg:mt-[276px] md:mt-[56px] mt-[83px]">
      <span className="lg:text-[40px] lg:text-left md:text-[40px] text-[32px] lg:mt-0 md:mt-[201px] mt-[121px] text-center text-[#374151] font-bold lg:w-[295px] md:w-[295px] w-[236px]">
        믿을 수 있는 판다마켓 중고 거래
      </span>
      <img
        src="/images/Img_home_bottom.png"
        alt="home_bottom"
        className="lg:w-[746px] lg:h-[397px] md:w-[744px] md:h-[397px] w-[375px] h-[198px] mt-auto"
      />
    </div>
  );
};

export default LandingBottomComponent;
