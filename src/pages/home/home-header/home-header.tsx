import logoIcon from "@assets/images/logo-icon.svg";
import logoTypo from "@assets/images/logo-typo.svg";
import styles from "../styles/home-header.module.css";
import { Link } from "react-router-dom";

interface HomeHeaderProps {
  isMobile: boolean;
}

export default function HomeHeader({ isMobile }: HomeHeaderProps) {
  return (
    <header className={styles["header"]}>
      <Link to={"/"} className={styles["logo"]}>
        {isMobile || (
          <img
            src={logoIcon}
            alt="판다마켓 아이콘"
            className={styles["logoIcon"]}
          />
        )}
        <img src={logoTypo} alt="판다마켓" className={styles["logoTypo"]} />
      </Link>
      <Link
        to={"/login"}
        className={`${styles["btn-login"]} font-lg font-semibold`}
      >
        로그인
      </Link>
    </header>
  );
}
