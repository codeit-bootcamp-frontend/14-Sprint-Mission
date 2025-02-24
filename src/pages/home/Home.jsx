import { Link } from "react-router-dom";
import BannerBottom from "../../assets/images/home/bottom-banner-image.png";
import ImageFeature1 from "../../assets/images/home/feature1-image.png";
import ImageFeature2 from "../../assets/images/home/feature2-image.png";
import ImageFeature3 from "../../assets/images/home/feature3-image.png";
import BannerTop from "../../assets/images/home/hero-image.png";
import HeaderNav from "../../components/HeaderNav";
import { useUser } from "../../contexts/UserContext";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./home.scss";

export default function Home() {
  const user = useUser();
  return (
    <>
      <HeaderNav />
      <main className="landing-page-content" id="home">
        <section className="banner display-flex justify-center gap-8" id="hero">
          <div className="wrapper display-grid gap-32">
            <h1 className="text-bold">
              일상의 모든 물건을 <br />
              거래해 보세요
            </h1>
            <Link to={user ? "/items" : "/login"} className="button display-flex justify-center">
              구경하러 가기
            </Link>
          </div>
          <img src={BannerTop} alt="배너 이미지" />
        </section>
        <section className="cards" id="features">
          <Card imgSrc={ImageFeature1} title={"Hot Item"}>
            <p className="heading">
              인기 상품을
              <br />
              확인해 보세요
            </p>
            <p className="text-2xl">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </Card>
          <Card imgSrc={ImageFeature2} title="Search" isFlexReverse={true}>
            <p className="heading">
              구매를 원하는
              <br />
              상품을 검색하세요
            </p>
            <p className="text-2xl">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </Card>
          <Card imgSrc={ImageFeature3} title="Register">
            <p className="heading">
              판매를 원하는 <br />
              상품을 등록하세요
            </p>
            <p className="text-2xl">
              어떤 물건이든 판매하고 싶은 상품을 <br />
              쉽게 등록하세요
            </p>
          </Card>
        </section>
        <section className="banner" id="bottom-banner">
          <div className="wrapper display-flex justify-center">
            <p className="heading">
              믿을 수 있는 <br />
              판다마켓 중고 거래
            </p>
            <img src={BannerBottom} alt="랜딩페이지 하단 이미지" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
