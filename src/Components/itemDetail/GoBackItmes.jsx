import backToItemsIcon from "../../assets/back-to-items-icon.png";
import { Link } from "react-router-dom";

const GoBackItmes = () => {
  return (
    <Link
      to={"/items"}
      className="flex items-center gap-[4px] mb-[40px] w-[240px] h-[48px] py-[12px] px-[40px] bg-[#3692FF] text-[18px] font-[600] text-[#F3F4F6] rounded-[40px] mt-[48px]"
    >
      목록으로 돌아가기
      <img
        src={backToItemsIcon}
        alt="backToItemsIcon"
        className="w-[24px] h-[24px]"
      />
    </Link>
  );
};

export default GoBackItmes;
