import pandaFace from "@/public/images/panda-face.png";
import pandaFaceLogo from "@/public/images/panda-face-logo.png";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between h-[70px] border-b">
      <div className="flex items-center gap-[8px] md:gap-[30px]">
        <div className="flex justify-center items-center gap-[8px]">
          <Link href={"/"} className="flex justify-center items-center">
            <div className="w-[40px] h-[40px] ml-[24px] lg:ml-[200px] hidden md:block">
              <Image src={pandaFaceLogo} alt="panda-logo" />
            </div>
          </Link>
          <Link href={"/"} className="text-[#3692FF] text-[20.2px] font-bold">
            판다마켓
          </Link>
        </div>
        <Link
          href={"/"}
          className="flex items-center text-[#4B5563] text-[16px] font-bold h-[70px] md:text-[18px] md:h-[108px]"
        >
          자유게시판
        </Link>
        <Link
          href={"/"}
          className="flex items-center text-[#4B5563] text-[16px] font-bold h-[70px] md:text-[18px] md:h-[108px]"
        >
          중고마켓
        </Link>
      </div>
      <Link
        href={"/"}
        className="w-[40px] h-[40px] ml-[80px] mr-[16px] md:mr-[24px] lg:mr-[200px] "
      >
        <Image src={pandaFace} alt="user-profile-button" />
      </Link>
    </nav>
  );
};

export default Nav;
