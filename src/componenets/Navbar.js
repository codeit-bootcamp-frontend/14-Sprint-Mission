import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <div class="header">
        <Link class="brand-name" href="/">
          <img class="logo" src={logo} alt="logo" />
          판다마켓
        </Link>
        <a class="login-button" href="/signin.html">
          로그인
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
