import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/img/logo_with_panda_icon.svg";
import TextLogo from "../../assets/img/logo_without_panda_icon.svg";
import Profile from "../../assets/icons/default_profile.svg";

import styles from "./NavHeader.module.css";

const navList = [
  {
    to: "/board",
    name: "자유게시판",
    include: [],
  },
  {
    to: "/items",
    name: "중고마켓",
    include: ["/additem"],
  },
];

const activeStyle = (isActive) => (isActive ? styles.active : undefined);

const NavHeader = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.main_header}>
      <nav className={styles.main_nav}>
        <Link to="/">
          <picture>
            <source
              className={styles.logo}
              srcSet={Logo}
              media="(min-width:768px)"
              alt="판다마켓 로고"
            />
            <img className={styles.logo} src={TextLogo} alt="판다마켓 로고" />
          </picture>
        </Link>
        <ul className={styles.menu_list}>
          {navList.map(({ to, name, include }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={activeStyle([to, ...include].includes(pathname))}
              >
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
