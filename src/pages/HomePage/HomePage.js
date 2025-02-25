import React from "react";
import { Link } from "react-router-dom";

import { WideSection, MainSection } from "../../components";

import HeroImage from "../../assets/img/img_home_top.png";
import Home01Image from "../../assets/img/img_home_01.png";
import Home02Image from "../../assets/img/img_home_02.png";
import Home03Image from "../../assets/img/img_home_03.png";
import BottomSectionImage from "../../assets/img/img_home_bottom.png";

const Home = () => {
  return (
    <>
      <WideSection
        upper
        title={["일상의 모든 물건을 ", "거래해 보세요"]}
        renderImage={<img src={HeroImage} alt="홈페이지 상단 판다 이미지" />}
        renderButton={<Link to="/items">구경하러 가기</Link>}
      />
      <MainSection
        subtitle="Hot Item"
        title={["인기 상품을 ", "확인해 보세요"]}
        description={[
          "가장 HOT한 중고거래 물품을 ",
          "판다 마켓에서 확인해 보세요",
        ]}
        renderImg={<img src={Home01Image} alt="메인이미지3" />}
      />
      <MainSection
        subtitle="Search"
        title={["구매를 원하는 ", "상품을 검색하세요"]}
        description={["구매하고 싶은 물품은 검색해서 ", "쉽게 찾아보세요!"]}
        renderImg={<img src={Home02Image} alt="메인이미지2" />}
        reverseFlex
        textAlignRight
      />
      <MainSection
        subtitle="Register"
        title={["판매를 원하는 ", "상품을 등록하세요"]}
        description={["어떤 물건이든 판매하고 싶은 상품을 ", "쉽게 등록하세요"]}
        renderImg={<img src={Home03Image} alt="메인이미지3" />}
        removeRightPadding
      />
      <WideSection
        lower
        title={["믿을 수 있는 ", "판다마켓 중고 거래"]}
        renderImage={
          <img src={BottomSectionImage} alt="홈페이지 하단 판다 이미지" />
        }
      />
    </>
  );
};

export default Home;
