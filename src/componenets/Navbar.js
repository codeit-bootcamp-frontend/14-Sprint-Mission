import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <div class="header">
        <Link class="brand-name" to="/">
          <img class="logo" src={logo} alt="logo" />
          판다마켓
        </Link>
        <Link class="login-button" to="/signin">
          로그인
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
