import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div id="copyright">©codeit - 2024</div>
      <div id="footerMenu">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <div id="socialMedia">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/social/facebook-logo.svg"
            alt="페이스북"
            width="20"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/social/twitter-logo.svg" alt="트위터" width="20" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/social/youtube-logo.svg" alt="유튜브" width="20" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/social/instagram-logo.svg"
            alt="인스타그램"
            width="20"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
