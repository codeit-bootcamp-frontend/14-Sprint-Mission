import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import heroHome from "@assets/images/hero-home.png";
import { bannerData } from "@/constants/bannerData";
import HomeFeature from "./home-feature";
import useMediaQuery from "@/hooks/useMediaQuery";

interface HomeMainProps {
  isMobile: boolean;
}

export default function HomeMain({ isMobile }: HomeMainProps) {
  const isDesktop = useMediaQuery("(min-width: 1080px)");

  return (
    <main>
      <section className={styles["hero"]}>
        <div className={styles["hero-content-wrapper"]}>
          <h1 className={`${styles["hero__title"]} font-3xl font-bold`}>
            일상의 모든 물건을{(isMobile || isDesktop) && <br />} 거래해보세요
          </h1>
          <Link
            to={"/items"}
            className={`${styles["hero__btn"]} font-2lg font-semibold`}
          >
            구경하러 가기
          </Link>
        </div>
        <img src={heroHome} alt="판다마켓" className={styles["hero__image"]} />
      </section>
      <section className={styles["features"]}>
        {bannerData.map((banner, idx) => (
          <HomeFeature
            key={idx}
            image={banner.image}
            keyword={banner.keyword}
            title={banner.title}
            description={banner.description}
          />
        ))}
      </section>
    </main>
  );
}
