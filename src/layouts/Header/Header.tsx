"use client";

import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <nav className={styles.main_nav}>
        <Link href="/">
          <picture>
            <source
              className={styles.logo}
              srcSet={"/imgs/logo_with_panda_icon.svg"}
              media="(min-width:768px)"
            />
            <img
              className={styles.logo}
              src={"/imgs/logo_without_panda_icon.svg"}
              alt="판다마켓 로고"
            />
          </picture>
        </Link>
        <Link href="/signin" className={styles.login_link}>
          로그인
        </Link>
      </nav>
    </header>
  );
};

export default Header;
