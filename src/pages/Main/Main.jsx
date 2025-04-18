import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import bannerTop from "../../images/banner_top.png";
import bannerBottom from "../../images/banner_btm.png";
import cardImg01 from "../../images/cont_01.png";
import cardImg02 from "../../images/cont_02.png";
import cardImg03 from "../../images/cont_03.png";
import facebook from "../../images/ic_facebook.png";
import twitter from "../../images/ic_twitter.png";
import youtube from "../../images/ic_youtube.png";
import instagram from "../../images/ic_instagram.png";
import "./main.scss";

function Main() {
  return (
    <>
      <Header />
      <div className="contents">
        <div className="color-sec">
          <div className="banner">
            <div className="text-wrap">
              <p className="text">
                일상의 모든 물건을 <br className="pc mobile" />
                거래해 보세요
              </p>
              <Link to={"/items"} className="el-btn btn-l">
                구경하러 가기
              </Link>
            </div>
            <div className="img-wrap">
              <img src={bannerTop} alt="" />
            </div>
          </div>
        </div>
        <div className="main-cont">
          <section>
            <Card keyword={"Hot item"} cardImg={cardImg01}>
              <p className="text">
                인기 상품을 <br className="pc" />
                확인해 보세요
              </p>
              <p className="info">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </Card>
          </section>
          <section>
            <Card keyword="Search" cardImg={cardImg02} reverse={true}>
              <p className="text">
                구매를 원하는 <br className="pc" />
                상품을 검색하세요
              </p>
              <p className="info">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </Card>
          </section>
          <section>
            <Card keyword="Register" cardImg={cardImg03}>
              <p className="text">
                판매를 원하는 <br className="pc" />
                상품을 등록하세요
              </p>
              <p className="info">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </Card>
          </section>
        </div>
        <div className="color-sec">
          <div className="banner">
            <div className="text-wrap">
              <p className="text">
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </p>
            </div>
            <div className="img-wrap">
              <img src={bannerBottom} alt="" />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="foot-wrap">
          <p className="copy">©codeit - 2024</p>
          <div className="page-link">
            <ul>
              <li>
                <Link to={"/privacy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={"/faq"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="sns-link-wrap">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="icon-btn"
                >
                  <img src={facebook} alt="페이스북 아이콘" />
                </a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank" className="icon-btn">
                  <img src={twitter} alt="트위터 아이콘" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  className="icon-btn"
                >
                  <img src={youtube} alt="유튜브 아이콘" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="icon-btn"
                >
                  <img src={instagram} alt="인스타그램 아이콘" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Main;
