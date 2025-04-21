import { MainInfoCardItemType } from "./MainTypes";

const MainInfoCardItem = ({
  title,
  title2,
  description,
  description2,
  image,
  highlightText,
  reverse,
}: MainInfoCardItemType) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white gap-8 pc:pt-[138px] pc:pb-[138px] tablet:pt-[24px] tablet:pb-[56px] mobile:pt-[52px] mobile:pb-[83px]">
      <div
        className={`flex justify-center rounded-[12px] items-start pc:items-center pc:w-[988px] pc:bg-[#FCFCFC] tablet:min-w-[525px] mobile:min-w-[344px] tablet:flex-col mobile:flex-col ${
          reverse ? "pc:flex-row-reverse" : "pc:flex-row"
        }`}
      >
        <img
          src={image}
          alt="feature"
          className="object-cover rounded-[12px] pc:min-w-[588px] pc:h-[444px] tablet:min-w-[696px] tablet:h-[525px] mobile:min-w-[344px] mobile:min-h-[259px]"
        />

        <div
          className={`flex flex-col justify-start  ${
            reverse
              ? "pc:text-right pc:mr-[54px] pc:ml-[23.5px]"
              : "pc:text-left pc:ml-[54px] pc:mr-[23.5px]"
          }`}
        >
          <div className="text-[#3692FF] font-bold text-[18px] pc:mb-[12px] tablet:mb-[16px] mobile:mb-[8px]">
            {highlightText}
          </div>

          <div className="text-[40px] font-bold text-[#374151] mb-[24px] tablet:text-[32px] mobile:text-[24px] ">
            {title} <br />
            {title2}
          </div>

          <div className="text-[24px] font-medium text-[#374151] whitespace-nowrap tablet:text-[18px] mobile:text-[16px] ">
            {description} <br /> {description2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfoCardItem;
