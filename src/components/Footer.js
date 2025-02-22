
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Container from './Container';
import facebookIcon from '../assets/ic_facebook.svg';
import twitterIcon from '../assets/ic_twitter.svg';
import instagramIcon from '../assets/ic_instagram.svg';
import youtubeIcon from '../assets/ic_youtube.svg';


function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.left}>
          <span>©codeit - 2024</span>
        </div>
        <div className={styles.center}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className={styles.right}>
          <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="sns_facebook" /></Link>
          <Link to="https://x.com/" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="sns_twitter" /></Link>
          <Link to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="sns_youtube" /></Link>
          <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="sns_instagram" /></Link>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
