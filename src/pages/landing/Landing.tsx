import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

import mainLogo from "../../asset/icon/panda_market_logo_3.png";
import landingImg1 from "../../asset/image/Img_home_01.png";
import landingImg2 from "../../asset/image/Img_home_02.png";
import landingImg3 from "../../asset/image/Img_home_03.png";
import landingImgTop from "../../asset/image/Img_home_top.png";
import landingImgBottom from "../../asset/image/Img_home_bottom.png";

export default function Home(): JSX.Element {
  return (
    <>
      <header>
        <div className="header-inner">
          <Link className="header-logo" to="/">
            <img src={mainLogo} alt="판다마켓 로고" />
          </Link>
          <Link className="login-button" to="/login">
            로그인
          </Link>
        </div>
      </header>
      <main>
        <section id="hero" className="banner">
          <div className="wrapper">
            <div>
              <h1 id="top-banner-title">
                일상의 모든 물건을
                <br />
                거래해 보세요
              </h1>
              <Link className="hero-button" to="/items">
                구경하러 가기
              </Link>
            </div>
            <img
              className="img-panda"
              src={landingImgTop}
              alt="랜딩페이지 상단 이미지"
            />
          </div>
        </section>

        <section id="features">
          <div className="feature">
            <img src={landingImg1} alt="Hot item" width="30%" />
            <div className="feature-content">
              <h2 className="feature-tag">Hot item</h2>
              <h1 className="feature-title">인기 상품을 확인해 보세요</h1>
              <p className="feature-description">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-content">
              <h2 className="feature-tag">Search</h2>
              <h1 className="feature-title">구매를 원하는 상품을 검색하세요</h1>
              <p className="feature-description">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
            <img src={landingImg2} alt="Search" width="30%" />
          </div>

          <div className="feature">
            <img src={landingImg3} alt="Register" width="30%" />
            <div className="feature-content">
              <h2 className="feature-tag">Register</h2>
              <h1 className="feature-title">판매를 원하는 상품을 등록하세요</h1>
              <p className="feature-description">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        <section id="bottomBanner" className="banner">
          <div className="wrapper">
            <div>
              <h1 id="bottom-banner-title">
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h1>
            </div>
            <img
              className="img-panda"
              src={landingImgBottom}
              alt="랜딩페이지 하단 이미지"
            />
          </div>
        </section>
      </main>

      <footer>
        <div className="copyright">@codeit - 2025</div>
        <div className="footerMenu">
          <Link className="footer-link" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="footer-link" to="/faq">
            FAQ
          </Link>
        </div>
        <div className="socialMedia">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/facebook_white.png" alt="페이스북" width="20" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/twitter_white.png" alt="트위터" width="20" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/youtube_white.png" alt="유튜브" width="20" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/instagram_white.png" alt="인스타" width="20" />
          </a>
        </div>
      </footer>
    </>
  );
}
