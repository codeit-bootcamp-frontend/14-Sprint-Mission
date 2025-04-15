import styles from "../styles/home-footer.module.css";
import footerHome from "@assets/images/footer-home.png";

export default function HomeFooterTop() {
  return (
    <div className={styles["footer__top"]}>
      <p className={`${styles["footer__slogan"]} font-3xl font-bold`}>
        믿을 수 있는
        <br />
        판다마켓 중고 거래
      </p>
      <img
        className={styles["footer__mascots"]}
        src={footerHome}
        alt="판다 캐릭터"
      />
    </div>
  );
}
