import { useRouter } from "next/navigation";
import React from "react";

interface Props {}

const HeaderDropDownComponent = (props: Props) => {
  const router = useRouter();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/landingPage");
  };

  return (
    <div className="flex flex-col border-[1px] border-[#D1D5DB] bg-[#FFFFFF] w-[145px] h-[51px] px-[41.5px] py-[16px] rounded-lg">
      <div className="flex items-center justify-center">
        <span
          className="text-[16px] text-[#6B7280] font-normal"
          onClick={handleLogOut}
        >
          로그아웃
        </span>
      </div>
    </div>
  );
};

export default HeaderDropDownComponent;
