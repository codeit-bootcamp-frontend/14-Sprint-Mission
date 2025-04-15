import Logo from "@/components/logo";
import styles from "../styles/home-header.module.css";
import HomeLoginButton from "./home-login-button";

interface HomeHeaderProps {
  isMobile: boolean;
}

export default function HomeHeader({ isMobile }: HomeHeaderProps) {
  return (
    <header className={styles["header"]}>
      <Logo isMobile={isMobile} />
      <HomeLoginButton />
    </header>
  );
}
