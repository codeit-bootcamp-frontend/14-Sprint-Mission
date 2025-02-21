import "./Navbar.css";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { Link, NavLink } from "react-router";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692FF" : "#000",
  };
}

function Navbar({ isLoggedIn }) {
  return (
    <nav>
      <div className="header">
        <div className="header-links">
          <Link className="brand-name" to="/">
            <img className="logo" src={logo} alt="logo" />
            판다마켓
          </Link>
          {isLoggedIn && (
            <ul className="link-list">
              <li>
                <NavLink to={`/community`} style={getLinkStyle}>
                  자유게시판
                </NavLink>
              </li>
              <li>
                <NavLink to={`/items`} style={getLinkStyle}>
                  중고마켓
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {isLoggedIn ? (
          <img src={userIcon} alt="user icon" width={40}></img>
        ) : (
          <Link className="login-button" to="/signin">
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
