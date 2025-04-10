import { Link } from "react-router-dom";

import facebookimg from "../../assets/facebook.png";
import ximg from "../../assets/twiter.png";
import instagramimg from "../../assets/instagram.png";
import youtubeimg from "../../assets/youtube.png";

const MainFooter = () => {
  return (
    <footer className="h-[160px] bg-[#111827]">
      <div className="max-w-screen-xl mx-[200px] gap-10 flex justify-between items-center px-6 pt-8 tablet:mx-[100px] tablet:gap-[60px] mobile:mx-[32px] ">
        <div>
          <span className="text-[#9CA3AF] text-[16px] font-[400] mobile:whitespace-nowrap ">
            &copy;codeit - 2024
          </span>
        </div>

        <div className="flex space-x-8 text-[#E5E7EB] mobile:whitespace-nowrap">
          <Link to={"/privacy"}>Privacy Policy</Link>
          <Link to={"/faq"}>FAQ</Link>
        </div>
        <div className="flex space-x-4 items-center justify-center">
          <Link to={"https://www.facebook.com/"}>
            <img src={facebookimg} alt="facebook image" />
          </Link>

          <Link to={"https://www.x.com/"}>
            <img src={ximg} alt="x image" />
          </Link>

          <Link to={"https://www.instagram.com/"}>
            <img src={instagramimg} alt="instagram image" />
          </Link>

          <Link to={"https://www.youtube.com/"}>
            <img src={youtubeimg} alt="youtube image" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
