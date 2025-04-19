import { Link } from "react-router-dom";
import { MainBannerPropsType } from "./MainTypes";


const MainBanner = ({
  title,
  title2,
  buttonText,
  image,
  showButton,
  height,
  margintop,
}:MainBannerPropsType) => {
  return (
    <div
      className="w-full bg-[#cfe5ff] flex justify-center overflow-hidden pc:h-[540px] tablet:h-[771px] mobile:h-[540px]"
      style={{ marginTop: margintop }}
    >
      <div
        className={`w-[356px] h-[200px] flex flex-col relative right-[1rem] 
          pc:top-[12.5rem] tablet:top-[7rem] mobile:top-[2rem] 
          pc:left-0 tablet:left-[18rem] ${
            title === "믿을 수 있는" ? "left-[12rem]" : "left-[13rem]"
          }`}
      >
        <span className="h-[112px] font-[700] text-[#374151] break-words leading-[56px] pc:w-[300px] tablet:w-[1920px] mobile:w-[270px] pc:text-left tablet:text-left mobile:text-center pc:text-[40px] tablet:text-[40px] mobile:text-[32px]">
          {title}
          {title === "믿을 수 있는" ? <br /> : null}
          {title2}
        </span>
        {showButton && (
          <Link
            to={"/items"}
            className="bg-[#3692FF] rounded-[40px] gap-[10px] relative pc:left-0 tablet:left-[90px] mobile:left-[20px] pc:bottom-0 tablet:bottom-[2rem] mobile:bottom-[-1rem] pc:py-[16px] pc:px-[124px] tablet:py-[16px] tablet:px-[124px] mobile:py-[12px] mobile:px-[71px] pc:w-[357px] pc:h-[56px] tablet:w-[357px] tablet:h-[56px] mobile:w-[240px] mobile:h-[48px]  "
          >
            <span className="text-[#F9FAFB] text-[20px] whitespace-nowrap font-[600]">
              {buttonText}
            </span>
          </Link>
        )}
      </div>
      <img
        src={image}
        alt="panda-image"
        style={{ height: height }}
        className={`h-[21.25rem] relative object-contain
          ${
            title === "믿을 수 있는"
              ? "top-[250px] tablet:top-[400px] pc:top-[150px]"
              : "pc:top-[12.5rem] tablet:top-[26.9rem] mobile:top-[17.8rem]"
          }
          pc:right-0 tablet:right-[170px] mobile:right-[8.5rem]
          pc:min-w-[746px] tablet:min-w-[746px] mobile:min-w-[375px]`}
      />
    </div>
  );
};

export default MainBanner;
