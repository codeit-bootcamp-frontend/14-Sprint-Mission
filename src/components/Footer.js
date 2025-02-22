import "./Footer.css";
import facebookIcon from "../assets/social/facebook.png";
import twitterIcon from "../assets/social/twitter.png";
import youtubeIcon from "../assets/social/youtube.png";
import instagramIcon from "../assets/social/instagram.png";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="codeit">
          <p>@codeit - 2024</p>
        </div>
        <div className="info">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="social">
          <a className="icon" href="http://facebook.com" target="_blank">
            <img src={facebookIcon} alt="facebook icon" width="20px" />
          </a>
          <a className="icon" href="http://twitter.com" target="_blank">
            <img src={twitterIcon} alt="twitter icon" width="20px" />
          </a>
          <a className="icon" href="http://youtube.com" target="_blank">
            <img src={youtubeIcon} alt="youtube icon" width="20px" />
          </a>
          <a className="icon" href="http://instagram.com" target="_blank">
            <img src={instagramIcon} alt="info icon" width="20px" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
