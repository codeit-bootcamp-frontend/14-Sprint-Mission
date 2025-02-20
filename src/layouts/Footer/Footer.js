import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "../../assets/icons/ic_facebook.svg";
import TwitterIcon from "../../assets/icons/ic_twitter.svg";
import YoutubeIcon from "../../assets/icons/ic_youtube.svg";
import InstagramIcon from "../../assets/icons/ic_instagram.svg";

import styles from "./Footer.module.css";

const ICON_LIST = [
  {
    link: "https://www.facebook.com",
    iconSrc: FacebookIcon,
    alt: "facebook_icon",
  },
  {
    link: "https://www.twitter.com",
    iconSrc: TwitterIcon,
    alt: "twitter_icon",
  },
  {
    link: "https://www.youtube.com",
    iconSrc: YoutubeIcon,
    alt: "youtube_icon",
  },
  {
    link: "https://www.instagram.com",
    iconSrc: InstagramIcon,
    alt: "instagram_icon",
  },
];

const Footer = () => {
  return (
    <footer className={styles.main_footer}>
      <div className={clsx([styles.center_content, styles.footer_box])}>
        <p>@codeit - 2024</p>
        <div className={styles.footer_link}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className={styles.footer_icon}>
          {ICON_LIST.map(({ link, iconSrc, alt }) => (
            <a key={link} href={link} target="_blank">
              <img src={iconSrc} alt={alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
