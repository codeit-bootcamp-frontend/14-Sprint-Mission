import logoIcon from "@assets/images/logo-icon.svg";
import logoTypo from "@assets/images/logo-typo.svg";
import heroHome from "@assets/images/hero-home.png";
import bannerHome01 from "@assets/images/banner-home-01.png";
import bannerHome02 from "@assets/images/banner-home-02.png";
import bannerHome03 from "@assets/images/banner-home-03.png";
import { Link } from "react-router-dom";
import HomeFeature from "./home-feature";

const banners = [
  {
    image: bannerHome01,
    keyword: "Hot item",
    title: "인기 상품을 확인해보세요",
    description: "가장 HOT한 중고거래 물품을 판다 마켓에서 확인해보세요",
  },
  {
    image: bannerHome02,
    keyword: "Search",
    title: "구매를 원하는 상품을 검색하세요",
    description: "구매하고 싶은 물품은 검색해서 쉽게 찾아보세요",
  },
  {
    image: bannerHome03,
    keyword: "register",
    title: "판매를 원하는 상품을 등록하세요",
    description: "어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요",
  },
];

export default function Home() {
  return (
    <>
      <header>
        <Link to={"/"}>
          <img src={logoIcon} alt="판다마켓 아이콘" />
          <img src={logoTypo} alt="판다마켓" />
        </Link>
        <Link to={"/login"} className="btn-login">
          로그인
        </Link>
      </header>
      <main>
        <section className="hero">
          <h1>일상의 모든 물건을 거래해보세요</h1>
          <Link to={"/items"} className="btn-explore">
            구경하러 가기
          </Link>
          <img src={heroHome} alt="판다마켓" className="hero-image" />
        </section>
        <section className="features">
          {banners.map((banner, idx) => (
            <HomeFeature 
              key={idx}
              image={banner.image}
              keyword={banner.keyword}
              title={banner.title}
              description={banner.description}
            />
          ))}
        </section>
      </main>
    </>
  );
}
