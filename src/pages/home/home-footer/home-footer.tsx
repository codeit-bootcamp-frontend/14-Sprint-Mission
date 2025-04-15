import styles from "../styles/home-footer.module.css";
import HomeFooterTop from "./home-footer-top";
import HomeFooterBottom from "./home-footer-bottom";

export default function HomeFooter() {
  return (
    <footer className={styles["footer"]}>
      <HomeFooterTop />
      <HomeFooterBottom />
    </footer>
  );
}
