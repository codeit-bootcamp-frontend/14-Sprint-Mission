import Image from "next/image";
import Link from "next/link";

const LandingPageHeader = () => {
  return (
    <div className="lg:w-[1120px] lg:h-[51px] md:w-[696px] md:h-[51px] w-[343px] h-[51px] flex flex-row items-center">
      <Image
        width={40}
        height={40}
        src="/logo.svg"
        alt="logo"
        className="hidden sm:block mr-[8.6px]"
      />
      <span className="text-[25px] text-[#3692FF] font-bold">판다마켓</span>
      <Link href="/login" className="w-[128px] h-[48px] rounded-lg bg-[#3692FF] ml-auto text-[#F3F4F6] text-[16px] font-semibold flex items-center justify-center">
        로그인
      </Link>
    </div>
  );
};

export default LandingPageHeader;
