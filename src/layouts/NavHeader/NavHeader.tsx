"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTE } from "@/constants/route";

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

const NavHeader = () => {
  const pathname = usePathname();

  return (
    <header className={styles.main_header}>
      <nav className={styles.main_nav}>
        <Link href={ROUTE.HOME}>
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
        <ul className={styles.menu_list}>
          {navList.map(({ to, name, include }) => (
            <li key={to}>
              <Link
                href={to}
                className={clsx({
                  [styles.active]: [to, ...include].some(
                    (path) => path === pathname
                  ),
                })}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <span className={styles.profile}>
          <Profile />
        </span>
      </nav>
    </header>
  );
};

export default NavHeader;
