import { Link } from "react-router-dom";

import Logo from "@/assets/imgs/logo_with_panda_icon.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <nav className={styles.main_nav}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="판다마켓 로고" />
        </Link>
        <Link to="/signin" className={styles.login_link}>
          로그인
        </Link>
      </nav>
    </header>
  );
};

export default Header;
