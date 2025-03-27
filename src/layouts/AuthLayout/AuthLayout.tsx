import { Link, Outlet } from "react-router-dom";

import { ROUTE } from "@/constants/route";

import Logo from "@/assets/imgs/logo_with_panda_icon.svg";

import styles from "./AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <main className={styles.auth_main}>
      <div className={styles.auth_center}>
        <div className={styles.logo}>
          <Link to={ROUTE.HOME}>
            <img src={Logo} alt="판다 마켓 로고" />
          </Link>
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
