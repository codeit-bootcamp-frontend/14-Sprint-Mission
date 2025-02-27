import "./Header.css";

function Header() {
  return (
    <header className="item-header">
      <div className="item-header-div">
        <a href="/">
          <div className="logo" alt="로고이미지" />
        </a>
        <div>
          <a href="/" className="tap">
            자유게시판
          </a>
          <a
            href="/items.html"
            className={`${
              location.pathname === "/items" ? "tap tap-blue" : "tap"
            }`}
          >
            중고마켓
          </a>
        </div>
        <a>
          <img
            src="image/profile.png"
            className="profile-icon"
            alt="프로필아이콘"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
