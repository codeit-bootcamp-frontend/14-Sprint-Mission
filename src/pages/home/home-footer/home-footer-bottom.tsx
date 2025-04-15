import styles from "../styles/home-footer.module.css";
import icFacebook from "@assets/images/ic_facebook.png";
import icInstagram from "@assets/images/ic_instagram.png";
import icTwitter from "@assets/images/ic_twitter.png";
import icYoutube from "@assets/images/ic_youtube.png";

export default function HomeFooterBottom() {
  return (
    <div className={styles["footer__bottom"]}>
      <p className={styles["footer__copyright"]}>©codeit - 2024</p>
      <nav className={styles["footer__nav"]}>
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </nav>
      <div className={styles["footer__socials"]}>
        <a href="https://www.facebook.com">
          <img src={icFacebook} alt="Facebook 아이콘" />
        </a>
        <a href="https://www.x.com">
          <img src={icTwitter} alt="Twitter 아이콘" />
        </a>
        <a href="https://www.youtube.com">
          <img src={icYoutube} alt="YouTube 아이콘" />
        </a>
        <a href="https://www.instagram.com">
          <img src={icInstagram} alt="Instagram 아이콘" />
        </a>
      </div>
    </div>
  );
}
