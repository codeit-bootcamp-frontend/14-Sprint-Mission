import { Link } from "react-router-dom";

function GNB() {
  return (
    <header className="flex-center" role="navigation" style={{ zIndex: 100 }}>
      <div className="container flex flex-between">
        <Link to="/" className="logo">
          <picture>
            <source srcSet="/images/logo.svg" media="(min-width:768px)" />
            <img src="/images/logo_typo_only.svg" alt="판다마켓 로고" />
          </picture>
        </Link>
        <Link to="/signup" className="button button--small-48">
          로그인
        </Link>
      </div>
    </header>
  );
}

export default GNB;
