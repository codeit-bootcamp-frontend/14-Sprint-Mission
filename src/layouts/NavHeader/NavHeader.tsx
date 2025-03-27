import { Link, NavLink, useLocation } from "react-router-dom";

import { ROUTE } from "@/constants/route";

import Logo from "@/assets/imgs/logo_with_panda_icon.svg";
import TextLogo from "@/assets/imgs/logo_without_panda_icon.svg";
import Profile from "@/assets/icons/default_profile.svg";

import styles from "./NavHeader.module.css";

const navList = [
  {
    to: ROUTE.BOARD,
    name: "자유게시판",
    include: [],
  },
  {
    to: ROUTE.ITEMS,
    name: "중고마켓",
    include: [ROUTE.ADD_ITEM],
  },
];

const activeStyle = (isActive: boolean) =>
  isActive ? styles.active : undefined;

const NavHeader = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.main_header}>
      <nav className={styles.main_nav}>
        <Link to={ROUTE.HOME}>
          <picture>
            <source
              className={styles.logo}
              srcSet={Logo}
              media="(min-width:768px)"
            />
            <img className={styles.logo} src={TextLogo} alt="판다마켓 로고" />
          </picture>
        </Link>
        <ul className={styles.menu_list}>
          {navList.map(({ to, name, include }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={activeStyle(
                  [to, ...include].some((path) => path === pathname)
                )}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <img src={Profile} alt="profile_image" />
      </nav>
    </header>
  );
};

export default NavHeader;
