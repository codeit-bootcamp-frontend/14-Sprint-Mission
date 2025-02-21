import BannerBottom from "../../assets/images/home/bottom-banner-image.png";
import ImageFeature1 from "../../assets/images/home/feature1-image.png";
import ImageFeature2 from "../../assets/images/home/feature2-image.png";
import ImageFeature3 from "../../assets/images/home/feature3-image.png";
import BannerTop from "../../assets/images/home/hero-image.png";
import Footer from "../../components/Footer";
import Card from "./components/Card";
import "./home.css";

export default function Home() {
  return (
    <>
      <main className="landing-page-content">
        <section className="banner flex-center" id="hero">
          <div className="wrapper grid">
            <h1 className="text-bold">
              일상의 모든 물건을 <br />
              거래해 보세요
            </h1>
            <a className="button flex-center" href="items.html">
              구경하러 가기
            </a>
          </div>
          <img src={BannerTop} alt="배너 이미지" />
        </section>
        <section className="cards" id="features">
          <Card imgSrc={ImageFeature1}>
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
          <Card imgSrc={ImageFeature2} isFlexReverse={true}>
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
          <Card imgSrc={ImageFeature3}>
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
          <div className="wrapper flex-center">
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
