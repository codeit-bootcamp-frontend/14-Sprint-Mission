import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/img/logo_with_panda_icon.svg";
import Profile from "../../assets/icons/default_profile.svg";

import styles from "./NavHeader.module.css";

const navList = [
  {
    to: "/board",
    name: "자유게시판",
    className: ({ isActive }) => (isActive ? styles.active : undefined),
  },
  {
    to: "/items",
    name: "중고마켓",
    className: ({ isActive }) => (isActive ? styles.active : undefined),
  },
];

const NavHeader = () => {
  return (
    <header className={styles.main_header}>
      <nav className={styles.main_nav}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="판다마켓 로고" />
        </Link>
        <ul className={styles.menu_list}>
          {navList.map(({ to, name, className }) => (
            <li key={to}>
              <NavLink to={to} className={className}>
                {name}
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
