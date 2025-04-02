import React from "react";
import "../../style.css"; // 기존 스타일 유지
import "../../common-responsive.css";
import "../../index-responsive.css";
import "../../root.css";

function HomePage() {
  return (
    <>
      <header className="main-header">
        <div className="main-header-div">
          <a href="/">
            <img src="/image/md.png" className="logo" alt="로고이미지" />
          </a>
          <a href="/login.html" className="login">
            로그인
          </a>
        </div>
      </header>

      <section className="top-section">
        <div className="top-div">
          <div className="content">
            <div className="top-content">
              일상의 모든 물건을
              <br className="br-none-title" />
              거래해 보세요
            </div>
            <a href="/items" className="top-btn">
              구경하러 가기
            </a>
          </div>
          <img
            src="/image/img_home.png"
            className="img-home"
            alt="배너이미지"
          />
        </div>
      </section>

      <main>
        <div className="main-left">
          <img
            src="/image/main_01.png"
            className="main-img"
            alt="첫 번째 본문 이미지"
          />
          <div className="main-div">
            <div className="title">Hot Item</div>
            <div className="main-content-bold">
              인기 상품을
              <br className="br-none" />
              확인해 보세요
            </div>
            <div className="main-content">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </div>
          </div>
        </div>

        <div className="main-right">
          <img
            src="/image/main_02.png"
            className="main-img"
            alt="두 번째 본문 이미지"
          />
          <div className="main-div-right">
            <div className="title">Search</div>
            <div className="main-content-bold">
              구매를 원하는
              <br className="br-none" />
              상품을 검색하세요
            </div>
            <div className="main-content">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </div>
          </div>
        </div>

        <div className="main-left">
          <img
            src="/image/main_03.png"
            className="main-img"
            alt="세 번째 본문 이미지"
          />
          <div className="main-div">
            <div className="title">Register</div>
            <div className="main-content-bold">
              판매를 원하는
              <br className="br-none" />
              상품을 등록하세요
            </div>
            <div className="main-content">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </div>
          </div>
        </div>

        <section className="top-section">
          <div className="top-div">
            <div className="content">
              <div className="top-content">
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </div>
            </div>
            <img
              src="/image/footer.png"
              className="img-home"
              alt="푸터 이미지"
            />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-div">
          <div>ⓒ codeit - 2024</div>
          <div className="footer-link">
            <a href="/privacy.html">Privacy Policy</a>
            <a href="/faq.html">FAQ</a>
          </div>
          <div className="social-btn">
            <a href="https://www.facebook.com/" target="_blank">
              <img src="/image/facebook.png" alt="페이스북 이미지" />
            </a>
            <a href="https://x.com/" target="_blank">
              <img src="/image/twitter.png" alt="트위터 이미지" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src="/image/youtube.png" alt="유튜브 이미지" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="/image/insta.png" alt="인스타그램 이미지" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
