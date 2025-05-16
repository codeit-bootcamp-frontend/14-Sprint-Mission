import styles from "../styles/home-header.module.css";
import { Link } from "react-router-dom";

export default function HomeLoginButton() {
  return (
    <Link
      to={"/login"}
      className={`${styles["btn-login"]} font-lg font-semibold`}
    >
      로그인
    </Link>
  );
}
