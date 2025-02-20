import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/img/logo_with_panda_icon.svg";
import Profile from "../../assets/icons/default_profile.svg";

import styles from "./NavHeader.module.css";

const navList = [
  {
    to: "/board",
    className: ({ isActive }) => isActive && styles.active,
  },
  {
    to: "/items",
    className: ({ isActive }) => isActive && styles.active,
  },
];

const NavHeader = () => {
  return (
    <header className={styles.main_header}>
      <nav className={styles.main_nav}>
        <Link href="/">
          <img className={styles.logo} src={Logo} alt="판다마켓 로고" />
        </Link>
        <ul className={styles.menu_list}>
          {navList.map(({ to, className }) => (
            <li key={to}>
              <NavLink to={to} className={className}>
                자유게시판
              </NavLink>
            </li>
          ))}
        </ul>
        <Link>
          <img src={Profile} alt="profile_image" />
        </Link>
      </nav>
    </header>
  );
};

export default NavHeader;
