import { Link } from "react-router-dom";
import FacebookLogo from "../../../assets/images/social/facebook-logo.svg";
import InstagramLogo from "../../../assets/images/social/instagram-logo.svg";
import TwitterLogo from "../../../assets/images/social/twitter-logo.svg";
import YoutubeLogo from "../../../assets/images/social/youtube-logo.svg";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper display-grid">
        <p id="domain-name">©codeit - 2024</p>
        <ul className="display-flex justify-center" id="links">
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <div className="display-flex justify-right gap-12" id="social-media">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={FacebookLogo} alt="페이스북" width="20" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={TwitterLogo} alt="트위터" width="20" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeLogo} alt="유튜브" width="20" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="인스타그램" width="20" />
          </a>
        </div>
      </div>
    </footer>
  );
}
