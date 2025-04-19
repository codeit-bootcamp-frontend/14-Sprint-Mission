import { Link } from "react-router-dom";

import pandaLogo from "../../assets/panda-logo.png";

const Header = () => {
  return (
    <header className="header-primary pc:px-[200px] tablet:px-[24px] mobile:px-[16px]">
      <Link to={"/"}>
        <img
          className="w-[153px] h-[51px]"
          src={pandaLogo}
          alt="panda logo image"
        />
      </Link>
      <Link
        to={"/login"}
        className="font-[600] flex justify-center items-center no-underline bg-[#3692ff] text-[#f3f4f6] w-32 h-12 gap-[0.625rem] rounded-lg cursor-pointer flex-shrink-0 my-[11px]"
      >
        로그인
      </Link>
    </header>
  );
};

export default Header;
