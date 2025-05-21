import clsx from "clsx";
import Link from "next/link";

import FacebookIcon from "@/assets/icons/ic_facebook.svg";
import TwitterIcon from "@/assets/icons/ic_twitter.svg";
import YoutubeIcon from "@/assets/icons/ic_youtube.svg";
import InstagramIcon from "@/assets/icons/ic_instagram.svg";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.main_footer}>
      <div className={clsx([styles.center_content, styles.footer_box])}>
        <p>@codeit - 2024</p>
        <div className={styles.footer_link}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className={styles.footer_icon}>
          {ICON_LIST.map(({ link, icon: IconComponent, alt }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={alt}
            >
              <IconComponent />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

const ICON_LIST = [
  {
    link: "https://www.facebook.com",
    icon: FacebookIcon,
    alt: "facebook_icon",
  },
  {
    link: "https://www.twitter.com",
    icon: TwitterIcon,
    alt: "twitter_icon",
  },
  {
    link: "https://www.youtube.com",
    icon: YoutubeIcon,
    alt: "youtube_icon",
  },
  {
    link: "https://www.instagram.com",
    icon: InstagramIcon,
    alt: "instagram_icon",
  },
];

export default Footer;
