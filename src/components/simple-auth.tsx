import googleAuth from "@assets/images/google-auth.png";
import kakaoAuth from "@assets/images/kakao-auth.png";
import styles from "./simple-auth.module.css";

export default function SimpleAuth() {
  return (
    <div className={styles["simple-auth"]}>
      <span className={`font-lg font-medium ${styles["simple-auth__span"]}`}>
        간편 로그인하기
      </span>
      <img className={styles["simple-auth__image"]} src={googleAuth} />
      <img className={styles["simple-auth__image"]} src={kakaoAuth} />
    </div>
  );
}
