import Logo from "@/components/logo";
import { Link, NavLink } from "react-router-dom";
import profile from "@assets/images/ic_profile.svg";
import styles from "./styles/items-header.module.css";

export default function ItemsHeader() {
  // isActive인자를 받아서 ``문자열을 반환하는 콜백함수
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? styles.active : ""} font-2lg font-bold ${styles.navLink}`;

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <NavLink to={"/boards"} className={navLinkClasses}>
          자유게시판
        </NavLink>
        <NavLink to={"/items"} className={navLinkClasses}>
          중고마켓
        </NavLink>
        <Link to={"/mypage"} className={styles.profile}>
          <img src={profile} alt="프로필" />
        </Link>
      </nav>
    </header>
  );
}
