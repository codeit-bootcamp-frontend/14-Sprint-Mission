import "./Homepage.css";
import pandaImg1 from "../assets/panda1.png";
import pandaImg2 from "../assets/panda2.png";
import hotImg from "../assets/hot.png";
import searchImg from "../assets/search.png";
import registerImg from "../assets/register.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Navbar isLoggedIn={false} />
      <main>
        <section className="hero">
          <div className="banner">
            <div className="hero-text">
              <h1 className="hero-title">일상의 모든 물건을 거래해 보세요</h1>
              <a className="view-button" href="/items">
                구경하러 가기
              </a>
            </div>
            <img
              className="img-panda"
              src={pandaImg1}
              alt="panda"
              width="750px"
            />
          </div>
        </section>
        <section className="hot-item">
          <div className="container">
            <img className="img-group" src={hotImg} alt="hot item" />
            <div className="group">
              <span className="label">Hot item</span>
              <h2 className="title">
                인기 상품을
                <br /> 확인해 보세요
              </h2>
              <p className="details">
                가장 HOT한 중고거래 물품을
                <br /> 판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </section>
        <section className="search">
          <div className="container reverse">
            <div className="group">
              <span className="label">Search</span>
              <h2 className="title">
                구매를 원하는
                <br />
                상품을 검색하세요
              </h2>
              <p className="details">
                구매하고 싶은 물품은 검색해서
                <br /> 쉽게 찾아보세요
              </p>
            </div>
            <img className="img-group" src={searchImg} alt="hot item" />
          </div>
        </section>
        <section className="register">
          <div className="container">
            <img className="img-group" src={registerImg} alt="hot item" />
            <div className="group">
              <span className="label">Register</span>
              <h2 className="title">
                판매를 원하는
                <br />
                상품을 등록하세요
              </h2>
              <p className="details">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>
        <section className="slogan">
          <div className="banner">
            <div className="hero-text">
              <h1 className="hero-title">
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h1>
            </div>
            <img
              className="img-panda"
              src={pandaImg2}
              alt="panda"
              width="750px"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
