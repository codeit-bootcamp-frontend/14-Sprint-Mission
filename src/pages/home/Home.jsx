import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="flex flex-column">
        <section className="section section--extend flex flex-center flex-bottom">
          <div className="section__container">
            <div className="text-left">
              <h1>
                일상의 모든 물건을 <br />
                거래해 보세요
              </h1>
              <Link to="/items" className="button button--large">
                구경하러 가기
              </Link>
            </div>
            <img src="/images/landing_top.svg" alt="판다마켓 랜딩 이미지" />
          </div>
        </section>
        <section className="section section--normal flex flex-left gap-64">
          <img src="/images/landing_01.svg" alt="판다마켓 랜딩 이미지" />
          <div className="text-left">
            <h3 className="section__tag">Hot item</h3>
            <h2>
              인기 상품을 <br />
              확인해 보세요
            </h2>
            <p className="description">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </section>
        <section className="section section--normal flex flex-right gap-64">
          <div className="text-right">
            <h3 className="section__tag">Search</h3>
            <h2>
              구매를 원하는 <br />
              상품을 검색하세요
            </h2>
            <p className="description">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
          <img src="/images/landing_02.svg" alt="판다마켓 랜딩 이미지" />
        </section>
        <section className="section section--normal flex flex-left gap-64">
          <img src="/images/landing_03.svg" alt="판다마켓 랜딩 이미지" />
          <div className="text-left">
            <h3 className="section__tag">Register</h3>
            <h2>
              판매를 원하는 <br />
              상품을 등록하세요
            </h2>
            <p className="description">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </section>
        <section className="section section--extend flex flex-center flex-bottom">
          <div className="section__container">
            <div className="text-left">
              <h2>
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h2>
            </div>
            <img src="/images/landing_bottom.svg" alt="판다마켓 랜딩 이미지" />
          </div>
        </section>
      </main>
      <footer className="flex flex-between flex-top">
        <div>©codeit - 2024</div>
        <div className="flex gap-30">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="flex gap-12">
          <a
            className="icon icon--18"
            aria-label="페이스북 계정 방문하기"
            href="https://www.facebook.com"
            target="_blank"
            style={{ backgroundImage: "url(/images/ico_facebook.svg)" }}
          ></a>
          <a
            className="icon icon--18"
            aria-label="트위터 계정 방문하기"
            href="https://www.twitter.com"
            target="_blank"
            style={{ backgroundImage: "url(/images/ico_twitter.svg)" }}
          ></a>
          <a
            className="icon icon--18"
            aria-label="유튜브 채널 방문하기"
            href="https://www.youtube.com"
            target="_blank"
            style={{ backgroundImage: "url(/images/ico_youtube.svg)" }}
          ></a>
          <a
            className="icon icon--18"
            aria-label="인스타그램 계정 방문하기"
            href="https://www.instagram.com"
            target="_blank"
            style={{ backgroundImage: "url(/images/ico_instagram.svg)" }}
          ></a>
        </div>
      </footer>
    </>
  );
}

export default Home;
