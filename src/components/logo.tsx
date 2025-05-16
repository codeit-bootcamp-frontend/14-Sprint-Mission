import logoIcon from "@assets/images/logo-icon.svg";
import logoTypo from "@assets/images/logo-typo.svg";
import { Link } from "react-router-dom";
import styles from "@/pages/home/styles/home-header.module.css";

interface LogoProps {
  isMobile?: boolean;
}

export default function Logo({ isMobile = false }: LogoProps) {
  return (
    <>
      <Link to={"/"} className={styles["logo"]}>
        {!isMobile && (
          <img
            src={logoIcon}
            alt="판다마켓 아이콘"
            className={styles["logoIcon"]}
          />
        )}
        <img src={logoTypo} alt="판다마켓" className={styles["logoTypo"]} />
      </Link>
    </>
  );
}
