import inquiryEmpty from "../../assets/inquiry-empty.png";
import GoBackItmes from "./GoBackItmes";

const EmptyInquiry = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mx-auto w-[240px] h-[270px] pc:h-[326px]">
      <img
        src={inquiryEmpty}
        alt="inquiry-empty-image"
        className="w-[140px] h-[140px] pc:w-[196px] pc:h-[196px]"
      />
      <div className="mt-[8px] text-[16px] text-[#9CA3AF]">
        아직 문의가 없어요
      </div>
      <GoBackItmes />
    </div>
  );
};

export default EmptyInquiry;
