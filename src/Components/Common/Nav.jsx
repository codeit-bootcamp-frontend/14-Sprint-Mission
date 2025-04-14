import pandaFace from "../../assets/panda-face.png";
import pandaFaceLogo from "../../assets/panda-logo.png";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ darkMode }) => {
  const location = useLocation();
  const isItemsPage = location.pathname === "/items";
  const isBoardsPage = location.pathname === "/boards";
  const isAddItemPage = location.pathname === "/additem";
  return (
    <nav
      className={`flex items-center justify-between h-[70px] border-b ${
        darkMode ? "bg-[#1f1f1f] border-gray-900" : ""
      }`}
    >
      <div className="flex items-center gap-[8px] tablet:gap-[30px]">
        <Link to={"/"} className="hidden tablet:block">
          <img
            src={pandaFaceLogo}
            alt="panda-logo"
            className="w-[153px] h-[51px] ml-[24px] pc:ml-[200px]"
          />
        </Link>
        <Link
          to={"/"}
          className="text-[#3692FF] text-[20.2px] font-bold ml-[16px] block tablet:hidden"
        >
          판다마켓
        </Link>
        <Link
          to={"/boards"}
          className={`flex items-center  text-[16px] font-bold h-[70px] tablet:text-[18px] tablet:h-[108px] ${
            isBoardsPage ? "text-[#3692FF]" : "text-[#4B5563]"
          }`}
        >
          자유게시판
        </Link>
        <Link
          to={"/items"}
          className={`flex items-center text-[16px] font-bold h-[70px] tablet:text-[18px] tablet:h-[108px] ${
            isItemsPage || isAddItemPage ? "text-[#3692FF]" : "text-[#4B5563]"
          }`}
        >
          중고마켓
        </Link>
      </div>
      <Link
        to={"/"}
        className="w-[40px] h-[40px] ml-[80px] mr-[16px] tablet:mr-[24px] pc:mr-[200px] "
      >
        <img src={pandaFace} alt="user-profile-button" />
      </Link>
    </nav>
  );
};

export default Nav;
